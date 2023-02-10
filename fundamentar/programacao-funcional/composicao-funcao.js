//Composição de Funções
const people = ['Pedro', 'Luiz', 'Carlos', 'Alexandre', 'Paulo'];
const upperCasePeopleThatStartsWithP = people
                                        .filter(person => person.startsWith('P'))
                                        .map(pPerson => pPerson.toUpperCase());
console.log(upperCasePeopleThatStartsWithP);