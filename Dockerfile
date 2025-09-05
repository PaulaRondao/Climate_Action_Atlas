FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

RUN npm install -g npm@latest

RUN npm ci --prefer-offline --no-audit --progress=false

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

