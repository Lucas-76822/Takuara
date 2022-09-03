const express = require('express');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');
const { Console } = require('console');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./routes/correoRoutes'));

app.listen('4200', () => {
    console.log('escuchando');
})