const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
	modal
		.classList
		.remove('invisible');
});

document.addEventListener('keydown', event => {
	if(!modal.classList.contains('invisible')) {
		if(event.key === 'Escape') {
			modal
				.classList
				.add('invisible');
			console.log('Worked!');
		}
	}
});