FROM node:16-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]
