FROM node:11.6.0-alpine AS builder
COPY . ./frontend-admin
WORKDIR /frontend-admin
RUN npm i
RUN $(npm bin)/ng build --prod