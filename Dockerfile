FROM node:24-alpine AS builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2
WORKDIR /app
COPY --from=builder /src/dist /app
COPY Caddyfile /etc/caddy/Caddyfile
