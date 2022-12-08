'use strict';

(function () {
  let cardsString = localStorage.getItem('1');
  let cards = JSON.parse(cardsString);
  let bookNumebers = localStorage.getItem('Número de livros');

  function cadastra(title, page, img) {
    let book = { title, page, img };
    cards.push(book);
    localStorage.setItem('1', JSON.stringify(cards));
    bookNumebers++;
    localStorage.setItem('Número de cadastros', bookNumebers);
  }

  document.querySelector('#bt').onclick = function () {
    const page = document.querySelector('#page').value;
    const title = document.querySelector('#title').value;
    const img = document.querySelector('#image-card').value;
    const classification = document.querySelector('#classification').value;

    cadastra(title, page, img, classification);
  };
})();
