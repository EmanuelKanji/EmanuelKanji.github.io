const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./backend/routes/contactRoutes');
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1);
  });

// Rutas
app.use('/api/contact', contactRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Contactos en funcionamiento');
});

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


