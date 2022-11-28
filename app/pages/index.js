'use strict';

let cardsString = localStorage.getItem('1');

(function () {
  let cardString = '';
  let cards = JSON.parse(cardsString);
  cards = cards.slice(0, 4);

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
        <img src='${card.img}' alt='' />
      </a>
  </div>`;
  }

  document.querySelector('#pop-list').innerHTML = cardString;
})();

(function () {
  let cardString = '';
  let cards = JSON.parse(cardsString);
  cards = cards.slice(2, 6);

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
       <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='' />
    </a>
  </div>`;
  }

  document.querySelector('#rated-list').innerHTML = cardString;
})();

/* Fazer trocar as imagens */

function slide() {
  document.getElementById(
    'div-carousel'
  ).innerHTML = `<img src='/assets/resources/images/carousel-slide1.jpg' alt=''/>`;
  setTimeout(function () {
    document.getElementById(
      'div-carousel'
    ).innerHTML = `<img src='https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146765-stock-photo-a-stack-of-books-on.jpg' alt=''/>`;
    setTimeout(function () {
      document.getElementById(
        'div-carousel'
      ).innerHTML = `<img src='https://img.quizur.com/f/img5f8e5b745bd285.10956982.jpg?lastEdited=1603165046' alt=''/>`;
      setTimeout(slide(), 10000);
    }, 10000);
  }, 10000);
}
