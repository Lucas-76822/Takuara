const express = require('express');
const app = express();

let envio = require('../controllers/correoControllers');

app.post('/envio', envio.envioCorreo);

module.exports = app;