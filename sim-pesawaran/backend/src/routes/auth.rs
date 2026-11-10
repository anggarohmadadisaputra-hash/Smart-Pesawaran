use axum::{routing::post, Json, Router};
use serde::{Deserialize, Serialize};

pub fn router() -> Router {
    Router::new()
        .route("/login", post(login))
}

#[derive(Deserialize)]
pub struct LoginPayload {
    pub username: String,
    pub password: String,
}

#[derive(Serialize)]
pub struct LoginResponse {
    pub success: bool,
    pub message: String,
    pub role: String,
    pub token: String,
}

async fn login(Json(payload): Json<LoginPayload>) -> Json<LoginResponse> {
    Json(LoginResponse {
        success: true,
        message: "Login berhasil ke SIM-PESAWARAN".to_string(),
        role: "administrator".to_string(),
        token: "demo-jwt-sim-pesawaran-token-2026".to_string(),
    })
}
