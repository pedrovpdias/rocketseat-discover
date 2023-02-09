//setInterval irá rodar uma função N vezes depis de X milisegundos
const timeOut = 1000;
const checking = () => console.log('Checking...');

const interval = setInterval(checking, timeOut);

//clearInterval irá cancelar um setInterval registrado
//clearInterval(interval);

setTimeout(() => clearInterval(interval), 5000);