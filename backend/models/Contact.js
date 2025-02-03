const mongoose = require('mongoose');

// Definimos el esquema de datos que vamos a guardar
const contactSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Validación básica de correo electrónico
    },
    mensaje: {
        type: String,
        required: true
    }
});

// Crear el modelo a partir del esquema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
