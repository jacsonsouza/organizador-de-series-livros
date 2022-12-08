'use strict';

let cardString = '';

function search(searchName) {
  function lowerName(name) {
    return name.toLowerCase();
  }

  searchName = lowerName(searchName);

  let cardsString = localStorage.getItem('1');
  let cards = JSON.parse(cardsString);

  for (let card of cards) {
    if (card.title.toLowerCase().includes(searchName)) {
      cardString += `<div class='card'>
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

$('#search-lupa').on('click', function () {
  const searchName = document.getElementById('search-input').value;
  search(searchName);

  document.querySelector('.list').innerHTML = cardString;
});
