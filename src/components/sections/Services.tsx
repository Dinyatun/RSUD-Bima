import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, User, Heart, Microscope, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Dokter Umum',
      description: 'Pelayanan kesehatan umum dengan dokter berpengalaman',
      color: 'from-sky-500 to-teal-500 cyberpunk:from-cyan-400 cyberpunk:to-pink-500 sunset:from-orange-400 sunset:to-red-500 ocean:from-blue-400 ocean:to-cyan-500'
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Dokter Gigi',
      description: 'Perawatan gigi dan mulut dengan teknologi modern',
      color: 'from-green-500 to-emerald-500 cyberpunk:from-green-400 cyberpunk:to-cyan-500 sunset:from-yellow-400 sunset:to-orange-500 ocean:from-teal-400 ocean:to-blue-500'
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Dokter Anak',
      description: 'Spesialis kesehatan anak dengan pendekatan ramah',
      color: 'from-purple-500 to-pink-500 cyberpunk:from-pink-400 cyberpunk:to-purple-500 sunset:from-pink-400 sunset:to-red-500 ocean:from-purple-400 ocean:to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dokter Kandungan',
      description: 'Perawatan kesehatan ibu hamil dan kandungan',
      color: 'from-red-500 to-pink-500 cyberpunk:from-red-400 cyberpunk:to-pink-500 sunset:from-red-400 sunset:to-orange-500 ocean:from-red-400 ocean:to-blue-500'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium dengan hasil akurat',
      color: 'from-indigo-500 to-purple-500 cyberpunk:from-indigo-400 cyberpunk:to-cyan-500 sunset:from-indigo-400 sunset:to-purple-500 ocean:from-indigo-400 ocean:to-blue-500'
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'Apotek',
      description: 'Apotek dengan stok obat lengkap 24 jam',
      color: 'from-yellow-500 to-orange-500 cyberpunk:from-yellow-400 cyberpunk:to-pink-500 sunset:from-yellow-400 sunset:to-red-500 ocean:from-yellow-400 ocean:to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 cyberpunk:bg-black sunset:bg-orange-900 ocean:bg-blue-900 transition-all duration-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-sky-50/20 to-transparent dark:via-gray-800/20 cyberpunk:via-cyan-900/20 sunset:via-orange-800/20 ocean:via-blue-800/20" />
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-sky-400/20 to-teal-400/20 cyberpunk:from-cyan-400/20 cyberpunk:to-pink-400/20 sunset:from-orange-400/20 sunset:to-red-400/20 ocean:from-blue-400/20 ocean:to-cyan-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-sky-400/20 cyberpunk:from-pink-400/20 cyberpunk:to-cyan-400/20 sunset:from-red-400/20 sunset:to-orange-400/20 ocean:from-cyan-400/20 ocean:to-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.5, 1, 1.5], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Layanan Kami
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Berbagai layanan kesehatan yang kami sediakan
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.04 }}
            >
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 cyberpunk:from-black/80 cyberpunk:to-gray-900/40 sunset:from-orange-900/80 sunset:to-red-900/40 ocean:from-blue-900/80 ocean:to-cyan-900/40 backdrop-blur-xl rounded-2xl border border-gray-100/50 dark:border-gray-700/50 cyberpunk:border-cyan-500/30 sunset:border-orange-500/30 ocean:border-blue-500/30 shadow-2xl" />
              
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
              
              <div className="relative bg-white/70 dark:bg-gray-800/70 cyberpunk:bg-black/70 sunset:bg-orange-900/70 ocean:bg-blue-900/70 backdrop-blur-lg border border-gray-100 dark:border-gray-800 cyberpunk:border-cyan-500/50 sunset:border-orange-500/50 ocean:border-blue-500/50 p-8 rounded-2xl text-center hover:bg-white/90 dark:hover:bg-gray-900/90 cyberpunk:hover:bg-black/90 sunset:hover:bg-orange-900/90 ocean:hover:bg-blue-900/90 hover:shadow-2xl transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] cyberpunk:group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] sunset:group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] ocean:group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                
                {/* Floating Icon Container */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 blur-lg`} />
                  <div className="relative z-10">
                    {service.icon}
                  </div>
                  
                  {/* Floating Particles */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-white/60 rounded-full"
                    animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/40 rounded-full"
                    animate={{ y: [0, 3, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-gray-800 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 mb-4 drop-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Hover Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: [
                      'rgba(14, 165, 233, 0.5)',
                      'rgba(20, 184, 166, 0.5)',
                      'rgba(14, 165, 233, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
