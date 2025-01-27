FROM node:18-alpine AS build

RUN apk add curl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build:prod
# Serve Application using Nginx Server
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html
