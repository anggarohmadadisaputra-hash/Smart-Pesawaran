# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# SIM-PESAWARAN
## Smart Infrastructure Monitoring Kabupaten Pesawaran

| Informasi | Keterangan |
|---|---|
| Nama Produk | SIM-PESAWARAN |
| Kepanjangan | Smart Infrastructure Monitoring |
| Jenis Sistem | Responsive Web Application |
| Versi Dokumen | 1.0 |
| Tahun | 2026 |
| Status | Validasi Kebutuhan & Implementasi Vibe Coding |
| Backend | Rust + Axum |
| Database | PostgreSQL + PostGIS |
| Frontend | React + TypeScript + Tailwind CSS |
| GIS | Leaflet + OpenStreetMap |
| Product Owner / Pengembang | Angga Rohmad Adi Saputra |
| Pembimbing / Kolaborator | Dr. Erliyan Redy Susanto, M.Kom |

**Identitas institusi:**
- Logo resmi Kabupaten Pesawaran (kiri).
- Logo resmi Universitas Teknokrat Indonesia (kanan).

**Copyright©2026 by Angga Rohmad Adi Saputra dan Dr. Erliyan Redy Susanto, M.Kom**

---

## 1. Executive Summary
SIM-PESAWARAN merupakan sistem informasi monitoring infrastruktur berbasis web yang dirancang untuk mendukung pengelolaan, pemantauan, pelaporan, dan evaluasi kondisi infrastruktur Kabupaten Pesawaran.
Sistem berfokus pada tiga kategori infrastruktur:
1. Jalan
2. Jembatan
3. Drainase

Mengintegrasikan 4 kelompok pengguna:
- Administrator (Superuser, kelola user, master wilayah, audit trail)
- OPD (Dinas PUPR - verifikasi aduan, penugasan SPK, pantau pemeliharaan)
- Petugas Lapangan (Inspeksi fisik, upload bukti foto GPS, pembaruan progres)
- Masyarakat (Portal aduan publik dengan tiket tracking & pemetaan titik kerusakan)

## 2. Design System
- Primary: `#123B5D`
- Secondary: `#1685B9`
- Success: `#20A477`
- Warning: `#E5A33A`
- Danger: `#D94C4C`
- Background: `#F1F4F8`
- Surface: `#FFFFFF`
- Typography: Inter

## 3. Mandatory Footer
`Copyright©2026 by Angga Rohmad Adi Saputra dan Dr. Erliyan Redy Susanto, M.Kom`
