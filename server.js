require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./backend/routes/contactRoutes'); 

const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Middleware para parsear datos en formato JSON
app.use(express.json());

// Conexión a MongoDB Atlas usando variables de entorno
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos MongoDB Atlas'))
  .catch((err) => console.log('Error al conectar a la base de datos:', err));

// Ruta para las solicitudes de contacto
app.use('/api/contacto', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
