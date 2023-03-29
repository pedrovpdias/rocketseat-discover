/*
function sum(a, b) {
    return a + b;
  }
  
  console.log(sum('1', 2));
  
  console.log(4 / []);
  
  const message = 'Hello world';
  
message();
*/

/*
function showTicket(user: string, ticket: number) {
    console.log(`Olá, ${user} seu bilhete é ${ticket}`)
}
*/

function showTicket(user: string | null, ticket: number) {
    console.log(`Olá, ${user ?? 'Guest'} seu ticket é: ${ticket}`)
}



//showTicket('Pedro Bola', 123)
showTicket(null, 123)

let info: any;

info = [1,2,3];
info = 'Pedro';
info = true;
info = 10.50;


// Inferência de tipo
let user = 'Pedro'; // string
//user = 10; // error


//Tipos primitivos
let loading: boolean;
loading = false;
//loading = 'Exemplo' // error

let email: string;
email = 'exemplo@email.com';
//email = 123 //error

let price: number;
price = 10.50;
price = 10;
//price = '10' //error