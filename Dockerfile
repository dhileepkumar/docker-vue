FROM node:alpine as builder
WORKDIR /app/docker-vue-ci
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /app/docker-vue-ci/dist /usr/share/nginx/html/