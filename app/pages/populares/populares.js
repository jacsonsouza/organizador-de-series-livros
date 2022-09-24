$(function () {
  $(".button-collapse").sideNav();
});

const allCards = document.getElementsByClassName("card");

for (let i = 0; i < allCards.length; i++) {
  let card = allCards[i];

  card.onmouseover = function () {
    show(card);
  };

  card.onmouseout = function () {
    hide(card);
  };
}

function show(card) {
  card.querySelector(".title").style.display = "block";
}

var hide = function (card) {
  card.querySelector(".title").style.display = "none";
};
