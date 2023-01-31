/*
Ejemplo de cliente simple para consultas API utilizando la librería Axios.
Simple client example for API requests using Axios library.
*/

const axios = require('axios');

const REQUEST_URL = "http://idux.net:3030/api/rnd";

axios.get(REQUEST_URL).then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
});
