const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');  // Requiere dotenv para cargar las variables de entorno
const contactRoutes = require('./routes/contactRoutes');  // Asegúrate de que esta ruta esté bien configurada

dotenv.config();  // Cargar las variables de entorno desde el archivo .env

const app = express();

// Habilitar CORS para solo tu dominio específico
app.use(cors({
    origin: 'https://kanjiro34.github.io',  // Solo tu dominio puede hacer solicitudes
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
}));

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB Atlas usando las variables de entorno
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.log('Error en la conexión:', err));

// Ruta para las solicitudes de contacto
app.use('/api/contacto', contactRoutes);

// Middleware de manejo de errores (importante para producción)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal. Inténtalo más tarde.' });
});

// Iniciar servidor usando el puerto de la variable de entorno
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
