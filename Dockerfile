FROM nginx:1.15-alpine
COPY dist /etc/nginx/vue3-ts
WORKDIR /etc/nginx/vue3-ts
