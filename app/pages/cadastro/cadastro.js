'use strict';

import { User } from '/app/model/user.js';

let email = '';
let userName = '';
let passWord = '';
let passConfirm = '';

/** Função para cadastra o usuário
 *
 * @param {*} email
 * @param {*} nome
 * @param {*} senha
 */

function cadastra(email, nome, senha) {
  let user = new User(email, nome, senha);
  localStorage.setItem(nome, JSON.stringify(user));
}

/** Funcão para validar as senhas
 * 
 * @returns

 */

let validate = function () {
  passWord = document.forms[0].elements[2].value;
  passConfirm = document.forms[0].elements[3].value;

  if (passWord !== passConfirm) {
    window.alert('Opa! Senhas diferentes');
    return false;
  }

  return true;
};

/**
 *
 * @returns
 */

document.forms[0].onsubmit = function () {
  return validate();
};

/** Eventos para mudança dos balões de erro
 *
 */

let inputEmail = document.querySelector('#email');

inputEmail.addEventListener('invalid', function () {
  if (inputEmail.validity.typeMismatch) {
    inputEmail.setCustomValidity('Opa! E-mail inválido.');
  } else {
    inputEmail.setCustomValidity('');
  }
});

let inputPass = document.querySelector('#password');

inputPass.addEventListener('invalid', function () {
  if (inputPass.validity.patternMismatch) {
    inputPass.setCustomValidity(
      `Opa! A senha deve conter:
      -Letra maiúscula;
      -Letra minúscula;
      -Números
      -Caracteres especiais.`
    );
  } else {
    inputPass.setCustomValidity('');
  }
});

/**
 *
 */

document.querySelector('#bt').onclick = function () {
  email = document.forms[0].email.value;
  userName = document.forms[0].user.value;
  passWord = document.forms[0].password.value;
  passConfirm = document.forms[0].confirmation.value;

  if (validate()) {
    cadastra(email, userName, passWord);
  }
};

/**
 *
 */

let inputTag = document.getElementsByTagName('input');

for (let inputField of inputTag) {
  inputField.onfocus = function () {
    inputField.style.color = 'white';
    inputField.style.transition = '2s';
    inputField.style.scale = '1.05';
  };

  inputField.onblur = function () {
    inputField.style.scale = '1';
  };
}
