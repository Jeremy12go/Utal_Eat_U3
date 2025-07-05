const express = require('express');
const app = express();
const profileRoutes = require('./routes/RatingRoutes');

app.use(express.json()); // Para leer JSON del body

app.use('/ratings', profileRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
