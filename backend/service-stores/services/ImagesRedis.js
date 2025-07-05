const { redisClient } = require('../db/database');

exports.saveImage = async (storeId, imageBase64) => {
  await redisClient.set(`store:image:${storeId}`, imageBase64);
};

exports.getImage = async (storeId) => {
  return await redisClient.get(`store:image:${storeId}`);
};
