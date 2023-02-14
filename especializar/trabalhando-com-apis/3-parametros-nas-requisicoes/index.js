const express = require('express');
const app = express();

app.listen('3000');
//Middleware
app.use(express.json());

//POST: Body Params
app.route('/').post( (request, response) => {
    const {name, age, games} = request.body;

    response.send(`
        Nome: ${name}
        Idade: ${age}
        Joga: ${games[0]}
    `);
} );

//GET: Route Params
app.route('/:variable').get( (request, response) => {
    response.send(request.params.variable);
} );

//GET: Query Params
app.route('/').get( (request, response) => {
    const {name, age} = request.query;

    response.send(`Meu nome é ${name} e eu tenho ${age} anos`);

} );
