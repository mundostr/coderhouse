/*
Ejemplo de cliente simple para consultas API utilizando la librería Axios.
Simple client example for API requests using Axios library.
*/

const axios = require('axios');

const test_api = (api_url) => {
    axios.get(api_url).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
}

const PROTOCOL = "http";
const API_SERVER = "idux.net";
const API_PORT = 3030;
const API_ENDPOINT = "api/rnd/8";
const REQUEST_URL = `${PROTOCOL}://${API_SERVER}:${API_PORT}/${API_ENDPOINT}`;
console.log(REQUEST_URL);
test_api(REQUEST_URL);
