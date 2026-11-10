use axum::{routing::get, Json, Router};
use crate::models::InfrastructureAsset;

pub fn router() -> Router {
    Router::new()
        .route("/", get(list_assets))
}

async fn list_assets() -> Json<Vec<InfrastructureAsset>> {
    // Demonstration Seed Data for SIM-PESAWARAN
    Json(vec![
        InfrastructureAsset {
            id: 1,
            asset_code: "JL-PSW-001".to_string(),
            name: "Ruas Jl. Ahmad Yani - Gedong Tataan".to_string(),
            category: "jalan".to_string(),
            kecamatan: "Gedong Tataan".to_string(),
            desa: Some("Sukadadi".to_string()),
            condition: "mantap".to_string(),
            length_m: Some(5400.0),
            width_m: Some(7.0),
            surface_type: Some("Hotmix Aspal".to_string()),
            construction_year: Some(2023),
            latitude: Some(-5.38520),
            longitude: Some(105.18530),
            created_at: chrono::Utc::now(),
        },
        InfrastructureAsset {
            id: 2,
            asset_code: "JB-PSW-014".to_string(),
            name: "Jembatan Way Semah I".to_string(),
            category: "jembatan".to_string(),
            kecamatan: "Kedondong".to_string(),
            desa: Some("Kedondong".to_string()),
            condition: "sedang".to_string(),
            length_m: Some(36.0),
            width_m: Some(6.5),
            surface_type: Some("Beton Bertulang".to_string()),
            construction_year: Some(2021),
            latitude: Some(-5.44120),
            longitude: Some(105.02540),
            created_at: chrono::Utc::now(),
        },
        InfrastructureAsset {
            id: 3,
            asset_code: "DR-PSW-029".to_string(),
            name: "Saluran Drainase Primer Way Lima".to_string(),
            category: "drainase".to_string(),
            kecamatan: "Way Lima".to_string(),
            desa: Some("Kuta Dalom".to_string()),
            condition: "rusak_ringan".to_string(),
            length_m: Some(1250.0),
            width_m: Some(2.0),
            surface_type: Some("Pasangan Batu Kali".to_string()),
            construction_year: Some(2022),
            latitude: Some(-5.46780),
            longitude: Some(105.08510),
            created_at: chrono::Utc::now(),
        }
    ])
}
