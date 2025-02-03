const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./backend/routes/contactRoutes');  

const app = express();

// Habilitar CORS solo para tu dominio específico
app.use(cors({
    origin: 'https://kanjiro34.github.io',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
}));

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://Yirosan:portafoliokanji@cluster0.t0dck.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((err) => console.log('Error en la conexión:', err));

// Ruta para las solicitudes de contacto
app.use('/api/contacto', contactRoutes);

// Iniciar servidor
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});
