require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./backend/routes/contactRoutes');  

const app = express();

// Configurar CORS solo para el frontend autorizado
app.use(cors({
    origin: process.env.FRONTEND_URL,  // Usa una variable de entorno en lugar de escribir la URL directamente
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
}));

// Middleware para parsear JSON
app.use(express.json());

// Conexión segura a MongoDB Atlas con variables de entorno
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch((err) => console.error('❌ Error en la conexión a MongoDB:', err));

// Rutas del backend
app.use('/api/contacto', contactRoutes);

// Iniciar servidor en el puerto configurado
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
