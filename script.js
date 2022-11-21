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









const generateAnswer = () => {
	const number = Math.floor(Math.random() * answersArr.length);
	pAnswer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

ball.addEventListener('click', generateAnswer);
