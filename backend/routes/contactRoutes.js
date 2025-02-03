const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Importa el modelo Contact

// Ruta POST para manejar el envío de datos del formulario de contacto
router.post('/', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;

        // Crear una nueva instancia de Contact con los datos recibidos
        const newContact = new Contact({
            nombre,
            email,
            mensaje
        });

        // Guardar el nuevo contacto en la base de datos
        await newContact.save();

        // Enviar una respuesta exitosa
        res.status(201).json({ message: 'Mensaje guardado con éxito' });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).json({ message: 'Error al guardar el mensaje', error });
    }
});

module.exports = router;
