const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
  // 1. CodeQL detecta req.query como un SOURCE (entrada HTTP no confiable)
  const usuario = req.query.username;

  // 2. CodeQL rastrea 'usuario' hasta eval() que actúa como SINK
  eval("console.log('Usuario conectado: ' + " + usuario + ");");

  res.send('Procesado');
});
