use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc, NaiveDate};
use utoipa::ToSchema;

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct User {
    pub id: i64,
    pub username: String,
    pub email: String,
    pub full_name: String,
    pub role: String,
    pub opd_name: Option<String>,
    pub is_active: bool,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct InfrastructureAsset {
    pub id: i64,
    pub asset_code: String,
    pub name: String,
    pub category: String, // 'jalan', 'jembatan', 'drainase'
    pub kecamatan: String,
    pub desa: Option<String>,
    pub condition: String, // 'mantap', 'sedang', 'rusak_ringan', 'rusak_berat'
    pub length_m: Option<f64>,
    pub width_m: Option<f64>,
    pub surface_type: Option<String>,
    pub construction_year: Option<i32>,
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct DamageReport {
    pub id: i64,
    pub ticket_number: String,
    pub reporter_name: String,
    pub reporter_phone: String,
    pub infrastructure_category: String,
    pub kecamatan: String,
    pub desa: Option<String>,
    pub location_detail: String,
    pub damage_description: String,
    pub severity: String, // 'ringan', 'sedang', 'berat', 'kritis'
    pub status: String,   // 'submitted', 'under_review', 'verified', 'in_progress', 'completed', 'rejected'
    pub photo_url: Option<String>,
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub rejection_reason: Option<String>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct CreateDamageReportRequest {
    pub reporter_name: String,
    pub reporter_phone: String,
    pub infrastructure_category: String,
    pub kecamatan: String,
    pub desa: Option<String>,
    pub location_detail: String,
    pub damage_description: String,
    pub severity: String,
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub photo_data: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct MaintenanceProject {
    pub id: i64,
    pub spk_number: String,
    pub title: String,
    pub asset_name: String,
    pub contractor_or_team: String,
    pub target_end_date: Option<NaiveDate>,
    pub progress_percentage: f64,
    pub status: String,
    pub before_photo_url: Option<String>,
    pub after_photo_url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct DashboardSummary {
    pub total_jalan_km: f64,
    pub total_jembatan: i64,
    pub total_drainase_m: f64,
    pub total_aduan: i64,
    pub aduan_menunggu: i64,
    pub aduan_dalam_penanganan: i64,
    pub aduan_selesai: i64,
}
