const mongoose = require('mongoose');

// Definir el esquema para los contactos
const contactSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,  // Este campo es obligatorio
  },
  email: {
    type: String,
    required: true,  // Este campo es obligatorio
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un correo electrónico válido'],  // Validación de correo
  },
  mensaje: {
    type: String,
    required: true,  // Este campo es obligatorio
  },
}, { timestamps: true });  // Agregar marcas de tiempo de creación y actualización

// Crear el modelo de Contact basado en el esquema definido
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;