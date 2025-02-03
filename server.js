const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./backend/routes/contactRoutes');  // Suponiendo que este es tu archivo de rutas

const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Middleware para parsear datos en formato JSON
app.use(express.json());

// Conexión a MongoDB Atlas (asegúrate de reemplazar el <url> con la URL de tu base de datos)
mongoose.connect('<url>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos MongoDB Atlas'))
  .catch((err) => console.log('Error al conectar a la base de datos:', err));

// Ruta para las solicitudes de contacto
app.use('/api/contacto', contactRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:10000');
});
