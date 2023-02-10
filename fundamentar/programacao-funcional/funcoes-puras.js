//Função impura
///Exemplo 1: está dependendo de um dado externo
function calculateCircumference(radiu) {
    return Math.PI * (radius + radius);
}

///Exemplo 2: está alterando um dado externo
let person = {
    name: 'Pedro',
    age: 'adulto'
}

function changeName(name) {
    person.name = name;
}

//Função Pura
///Exemplo 1 corrigido
const calculateCircumference = function(pi, radius) {
    return pi * (radius + radius);
}

/// Exemplo 2 corrigido
const changePersonName = (person, name) => ({...person, name})