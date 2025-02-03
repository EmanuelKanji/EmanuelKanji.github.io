// Importamos las dependencias
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Creamos la app de Express
const app = express();

// Conexión a MongoDB Atlas usando Mongoose
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas', err);
  });

// Middleware para procesar datos JSON
app.use(express.json());

// Middleware para permitir peticiones desde el frontend (CORS)
const corsOptions = {
  origin: 'https://kanjiro34.github.io',  // Ajusta con la URL de tu frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Importamos las rutas
const contactRoutes = require('./routes/contactRoutes');

// Definimos las rutas de la API
app.use('/api/contacto', contactRoutes);

// Servir los archivos estáticos del frontend (si tienes un build de React o similar)
app.use(express.static(path.join(__dirname, 'build')));  // Ajusta según tu estructura de archivos

// Si no hay coincidencia con ninguna ruta de API, servir el index.html (para aplicaciones SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configuramos el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
