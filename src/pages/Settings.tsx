import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SettingsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Ambil email user saat komponen mount
  useState(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setEmail(user.email || '');
    });
  });

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setMessage(error.message);
    else setMessage('Password berhasil diubah!');
    setPassword('');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Pengaturan Akun</h2>
      <div className="mb-4">
        <div className="font-semibold">Email:</div>
        <div>{email}</div>
      </div>
      <form onSubmit={handleChangePassword} className="mb-4">
        <label className="block mb-2 font-semibold">Ganti Password</label>
        <input
          type="password"
          className="border rounded px-3 py-2 w-full mb-2"
          placeholder="Password baru"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Simpan</button>
      </form>
      {message && <div className="text-sm text-green-600">{message}</div>}
    </div>
  );
} 