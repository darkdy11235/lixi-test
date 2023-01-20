FROM node:12

WORKDIR /darkdy/src/app

COPY package.json ./

RUN npm install


COPY . . 


RUN npm run build



