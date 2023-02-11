// Async/Await
const promise = new Promise( (resolve, reject) => {
    return resolve('Working');
});

/*
promise
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Done!'));
*/

async function start() {
    try {
        const result = await promise;   // result = resultado da espera da promise
        console.log(result);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Done!');
    }
}

start();