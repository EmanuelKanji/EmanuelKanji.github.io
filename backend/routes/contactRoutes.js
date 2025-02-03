const express = require('express');
const router = express.Router();

// Importa el modelo de MongoDB si deseas guardar los datos en la base de datos
// const Contact = require('../models/Contact'); // Si tienes un modelo para Contact

// Ruta para manejar la solicitud POST de los datos de contacto
router.post('/', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        // Si quieres guardar el mensaje en la base de datos, puedes hacerlo aquí
        // Ejemplo de código si tienes un modelo de Contact:
        const newContact = new Contact({
            nombre,
            email,
            mensaje
        });
        
        await newContact.save();
      

        // Si no estás guardando en la base de datos, solo puedes devolver el mensaje recibido
        console.log('Recibido:', nombre, email, mensaje);

        // Respuesta exitosa
        return res.status(200).json({ message: 'Mensaje recibido con éxito' });

    } catch (error) {
        console.error('Error al procesar el mensaje:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
