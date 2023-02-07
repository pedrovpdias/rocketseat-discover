const input = document.querySelector('input');
const div =  document.querySelector('div');

function print() {
	console.log('Worked!');
}

input.onkeydown = () => {
	console.log('Input text');
}


//div.onclick = print; //executa apenas o ultimo evento
//addEventListener("tipo_evento", "função")
div.addEventListener('click', print);


//Argumento event
input.onkeydown = (event) => {
	console.log(event);
	console.log(event.key);
}