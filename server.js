// Importar variables de entorno
require('dotenv').config();

// Importar express, para crear el servidor
const express = require('express');

// Importar mongoose, para interactuar con la base de datos de MongoDB
const mongoose = require('mongoose');

// Importar cors, para permitir peticiones desde cualquier origen
const cors = require('cors');

// Importar el módulo path para resolver rutas de archivos
const path = require('path');

// Crear el objeto de express
const app = express();

// Conectar a la base de datos de MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Definir el puerto del servidor
const PORT = process.env.PORT || 5000;

// Configuración de CORS
const allowedOrigins = ['https://kanjiro34.github.io'];  // Reemplaza con el dominio de tu frontend
app.use(cors({
  origin: allowedOrigins,  // Permitir solo el dominio de tu frontend
  methods: ['GET', 'POST'], // Permitir los métodos GET y POST
  allowedHeaders: ['Content-Type'],  // Permitir el header Content-Type
}));

// Habilitar el parsing de JSON en las peticiones
app.use(express.json());

// Configurar la carpeta estática para los archivos generados (después de hacer npm run build)
app.use(express.static(path.join(__dirname, 'build')));  // Asegúrate de que el build esté en la raíz del proyecto

// Si se accede a cualquier ruta, redirigir a index.html (para manejar las rutas SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));  // Servir el index.html desde la carpeta 'build'
});

// Importar las rutas de contacto
const contactRoutes = require('./backend/routes/contactRoutes');

// Establecer la ruta para las peticiones de contacto
app.use('/api/contacto', contactRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
