# 🔐 Setup Supabase Authentication untuk GitHub Pages

## 📋 Langkah-langkah Konfigurasi

### 1. Buka Supabase Dashboard
1. Login ke [supabase.com](https://supabase.com)
2. Pilih project: `jnuafiofpzdhzsrjjcyn`

### 2. Konfigurasi Authentication Settings
1. Di sidebar kiri, klik **"Authentication"**
2. Klik **"Settings"**

### 3. Site URL Configuration
Di bagian **"Site URL"**, masukkan:
```
https://dinyatun.github.io/RSUD-Bima
```

### 4. Redirect URLs Configuration
Di bagian **"Redirect URLs"**, tambahkan URLs berikut:
```
https://dinyatun.github.io/RSUD-Bima
https://dinyatun.github.io/RSUD-Bima/login
https://dinyatun.github.io/RSUD-Bima/register
https://dinyatun.github.io/RSUD-Bima/reset-password
https://dinyatun.github.io/RSUD-Bima/profile
https://dinyatun.github.io/RSUD-Bima/settings
```

**Untuk Development Local**, tambahkan juga:
```
http://localhost:5173
http://localhost:5173/login
http://localhost:5173/register
http://localhost:5173/reset-password
http://localhost:5173/profile
http://localhost:5173/settings
```

### 5. Email Settings
Pastikan pengaturan email berikut aktif:
- ✅ **Enable Email confirmations**: ON
- ✅ **Enable Email change confirmations**: ON
- ✅ **Enable Secure email change**: ON

### 6. Save Settings
Klik **"Save"** untuk menyimpan semua pengaturan

## 🧪 Testing Authentication

### Test Local Development
```bash
npm run dev
```
Buka `http://localhost:5173/register` dan test registrasi

### Test Production
Setelah deploy, test di `https://dinyatun.github.io/RSUD-Bima/register`

## 🔍 Troubleshooting

### Error: "Invalid redirect URL"
- Pastikan semua redirect URLs sudah ditambahkan
- Pastikan tidak ada spasi ekstra
- Pastikan protocol (https://) sudah benar

### Error: "Email not confirmed"
- Cek folder spam
- Pastikan email settings aktif di Supabase
- Test dengan email yang berbeda

### Error: "Invalid API key"
- Pastikan environment variables sudah benar
- Restart development server setelah mengubah .env

## 📞 Support
Jika masih ada masalah, cek:
- Supabase Dashboard > Logs
- Browser Console
- Network tab di Developer Tools 