'use strict';

let validate = function (formValidate) {
  if (formValidate.text.indexOf('@') === -1) {
    window.alert('E-mail inválido');
    return false;
  }
};

document.getElementById('bt').onclick = function () {
  let test = document.getElementsByTagName('form');
  validate(test);
};
