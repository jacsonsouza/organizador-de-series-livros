'use strict';

/*
 * Mostrar os livros na tela usando String Template
 */

let cardsString = localStorage.getItem('1');
let cards = JSON.parse(cardsString);

(function () {
  cards = cards.sort(function (a, b) {
    if (a.title > b.title) return 1;

    if (a.title < b.title) return -1;

    return 0;
  });

  for (let card of cards) {
    document.querySelector(
      '.list'
    ).innerHTML += `<div class='card' name='${card.classification}'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='' />
    </a>
  </div>`;
  }
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
  let checks = document.querySelectorAll("input[type='checkbox']");
  let allBooks = document.getElementsByClassName('card');

  for (let check of checks) {
    if (check.checked) {
      for (let a of allBooks) {
        a.style.display = 'none';
      }

      let novels = document.getElementsByName(check.name);

      for (let i of novels) {
        i.style.display = 'block';
      }
      break;
    } else {
      for (let b of allBooks) {
        b.style.display = 'block';
      }
    }
  }
};

document.getElementById('filter').onclick = function () {
  filtro();
};
