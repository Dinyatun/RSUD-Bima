import React from 'react';
import { motion } from 'framer-motion';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: '🏥',
      title: 'Ruang Rawat Inap',
      description: 'Ruang rawat inap nyaman dengan fasilitas lengkap',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop'
    },
    {
      icon: '🔬',
      title: 'Laboratorium Modern',
      description: 'Peralatan laboratorium canggih untuk pemeriksaan akurat',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop'
    },
    {
      icon: '💊',
      title: 'Apotek 24 Jam',
      description: 'Apotek dengan stok obat lengkap dan pelayanan 24 jam',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop'
    },
    {
      icon: '🚑',
      title: 'Ambulans',
      description: 'Layanan ambulans siap siaga untuk keadaan darurat',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow-lg">
            Fasilitas Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Fasilitas modern untuk kenyamanan pasien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:bg-white/90 dark:hover:bg-gray-900/90 hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{facility.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities; 