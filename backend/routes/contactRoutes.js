const express = require('express');
const router = express.Router();

// Ruta POST para manejar los datos del formulario de contacto
router.post('/', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Validación de los datos recibidos
    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Aquí puedes agregar la lógica para almacenar los datos en la base de datos si es necesario

    // Responder con un mensaje de éxito
    res.json({ message: 'Mensaje recibido correctamente' });
});

module.exports = router;
