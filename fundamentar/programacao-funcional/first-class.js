// First-class Function
const sayMyName = () => console.log('Mayk');
const runFunction = fn => fn(); // First-class function: função que roda uma função

runFunction(sayMyName);
runFunction(() => console.log('discover'));

console.log(runFunction(Math.random));