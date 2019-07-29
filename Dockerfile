FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run build && \
    npm install -g serve

RUN adduser -D nonrootuser
USER nonrootuser

# npm run build creates a folder that should probably be sufficient together with serve for deployment
# TODO: create builder layer and final layer with only the build folder and serve

EXPOSE 5000

CMD ["serve", "-s", "build"]