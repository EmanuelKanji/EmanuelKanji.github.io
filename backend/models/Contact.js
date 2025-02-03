const mongoose = require('mongoose');

// Define el esquema de los contactos
const contactSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    mensaje: { type: String, required: true }
});

// Crea el modelo de Contacto
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
