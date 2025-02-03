// Importa las dependencias necesarias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes'); // Importa las rutas de contacto

// Crea una instancia de Express
const app = express();

// Habilitar CORS para permitir solicitudes desde tu frontend
app.use(cors({
    origin: 'https://kanjiro34-github-io.onrender.com', // Cambia esto por la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Configurar body-parser para recibir datos JSON
app.use(bodyParser.json());

// Conectar a la base de datos MongoDB (cambia la URL de conexión por la tuya)
mongoose.connect('mongodb+srv://usuario:contraseña@cluster.mongodb.net/miDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(error => console.log('Error al conectar con la base de datos', error));

// Usa las rutas de contacto
app.use('/api/contacto', contactRoutes);

// Definir el puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
