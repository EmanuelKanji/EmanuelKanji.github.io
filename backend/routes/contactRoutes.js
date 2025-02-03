const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Ruta para recibir los datos del formulario y guardarlos
router.post('/', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const newContact = new Contact({
      nombre,
      email,
      mensaje
    });

    // Guardar el nuevo contacto en la base de datos
    await newContact.save();

    res.status(201).json({ message: 'Mensaje guardado con éxito' });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ message: 'Error al guardar el mensaje', error });
  }
});

module.exports = router;
