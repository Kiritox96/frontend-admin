FROM node:12.0 AS builder
COPY . ./frontend-admin
WORKDIR /frontend-admin
RUN npm i
RUN npm install -g @angular/cli
ENTRYPOINT npm run build-serve
