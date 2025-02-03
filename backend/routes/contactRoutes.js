const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');  // Usaremos express-validator para validaciones

// Ruta POST para manejar el envío de datos del formulario de contacto
router.post(
  '/',
  // Validación usando express-validator
  body('email').isEmail().withMessage('El correo electrónico no es válido'),
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('mensaje').notEmpty().withMessage('El mensaje es obligatorio'),

  async (req, res) => {
    // Obtener errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Errores en los datos', errors: errors.array() });
    }

    try {
      const { nombre, email, mensaje } = req.body;

      // Crear una nueva instancia de Contact con los datos recibidos
      const newContact = new Contact({
        nombre,
        email,
        mensaje,
      });

      // Guardar el nuevo contacto en la base de datos de MongoDB Atlas
      await newContact.save();

      // Enviar una respuesta exitosa
      res.status(201).json({ message: 'Mensaje guardado con éxito' });
    } catch (error) {
      console.error('Error al guardar el mensaje:', error);
      res.status(500).json({ message: 'Error al guardar el mensaje', error: error.message });
    }
  }
);

// Ruta GET para obtener todos los contactos
router.get('/', async (req, res) => {
  try {
    // Obtener todos los contactos de la base de datos de MongoDB Atlas
    const contacts = await Contact.find().exec();
    res.json(contacts);
  } catch (error) {
    console.error('Error al obtener los contactos:', error);
    res.status(500).json({ message: 'Error al obtener los contactos', error: error.message });
  }
});

// Ruta GET para obtener un contacto por ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // Obtener el contacto de la base de datos de MongoDB Atlas
    const contact = await Contact.findById(id).exec();
    if (!contact) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.json(contact);
  } catch (error) {
    console.error('Error al obtener el contacto:', error);
    res.status(500).json({ message: 'Error al obtener el contacto', error: error.message });
  }
});

// Ruta PUT para actualizar un contacto
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // Obtener el contacto de la base de datos de MongoDB Atlas
    const contact = await Contact.findById(id).exec();
    if (!contact) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    const { nombre, email, mensaje } = req.body;
    contact.nombre = nombre;
    contact.email = email;
    contact.mensaje = mensaje;
    // Actualizar el contacto en la base de datos de MongoDB Atlas
    await contact.save();
    res.json(contact);
  } catch (error) {
    console.error('Error al actualizar el contacto:', error);
    res.status(500).json({ message: 'Error al actualizar el contacto', error: error.message });
  }
});

// Ruta DELETE para eliminar un contacto
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // Eliminar el contacto de la base de datos de MongoDB Atlas
    await Contact.findByIdAndRemove(id);
    res.json({ message: 'Contacto eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el contacto:', error);
    res.status(500).json({ message: 'Error al eliminar el contacto', error: error.message });
  }
});

module.exports = router;
