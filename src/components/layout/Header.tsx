import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { User, LogOut, Settings, ChevronDown, Sun, Moon, Zap, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'cyberpunk' | 'sunset';

const themes: Record<Theme, { name: string; icon: JSX.Element }> = {
  light: { name: 'Light', icon: <Sun className="w-4 h-4" /> },
  dark: { name: 'Dark', icon: <Moon className="w-4 h-4" /> },
  cyberpunk: { name: 'Cyberpunk', icon: <Zap className="w-4 h-4" /> },
  sunset: { name: 'Sunset', icon: <Sparkles className="w-4 h-4" /> },
};

function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const applyTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    setShowThemeMenu(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className="btn btn-ghost btn-circle"
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
            className="absolute right-0 mt-2 w-48 bg-base-100 rounded-box shadow-2xl p-2 z-50 border border-base-300"
          >
            <ul className="menu menu-sm">
            {Object.entries(themes).map(([key, theme]) => (
              <li key={key}>
                <a onClick={() => applyTheme(key as Theme)} className={currentTheme === key ? 'active' : ''}>
                  <span className="mr-2">{theme.icon}</span>
                  {theme.name}
                </a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-base-100/80 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-primary-content font-bold text-xl overflow-hidden shadow-lg"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
               <img 
                src="https://cdn-icons-png.flaticon.com/512/33/33777.png" 
                alt="Hospital Logo"
                className="w-8 h-8"
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-base-content tracking-tight drop-shadow">Cipta Hospital</h1>
              <p className="text-sm text-base-content/70">Rumah Sakit Terpercaya</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.to} whileHover={{ y: -2 }}>
                <Link 
                  to={item.to} 
                  className="text-base-content hover:text-primary font-medium transition-all relative group"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full bg-primary" />
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="btn btn-ghost flex items-center space-x-2 rounded-full"
                >
                  <div className="avatar">
                    <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                      <span>{user?.email?.charAt(0).toUpperCase() || 'U'}</span>
                    </div>
                  </div>
                  <span className="hidden sm:block text-sm font-medium">
                    {user?.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-base-100 rounded-box shadow-xl border border-base-300 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-base-300">
                        <p className="text-sm font-medium text-base-content truncate">{user?.email}</p>
                        <p className="text-xs text-base-content/70">Pengguna Terdaftar</p>
                      </div>
                      <ul className="menu menu-sm p-2">
                        <li>
                          <Link
                            to="/profile"
                            onClick={() => setShowUserMenu(false)}
                          >
                            <User className="w-4 h-4" />
                            Profil
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/settings"
                            onClick={() => setShowUserMenu(false)}
                          >
                            <Settings className="w-4 h-4" />
                            Pengaturan
                          </Link>
                        </li>
                      </ul>
                      <div className="pt-2 mt-1 border-t border-base-300 p-2">
                        <button
                          onClick={handleSignOut}
                          className="btn btn-sm btn-error btn-block"
                        >
                          <LogOut className="w-4 h-4" />
                          Keluar
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link to="/login" className="btn btn-ghost"> Masuk </Link>
                <Link to="/register" className="btn btn-primary"> Daftar </Link>
              </div>
            )}
             <div className="hidden lg:block">
                <Link to="/appointment" className="btn btn-accent"> Buat Janji </Link>
             </div>
             <motion.button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden btn btn-ghost btn-circle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
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
            className="md:hidden bg-base-100/95 backdrop-blur-xl border-t border-base-300"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block text-base font-medium text-base-content hover:bg-base-200 hover:text-primary transition-all py-3 px-3 rounded-lg"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.label}
                  </Link>
              ))}
              <div className="border-t border-base-300 pt-4 mt-4 space-y-3">
                 <Link to="/appointment" className="btn btn-accent btn-block"> Buat Janji </Link>
                {!isAuthenticated && (
                  <>
                   <Link to="/login" className="btn btn-ghost btn-block"> Masuk </Link>
                   <Link to="/register" className="btn btn-primary btn-block"> Daftar </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
