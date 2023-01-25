/*
Ejemplo de cliente asíncrono utilizando librería node-fetch y funcionalidad async await de Javascript.
Async client example using node-fetch library and JS async await functionality.
*/

import fetch from 'node-fetch';

const fetch_remote = async (url) => {
    const res = await fetch(url);
    const json_content = await res.json();
    
    return json_content;
};


const API_URL = 'https://jsonplaceholder.typicode.com/users';
const data = await fetch_remote(API_URL);
console.log(data);
