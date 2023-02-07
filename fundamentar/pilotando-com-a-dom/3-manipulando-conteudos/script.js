const element = document.querySelector('h1');
console.log(element);

const input = document.querySelector('input');
console.log(input.value);

//textContent
//element.textContent = 'Olá Dev!';

//innerText
//element.innerText = 'Olá Devs!';

//innerHTML
//element.innerHTML = 'Olá <u>Dev</u>!'

//<input>.value
input.value = 'Valor que eu quiser';

//setAttribute
const header = document.querySelector('header');
header.setAttribute('id', 'header');
console.log(header);

const headerID = document.querySelector('#header');
console.log(headerID);

//getAttribute
console.log(header.getAttribute('id'));

//removeAttribute
header.removeAttribute('class');
console.log(header);