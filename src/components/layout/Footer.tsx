import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/80 dark:bg-gray-900/90 cyberpunk:bg-black/90 sunset:bg-orange-900/90 ocean:bg-blue-900/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="flex items-center space-x-3">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-red-500 ocean:from-blue-500 ocean:to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-lg"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=48&h=48&fit=crop&crop=center" 
              alt="Hospital Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 tracking-tight drop-shadow">Cipta Hospital</h1>
            <p className="text-xs text-gray-600 dark:text-gray-300 cyberpunk:text-pink-400 sunset:text-orange-200 ocean:text-blue-200">Rumah Sakit Terpercaya</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
          <Link to="/" className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all">Beranda</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all">Tentang</Link>
          <Link to="/services" className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all">Layanan</Link>
          <Link to="/doctors" className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all">Dokter</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all">Kontak</Link>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-100 dark:border-gray-800 cyberpunk:border-cyan-800 sunset:border-orange-800 ocean:border-blue-800 pt-6">
        <p className="text-xs text-gray-500 dark:text-gray-400 cyberpunk:text-cyan-300 sunset:text-orange-200 ocean:text-blue-200">&copy; {new Date().getFullYear()} Cipta Hospital. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 2A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm-5.5 2.75A3.25 3.25 0 1 0 12 10.25a3.25 3.25 0 0 0-3.25-3.25zm0 1.5A1.75 1.75 0 1 1 12 10.25a1.75 1.75 0 0 1-1.75-1.75zm6.5-.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 2.5A2.5 2.5 0 0 1 19.5 5v14A2.5 2.5 0 0 1 17 21.5h-10A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5h10zm-2.25 4.25h-1.5a.75.75 0 0 0-.75.75v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v6.5a.75.75 0 0 1-1.5 0v-6.5H9.5a.75.75 0 0 1 0-1.5h1.25v-1.5a2.25 2.25 0 0 1 2.25-2.25h1.5a.75.75 0 0 1 0 1.5z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.11 4.11 0 0 0 12 8.09c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.89a4.11 4.11 0 0 0 1.27 5.48A4.07 4.07 0 0 1 2.8 9.1v.05a4.11 4.11 0 0 0 3.3 4.03 4.09 4.09 0 0 1-1.85.07 4.12 4.12 0 0 0 3.84 2.85A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
