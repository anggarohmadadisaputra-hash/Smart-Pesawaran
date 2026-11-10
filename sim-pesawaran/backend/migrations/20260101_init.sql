-- ============================================================================
-- SIM-PESAWARAN Database Migration
-- Smart Infrastructure Monitoring Kabupaten Pesawaran
-- PostgreSQL + PostGIS Schema
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Roles & Permissions
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO roles (name, description) VALUES
('administrator', 'Akses seluruh modul, konfigurasi, pengguna, role, dan audit log'),
('opd', 'Mengelola data aset, memverifikasi laporan, membuat penugasan SPK, memantau pemeliharaan'),
('petugas_lapangan', 'Melihat tugas inspeksi, mengisi formulir pemeriksaan, unggah bukti GPS & foto'),
('masyarakat', 'Mengirim aduan, melacak status tiket, melihat info keterbukaan publik');

-- 2. OPD Master
CREATE TABLE opd (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    short_name VARCHAR(50) NOT NULL,
    code VARCHAR(30) UNIQUE NOT NULL,
    address TEXT,
    phone VARCHAR(30),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO opd (name, short_name, code, address, phone) VALUES
('Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Pesawaran', 'Dinas PUPR', 'OPD-PUPR-01', 'Komplek Perkantoran Pemkab Pesawaran, Gedong Tataan', '(0721) 93123');

-- 3. Users
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    phone_number VARCHAR(30),
    role_id INT REFERENCES roles(id),
    opd_id INT REFERENCES opd(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Wilayah Administratif
CREATE TABLE kecamatan (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20) UNIQUE NOT NULL,
    center_lat NUMERIC(9,6),
    center_lng NUMERIC(9,6),
    boundary GEOMETRY(MultiPolygon, 4326)
);

INSERT INTO kecamatan (name, code, center_lat, center_lng) VALUES
('Gedong Tataan', '18.09.01', -5.3850, 105.1850),
('Kedondong', '18.09.02', -5.4410, 105.0250),
('Way Lima', '18.09.03', -5.4670, 105.0850),
('Padang Cermin', '18.09.04', -5.5890, 105.2150),
('Teluk Pandan', '18.09.05', -5.5350, 105.2680),
('Punduh Pedada', '18.09.06', -5.7200, 105.2450),
('Negeri Katon', '18.09.07', -5.2950, 105.1550),
('Tegineneng', '18.09.08', -5.2280, 105.1950),
('Way Ratai', '18.09.09', -5.5950, 105.1150),
('Way Khilau', '18.09.10', -5.4200, 104.9750),
('Marga Punduh', '18.09.11', -5.6700, 105.1850);

-- 5. Infrastructure Assets (Jalan, Jembatan, Drainase)
CREATE TABLE infrastructure_assets (
    id BIGSERIAL PRIMARY KEY,
    asset_code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(30) NOT NULL CHECK (category IN ('jalan', 'jembatan', 'drainase')),
    kecamatan_id INT REFERENCES kecamatan(id),
    desa VARCHAR(100),
    condition VARCHAR(30) NOT NULL CHECK (condition IN ('mantap', 'sedang', 'rusak_ringan', 'rusak_berat')),
    length_m NUMERIC(12,2) DEFAULT 0,
    width_m NUMERIC(12,2) DEFAULT 0,
    surface_type VARCHAR(50),
    construction_year INT,
    description TEXT,
    geom GEOMETRY(Geometry, 4326),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_assets_geom ON infrastructure_assets USING GIST (geom);
CREATE INDEX idx_assets_category ON infrastructure_assets(category);
CREATE INDEX idx_assets_condition ON infrastructure_assets(condition);

-- 6. Damage Reports (Aduan Masyarakat)
CREATE TABLE damage_reports (
    id BIGSERIAL PRIMARY KEY,
    ticket_number VARCHAR(50) UNIQUE NOT NULL,
    reporter_name VARCHAR(150) NOT NULL,
    reporter_phone VARCHAR(30) NOT NULL,
    infrastructure_category VARCHAR(30) NOT NULL,
    asset_id BIGINT REFERENCES infrastructure_assets(id),
    kecamatan_id INT REFERENCES kecamatan(id),
    desa VARCHAR(100),
    location_detail TEXT NOT NULL,
    damage_description TEXT NOT NULL,
    severity VARCHAR(30) NOT NULL CHECK (severity IN ('ringan', 'sedang', 'berat', 'kritis')),
    status VARCHAR(40) NOT NULL DEFAULT 'submitted' CHECK (
        status IN ('submitted', 'under_review', 'rejected', 'verified', 'inspection_scheduled', 'inspected', 'in_progress', 'completed')
    ),
    rejection_reason TEXT,
    photo_url TEXT,
    latitude NUMERIC(10,7),
    longitude NUMERIC(10,7),
    geom GEOMETRY(Point, 4326),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_reports_geom ON damage_reports USING GIST (geom);
CREATE INDEX idx_reports_ticket ON damage_reports(ticket_number);

-- 7. Inspections (Petugas Lapangan)
CREATE TABLE inspections (
    id BIGSERIAL PRIMARY KEY,
    report_id BIGINT REFERENCES damage_reports(id),
    asset_id BIGINT REFERENCES infrastructure_assets(id),
    inspector_id BIGINT REFERENCES users(id),
    scheduled_date DATE NOT NULL,
    inspection_date TIMESTAMPTZ,
    status VARCHAR(30) DEFAULT 'direncanakan',
    condition_score VARCHAR(30),
    findings TEXT,
    recommendations TEXT,
    evidence_photo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Maintenance Projects (Progres Pemeliharaan & SPK)
CREATE TABLE maintenance_projects (
    id BIGSERIAL PRIMARY KEY,
    spk_number VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    asset_id BIGINT REFERENCES infrastructure_assets(id),
    report_id BIGINT REFERENCES damage_reports(id),
    contractor_or_team VARCHAR(150) NOT NULL,
    target_start_date DATE,
    target_end_date DATE,
    actual_end_date DATE,
    progress_percentage NUMERIC(5,2) DEFAULT 0,
    status VARCHAR(40) DEFAULT 'persiapan',
    budget_estimate NUMERIC(15,2) DEFAULT 0,
    before_photo_url TEXT,
    after_photo_url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Audit Logs
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    module VARCHAR(50) NOT NULL,
    record_id VARCHAR(50),
    ip_address VARCHAR(50),
    details JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
