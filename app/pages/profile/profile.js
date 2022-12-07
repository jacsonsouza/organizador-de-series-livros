'use strict';
/* Montar a lista de livros pegando os itens do localStorege */

(function () {
  let cardString = '';
  let cardsString = localStorage.getItem('1');
  let cards = JSON.parse(cardsString);

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='${card.title}' />
    </a>
  </div>`;
  }

  document.querySelector('.list').innerHTML = cardString;
})();

let testte = localStorage.getItem('teste');
$('.profile-pic').attr('src', testte);

$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
        localStorage.setItem('teste', reader.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $('.file-upload').on('change', function () {
    readURL(this);
  });

  $('.upload-button').on('click', function () {
    $('.file-upload').click();
  });
});

$('#image-profile').on('mouseover', function () {
  $('.profile-pic').css('opacity', '0.5');
});

$('#image-profile').on('mouseout', function () {
  $('.profile-pic').css('opacity', '1');
});
