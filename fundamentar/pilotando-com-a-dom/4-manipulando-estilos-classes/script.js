//.style
const body = document.querySelector('body');
body.style.backgroundColor = '#f8f8f2';
console.log(body.style.backgroundColor);

//.classList
console.log(body.classList);

//.classList.add()
body.classList.add('active');

console.log(document.querySelector('link'));

//.classList.remove()
body.classList.remove('active');

const p = document.querySelector('p');
p.classList.add('inactive', 'green');

//.classList.toggle()
body.classList.toggle('active');