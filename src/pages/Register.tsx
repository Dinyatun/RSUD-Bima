import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, AlertCircle, Check } from 'lucide-react';
import { useAuthContext } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: '' });
  const { signUp, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (name === 'password') checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    let feedback = '';
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score < 2) feedback = 'Sangat lemah';
    else if (score < 3) feedback = 'Lemah';
    else if (score < 4) feedback = 'Sedang';
    else if (score < 5) feedback = 'Kuat';
    else feedback = 'Sangat kuat';
    setPasswordStrength({ score, feedback });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi';
    else if (formData.fullName.trim().length < 3) newErrors.fullName = 'Nama minimal 3 karakter';
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid';
    if (!formData.phone) newErrors.phone = 'Nomor telepon wajib diisi';
    else if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Format nomor telepon tidak valid';
    if (!formData.password) newErrors.password = 'Password wajib diisi';
    else if (formData.password.length < 8) newErrors.password = 'Password minimal 8 karakter';
    else if (passwordStrength.score < 3) newErrors.password = 'Password terlalu lemah';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Konfirmasi password wajib diisi';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Password tidak cocok';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    const result = await signUp(formData.email, formData.password, {
      full_name: formData.fullName,
      phone: formData.phone
    });
    setIsLoading(false);
    if (result.error) setErrors({ email: result.error });
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength.score < 2) return 'bg-red-500';
    if (passwordStrength.score < 3) return 'bg-orange-500';
    if (passwordStrength.score < 4) return 'bg-yellow-500';
    if (passwordStrength.score < 5) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 transition-all duration-500">
      <div className="max-w-md w-full space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-600 dark:to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Daftar Akun</h2>
          <p className="text-gray-600 dark:text-gray-300">Buat akun baru di Cipta Hospital</p>
        </motion.div>
        <motion.div 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400 dark:text-gray-500" /></div>
                <input 
                  id="fullName" 
                  name="fullName" 
                  type="text" 
                  autoComplete="name" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm ${
                    errors.fullName 
                      ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`} 
                  placeholder="Masukkan nama lengkap" 
                />
                {errors.fullName && <div className="absolute inset-y-0 right-0 pr-3 flex items-center"><AlertCircle className="h-5 w-5 text-red-400" /></div>}
              </div>
              {errors.fullName && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" /></div>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm ${
                    errors.email 
                      ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`} 
                  placeholder="Masukkan email Anda" 
                />
                {errors.email && <div className="absolute inset-y-0 right-0 pr-3 flex items-center"><AlertCircle className="h-5 w-5 text-red-400" /></div>}
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nomor Telepon</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Phone className="h-5 w-5 text-gray-400 dark:text-gray-500" /></div>
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  autoComplete="tel" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm ${
                    errors.phone 
                      ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`} 
                  placeholder="Contoh: 08123456789" 
                />
                {errors.phone && <div className="absolute inset-y-0 right-0 pr-3 flex items-center"><AlertCircle className="h-5 w-5 text-red-400" /></div>}
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" /></div>
                <input 
                  id="password" 
                  name="password" 
                  type={showPassword ? 'text' : 'password'} 
                  autoComplete="new-password" 
                  required 
                  value={formData.password} 
                  onChange={handleChange} 
                  className={`block w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm ${
                    errors.password 
                      ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`} 
                  placeholder="Minimal 8 karakter" 
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" /> : <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`} style={{ width: `${(passwordStrength.score / 5) * 100}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{passwordStrength.feedback}</span>
                  </div>
                </div>
              )}
              {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Konfirmasi Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" /></div>
                <input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  autoComplete="new-password" 
                  required 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  className={`block w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm ${
                    errors.confirmPassword 
                      ? 'border-red-300 bg-red-50 dark:bg-red-900/20' 
                      : formData.confirmPassword && formData.password === formData.confirmPassword 
                        ? 'border-green-300 bg-green-50 dark:bg-green-900/20' 
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`} 
                  placeholder="Ulangi password Anda" 
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {formData.confirmPassword && formData.password === formData.confirmPassword ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.confirmPassword}</p>}
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-blue-600 dark:text-green-500 focus:ring-blue-500 dark:focus:ring-green-500 border-gray-300 dark:border-gray-600 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700 dark:text-gray-300">
                  Saya setuju dengan{' '}
                  <a href="#" className="text-blue-600 dark:text-green-400 hover:text-blue-500 dark:hover:text-green-300">Syarat dan Ketentuan</a>
                  {' '}dan{' '}
                  <a href="#" className="text-blue-600 dark:text-green-400 hover:text-blue-500 dark:hover:text-green-300">Kebijakan Privasi</a>
                </label>
              </div>
            </div>
            <motion.button 
              type="submit" 
              disabled={isLoading} 
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 hover:from-blue-700 hover:to-green-700 dark:hover:from-blue-800 dark:hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Membuat akun...
                </div>
              ) : (
                'Daftar Sekarang'
              )}
            </motion.button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Sudah punya akun?{' '}
              <Link to="/login" className="font-medium text-blue-600 dark:text-green-400 hover:text-blue-500 dark:hover:text-green-300 transition-colors">
                Masuk
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register; 