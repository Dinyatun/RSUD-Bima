import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 dark:from-sky-600 dark:to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=48&h=48&fit=crop&crop=center" 
                  alt="RS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cipta Hospital</h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">Rumah Sakit Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              Memberikan pelayanan kesehatan berkualitas tinggi dengan teknologi modern dan tenaga medis profesional.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-sky-400 dark:hover:text-teal-400 transition-colors duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-sky-400 dark:hover:text-teal-400 transition-colors duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-sky-400 dark:hover:text-teal-400 transition-colors duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Dokter Umum</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Dokter Gigi</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Dokter Anak</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Dokter Kandungan</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Laboratorium</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Tentang Kami</Link></li>
              <li><Link to="/doctors" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Tim Dokter</Link></li>
              <li><Link to="/facilities" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Fasilitas</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Testimoni</Link></li>
              <li><Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 block">Kontak</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <MapPin size={16} className="text-sky-400 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 dark:text-gray-400">Jl. Kesehatan No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone size={16} className="text-sky-400 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 dark:text-gray-400">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={16} className="text-sky-400 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 dark:text-gray-400">info@rssehatsejahtera.com</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 dark:text-gray-400">
            © 2025 Cipta Hospital. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 