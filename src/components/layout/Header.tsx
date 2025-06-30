import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { User, LogOut, Settings, ChevronDown, Sun, Moon, Zap, Palette, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'cyberpunk' | 'sunset' | 'ocean';

const themes = {
  light: { name: 'Light', icon: <Sun className="w-4 h-4" /> },
  dark: { name: 'Dark', icon: <Moon className="w-4 h-4" /> },
  cyberpunk: { name: 'Cyberpunk', icon: <Zap className="w-4 h-4" /> },
  sunset: { name: 'Sunset', icon: <Sparkles className="w-4 h-4" /> },
  ocean: { name: 'Ocean', icon: <Palette className="w-4 h-4" /> }
};

function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved && themes[saved] ? saved : 'light';
  });
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const applyTheme = (theme: Theme) => {
    document.documentElement.classList.remove('dark', 'cyberpunk', 'sunset', 'ocean');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme !== 'light') {
      document.documentElement.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
    setCurrentTheme(theme);
    setShowThemeMenu(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 cyberpunk:bg-black/80 sunset:bg-orange-900/80 ocean:bg-blue-900/80 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {themes[currentTheme].icon}
      </motion.button>
      <AnimatePresence>
        {showThemeMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-gray-900/90 cyberpunk:bg-black/90 sunset:bg-orange-900/90 ocean:bg-blue-900/90 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 py-2 z-50"
          >
            {Object.entries(themes).map(([key, theme]) => (
              <motion.button
                key={key}
                onClick={() => applyTheme(key as Theme)}
                className="w-full flex items-center px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 cyberpunk:hover:bg-cyan-900/50 sunset:hover:bg-orange-800/50 ocean:hover:bg-blue-800/50 transition-all duration-200"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mr-3">{theme.icon}</div>
                <span className="font-medium text-gray-800 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100">
                  {theme.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {showThemeMenu && (
        <div className="fixed inset-0 z-40" onClick={() => setShowThemeMenu(false)} />
      )}
    </div>
  );
}

const Header: React.FC = () => {
  const { user, isAuthenticated, signOut } = useAuthContext();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  const navItems = [
    { to: '/', label: 'Beranda' },
    { to: '/about', label: 'Tentang' },
    { to: '/services', label: 'Layanan' },
    { to: '/doctors', label: 'Dokter' },
    { to: '/contact', label: 'Kontak' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 cyberpunk:bg-black/80 sunset:bg-orange-900/80 ocean:bg-blue-900/80 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
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
              <h1 className="text-xl font-bold text-gray-800 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 tracking-tight drop-shadow">Cipta Hospital</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 cyberpunk:text-pink-400 sunset:text-orange-200 ocean:text-blue-200">Rumah Sakit Terpercaya</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.to} whileHover={{ y: -2 }}>
                <Link 
                  to={item.to} 
                  className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-teal-500 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-red-500 ocean:from-blue-500 ocean:to-cyan-500 transition-all duration-300 group-hover:w-full"
                    layoutId="navUnderline"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 cyberpunk:bg-black/80 sunset:bg-orange-900/80 ocean:bg-blue-900/80 backdrop-blur-lg shadow border border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 cyberpunk:bg-cyan-900/50 sunset:bg-orange-800/50 ocean:bg-blue-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 cyberpunk:hover:bg-cyan-800/50 sunset:hover:bg-orange-700/50 ocean:hover:bg-blue-700/50 px-4 py-2 rounded-full transition-colors shadow border border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-teal-500 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-red-500 ocean:from-blue-500 ocean:to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-medium shadow">
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100">
                    {user?.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-300 cyberpunk:text-pink-400 sunset:text-orange-200 ocean:text-blue-200" />
                </button>
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-52 bg-white/90 dark:bg-gray-900/90 cyberpunk:bg-black/90 sunset:bg-orange-900/90 ocean:bg-blue-900/90 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800 cyberpunk:border-cyan-800 sunset:border-orange-800 ocean:border-blue-800">
                        <p className="text-sm font-medium text-gray-900 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100">{user?.email}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-300 cyberpunk:text-pink-400 sunset:text-orange-200 ocean:text-blue-200">Pengguna</p>
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:bg-gray-100 dark:hover:bg-gray-800 cyberpunk:hover:bg-cyan-900/50 sunset:hover:bg-orange-800/50 ocean:hover:bg-blue-800/50 transition-all"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profil
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:bg-gray-100 dark:hover:bg-gray-800 cyberpunk:hover:bg-cyan-900/50 sunset:hover:bg-orange-800/50 ocean:hover:bg-blue-800/50 transition-all"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Pengaturan
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 cyberpunk:text-pink-400 sunset:text-red-300 ocean:text-red-300 hover:bg-red-50 dark:hover:bg-red-900 cyberpunk:hover:bg-pink-900/50 sunset:hover:bg-red-800/50 ocean:hover:bg-red-800/50 transition-all"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Keluar
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 font-medium transition-all"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-sky-500 to-teal-500 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-red-500 ocean:from-blue-500 ocean:to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:from-sky-600 hover:to-teal-600 cyberpunk:hover:from-pink-600 cyberpunk:hover:to-cyan-600 sunset:hover:from-orange-600 sunset:hover:to-red-600 ocean:hover:from-blue-600 ocean:hover:to-cyan-600 transition-all shadow-lg"
                >
                  Daftar
                </Link>
              </div>
            )}
            <Link
              to="/appointment"
              className="hidden sm:block bg-gradient-to-r from-green-500 to-emerald-500 cyberpunk:from-pink-500 cyberpunk:to-purple-500 sunset:from-yellow-500 sunset:to-orange-500 ocean:from-cyan-500 ocean:to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-600 cyberpunk:hover:from-pink-600 cyberpunk:hover:to-purple-600 sunset:hover:from-yellow-600 sunset:hover:to-orange-600 ocean:hover:from-cyan-600 ocean:hover:to-blue-600 transition-all shadow-lg"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 cyberpunk:bg-black/95 sunset:bg-orange-900/95 ocean:bg-blue-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 hover:text-sky-500 dark:hover:text-teal-400 cyberpunk:hover:text-pink-500 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 transition-all py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              {!isAuthenticated && (
                <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700 cyberpunk:border-cyan-800 sunset:border-orange-800 ocean:border-blue-800">
                  <Link
                    to="/login"
                    className="block text-center bg-gradient-to-r from-sky-500 to-teal-500 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-red-500 ocean:from-blue-500 ocean:to-cyan-500 text-white px-6 py-3 rounded-full font-medium transition-all"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    className="block text-center bg-gradient-to-r from-green-500 to-emerald-500 cyberpunk:from-pink-500 cyberpunk:to-purple-500 sunset:from-yellow-500 sunset:to-orange-500 ocean:from-cyan-500 ocean:to-blue-500 text-white px-6 py-3 rounded-full font-medium transition-all"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Daftar
                  </Link>
                  <Link
                    to="/appointment"
                    className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 cyberpunk:from-cyan-500 cyberpunk:to-pink-500 sunset:from-red-500 sunset:to-pink-500 ocean:from-teal-500 ocean:to-cyan-500 text-white px-6 py-3 rounded-full font-medium transition-all"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setShowMobileMenu(false)} />
      )}
    </header>
  );
};

export default Header;
