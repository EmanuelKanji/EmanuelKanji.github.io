const mongoose = require('mongoose');
const validator = require('validator');

// Definimos el esquema de datos que vamos a guardar
const contactSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al inicio y al final
        minlength: 2, // Mínimo de 2 caracteres
        maxlength: 50, // Máximo de 50 caracteres
        validate: {
            validator: (nombre) => {
                return validator.isAlpha(nombre, 'es-ES');
            },
            message: 'El nombre debe ser solo texto'
        }
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Validación básica de correo electrónico
    },
    mensaje: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al inicio y al final
        minlength: 10, // Mínimo de 10 caracteres
        maxlength: 500 // Máximo de 500 caracteres
    }
});

// Crear el modelo a partir del esquema
const Contact = mongoose.model('Contact', contactSchema);

// Configuración de la conexión a MongoDB Atlas
const mongoAtlasUri = 'mongodb+srv://Yirosan:portafoliokanji@cluster0.mongodb.net/portafoliokanji?retryWrites=true&w=majority';

mongoose.connect(mongoAtlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((err) => console.log('Error al conectar a MongoDB Atlas:', err));

module.exports = Contact;