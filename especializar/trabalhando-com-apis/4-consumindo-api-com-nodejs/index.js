const axios = require('axios');
const express = require('express');
const app = express();

app.listen('3000');
app.use(express.json());

async function loadGithub() {
    const url = 'https://api.github.com/users/pedrovpdias';
    const user = await axios.get(url);
    
    return user.data;
}

app.route('/').post((request, response) => {
    loadGithub()
        .then(user => {
            response.send(
                `<img src="${user.avatar_url}" />`
            );
        })
        .catch(error => console.error(error))
        .finally(() => console.log('Done'));
} );