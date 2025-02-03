// Importar variables de entorno
require('dotenv').config();

// Importar express, para crear el servidor
const express = require('express');

// Importar mongoose, para interactuar con la base de datos de MongoDB
const mongoose = require('mongoose');

// Importar cors, para permitir peticiones desde cualquier origen
const cors = require('cors');

// Importar configuración del proyecto
const config = require('./backend/config/config');

// Conectar a la base de datos de MongoDB
require('./backend/config/db');

// Crear el objeto de express
const app = express();

// Definir el puerto del servidor
const PORT = config.port;

// Habilitar cors, para permitir peticiones desde cualquier origen
app.use(cors());

// Habilitar el parsing de JSON en las peticiones
app.use(express.json());

// Importar las rutas
const contactRoutes = require('./backend/routes/contactRoutes');

// Establecer la ruta para las peticiones de contacto
app.use('/api/contacto', contactRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});


