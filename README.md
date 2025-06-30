# Cipta Hospital - Modern Healthcare Website

Website rumah sakit modern dengan UI/UX yang interaktif, fitur autentikasi, dan desain responsif.

## 🏥 Tentang Cipta Hospital

Cipta Hospital adalah website rumah sakit modern yang dibangun dengan teknologi terbaru untuk memberikan pengalaman pengguna yang optimal dalam mengakses layanan kesehatan.

## ✨ Fitur Utama

- 🎨 **Modern UI/UX Design** - Glassmorphism, Dark/Light Mode, Animasi Smooth
- 🔐 **Autentikasi Lengkap** - Login, Register, Reset Password dengan Supabase
- 📱 **Responsive Design** - Optimal di semua device
- ⚡ **Fast Performance** - Optimized dengan Vite dan React
- 🌙 **Dark/Light Mode** - Toggle tema yang smooth
- 🎭 **Animasi Interaktif** - Framer Motion untuk micro-interactions
- 🏥 **Healthcare Focused** - Tema rumah sakit yang profesional

## 🚀 Teknologi

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS, Glassmorphism Effects
- **Animations**: Framer Motion
- **Backend**: Supabase (Database, Auth, Storage)
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/Dinyatun/RSUD-Bima.git
cd RSUD-Bima

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan Supabase credentials

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Konfigurasi

### Environment Variables

Buat file `.env` dengan konfigurasi berikut:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Buat project di [Supabase](https://supabase.com)
2. Setup database dengan script di `database-setup.sql`
3. Konfigurasi Auth providers (Email, GitHub OAuth)
4. Setup RLS policies untuk keamanan

## 🎨 Komponen

- **Header** - Navigation dengan glassmorphism dan dark mode
- **Hero** - Landing section dengan animasi parallax
- **Services** - Layanan dengan card interaktif
- **Doctors** - Tim dokter dengan efek hover
- **Testimonials** - Testimoni dengan carousel
- **Statistics** - Statistik dengan gradient modern
- **Facilities** - Fasilitas dengan glassmorphism
- **Contact** - Form kontak modern
- **Footer** - Footer dengan animasi

## 📱 Halaman

- **Home** - Dashboard utama
- **Login/Register** - Autentikasi pengguna
- **Profile** - Manajemen profil
- **Services** - Informasi layanan
- **Doctors** - Tim dokter
- **Contact** - Hubungi kami

## 🚀 Deployment

Website di-deploy otomatis ke GitHub Pages setiap kali ada push ke branch `main`.

**Live Demo**: [https://dinyatun.github.io/RSUD-Bima](https://dinyatun.github.io/RSUD-Bima)

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak

- **Email**: info@ciptahospital.com
- **Website**: https://dinyatun.github.io/RSUD-Bima
- **GitHub**: https://github.com/Dinyatun/RSUD-Bima

---

**Cipta Hospital** - Memberikan pelayanan kesehatan terbaik dengan teknologi modern 🏥 