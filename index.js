const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const path = require('path');



const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB usando Mongoose
mongoose.connect('mongodb+srv://nahumpl95:tCVcUH7gkAWIm4HW@weddingcn.n6hqazd.mongodb.net/weddin2024', { ssl: true});
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Definir un modelo de invitado
const Invitado = mongoose.model('Invitado', {
  nombre: String,
  contraseña: String,
  numeroInvitados: Number,
});

app.set('view engine', 'ejs');

app.use(session({ 
    secret : "semilla para generar IDs de session",
    resave : true,
    saveUninitialized : true
 }));

app.use(express.json());
// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('login');
});

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
    res.render('login');
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
