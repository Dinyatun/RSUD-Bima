import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      info: 'Jl. Kesehatan No. 123, Jakarta Pusat',
      description: 'Lokasi strategis di pusat kota'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      info: '+62 21 1234 5678',
      description: 'Layanan 24 jam setiap hari'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'info@rssehatsejahtera.com',
      description: 'Konsultasi online tersedia'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      info: '24 Jam / 7 Hari',
      description: 'Pelayanan darurat tersedia'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow-lg">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Kami siap melayani Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group hover:bg-white/90 dark:hover:bg-gray-900/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 dark:from-sky-600 dark:to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                      {item.info}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Kirim Pesan
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan subjek pesan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 dark:focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-teal-500 dark:from-sky-600 dark:to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 