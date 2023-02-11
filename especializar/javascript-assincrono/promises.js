// Promises
/*
console.log('Chamar uber');

let acceptCall = true;

const promise = new Promise((resolve, reject) => {
    if(acceptCall) {
        return resolve('O carro chegou');
    }

    return reject('Chamado recusado');
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Chamado finalizado'));

console.log('Aguardando...');
*/

/* /// BAD
fetch('https://api.github.com/users/pedrovpdias')
    .then((response) => {
        response.json()
            .then(data => {
                fetch(data.repos_url)
                    .then( res => {
                        res.json()
                            .then(reposData => console.log(reposData))
                    })
            })
    })
*/
fetch('https://api.github.com/users/pedrovpdias')
    .then( response => response.json() )
    .then( data => fetch(data.repos_url) )
    .then( res => res.json() )
    .then( d => console.log(d))
    .catch(error => console.log(error))