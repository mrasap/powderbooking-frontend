FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run build && \
    npm install -g serve

RUN adduser -D nonrootuser
USER nonrootuser

EXPOSE 5000

CMD ["serve", "-s", "build"]