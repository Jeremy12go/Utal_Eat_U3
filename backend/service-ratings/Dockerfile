FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["/bin/sh", "-c", "node db/seed.js || true && node ratings-app.js"]
