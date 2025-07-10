FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["/bin/sh", "-c", "node db/seed.js || true && node stores-app.js"]
