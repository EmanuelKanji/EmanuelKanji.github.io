const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes'); // Asegúrate de que la ruta es correcta
const cors = require('cors');
require('dotenv').config(); // Para usar variables de entorno

const app = express();

// Middleware
app.use(cors()); // Si estás haciendo peticiones desde un frontend diferente
app.use(bodyParser.json()); // Para analizar el cuerpo de las solicitudes como JSON

// Rutas
app.use('/api/contact', contactRoutes); // Agregar las rutas de contacto

// Conexión a MongoDB
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

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
