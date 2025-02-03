const mongoose = require('mongoose');

// Definir el esquema para los mensajes de contacto
const contactSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true }
});

// Crear y exportar el modelo
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;