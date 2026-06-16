# --- Build stage: generate the static site ---
FROM node:22-slim AS build
WORKDIR /app

# Native build deps for better-sqlite3/sqlite3 (used by Nuxt Content at build time)
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies against the committed lockfile
COPY package.json package-lock.json ./
RUN npm ci

# Build the static output (.output/public)
COPY . .
RUN export NODE_OPTIONS="--max-old-space-size=4096" && npm run generate

# --- Serve stage: static files via nginx ---
FROM nginx:alpine AS serve
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html
EXPOSE 80
