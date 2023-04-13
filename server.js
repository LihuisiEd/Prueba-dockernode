// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Página de inicio\n');
});

app.get('/clientes', (req, res) => {
    res.send('Hola, aquí estarán los clientes\n');
});

app.get('/contactos', (req, res) => {
    res.send('Hola, aquí estarán los contactos\n');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);