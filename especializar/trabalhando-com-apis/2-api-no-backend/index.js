// Criando server
const express = require('express');
//express() inicializa o express
const app = express();

let author = 'Pedro';

// .listen([porta])
app.listen('3000');

//MIDDLEWARE
app.use(express.json());

//GET
app.route('/').get( (request, response) => response.send('Hello world!') );
app.route('/sobre').get( (request, response) => response.send('Olá mundo'));


//POST
app.route('/user').post( (request, response) => response.send(request.body) );

//PUT
app.route('/update').get((request, response) => response.send(author));
app.route('/update').put( (request, response) => {
    author = request.body.name;

    response.send(author);
} );

//DELETE
app.route('/user/:id').delete((request, response) => {
    author = null;
    response.send(request.params.id);
});