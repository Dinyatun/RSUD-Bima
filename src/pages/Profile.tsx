import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Profile {
  id: string;
  full_name: string;
  email?: string;
  phone?: string;
  avatar_url?: string;
  role?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ full_name: '', phone: '', avatar_url: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        if (!error && data) {
          setProfile({ ...data, email: user.email });
          setForm({
            full_name: data.full_name || '',
            phone: data.phone || '',
            avatar_url: data.avatar_url || '',
          });
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => {
    setEditMode(false);
    if (profile) {
      setForm({
        full_name: profile.full_name || '',
        phone: profile.phone || '',
        avatar_url: profile.avatar_url || '',
      });
    }
    setMessage('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (!profile) return;
    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: form.full_name,
        phone: form.phone,
        avatar_url: form.avatar_url,
      })
      .eq('id', profile.id);
    if (error) setMessage(error.message);
    else {
      setProfile({ ...profile, ...form });
      setEditMode(false);
      setMessage('Profil berhasil diperbarui!');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Profil Saya</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nama Lengkap</label>
            <input
              type="text"
              name="full_name"
              className="border rounded px-3 py-2 w-full"
              value={form.full_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">No. HP</label>
            <input
              type="text"
              name="phone"
              className="border rounded px-3 py-2 w-full"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Avatar URL</label>
            <input
              type="text"
              name="avatar_url"
              className="border rounded px-3 py-2 w-full"
              value={form.avatar_url}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Simpan</button>
            <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded">Batal</button>
          </div>
          {message && <div className="text-green-600 text-sm">{message}</div>}
        </form>
      ) : (
        <>
          <div className="flex items-center mb-4">
            {profile.avatar_url ? (
              <img src={profile.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 text-2xl">
                {profile.full_name?.[0]}
              </div>
            )}
            <div>
              <div className="font-semibold text-lg">{profile.full_name}</div>
              <div className="text-gray-600">{profile.email}</div>
              <div className="text-gray-500 text-sm">Role: {profile.role}</div>
            </div>
          </div>
          <div className="mb-2">No. HP: {profile.phone || '-'}</div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleEdit}>Edit Profil</button>
          {message && <div className="text-green-600 text-sm mt-2">{message}</div>}
        </>
      )}
    </div>
  );
} 