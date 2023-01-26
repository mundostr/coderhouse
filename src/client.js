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

const REQUEST_URL = "http://idux.net:3030/api/rnd";
test_api(REQUEST_URL);
