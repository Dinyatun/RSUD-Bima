import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '10,000+',
      label: 'Pasien Puas',
      description: 'Lebih dari 10 ribu pasien telah mempercayai kami'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '15+',
      label: 'Tahun Pengalaman',
      description: 'Pengalaman melayani masyarakat selama 15 tahun'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: '24/7',
      label: 'Pelayanan',
      description: 'Pelayanan kesehatan tersedia 24 jam setiap hari'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '50+',
      label: 'Dokter Spesialis',
      description: 'Tim dokter spesialis berpengalaman dan profesional'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-500 via-teal-500 to-cyan-600 dark:from-sky-600 dark:via-teal-600 dark:to-cyan-700 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Mengapa Memilih Kami
          </h2>
          <p className="text-xl text-sky-100 dark:text-sky-200">
            Bukti kepercayaan masyarakat terhadap layanan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 p-8 rounded-2xl text-center text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 drop-shadow">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-3">
                {stat.label}
              </div>
              <p className="text-sky-100 dark:text-sky-200 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 