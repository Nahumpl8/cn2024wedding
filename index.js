const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const path = require('path');
const MongoStore = require('connect-mongo');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { ssl: true });
const db = mongoose.connection;

const sessionStore = MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    ttl: 14 * 24 * 60 * 60, 
});

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

const Invitado = mongoose.model('Invitado', {
  nombre: String,
  contraseña: String,
  numeroInvitados: Number,
});

app.set('view engine', 'ejs');

app.use(session({
    secret: 'semilla para generar IDs de sesión',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));



app.get('/', async (req, res) => {
    try {
      const invitados = await Invitado.find({}, 'nombre');
      const nombres = invitados.map((invitado) => invitado.nombre);
      res.render('login', { opcionesNombre: nombres });
    } catch (error) {
      console.error('Error al obtener opciones de nombres:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

app.get('/login', async (req, res) => {
  res.redirect('/')
})

app.post('/login', async (req, res) => {
    try {
        const { nombre, contraseña } = req.body;
        const usuarioAutenticado = await Invitado.findOne({ nombre, contraseña });
        
    
        if (usuarioAutenticado) {
          res.render('index', { usuario: usuarioAutenticado });
        } else {
          res.redirect('/');
          
        }
      } catch (error) {
        console.error('Error al procesar formulario de login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
