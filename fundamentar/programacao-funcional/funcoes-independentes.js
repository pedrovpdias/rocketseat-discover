//Funções Independentes
const random = (number, Math) => {
    Math.floor(Math.random() * number);
}

// Recursivo
// Encontre o facotirl de um número
const factorial = x => {

    //if number is 0
    if(x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}