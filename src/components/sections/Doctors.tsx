import React from 'react';
import { motion } from 'framer-motion';

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Dokter Umum',
      experience: '10 tahun',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dokter Gigi',
      experience: '8 tahun',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dokter Anak',
      experience: '12 tahun',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Dokter Kandungan',
      experience: '15 tahun',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow-lg">
            Dokter Spesialis Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tim dokter berpengalaman dan profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-lg text-center hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-2xl transition-all duration-300 group animate-fade-in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.04 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sky-400 dark:border-teal-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={doctor.image} 
                  alt={`Foto ${doctor.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 drop-shadow">
                {doctor.name}
              </h3>
              <p className="text-sky-500 dark:text-teal-400 font-medium mb-2">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {doctor.experience} pengalaman
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors; 