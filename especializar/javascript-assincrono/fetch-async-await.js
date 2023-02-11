//Async/Await com Fetch
/*
fetch('https://api.github.com/users/pedrovpdias')
    .then(response => console.log(response.json))
    .then(repos => repos.repos_url)
    .then(data => data.length)
    .catch(error => console.log(error));
*/
/*
async function start() {
    try {
        const response = await fetch('https://api.github.com/users/pedrovpdias');
        const user = await response.json();
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();

        console.log(repos);
    } catch(error) {
        console.log(error);
    }
}

start();
*/

async function start() {
    const url = 'https://api.github.com/users/pedrovpdias';
    const user = await fetch(url)
        .then(userRes => userRes.json());

    const userRepos = await fetch(user.repos_url)
        .then(userReposRes => userReposRes.json());

    console.log(userRepos); 
}

start()
    .catch(error => console.log(error))
    .finally(() => console.log('Done!'));