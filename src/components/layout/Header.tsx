import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { User, LogOut, Settings, ChevronDown, Sun, Moon } from 'lucide-react';

// Theme toggle button
function ThemeToggle() {
  const [dark, setDark] = React.useState(() => localStorage.getItem('theme') === 'dark');
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow transition hover:scale-110 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
}

const Header: React.FC = () => {
  const { user, isAuthenticated, signOut } = useAuthContext();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=48&h=48&fit=crop&crop=center" 
                alt="RS Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight drop-shadow">RSUD Bima</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Rumah Sakit Terpercaya</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-teal-400 font-medium transition-all">Beranda</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-teal-400 font-medium transition-all">Tentang</Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-teal-400 font-medium transition-all">Layanan</Link>
            <Link to="/doctors" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-teal-400 font-medium transition-all">Dokter</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-teal-400 font-medium transition-all">Kontak</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-full transition-colors shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium shadow">
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200">
                    {user?.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.email}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">Pengguna</p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profil
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Pengaturan
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900 transition-all"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-teal-400 font-medium transition-all"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:from-sky-600 hover:to-teal-600 transition-all shadow-lg"
                >
                  Daftar
                </Link>
              </div>
            )}
            
            <Link
              to="/appointment"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  );
};

export default Header; 