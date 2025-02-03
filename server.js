const express = require('express');
const app = express();
const mongoose = require('mongoose');
const contactRoutes = require('./contactRoutes');

// Configuración de la conexión a MongoDB Atlas
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((err) => console.log('Error al conectar a MongoDB Atlas:', err));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para el contacto
app.use('/api/contact', contactRoutes);

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de contacto');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});