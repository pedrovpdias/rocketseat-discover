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


//Matrizes
let numbers: number[];
numbers = [1, 2, 3, 4, 5];

let users: Array<string>;
users = ['Pedro', 'Rodrigo'];

//Funções
function showLog(message: string): void {
    console.log(message);
}

function showMessages(message: string): string {
    return message;
}

//Operador Union
function printUserId(id: number | string) {
    console.log(`Id: ${id}`);
}

printUserId(101);

//Generics
/** 
 * S => state
 * T => Type
 * K => Key
 * V => Value
 * E => Element
*/
function useState<T extends string | number = string>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return { get, set };
}

let newState = useState<string>();
newState.get();
//newState.set(123);//Error
newState.set('123');

//Type
//let userId: string | number | undefined;
//let adminId: string | number | undefined;

type IdType = string | number | undefined;
let userId: IdType;
let adminId: IdType;

userId = '1';
userId = 1;
userId = undefined;
//userId = true;//error

//Type Assertions
type UserResponse = {
    id: number,
    name: string,
    avatar: string
}

let userResponse = {} as UserResponse;

//Objetos
type Point = {
    x: number;
    y: number;
}
function printCoord(points: Point) {
    console.log(`Eixo X: ${points.x}`);
    console.log(`Eixo Y: ${points.y}`);
}

printCoord({x: 10, y: 50});

//Opicionais
type User {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean // ? = opicional
}

let newUser: User = {
    name: 'Pedro',
    email: 'pedro@email.com',
    age: 18
}

//Intersecção de Tipos
type Profile = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = Profile & Char;
let playerInfo: PlayerInfo = {
    id: 10,
    name: 'Pedro',
    level: 18,
    nickname: 'pedroBola_'
}

//Interface
interface Admin {
    id: number;
    name: string;
}

let admin: Admin ={
    id: 1,
    name: 'Pedro'
}

function handleAdmin(newAdmin: Admin) {
    //
}

//Type & Interface
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string
}

type TAccount = TUser & TPayment;

interface IUser {
    id: number,
    name: string
}

interface IPayment {
    method: string
}

interface IAccount extends IUser, IPayment {}