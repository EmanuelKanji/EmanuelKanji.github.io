const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Ruta al modelo Contact

// Ruta POST para manejar el formulario de contacto
router.post('/', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;

        // Validación de los datos recibidos
        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ message: 'Por favor, completa todos los campos.' });
        }

        // Crear un nuevo contacto en la base de datos
        const newContact = new Contact({ nombre, email, mensaje });
        await newContact.save();

        // Enviar una respuesta exitosa
        res.status(201).json({ message: 'Mensaje recibido con éxito.' });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).json({ message: 'Hubo un error al procesar tu mensaje. Intenta más tarde.' });
    }
});

module.exports = router;
