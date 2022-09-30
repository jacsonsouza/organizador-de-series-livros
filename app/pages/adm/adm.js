"use strict";
import { Book } from "/app/model/book.js";

// var Book = function (title, page, img) {
//   this.title = title;
//   this.page = page;
//   this.img = img;
// };
let cardsString = localStorage.getItem("1");
let cards = JSON.parse(cardsString);

function cadastra(title, page, img) {
  let book = new Book(title, page, img);
  cards.push(book);
  localStorage.setItem("1", JSON.stringify(cards));
}

document.querySelector("#bt").onclick = function () {
  const page = document.querySelector("#page").value;
  const title = document.querySelector("#title").value;
  const img = document.querySelector("#image-card").value;

  cadastra(title, page, img);
};
