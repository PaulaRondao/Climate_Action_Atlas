FROM node:22

WORKDIR /usr/src/climate-action-atlas

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

