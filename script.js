const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {
  const randomNumber = Math.random();

  document.body.classList.remove('daikichi', 'chukichi', 'kichi');

  if (randomNumber < 0.3) {
    resultDisplay.textContent = '大吉';
    document.body.classList.add('daikichi');
  } else if (randomNumber < 0.8) {
    resultDisplay.textContent = '中吉';
    document.body.classList.add('chukichi');
  } else {
    resultDisplay.textContent = '吉';
    document.body.classList.add('kichi');
  }
});