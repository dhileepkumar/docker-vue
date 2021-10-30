FROM node:alpine as builder
WORKDIR /app/docker-vue
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/docker-vue/dist /usr/share/nginx/html/