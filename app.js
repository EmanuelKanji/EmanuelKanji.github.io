// Importamos las dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importamos el middleware cors
require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

const app = express();

// Validar que la variable de entorno MONGO_URI esté definida
if (!process.env.MONGO_URI) {
  console.error('Error: La variable de entorno MONGO_URI no está definida.');
  process.exit(1);  // Salir del proceso si la variable no está definida
}

// Usamos CORS para permitir solicitudes de cualquier origen
app.use(cors());  // Permitir CORS de cualquier origen

// Conectar a MongoDB Atlas usando Mongoose
const mongoURI = process.env.MONGO_URI;  // Usar la URI de las variables de entorno
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas', err);
    process.exit(1);  // Salir si la conexión falla
  });

// Definir el esquema de Contacto
const contactSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    mensaje: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware para procesar los datos JSON
app.use(express.json());

// Ruta para recibir los datos del formulario
app.post('/api/contacto', async (req, res) => {
  try {
    const newContact = new Contact(req.body);  // Creamos una nueva instancia de Contact con los datos del formulario
    await newContact.save();  // Guardamos los datos en la base de datos
    res.status(201).json({ message: 'Mensaje guardado con éxito' });  // Respondemos al frontend
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar el mensaje', error });
  }
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Servidor en ejecución!');
});

// Configuración del puerto para que escuche en el adecuado
const PORT = process.env.PORT || 5000; // Si no hay un puerto definido en las variables de entorno, usará 5000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
