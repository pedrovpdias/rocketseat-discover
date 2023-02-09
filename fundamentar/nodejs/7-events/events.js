const { EventEmitter } = require('events');
const event = new EventEmitter();

//event.on([evento], [função a executar]) inicia a verificação por eventos
//event.on('Say something', user => console.log('I heard you, ', user));

//event.once([evento], [função a executar]) Verifica por eventos uma única vez
event.once('Say something', user => console.log('I heard you, ', user));

//event.emit() emite um evento
event.emit('Say something', 'Pedro');
event.emit('Say something', 'Bola');
