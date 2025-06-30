import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, AlertCircle, Zap } from 'lucide-react';
import { useAuthContext } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isAuthenticated) {
      const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid';
    if (!formData.password) newErrors.password = 'Password wajib diisi';
    else if (formData.password.length < 6) newErrors.password = 'Password minimal 6 karakter';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    const result = await signIn(formData.email, formData.password);
    setIsLoading(false);
    if (result.error) setErrors({ password: result.error });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 cyberpunk:from-black cyberpunk:via-gray-900 cyberpunk:to-black sunset:from-orange-900 sunset:via-red-800 sunset:to-pink-900 ocean:from-blue-900 ocean:via-cyan-800 ocean:to-teal-900 px-2 transition-all duration-500 relative overflow-hidden">
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-sky-400 dark:bg-teal-400 cyberpunk:bg-cyan-400 sunset:bg-yellow-300 ocean:bg-blue-300 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-teal-400 dark:bg-sky-400 cyberpunk:bg-pink-400 sunset:bg-orange-300 ocean:bg-cyan-300 rounded-full opacity-70"
          animate={{ y: [0, 30, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-400 dark:bg-purple-400 cyberpunk:bg-yellow-400 sunset:bg-red-300 ocean:bg-teal-300 rounded-full opacity-80"
          animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8], scale: [1, 2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      {/* Neon Grid Effect for Cyberpunk */}
      <div className="absolute inset-0 cyberpunk:bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] cyberpunk:bg-[size:50px_50px] opacity-20" />
      <div className="w-full max-w-md space-y-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mx-auto h-20 w-20 bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-600 dark:to-green-600 cyberpunk:from-pink-500 cyberpunk:to-cyan-500 sunset:from-orange-500 sunset:to-red-500 ocean:from-blue-500 ocean:to-cyan-500 rounded-full flex items-center justify-center mb-4 shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 cyberpunk:from-pink-400 cyberpunk:to-cyan-400 sunset:from-orange-400 sunset:to-red-400 ocean:from-blue-400 ocean:to-cyan-400 rounded-full blur-lg opacity-50" />
            <svg className="h-10 w-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 cyberpunk:bg-pink-400 sunset:bg-yellow-300 ocean:bg-cyan-300 rounded-full opacity-80"
              animate={{ y: [0, -5, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 mb-2">Selamat Datang</h2>
          <p className="text-gray-600 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200">Masuk ke akun Cipta Hospital Anda</p>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 cyberpunk:from-black/80 cyberpunk:to-gray-900/40 sunset:from-orange-900/80 sunset:to-red-900/40 ocean:from-blue-900/80 ocean:to-cyan-900/40 backdrop-blur-xl rounded-2xl border border-gray-100/50 dark:border-gray-700/50 cyberpunk:border-cyan-500/30 sunset:border-orange-500/30 ocean:border-blue-500/30 shadow-2xl" />
          <div className="relative bg-white/80 dark:bg-gray-800/80 cyberpunk:bg-black/80 sunset:bg-orange-900/80 ocean:bg-blue-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 cyberpunk:border-cyan-500/50 sunset:border-orange-500/50 ocean:border-blue-500/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 cyberpunk:text-cyan-400 sunset:text-orange-300 ocean:text-blue-300" />
                  </div>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 cyberpunk:focus:ring-pink-500 sunset:focus:ring-orange-500 ocean:focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 cyberpunk:bg-black/50 sunset:bg-orange-900/50 ocean:bg-blue-900/50 backdrop-blur-sm ${
                      errors.email 
                        ? 'border-red-300 bg-red-50 dark:bg-red-900/20 cyberpunk:border-pink-500 sunset:border-red-500 ocean:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 hover:border-gray-400 dark:hover:border-gray-500 cyberpunk:hover:border-pink-500 sunset:hover:border-yellow-500 ocean:hover:border-cyan-500'
                    }`} 
                    placeholder="Masukkan email Anda" 
                  />
                  {errors.email && <div className="absolute inset-y-0 right-0 pr-3 flex items-center"><AlertCircle className="h-5 w-5 text-red-400" /></div>}
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400 cyberpunk:text-pink-400 sunset:text-red-300 ocean:text-red-300 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 cyberpunk:text-cyan-400 sunset:text-orange-100 ocean:text-blue-100 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500 cyberpunk:text-cyan-400 sunset:text-orange-300 ocean:text-blue-300" />
                  </div>
                  <input 
                    id="password" 
                    name="password" 
                    type={showPassword ? 'text' : 'password'} 
                    autoComplete="current-password" 
                    required 
                    value={formData.password} 
                    onChange={handleChange} 
                    className={`block w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 cyberpunk:focus:ring-pink-500 sunset:focus:ring-orange-500 ocean:focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 cyberpunk:bg-black/50 sunset:bg-orange-900/50 ocean:bg-blue-900/50 backdrop-blur-sm ${
                      errors.password 
                        ? 'border-red-300 bg-red-50 dark:bg-red-900/20 cyberpunk:border-pink-500 sunset:border-red-500 ocean:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 hover:border-gray-400 dark:hover:border-gray-500 cyberpunk:hover:border-pink-500 sunset:hover:border-yellow-500 ocean:hover:border-cyan-500'
                    }`} 
                    placeholder="Masukkan password Anda" 
                  />
                  <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 cyberpunk:text-cyan-400 sunset:text-orange-300 ocean:text-blue-300 hover:text-gray-600 dark:hover:text-gray-300" /> : <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 cyberpunk:text-cyan-400 sunset:text-orange-300 ocean:text-blue-300 hover:text-gray-600 dark:hover:text-gray-300" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400 cyberpunk:text-pink-400 sunset:text-red-300 ocean:text-red-300 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.password}</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 dark:text-green-500 cyberpunk:text-pink-500 sunset:text-orange-500 ocean:text-blue-500 focus:ring-blue-500 dark:focus:ring-green-500 cyberpunk:focus:ring-pink-500 sunset:focus:ring-orange-500 ocean:focus:ring-blue-500 border-gray-300 dark:border-gray-600 cyberpunk:border-cyan-500 sunset:border-orange-500 ocean:border-blue-500 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200">Ingat saya</label>
                </div>
                <Link to="/forgot-password" className="text-sm font-medium text-blue-600 dark:text-green-400 cyberpunk:text-pink-400 sunset:text-orange-300 ocean:text-blue-300 hover:text-blue-500 dark:hover:text-green-300 cyberpunk:hover:text-pink-300 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 transition-colors">Lupa password?</Link>
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 cyberpunk:from-pink-600 cyberpunk:to-cyan-600 sunset:from-orange-600 sunset:to-red-600 ocean:from-blue-600 ocean:to-cyan-600 hover:from-blue-700 hover:to-green-700 dark:hover:from-blue-800 dark:hover:to-green-800 cyberpunk:hover:from-pink-700 cyberpunk:hover:to-cyan-700 sunset:hover:from-orange-700 sunset:hover:to-red-700 ocean:hover:from-blue-700 ocean:hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-green-500 cyberpunk:focus:ring-pink-500 sunset:focus:ring-orange-500 ocean:focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl cyberpunk:shadow-[0_0_30px_rgba(236,72,153,0.5)] sunset:shadow-[0_0_30px_rgba(249,115,22,0.5)] ocean:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Masuk
                  </div>
                )}
              </motion.button>
            </form>
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600 cyberpunk:border-cyan-500/50 sunset:border-orange-500/50 ocean:border-blue-500/50" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/80 dark:bg-gray-800/80 cyberpunk:bg-black/80 sunset:bg-orange-900/80 ocean:bg-blue-900/80 text-gray-500 dark:text-gray-400 cyberpunk:text-cyan-300 sunset:text-orange-200 ocean:text-blue-200">Atau</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300 cyberpunk:text-cyan-200 sunset:text-orange-200 ocean:text-blue-200">
                Belum punya akun?{' '}
                <Link to="/register" className="font-medium text-blue-600 dark:text-green-400 cyberpunk:text-pink-400 sunset:text-orange-300 ocean:text-blue-300 hover:text-blue-500 dark:hover:text-green-300 cyberpunk:hover:text-pink-300 sunset:hover:text-yellow-300 ocean:hover:text-cyan-300 transition-colors">
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
