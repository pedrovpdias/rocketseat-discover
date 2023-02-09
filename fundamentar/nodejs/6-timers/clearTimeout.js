//setTimeout roda uma função depois de X milisegundos
const timeOut = 3000;
const finished = () =>  console.log('Done!');

const timer = setTimeout(finished, timeOut);

//clearTimeout cancela um timeOut
clearTimeout(timer);