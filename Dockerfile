FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm" "run" "serveAsset"]

FROM nginx

EXPOSE 80

COPY --from=0 /app/build /usr/share/nginx/html

COPY --from=0 /app/static-asset-server/public/posters /usr/share/nginx/html/posters
