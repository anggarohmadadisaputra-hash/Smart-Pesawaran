use axum::{routing::{get, post}, Router};

pub mod assets;
pub mod reports;
pub mod auth;

pub fn create_api_router() -> Router {
    Router::new()
        .route("/health", get(|| async { "SIM-PESAWARAN API v1.0 OK" }))
        .nest("/auth", auth::router())
        .nest("/assets", assets::router())
        .nest("/reports", reports::router())
}
