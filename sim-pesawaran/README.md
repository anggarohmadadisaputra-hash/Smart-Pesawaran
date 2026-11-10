# SIM-PESAWARAN
## Smart Infrastructure Monitoring Kabupaten Pesawaran

Aplikasi web terintegrasi berbasis GIS untuk pemantauan, verifikasi, inspeksi lapangan, dan pemeliharaan infrastruktur daerah (Jalan, Jembatan, Drainase) di Kabupaten Pesawaran, Lampung.

Dikembangkan atas sinergi bersama **Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kabupaten Pesawaran** dan mitra akademik **Universitas Teknokrat Indonesia**.

---

### Identitas & Kolaborasi Institusi
- **Logo Resmi Kabupaten Pesawaran** (Sisi Kiri)
- **Logo Resmi Universitas Teknokrat Indonesia** (Sisi Kanan)

**Copyright©2026 by Angga Rohmad Adi Saputra dan Dr. Erliyan Redy Susanto, M.Kom**

---

## 🚀 Cara Menjalankan Aplikasi di VS Code

### 1. Pratinjau Instan (Zero Dependency)
Proyek ini dilengkapi dengan antarmuka standalone berfitur lengkap pada `index.html`:
1. Klik kanan `index.html` di VS Code Explorer.
2. Pilih **"Open with Live Server"** atau jalankan task VS Code: `Ctrl+Shift+B` -> **"Open in Default Browser"**.
3. Seluruh 13 modul (Peta Leaflet GIS, Manajemen Aset, Pelaporan Warga, Verifikasi OPD, Inspeksi Lapangan, Progres Pemeliharaan SPK, dan Ekspor Laporan) dapat langsung diuji secara interaktif!

### 2. Menjalankan Backend (Rust + Axum)
```bash
cd backend
cargo run
```
*Port default: `http://localhost:8080/api/v1`*

### 3. Menjalankan Database PostgreSQL + PostGIS (Docker)
```bash
docker-compose up -d
```
*Tersedia skema database spasial dan seed data di `backend/migrations/20260101_init.sql`.*

### 4. Menjalankan Frontend React (Vite + TypeScript)
```bash
cd frontend
npm install
npm run dev
```

---

## 👥 Role Pengguna & Simulasi
Sistem mengadopsi Role-Based Access Control (RBAC):
1. **Administrator (PUPR)**: Akses menyeluruh, master wilayah, audit trail, ekspor PDF/Excel.
2. **OPD / Verifikator**: Validasi laporan aduan masuk, penolakan dengan alasan resmi, penerbitan SPK penugasan tim.
3. **Petugas Lapangan**: Pemeriksaan fisik jalan/jembatan/saluran drainase, checklist digital, unggah bukti koordinat & foto.
4. **Masyarakat (Publik)**: Form pengaduan kerusakan dengan deteksi GPS otomatis, penerbitan kode tiket unik (`TIK-PSW-2026-XXXX`), dan pelacak status tiket secara transparan.

---

## 🎨 Palet Warna Standar (Design System)
| Token | Kode Warna | Penggunaan |
|---|---|---|
| Primary | `#123B5D` | Header, Sidebar, Tombol Utama |
| Secondary | `#1685B9` | Aksen, Status Aktif, Icon |
| Success | `#20A477` | Kondisi Mantap, Verifikasi Disetujui |
| Warning | `#E5A33A` | Kondisi Sedang, Perlu Verifikasi |
| Danger | `#D94C4C` | Kondisi Rusak Berat / Kritis |
| Background | `#F1F4F8` | Latar Belakang Aplikasi |
| Surface | `#FFFFFF` | Kartu Konten, Modal |

---

## 📁 Struktur Direktori
```text
sim-pesawaran/
├── .vscode/               # Pengaturan workspace, launch, & tasks VS Code
│   ├── settings.json
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
├── index.html             # Aplikasi web GIS interaktif mandiri (Lengkap 13 Modul)
├── prd.md                 # Product Requirements Document resmi
├── skill.md               # Pedoman implementasi arsitektur & desain UI/UX
├── docker-compose.yml     # Konfigurasi PostGIS + API Container
├── .env.example           # Contoh variabel lingkungan
├── public/assets/branding # Aset resmi SVG Lambang Pesawaran & UTI
├── backend/               # Rust + Axum + PostGIS
│   ├── Cargo.toml
│   ├── migrations/
│   └── src/
└── frontend/              # React + TypeScript + Tailwind CSS
    ├── package.json
    ├── tailwind.config.js
    └── src/
```

*Dokumen ini merupakan bagian dari implementasi validasi kebutuhan sistem SIM-PESAWARAN 2026.*
