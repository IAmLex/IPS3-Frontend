FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/IPS3-Frontend /usr/share/nginx/html