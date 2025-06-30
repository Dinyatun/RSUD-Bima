import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, User, Heart, Microscope, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Dokter Umum',
      description: 'Pelayanan kesehatan umum dengan dokter berpengalaman'
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Dokter Gigi',
      description: 'Perawatan gigi dan mulut dengan teknologi modern'
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Dokter Anak',
      description: 'Spesialis kesehatan anak dengan pendekatan ramah'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dokter Kandungan',
      description: 'Perawatan kesehatan ibu hamil dan kandungan'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium dengan hasil akurat'
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'Apotek',
      description: 'Apotek dengan stok obat lengkap 24 jam'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow-lg">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Berbagai layanan kesehatan yang kami sediakan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-100 dark:border-gray-800 p-8 rounded-2xl text-center hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-2xl transition-all duration-300 group shadow-lg animate-fade-in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.04 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 