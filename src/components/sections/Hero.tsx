import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-400 dark:from-gray-900 dark:via-sky-900 dark:to-teal-900 cyberpunk:from-black cyberpunk:via-cyan-900 cyberpunk:to-pink-900 sunset:from-orange-400 sunset:via-pink-400 sunset:to-yellow-300 ocean:from-blue-500 ocean:via-cyan-400 ocean:to-blue-300 overflow-hidden">
      {/* Particle/Glow effect (optional, bisa dioptimasi) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
      </div>
      <motion.h1
        className="relative z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg dark:text-cyan-200 cyberpunk:text-cyan-400 sunset:text-yellow-100 ocean:text-blue-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Selamat Datang di <br />
        <span className="bg-gradient-to-r from-sky-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent dark:from-cyan-400 dark:to-sky-300 cyberpunk:from-pink-400 cyberpunk:to-cyan-400 sunset:from-orange-300 sunset:to-yellow-200 ocean:from-blue-300 ocean:to-cyan-200">
          Cipta Hospital
        </span>
      </motion.h1>
      <motion.p
        className="relative z-10 mt-6 text-lg md:text-2xl text-white/90 dark:text-cyan-100 cyberpunk:text-pink-200 sunset:text-orange-100 ocean:text-blue-100 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Rumah Sakit modern, terpercaya, dan berteknologi tinggi untuk pelayanan kesehatan terbaik di Cipta Hospital dan sekitarnya.
      </motion.p>
      <motion.div
        className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="#layanan"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-lg shadow-lg hover:from-sky-600 hover:to-teal-600 transition-all duration-200 dark:from-cyan-500 dark:to-sky-400 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-yellow-400 ocean:from-blue-500 ocean:to-cyan-400"
        >
          Lihat Layanan
        </a>
        <a
          href="#daftar"
          className="px-8 py-4 rounded-full bg-white/80 text-sky-700 font-semibold text-lg shadow-lg hover:bg-white/100 transition-all duration-200 dark:bg-gray-900/80 dark:text-cyan-200 cyberpunk:bg-black/80 cyberpunk:text-cyan-400 sunset:bg-orange-100 sunset:text-orange-700 ocean:bg-blue-100 ocean:text-blue-700"
        >
          Daftar Sekarang
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
