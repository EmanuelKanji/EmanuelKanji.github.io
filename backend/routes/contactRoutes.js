const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Ruta para recibir el mensaje del formulario y guardarlo en la base de datos
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);  // Crear un nuevo documento con los datos recibidos
    await newContact.save();  // Guardar el mensaje en la base de datos
    res.status(201).json({ message: 'Mensaje guardado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar el mensaje', error });
  }
});

module.exports = router;