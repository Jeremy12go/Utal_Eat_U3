const mongoose = require('mongoose');
const redis = require('redis');
require('dotenv').config();

const mongoConnect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Conectado a MongoDB');
};

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});
redisClient.connect().then(() => console.log('Conectado a Redis'));

module.exports = { mongoConnect, redisClient };
