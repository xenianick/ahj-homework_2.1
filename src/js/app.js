import changePlace from './changePlace.js';

const body = document.querySelector('body');
const fieldEl = document.createElement('div');
fieldEl.className = 'field';
body.insertBefore(fieldEl, body.firstChild);

const icon = document.createElement('img');
icon.className = 'icon';
icon.src = './goblin.png';

const field = document.querySelector('.field');
const cellsQuantity = 16;

for (let i = 0; i < cellsQuantity; i += 1) {
  field.innerHTML += '<div class="cell"></div>';
}

setInterval(changePlace, 1000, icon, cellsQuantity, field);
