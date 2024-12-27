---
title: 'Docker ile Container Teknolojisine Giriş'
excerpt: 'Docker container''ları ile modern uygulama geliştirme ve dağıtım süreçlerini nasıl iyileştirebileceğinizi öğrenin...'
date: '31 Aralık 2023'
readTime: '9 dk'
category: 'DevOps'
---

# Docker ile Container Teknolojisine Giriş

Docker, modern yazılım geliştirme ve dağıtım süreçlerinin vazgeçilmez bir parçası haline geldi. Container teknolojisi sayesinde uygulamalarınızı her ortamda aynı şekilde çalıştırabilirsiniz.

## Docker'ın Temelleri

### Container vs VM

```plaintext
Container:
- Hafif
- Hızlı başlatma
- Az kaynak kullanımı
- Host OS kernel paylaşımı

VM:
- Ağır
- Yavaş başlatma
- Fazla kaynak kullanımı
- Tam izolasyon
```

## Dockerfile Oluşturma

```dockerfile
# Node.js uygulaması için örnek Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

## Docker Compose Kullanımı

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Temel Docker Komutları

### Container Yönetimi

```bash
# Container oluşturma ve başlatma
docker run -d -p 3000:3000 my-app

# Container listesi
docker ps

# Container durdurma
docker stop container_id

# Container silme
docker rm container_id
```

### Image Yönetimi

```bash
# Image oluşturma
docker build -t my-app:latest .

# Image listesi
docker images

# Image silme
docker rmi image_id
```

## Docker Networks

```bash
# Network oluşturma
docker network create my-network

# Network'e container bağlama
docker run --network my-network my-app
```

## Volume Yönetimi

```bash
# Volume oluşturma
docker volume create my-volume

# Volume mount etme
docker run -v my-volume:/app/data my-app
```

## Multi-stage Builds

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Best Practices

1. Minimal base image kullanın
2. Multi-stage build kullanın
3. .dockerignore dosyası oluşturun
4. Güvenlik güncellemelerini takip edin
5. Environment variables kullanın
6. Layer sayısını minimize edin

## Güvenlik Önlemleri

```dockerfile
# Root olmayan kullanıcı oluşturma
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Güvenli base image kullanımı
FROM node:18-alpine@sha256:123...

# Güvenlik taraması
RUN apk update && apk upgrade
```

## Debugging

```bash
# Container logları
docker logs container_id

# Container'a bağlanma
docker exec -it container_id sh

# Container stats
docker stats
```

Docker, modern yazılım geliştirme süreçlerinin önemli bir parçasıdır. Container teknolojisini doğru kullanmak, geliştirme ve dağıtım süreçlerinizi önemli ölçüde iyileştirecektir. 