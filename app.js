const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./backend/routes/contactRoutes');
const cors = require('cors');
require('dotenv').config(); // Cargar las variables de entorno desde .env

const app = express();

// Middleware para permitir solicitudes CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB usando variables de entorno
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos MongoDB:', error);
    process.exit(1);  // Termina el proceso si no se puede conectar
  });

// Rutas de la API de contacto
app.use('/api/contacto', contactRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Contacto funcionando');
});

// Puerto de escucha, configurado a través de las variables de entorno o por defecto en 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
