import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart, Zap, Star } from 'lucide-react';

const Statistics: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isInView, setIsInView] = useState(false);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 10000,
      label: 'Pasien Puas',
      description: 'Lebih dari 10 ribu pasien telah mempercayai kami',
      color: 'from-sky-400 to-teal-400 cyberpunk:from-cyan-400 cyberpunk:to-pink-400 sunset:from-orange-400 sunset:to-red-400 ocean:from-blue-400 ocean:to-cyan-400'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: 15,
      label: 'Tahun Pengalaman',
      description: 'Pengalaman melayani masyarakat selama 15 tahun',
      color: 'from-green-400 to-emerald-400 cyberpunk:from-green-400 cyberpunk:to-cyan-400 sunset:from-yellow-400 sunset:to-orange-400 ocean:from-teal-400 ocean:to-blue-400'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: 24,
      label: 'Pelayanan',
      description: 'Pelayanan kesehatan tersedia 24 jam setiap hari',
      color: 'from-purple-400 to-pink-400 cyberpunk:from-pink-400 cyberpunk:to-purple-400 sunset:from-pink-400 sunset:to-red-400 ocean:from-purple-400 ocean:to-cyan-400'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: 50,
      label: 'Dokter Spesialis',
      description: 'Tim dokter spesialis berpengalaman dan profesional',
      color: 'from-red-400 to-pink-400 cyberpunk:from-red-400 cyberpunk:to-pink-400 sunset:from-red-400 sunset:to-orange-400 ocean:from-red-400 ocean:to-blue-400'
    }
  ];

  // Animated counter effect
  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const increment = stat.number / 50;
        return setInterval(() => {
          setCounts(prev => {
            const newCounts = [...prev];
            if (newCounts[index] < stat.number) {
              newCounts[index] = Math.min(newCounts[index] + increment, stat.number);
            }
            return newCounts;
          });
        }, 50);
      });
      return () => intervals.forEach(clearInterval);
    }
  }, [isInView]);

  return (
    <section className="py-20 bg-gradient-to-br from-sky-500 via-teal-500 to-cyan-600 dark:from-sky-600 dark:via-teal-600 dark:to-cyan-700 cyberpunk:from-black cyberpunk:via-gray-900 cyberpunk:to-black sunset:from-orange-900 sunset:via-red-800 sunset:to-pink-900 ocean:from-blue-900 ocean:via-cyan-800 ocean:to-teal-900 transition-all duration-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-transparent to-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.5, 1, 1.5], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setIsInView(true)}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Mengapa Memilih Kami
          </motion.h2>
          <motion.p 
            className="text-xl text-sky-100 dark:text-sky-200 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Bukti kepercayaan masyarakat terhadap layanan kami
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 cyberpunk:from-cyan-500/20 cyberpunk:to-pink-500/20 sunset:from-orange-500/20 sunset:to-red-500/20 ocean:from-blue-500/20 ocean:to-cyan-500/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 cyberpunk:border-cyan-500/30 sunset:border-orange-500/30 ocean:border-blue-500/30 shadow-2xl" />
              
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`} />
              
              <div className="relative bg-white/10 dark:bg-white/5 cyberpunk:bg-black/40 sunset:bg-orange-900/40 ocean:bg-blue-900/40 backdrop-blur-lg border border-white/20 dark:border-white/10 cyberpunk:border-cyan-500/50 sunset:border-orange-500/50 ocean:border-blue-500/50 p-8 rounded-2xl text-center text-white hover:bg-white/20 dark:hover:bg-white/10 cyberpunk:hover:bg-black/60 sunset:hover:bg-orange-900/60 ocean:hover:bg-blue-900/60 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cyberpunk:group-hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] sunset:group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] ocean:group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                
                {/* Icon Container with Glow */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-50 blur-lg`} />
                  <div className="relative z-10">
                    {stat.icon}
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-white/80 rounded-full flex items-center justify-center"
                    animate={{ y: [0, -3, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Zap className="w-2 h-2 text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Animated Counter */}
                <motion.div 
                  className="text-4xl font-bold mb-2 drop-shadow"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {Math.floor(counts[index]).toLocaleString()}
                  {stat.label === 'Pelayanan' && '/7'}
                  {stat.label === 'Tahun Pengalaman' && '+'}
                  {stat.label === 'Dokter Spesialis' && '+'}
                  {stat.label === 'Pasien Puas' && '+'}
                </motion.div>
                
                <motion.div 
                  className="text-lg font-semibold mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.div>
                
                <motion.p 
                  className="text-sky-100 dark:text-sky-200 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200 text-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.description}
                </motion.p>
                
                {/* Hover Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: [
                      'rgba(255, 255, 255, 0.5)',
                      'rgba(14, 165, 233, 0.5)',
                      'rgba(255, 255, 255, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Achievement Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Top</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
