/*
Ejemplo simple de servidor API con un endpoint único (rnd) que acepta un solo parámetro numérico.
El endpoint retorna un código al azar, de la cantidad de caracteres que se indique en la solicitud,
hasta un máximo de 32.

Basic API example with only one endpoint (rnd) that takes a unique numeric param.
The endpoint will return a random code of x characters, where x is the param stated in the request,
up to a max of 32.
*/

const express = require('express');
// Morgan es opcional, solo un middleware para interceptar las solicitudes y mostrar más info en consola.
// Morgan is optional, just a middleware to intercept requests and show more info in console.
const morgan = require('morgan');

// APP_PORT intentará tomar su valor desde la variable de entorno PORT, sino tomará el predeterminado 3030.
// APP_PORT const will try to retrieve its value from process.env, otherwise will fall in 3030.
const APP_PORT = process.env.PORT || 3030;
const VALID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const app = express();
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/api/rnd/:size', (req, res) => {
app.get('/api/rnd', (req, res) => {
    let code = '';
    
    // Se genera un código al azar de tamaño "size"
    // Generate random code of "size" size
    for (let i = 0; i < 8; i++) {
        code += VALID_CHARS[Math.floor(Math.random() * VALID_CHARS.length)];
    }

    res.status(200).json({ size: 8, code: code });
});

app.listen(APP_PORT, () => {
    console.log(`API CoderHouse activa en http://localhost:${APP_PORT}/api\n`);
});
