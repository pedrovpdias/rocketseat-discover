const body 	 = document.querySelector('body');
const header = document.querySelector('header');
const p 	 = document.querySelector('p');

//createElement
const div = document.createElement('div');
div.innerText = 'Olá devs!';

//append
body.append(div);		//adiciona depois

//prepend
header.prepend(div);	//adiciona antes

//insertBefore
body.insertBefore(div, p);

//insert after
body.insertBefore(div, header.nextSibling);