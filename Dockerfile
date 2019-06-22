#FROM tiangolo/node-frontend:10 as build-stage
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install
#COPY ./ /app/
#ARG configuration=production
#RUN npm run build -- --output-path=./dist/out --configuration=$configuration --prod
#
## Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
#FROM nginx:1.15
#COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
FROM node:8.9.1-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration=$configuration --prod

# Stage 2
FROM nginx:1.13.12-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /usr/src/app/dist/toolroom-front /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
