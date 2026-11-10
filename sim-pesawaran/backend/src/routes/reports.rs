use axum::{routing::{get, post}, Json, Router};
use crate::models::{DamageReport, CreateDamageReportRequest};

pub fn router() -> Router {
    Router::new()
        .route("/", get(list_reports))
        .route("/", post(create_report))
}

async fn list_reports() -> Json<Vec<DamageReport>> {
    Json(vec![
        DamageReport {
            id: 1,
            ticket_number: "TIK-PSW-2026-0814".to_string(),
            reporter_name: "Budi Santoso".to_string(),
            reporter_phone: "081234567890".to_string(),
            infrastructure_category: "jalan".to_string(),
            kecamatan: "Gedong Tataan".to_string(),
            desa: Some("Sukadadi".to_string()),
            location_detail: "Dekat perempatan pasar desa Sukadadi".to_string(),
            damage_description: "Lubang amblas sedalam 20 cm yang membahayakan pengendara motor".to_string(),
            severity: "berat".to_string(),
            status: "in_progress".to_string(),
            photo_url: Some("/assets/uploads/report_01.jpg".to_string()),
            latitude: Some(-5.38520),
            longitude: Some(105.18530),
            rejection_reason: None,
            created_at: chrono::Utc::now(),
        }
    ])
}

async fn create_report(Json(payload): Json<CreateDamageReportRequest>) -> Json<DamageReport> {
    let now = chrono::Utc::now();
    let ticket = format!("TIK-PSW-2026-{:04}", (now.timestamp() % 10000).abs());
    
    Json(DamageReport {
        id: 100,
        ticket_number: ticket,
        reporter_name: payload.reporter_name,
        reporter_phone: payload.reporter_phone,
        infrastructure_category: payload.infrastructure_category,
        kecamatan: payload.kecamatan,
        desa: payload.desa,
        location_detail: payload.location_detail,
        damage_description: payload.damage_description,
        severity: payload.severity,
        status: "submitted".to_string(),
        photo_url: payload.photo_data,
        latitude: payload.latitude,
        longitude: payload.longitude,
        rejection_reason: None,
        created_at: now,
    })
}
