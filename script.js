const ball = document.querySelector('img');
const pAnswer = document.querySelector('.answer');
const pError = document.querySelector('.error');
const input = document.querySelector('input');

let answersArr = [
	'Tak!',
	'Nie.',
	'Może.',
	'Ciężko powiedzieć...',
	'Nie chcesz znać odpowiedzi na to pytanie... :/',
];
const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(checInput, 1000);
};
const checInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
		pError.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		pError.textContent = 'Pytanie musi być zakończone znakiem "?".';
		pAnswer.textContent = '';
	} else {
		pError.textContent = 'Musisz zadać jakieś pytanie!';
		pAnswer.textContent = '';
	}
	ball.classList.remove('shake-animation');
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answersArr.length);
	pAnswer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

ball.addEventListener('click', shakeBall);
