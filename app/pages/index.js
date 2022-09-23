/* Function para responsividade do menu*/

$(function () {
  $(".button-collapse").sideNav();
});

/* Fazer trocar as imagens */

function slide1() {
  document.getElementById(
    "div-carousel"
  ).innerHTML = `<a href=""><img src="/organizador-de-series-livros/assets/resources/images/carousel-slide1.jpg" alt=""/></a>`;
  setTimeout(function () {
    document.getElementById(
      "div-carousel"
    ).innerHTML = `<img src="https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146765-stock-photo-a-stack-of-books-on.jpg" alt=""/>`;
    setTimeout(function () {
      document.getElementById(
        "div-carousel"
      ).innerHTML = `<img src="https://img.quizur.com/f/img5f8e5b745bd285.10956982.jpg?lastEdited=1603165046" alt=""/>`;
      setTimeout(slide1(), 10000);
    }, 10000);
  }, 10000);
}
