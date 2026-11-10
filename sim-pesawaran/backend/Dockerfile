# Multi-stage Dockerfile for SIM-PESAWARAN Rust Axum Backend
FROM rust:1.80-bullseye as builder
WORKDIR /usr/src/sim-pesawaran
COPY Cargo.toml Cargo.lock ./
COPY src ./src
RUN cargo build --release

FROM debian:bullseye-slim
RUN apt-get update && apt-get install -y libssl-dev ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=builder /usr/src/sim-pesawaran/target/release/sim-pesawaran-backend /app/sim-pesawaran-backend
EXPOSE 8080
CMD ["/app/sim-pesawaran-backend"]
