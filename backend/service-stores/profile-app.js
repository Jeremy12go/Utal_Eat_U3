const express = require('express');
const app = express();
const profileRoutes = require('./routes/ProfileRoutes');

app.use(express.json()); // Para leer JSON del body

app.use('/profiles', profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
