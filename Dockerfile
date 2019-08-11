FROM node:alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run build

# loosely based on: https://medium.com/@tiangolo/react-in-docker-with-nginx-built-with-multi-stage-docker-builds-including-testing-8cc49d6ec305
FROM nginx:alpine

COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf