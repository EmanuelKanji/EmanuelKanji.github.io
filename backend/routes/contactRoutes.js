const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

// Habilitar CORS para todas las solicitudes
router.use(cors());

// Ruta POST para manejar el envío de datos del formulario de contacto
router.post('/', 
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
            mensaje
        });

        // Guardar el nuevo contacto en la base de datos de MongoDB Atlas
        await newContact.save();

        // Enviar una respuesta exitosa
        res.status(201).json({ message: 'Mensaje guardado con éxito' });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).json({ message: 'Error al guardar el mensaje', error: error.message });
    }
});

// Ruta GET para obtener todos los contactos
router.get('/', async (req, res) => {
    try {
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

module.exports = router;
