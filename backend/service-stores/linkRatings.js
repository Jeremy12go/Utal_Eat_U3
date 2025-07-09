require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const Store = require('./models/Store');

mongoose.connect(process.env.MONGO_URL);

(async () => {
    try {
        const response = await axios.get('http://localhost:3003/ratings/stores/store1');
        const ratingIds = response.data;

        await Store.findOneAndUpdate(
            { id: "store1" },
            { $push: { ratings: { $each: ratingIds } } }
        );

        console.log("✅ Ratings enlazados correctamente a store1");
    } catch (err) {
        console.error("❌ Error al enlazar ratings:", err.message);
    } finally {
        mongoose.disconnect();
    }
})();
