const input = document.querySelector('input');
const div =  document.querySelector('div');

function print() {
	console.log('Worked!');
}

input.onkeydown = () => {
	console.log('Input text');
}


div.onclick = print;

//addEventListener("tipo_evento", "função")
div.addEventListener('mouseover', print);

