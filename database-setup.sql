-- 0. Aktifkan extension (jika belum) -- HAPUS JIKA ERROR
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- 1. Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'patient' CHECK (role IN ('patient', 'doctor', 'admin')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  doctor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  service_id UUID,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  duration_minutes INTEGER DEFAULT 30,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  specialization TEXT NOT NULL,
  license_number TEXT UNIQUE,
  experience_years INTEGER,
  education TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Create facilities table
CREATE TABLE IF NOT EXISTS facilities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_email TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- 8. Create RLS Policies
-- (semua policy Anda sudah benar, tidak perlu diubah)

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Appointments policies
CREATE POLICY "Users can view own appointments" ON appointments
  FOR SELECT USING (patient_id = auth.uid());

CREATE POLICY "Users can create own appointments" ON appointments
  FOR INSERT WITH CHECK (patient_id = auth.uid());

CREATE POLICY "Users can update own appointments" ON appointments
  FOR UPDATE USING (patient_id = auth.uid());

CREATE POLICY "Doctors can view their appointments" ON appointments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM doctors 
      WHERE profile_id = auth.uid() AND id = appointments.doctor_id
    )
  );

CREATE POLICY "Admins can view all appointments" ON appointments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Services policies (public read, admin write)
CREATE POLICY "Anyone can view active services" ON services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Doctors policies (public read, admin write)
CREATE POLICY "Anyone can view active doctors" ON doctors
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage doctors" ON doctors
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Facilities policies (public read, admin write)
CREATE POLICY "Anyone can view available facilities" ON facilities
  FOR SELECT USING (is_available = true);

CREATE POLICY "Admins can manage facilities" ON facilities
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Testimonials policies
CREATE POLICY "Anyone can view approved testimonials" ON testimonials
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Users can create testimonials" ON testimonials
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage testimonials" ON testimonials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- 9. Create function to handle new user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, phone, role)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    NEW.raw_user_meta_data->>'phone',
    COALESCE(NEW.raw_user_meta_data->>'role', 'patient')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 10. Create trigger for new user registration
-- HAPUS JIKA ERROR
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 11. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 12. Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_doctors_updated_at
  BEFORE UPDATE ON doctors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_facilities_updated_at
  BEFORE UPDATE ON facilities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 13. Insert sample data

-- Sample services
INSERT INTO services (name, description, price, duration_minutes) VALUES
('Konsultasi Umum', 'Konsultasi kesehatan umum dengan dokter', 50000, 30),
('Konsultasi Spesialis', 'Konsultasi dengan dokter spesialis', 150000, 45),
('Pemeriksaan Darah', 'Pemeriksaan laboratorium darah lengkap', 200000, 60),
('USG', 'Pemeriksaan ultrasonografi', 300000, 45),
('Rontgen', 'Pemeriksaan radiologi', 250000, 30),
('Vaksinasi', 'Layanan vaksinasi', 100000, 20);

-- Sample facilities
INSERT INTO facilities (name, description, image_url) VALUES
('Ruang Operasi', 'Ruang operasi modern dengan peralatan terkini', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56'),
('ICU', 'Intensive Care Unit dengan monitoring 24 jam', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f'),
('Laboratorium', 'Laboratorium dengan teknologi modern', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12'),
('Radiologi', 'Unit radiologi dengan peralatan digital', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'),
('Farmasi', 'Apotek dengan stok obat lengkap', 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88'),
('Ruang Rawat Inap', 'Ruang rawat inap nyaman dan bersih', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d');

-- Sample testimonials
INSERT INTO testimonials (patient_name, patient_email, rating, comment, is_approved) VALUES
('Ahmad Rizki', 'ahmad@email.com', 5, 'Pelayanan sangat memuaskan, dokter ramah dan profesional', true),
('Siti Nurhaliza', 'siti@email.com', 5, 'Fasilitas lengkap dan modern, sangat nyaman', true),
('Budi Santoso', 'budi@email.com', 4, 'Proses pendaftaran cepat dan mudah', true),
('Dewi Sartika', 'dewi@email.com', 5, 'Dokter sangat teliti dalam pemeriksaan', true),
('Rudi Hermawan', 'rudi@email.com', 4, 'Harga terjangkau untuk kualitas pelayanan yang baik', true);

-- 14. Create indexes for better performance
CREATE INDEX idx_appointments_patient_id ON appointments(patient_id);
CREATE INDEX idx_appointments_doctor_id ON appointments(doctor_id);
CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_doctors_profile_id ON doctors(profile_id);
CREATE INDEX idx_testimonials_approved ON testimonials(is_approved);

-- 15. Create view for appointment details
CREATE VIEW appointment_details AS
SELECT 
  a.id,
  a.appointment_date,
  a.appointment_time,
  a.status,
  a.notes,
  p.full_name as patient_name,
  p.phone as patient_phone,
  d.full_name as doctor_name,
  s.name as service_name,
  s.price as service_price
FROM appointments a
JOIN profiles p ON a.patient_id = p.id
JOIN profiles d ON a.doctor_id = d.id
JOIN services s ON a.service_id = s.id;

-- Success message
SELECT 'Database setup completed successfully!' as message;
