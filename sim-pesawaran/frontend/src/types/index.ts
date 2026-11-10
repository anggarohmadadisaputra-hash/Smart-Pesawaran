export type UserRole = 'administrator' | 'opd' | 'petugas_lapangan' | 'masyarakat';

export interface User {
  id: number;
  username: string;
  name: string;
  role: UserRole;
  roleLabel: string;
  agency: string;
}

export type AssetCategory = 'jalan' | 'jembatan' | 'drainase';
export type AssetCondition = 'mantap' | 'sedang' | 'rusak_ringan' | 'rusak_berat';

export interface InfrastructureAsset {
  id: number;
  code: string;
  name: string;
  category: AssetCategory;
  kecamatan: string;
  desa: string;
  condition: AssetCondition;
  lengthM: number;
  widthM: number;
  surface: string;
  year: number;
  lat: number;
  lng: number;
  lastInspected: string;
}

export type ReportSeverity = 'ringan' | 'sedang' | 'berat' | 'kritis';
export type ReportStatus =
  | 'submitted'
  | 'under_review'
  | 'rejected'
  | 'verified'
  | 'inspection_scheduled'
  | 'inspected'
  | 'in_progress'
  | 'completed';

export interface DamageReport {
  id: number;
  ticketNumber: string;
  reporterName: string;
  reporterPhone: string;
  category: AssetCategory;
  kecamatan: string;
  desa: string;
  locationDetail: string;
  description: string;
  severity: ReportSeverity;
  status: ReportStatus;
  lat: number;
  lng: number;
  photoUrl: string;
  createdAt: string;
  rejectionReason?: string;
  assignedOfficer?: string;
}

export interface MaintenanceProject {
  id: number;
  spkNumber: string;
  title: string;
  category: AssetCategory;
  kecamatan: string;
  targetDate: string;
  team: string;
  progress: number;
  status: 'Persiapan' | 'Pengerjaan 30%' | 'Pengerjaan 70%' | 'Uji Kelayakan' | 'Selesai';
  budgetEstimate: string;
  beforePhoto: string;
  afterPhoto?: string;
}
