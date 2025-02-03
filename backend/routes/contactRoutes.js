const express = require('express');
const router = express.Router();
const Contact = require('./Contact');

// Ruta POST para manejar el envío de datos del formulario de contacto
router.post('/', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;

        // Validar los datos
        const errors = [];
        if (!nombre || !email || !mensaje) {
            errors.push('Todos los campos son obligatorios');
        }
        if (errors.length > 0) {
            return res.status(400).json({ message: 'Error en los datos', errors });
        }

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

// Ruta GET para obtener todos los contactos
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().exec();
        res.json(contacts);
    } catch (error) {
        console.error('Error al obtener los contactos:', error);
        res.status(500).json({ message: 'Error al obtener los contactos', error });
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
        res.status(500).json({ message: 'Error al obtener el contacto', error });
    }
});

// Ruta PUT para actualizar un contacto
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findById(id).exec();
        if (!contact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        const { nombre, email, mensaje } = req.body;
        contact.nombre = nombre;
        contact.email = email;
        contact.mensaje = mensaje;
        await contact.save();
        res.json(contact);
    } catch (error) {
        console.error('Error al actualizar el contacto:', error);
        res.status(500).json({ message: 'Error al actualizar el contacto', error });
    }
});

// Ruta DELETE para eliminar un contacto
router.delete('/:id', async (