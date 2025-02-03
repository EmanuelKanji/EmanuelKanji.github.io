const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes'); // Ruta para el archivo contactRoutes.js
const cors = require('cors');
require('dotenv').config(); // Para cargar las variables de entorno

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Analiza el cuerpo de las solicitudes JSON

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
    process.exit(1); // Si no se puede conectar, salir con código de error
  });

// Rutas
app.use('/api/contact', contactRoutes); // Definir las rutas de contacto

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Contactos en funcionamiento');
});

// Puerto de escucha
const PORT = process.env.PORT || 5000; // Usa el puerto definido en la variable de entorno o 5000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
