// getElementById()
const element = document.getElementById('blog-title');
console.log(element); //Retorna HTMLCollection

//getElementByClassName()
const elements = document.getElementsByClassName('one');
console.log(elements); //Retorna HTMLCollection

//getElementsByTagName()
const elementsTag = document.getElementsByTagName('meta');
console.log(elementsTag); //Retorna HTMLCollection

//querySelector()
const elementQuery = document.querySelector('meta');
console.log(elementQuery); //Retorna um elemento
const query = document.querySelector('.one');
console.log(query); //Retorna um elemento
const selector = document.querySelector('[src]');
console.log(selector); //Retorna um elemento

//querySelectorAll()
const queryAll = document.querySelectorAll('meta');
console.log(queryAll); //Retorna NodeList


//NodeList permite o uso de forEach
queryAll.forEach(el => console.log(el));