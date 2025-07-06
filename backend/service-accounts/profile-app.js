const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware.

const { mongoConnect } = require('./db/database');

const profileRoutes = require('./routes/ProfileRoutes'); // Routes.
const { mongo } = require('mongoose');
app.use('/profiles', profileRoutes);

const PORT = process.env.PORT || 3000;

mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error('Error al conectar a MongoDB', error.message);
  });

