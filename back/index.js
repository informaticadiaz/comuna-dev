const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
mongoose.connect(process.env.DATABASE_URL, {
});

// Modelo de datos para ingresos
const Ingreso = mongoose.model('Ingreso', {
  fecha: Date,
  monto: Number,
  descripcion: String
});

// Modelo de datos para gastos
const Gasto = mongoose.model('Gasto', {
  fecha: Date,
  monto: Number,
  descripcion: String
});

// Ruta para insertar un ingreso
app.post('/ingresos', async (req, res) => {
  try {
    const ingreso = new Ingreso(req.body);
    await ingreso.save();
    res.send({ message: 'Ingreso insertado correctamente' });
  } catch (error) {
    res.status(500).send({ message: 'Error al insertar el ingreso' });
  }
});

// Ruta para insertar un gasto
app.post('/gastos', async (req, res) => {
  try {
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.send({ message: 'Gasto insertado correctamente' });
  } catch (error) {
    res.status(500).send({ message: 'Error al insertar el gasto' });
  }
});

app.use(express.static('public'));

// Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});