// Importamos las dependencias necesarias
const mongoose = require('mongoose');

// Configuración de la conexión con MongoDB
const mongoURI = process.env.MONGO_URI;  // URL del cluster de MongoDB Atlas, tomado del archivo .env
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas', err);
  });

// Definimos el esquema de Contact
const contactSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  mensaje: { type: String, required: true },
});

// Creamos el modelo Contact con el esquema definido
const Contact = mongoose.model('Contact', contactSchema);

// Exportamos el modelo Contact
module.exports = Contact;
