'use strict';

/*
 * Mostrar os livros na tela usando String Template
 */
let cardString = '';
let cardsString = localStorage.getItem('1');
let cards = JSON.parse(cardsString);

(function () {
  cards = cards.sort(function (a, b) {
    if (a.title > b.title) return 1;

    if (a.title < b.title) return -1;

    return 0;
  });

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='${card.title}' />
    </a>
  </div>`;
  }

  document.querySelector('.list').innerHTML = cardString;
})();

/*
 * Uso de onmouseover e onmouseout para mostrar ou esconder o nome dos livros
 */

function show(card) {
  card.querySelector('.title').style.display = 'block';
}

let hide = function (card) {
  card.querySelector('.title').style.display = 'none';
};

(function () {
  const allCards = document.getElementsByClassName('card');

  for (let card of allCards) {
    card.onmouseover = function () {
      show(card);
    };

    card.onmouseout = function () {
      hide(card);
    };
  }
})();

/*
 * Filtrar os livros usando getElementsByName
 */

let filtro = function () {
  let options = document.querySelectorAll('.check-input');
  let selectedString = '';

  for (let option of options) {
    if (option.checked) {
      for (let card of cards) {
        if (option.value === 'all') {
          selectedString = cardString;
          break;
        }

        if (card.classification === option.value) {
          selectedString += `<div class='card'>
            <a href='${card.page}'>
              <div class='title'>
                <p>${card.title}</p>
              </div>
              <img src='${card.img}' alt='${card.title}' />
             </a>
          </div>`;
        }
      }
    }
  }

  document.querySelector('.list').innerHTML = selectedString;
};

document.getElementById('filter').onclick = function () {
  filtro();
};
