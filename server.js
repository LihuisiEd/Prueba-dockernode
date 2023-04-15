// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Página de inicio\n');
});

app.get('/clientes', (req, res) => {
    res.send('Hola, aquí estarán los clientes\n');
    res.send('1. Juan Escobar\n');
    res.send('2. Luis Altoro\n');
    res.send('3. Rabina Yañez\n');
});

app.get('/productos', (req, res) => {
    res.send('Hola, aquí estarán los productos\n');
    res.send('1. Papitas Lays\n');
    res.send('2. Gaseosa Inka Cola\n');
    res.send('3. Fideos Don vitorio\n');  
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);