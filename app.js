const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para la raíz ("/")
app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

// Base de datos simulada en memoria
let users = [
  { id: 1, name: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, name: 'Maria', email: 'maria@ejemplo.com' }
];

// Ruta GET para obtener todos los usuarios
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Ruta POST para crear un nuevo usuario
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Ruta GET para obtener un usuario por ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuario no encontrado');
  res.json(user);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
