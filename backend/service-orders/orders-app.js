const express = require('express');
const app = express();
const profileRoutes = require('./routes/StoreRoutes');

app.use(express.json()); // Para leer JSON del body

app.use('/stores', profileRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
