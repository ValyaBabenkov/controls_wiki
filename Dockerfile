FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY apps/www .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
