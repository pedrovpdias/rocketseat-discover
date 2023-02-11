/*//Callback
function imprimirDado(dado) {
    console.log(dado());
}

imprimirDado(() => { return 'Olá mundo' });*/

/*//setTimeout(function, delay)
setTimeout(function() {
    console.log('depois de 1s');
}, 1000);*/

//Conectar API com HTTPS e Callback
const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=5'; //fetch
https.get(API, res => {
    console.log(res.statusCode);
}); // https.get([api], [função_resposta])
console.log('Conectando API...');