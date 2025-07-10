const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const Product = require('../models/Product');
const Store = require('../models/Store');

const MONGO_URL = process.env.MONGO_URL;

async function seed() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Conectado a MongoDB');

    // ---------- CARGA DE PRODUCTS ----------
    const productsPath = path.join(__dirname, 'stores_db-products.json');
    const productsRaw = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

    const products = productsRaw.map(p => ({
      ...p,
      _id: new mongoose.Types.ObjectId(p._id),
      image: {
        data: Buffer.from(p.image.data, 'base64'),
        contentType: p.image.contentType || 'image/jpeg'
      }
    }));

    await Product.insertMany(products);
    console.log('Productos insertados');

    // ---------- CARGA DE STORES ----------
    const storesPath = path.join(__dirname, 'stores_db-stores.json');
    const storesRaw = JSON.parse(fs.readFileSync(storesPath, 'utf-8'));

    const stores = storesRaw.map(s => ({
      ...s,
      _id: new mongoose.Types.ObjectId(s._id),
      logo: {
        data: Buffer.from(s.logo.data, 'base64'),
        contentType: s.logo.contentType || 'image/jpeg'
      },
      ratings: s.ratings?.map(r => new mongoose.Types.ObjectId(r.$oid)) || [],
      productsList: s.productsList?.map(p => new mongoose.Types.ObjectId(p.$oid)) || []
    }));

    await Store.insertMany(stores);
    console.log('Tiendas insertadas');
  } catch (err) {
    console.error('Error al insertar datos:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Conexión cerrada');
  }
}

seed();
