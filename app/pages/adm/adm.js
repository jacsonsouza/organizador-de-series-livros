'use strict';

import { Book } from '/app/model/book.js';

let cardsString = localStorage.getItem('1');
let cards = JSON.parse(cardsString);

function cadastra(title, page, img) {
  let book = { title, page, img };
  cards.push(book);
  localStorage.setItem('1', JSON.stringify(cards));
}

document.querySelector('#bt').onclick = function () {
  const page = document.querySelector('#page').value;
  const title = document.querySelector('#title').value;
  const img = document.querySelector('#image-card').value;
  const classification = document.querySelector('#classification').value;

  cadastra(title, page, img, classification);
};
