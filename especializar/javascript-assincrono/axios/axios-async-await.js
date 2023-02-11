//Async/Await com Axios
//import axios from "axios";
const axios = require('axios');

/*
axios
    .get('https://api.github.com/users/pedrovpdias')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
    .finally(() => console.log('Done!'));
*/
/*
async function fetchRepos() {
    try {
        const url = 'https://api.github.com/users/pedrovpdias';
        const user = await axios.get(url);
        const repos = await axios.get(user.data.repos_url);

        console.log(repos);
    } catch(error) {
        console.log(error);
    }
}

fetchRepos()
*/

async function fetchRepos() {
    const url = 'https://api.github.com/users/pedrovpdias';
    const user = await axios.get(url);
    const repos = await axios.get(user.data.repos_url);

    console.log(repos);
}

fetchRepos()
    .catch(error => console.log(error)) 
    .finally(() => console.log('Done!'));