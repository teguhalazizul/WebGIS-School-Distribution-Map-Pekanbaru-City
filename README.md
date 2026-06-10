# 🗺️ WebGIS Persebaran Sekolah Kota Pekanbaru

> Sistem Informasi Geografis (SIG) berbasis web untuk memetakan dan memvisualisasikan persebaran sekolah SD, SMP, dan SMA/SMK di Kota Pekanbaru secara interaktif dan transparan.

🔗 **Live Demo:** [https://project-gis-five.vercel.app/](https://project-gis-five.vercel.app/)

---

## 📌 Latar Belakang

Informasi persebaran sekolah di Kota Pekanbaru selama ini masih terbatas dan belum terdokumentasi secara spasial. Data yang tersedia umumnya hanya berbentuk tabel atau daftar, sehingga sulit digunakan untuk memahami distribusi sekolah di setiap wilayah kecamatan dan kelurahan.

Sistem ini hadir sebagai solusi untuk:
- ✅ Menampilkan peta digital interaktif persebaran sekolah
- ✅ Mendukung analisis pemerataan akses pendidikan
- ✅ Memudahkan masyarakat menemukan sekolah terdekat
- ✅ Menjadi dasar perencanaan pembangunan sekolah bagi pemerintah daerah

---

## 🎯 Tujuan

1. Mengumpulkan dan mengintegrasikan data sekolah (SD, SMP, SMA/SMK) negeri dan swasta di Kota Pekanbaru
2. Membangun peta digital interaktif berbasis WebGIS
3. Mengimplementasikan fitur filter berdasarkan jenjang, status, kecamatan/kelurahan, dan akreditasi
4. Menganalisis persebaran dan pemerataan sekolah berdasarkan wilayah administratif

---

## 👥 Tim Pengembang

| Nama | NIM |
|------|-----|
| Dimas Adrian | 2355301053 |
| Muhammad Rakha Hertawan | 2355301143 |
| Rizqi Abdan Syakuron | 2355301183 |
| Teguh Al Azizul | 2355301197 |
| Tri Wulandari Junita Sari | 2355301202 |

**Pembimbing:** Erzi Hidayat, S.T., M.Kom. & Ahmad Ali Munawar, S.ST  
**Program Studi:** D4 Teknik Informatika — Politeknik Caltex Riau (TA 2025/2026)

---

## ✨ Fitur Utama

### Halaman Masyarakat (Publik)
| Fitur | Deskripsi |
|-------|-----------|
| 🗺️ **Peta Interaktif** | Visualisasi persebaran sekolah di Kota Pekanbaru dengan marker berwarna per jenjang (SD = biru, SMP = kuning, SMA/SMK = merah) |
| 🔍 **Filter Data** | Filter berdasarkan Jenjang, Status (Negeri/Swasta), Akreditasi (A/B/C/TT), dan Kecamatan/Kelurahan |
| 📍 **Detail Sekolah** | Klik marker untuk melihat nama, alamat, jenjang, status, dan akreditasi sekolah |
| 📊 **Ringkasan Data** | Statistik total sekolah (60+), jumlah kecamatan (12), dan jenjang pendidikan (3) |
| 🖼️ **Galeri Foto** | 60 foto sekolah swasta dari jenjang SD, SMP, SMA/SMK dan pesantren |
| ℹ️ **Tentang Sistem** | Informasi latar belakang, tujuan, teknologi, dan harapan pengembangan |

### Halaman Admin
| Fitur | Deskripsi |
|-------|-----------|
| 🔐 **Login** | Autentikasi admin untuk akses dashboard pengelolaan data |
| 🏫 **Kelola Data Sekolah** | CRUD data sekolah (nama, alamat, koordinat, jenjang, akreditasi) |
| 📝 **Kelola Tentang** | Edit judul, deskripsi, visi, dan misi sistem |
| 📷 **Kelola Foto** | Tambah, edit, dan hapus foto sekolah |

---

## 📊 Data yang Dicakup

- **Total Sekolah:** 60+ sekolah swasta
- **Jenjang:** SD/MI, SMP/MTs, SMA/SMK
- **Wilayah:** 12 kecamatan di Kota Pekanbaru
- **Sumber Data:** Dinas Pendidikan Kota Pekanbaru & BPS
- **Koordinat:** WGS 1984 (latitude & longitude)
- **Format Spasial:** GeoJSON

---

## 🔬 Metodologi

### Pengumpulan Data
- Data spasial peta dasar dari Badan Informasi Geospasial (BIG)
- Data sekolah dari Dinas Pendidikan Kota Pekanbaru dan BPS
- Validasi koordinat menggunakan Google Earth & OpenStreetMap

### Pengolahan Data (ArcGIS)
1. Normalisasi format data sekolah
2. Penyesuaian sistem koordinat ke WGS 1984
3. Validasi koordinat per sekolah
4. Konversi ke format GeoJSON

### Analisis Spasial
- **Buffering** — zona jangkauan layanan pendidikan (500m SD, 1km SMP, 2km SMA)
- **Nearest Neighbor Analysis** — pola persebaran (mengelompok vs merata)
- **Analisis Aksesibilitas** — kesesuaian jumlah sekolah dengan kepadatan penduduk

---

## 🛠️ Teknologi yang Digunakan

| Layer | Teknologi |
|-------|-----------|
| **Frontend** | React.js, Tailwind CSS |
| **Pemetaan** | Leaflet.js, GeoJSON |
| **Data Spasial** | ArcGIS, Shapefile (.shp) |
| **Deployment** | Vercel |

---

## 🚀 Cara Menjalankan (Lokal)

### Prasyarat
- Node.js >= 16
- npm atau yarn

### Langkah-langkah
```bash
# Clone repository
git clone https://github.com/username/project-gis.git

# Masuk ke folder project
cd project-gis

# Install dependensi
npm install

# Jalankan development server
npm run dev
```

Buka browser dan akses `[http://localhost:5173](https://project-gis-five.vercel.app/)`

---

## 📁 Web UI

```
<img width="1882" height="869" alt="Screenshot 2026-06-10 215717" src="https://github.com/user-attachments/assets/2f5d55b9-0619-4136-91a5-be949ec563c9" />

```

---

## 🗄️ Struktur Data Sekolah

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [101.xxxx, 0.xxxx]
      },
      "properties": {
        "nama_sekolah": "SDN 001 Pekanbaru",
        "jenjang": "SD",
        "status": "Negeri",
        "akreditasi": "A",
        "alamat": "Jl. Tegalsari",
        "kecamatan": "Sukajadi",
        "kelurahan": "Kampung Tengah"
      }
    }
  ]
}
```

---

## 👤 Aktor Sistem

| Aktor | Hak Akses |
|-------|-----------|
| **Masyarakat** | Melihat peta, filter data, lihat foto, lihat tentang sistem |
| **Admin** | Semua akses masyarakat + login, kelola data sekolah, kelola foto, kelola tentang |

---

## 🎨 Legenda Peta

| Warna | Jenjang |
|-------|---------|
| 🔵 Biru | SD / MI |
| 🟡 Kuning | SMP / MTs |
| 🔴 Merah | SMA / SMK |

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan akademis di Politeknik Caltex Riau. Data sekolah bersumber dari Dinas Pendidikan Kota Pekanbaru dan BPS.
