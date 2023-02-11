// import axios from 'axios';
const axios = require('axios');

/* BAD
axios
    .get('https://api.github.com/users/pedrovpdias')
    .then(response => {
        const user = response.data;

        axios
            .get(user.repos_url)
            .then( repos => console.log(repos.data))
    })
    .catch(error => console.log(error));
*/

axios
    .get('https://api.github.com/users/pedrovpdias')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos))
    .catch(error => console.log(error));