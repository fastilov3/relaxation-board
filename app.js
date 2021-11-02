const board = document.getElementById('board');
const SQUARES_NUMBERS = 500;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.appendChild(square);
}

function setColor(e) {
  const el = e.target;
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  const el = e.target;
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}