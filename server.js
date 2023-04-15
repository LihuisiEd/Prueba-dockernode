// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/clientes', (req, res) => {
    res.sendFile(__dirname + '/clientes.html');
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/productos.html');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);