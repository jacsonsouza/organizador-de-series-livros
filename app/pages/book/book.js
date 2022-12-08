'use strict';

import Cookie from '../../../node_modules/js-cookie/dist/js.cookie.mjs';

const user = Cookie.get('user');
const bookTitle = document.getElementById('book-title').innerText;
let bookString = localStorage.getItem(`${user}Books`);
let userBooks = JSON.parse(bookString);
let book = {};

function searchBookSite() {
  let cardsString = localStorage.getItem('1');
  let cards = JSON.parse(cardsString);
  for (let item of cards) {
    if (item.title === bookTitle) {
      Object.setPrototypeOf(book, item);
      book.title = item.title;
      book.page = item.page;
      book.img = item.img;
      console.log(book);
      return true;
    } else {
      return false;
    }
  }
}

function searchBookUser() {
  for (let item of userBooks) {
    if (item.title === bookTitle) {
      book = item;
      return true;
    } else {
      return false;
    }
  }
}

let select = document.querySelector('.form-select');

if (!userBooks) {
  searchBookSite();
  userBooks = [];
} else {
  searchBookUser();
  select.selectedIndex = book.status;
}

if (select.selectedIndex) {
  document.getElementById(
    'time-start'
  ).innerHTML = `Início da leitura: ${book.dateStart}`;
  document.getElementById(
    'time-end'
  ).innerHTML = `Fim da leitura: ${book.dateEnd}`;
}

function startRead(optionSelected) {
  let selecionado = optionSelected.options[optionSelected.selectedIndex].value;
  let date = new Date();

  if (selecionado === '2') {
    window.alert('Boa leitura');

    let dateS = date.toLocaleDateString();
    document.getElementById(
      'time-start'
    ).innerHTML = `Início da leitura: ${dateS}`;

    book.dateStart = dateS;
  }

  if (selecionado === '1') {
    const score = window.prompt('Sua avaliação: 0-10');

    let dateE = date.toLocaleDateString();
    document.getElementById('time-end').innerHTML = `Fim da leitura: ${dateE}`;

    book.dateEnd = dateE;
    book.status = selecionado;
    book.score = score;

    userBooks.push(book);

    localStorage.setItem(`${user}Books`, JSON.stringify(userBooks));
  }
}

select.addEventListener('change', function () {
  startRead(this);
});
