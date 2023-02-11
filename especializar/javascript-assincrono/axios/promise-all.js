//Promisses em paralelo(concorrêntes) com Promise all
const axios = require('axios');

Promise.all([
    axios.get('https://api.github.com/users/pedrovpdias'),
    axios.get('https://api.github.com/users/pedrovpdias/repos'),
    axios.get('https://api.github.com/users/maykbrito')
])
    .then(responses => {
        console.log(responses[0].data.login);
        console.log(responses[1].data.length);
        console.log(responses[2].data.login);
    })
    .catch(error => console.log(error));