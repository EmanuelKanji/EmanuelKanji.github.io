const mongoose = require('mongoose');
const config = require('./config');

// Conectar a MongoDB Atlas usando la URI
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));

