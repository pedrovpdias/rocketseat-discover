const body 	 = document.querySelector('body');
const header = document.querySelector('header');
const p 	 = document.querySelector('p');

//parentNode || parentElement
console.log(body.parentNode);
console.log(p.parentElement);

//children
console.log(body.children); 			// retorna HTMLCollection && não considera espaços vazios

//childNodes
console.log(body.childNodes); 			// retorna NodeList

//firstChild
console.log(body.firstChild); 			// Considera espaços vazios

//firstElementChild
console.log(body.firstElementChild);	// Não considera espaços vazios

//lastChild
console.log(body.lastChild); 			// Considera espaços vazios

//lastElementChild
console.log(body.lastElementChild);		// Não considera espaços vazios

//nextSibling
console.log(header.nextSibling);		// Considera espaços vazios

//nextElementSibling
console.log(header.nextElementSibling);	// Não considera espaços vazios

//previousSibling
console.log(p.previousSibling);			// Considera espaços vazios

//previousElementSibling
console.log(p.previousElementSibling);	// Não considera espaços vazios
