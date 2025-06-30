import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Clock, Zap } from 'lucide-react';

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Dokter Umum',
      experience: '10 tahun',
      rating: 4.9,
      patients: '2,500+',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      color: 'from-sky-500 to-teal-500 cyberpunk:from-cyan-400 cyberpunk:to-pink-500 sunset:from-orange-400 sunset:to-red-500 ocean:from-blue-400 ocean:to-cyan-500'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dokter Gigi',
      experience: '8 tahun',
      rating: 4.8,
      patients: '1,800+',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      color: 'from-green-500 to-emerald-500 cyberpunk:from-green-400 cyberpunk:to-cyan-500 sunset:from-yellow-400 sunset:to-orange-500 ocean:from-teal-400 ocean:to-blue-500'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dokter Anak',
      experience: '12 tahun',
      rating: 4.9,
      patients: '3,200+',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
      color: 'from-purple-500 to-pink-500 cyberpunk:from-pink-400 cyberpunk:to-purple-500 sunset:from-pink-400 sunset:to-red-500 ocean:from-purple-400 ocean:to-cyan-500'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Dokter Kandungan',
      experience: '15 tahun',
      rating: 4.7,
      patients: '2,800+',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
      color: 'from-red-500 to-pink-500 cyberpunk:from-red-400 cyberpunk:to-pink-500 sunset:from-red-400 sunset:to-orange-500 ocean:from-red-400 ocean:to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 cyberpunk:bg-black sunset:bg-orange-900 ocean:bg-blue-900 transition-all duration-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-sky-400/10 to-teal-400/10 cyberpunk:from-cyan-400/10 cyberpunk:to-pink-400/10 sunset:from-orange-400/10 sunset:to-red-400/10 ocean:from-blue-400/10 ocean:to-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/10 to-sky-400/10 cyberpunk:from-pink-400/10 cyberpunk:to-cyan-400/10 sunset:from-red-400/10 sunset:to-orange-400/10 ocean:from-cyan-400/10 ocean:to-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 3 }}
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
            Dokter Spesialis Kami
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Tim dokter berpengalaman dan profesional
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.05 }}
            >
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 cyberpunk:from-black/80 cyberpunk:to-gray-900/40 sunset:from-orange-900/80 sunset:to-red-900/40 ocean:from-blue-900/80 ocean:to-cyan-900/40 backdrop-blur-xl rounded-2xl border border-gray-100/50 dark:border-gray-700/50 cyberpunk:border-cyan-500/30 sunset:border-orange-500/30 ocean:border-blue-500/30 shadow-2xl" />
              
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${doctor.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 cyberpunk:bg-black/80 sunset:bg-orange-900/80 ocean:bg-blue-900/80 backdrop-blur-lg border border-gray-100 dark:border-gray-800 cyberpunk:border-cyan-500/50 sunset:border-orange-500/50 ocean:border-blue-500/50 p-6 rounded-2xl shadow-lg text-center hover:bg-white/90 dark:hover:bg-gray-900/90 cyberpunk:hover:bg-black/90 sunset:hover:bg-orange-900/90 ocean:hover:bg-blue-900/90 hover:shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] cyberpunk:group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] sunset:group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] ocean:group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                
                {/* Experience Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 cyberpunk:from-yellow-400 cyberpunk:to-pink-500 sunset:from-yellow-400 sunset:to-red-500 ocean:from-yellow-400 ocean:to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>{doctor.experience}</span>
                  </div>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  className="absolute -top-3 -left-3 bg-gradient-to-r from-green-400 to-emerald-500 cyberpunk:from-green-400 cyberpunk:to-cyan-500 sunset:from-green-400 sunset:to-orange-500 ocean:from-green-400 ocean:to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{doctor.rating}</span>
                  </div>
                </motion.div>

                {/* Profile Image Container */}
                <motion.div 
                  className="relative w-28 h-28 mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${doctor.color} rounded-full blur-lg opacity-50`} />
                  
                  {/* Image Border */}
                  <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${doctor.color.replace('bg-gradient-to-br ', 'border-')} shadow-lg`}>
                    <img 
                      src={doctor.image} 
                      alt={`Foto ${doctor.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-white/80 rounded-full flex items-center justify-center"
                    animate={{ y: [0, -3, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Zap className="w-2 h-2 text-sky-500 cyberpunk:text-pink-500 sunset:text-orange-500 ocean:text-blue-500" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-bold text-gray-800 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 mb-2 drop-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {doctor.name}
                </motion.h3>
                
                <motion.p 
                  className={`font-medium mb-2 bg-gradient-to-r ${doctor.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {doctor.specialty}
                </motion.p>
                
                <motion.div 
                  className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200 text-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-4 h-4" />
                  <span>{doctor.patients} pasien</span>
                </motion.div>
                
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

export default Doctors;
