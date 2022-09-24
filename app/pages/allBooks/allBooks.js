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

/* Filtros */

let check = document.querySelectorAll("input[type='checkbox']");

let filtro = function () {
  for (let selecionado of check) {
    selecionado.addEventListener("change", () => {
      if (selecionado.checked) {
        let test = selecionado.value;
        let novels = document.getElementsByName(test);

        for (let i of novels) {
          i.style.display = "none";
        }
      } else {
        i.style.display = "block";
      }
    });
  }
};

filtro();
