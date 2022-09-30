"use strict";

import { User } from "/app/model/user.js";

function cadastra(email, nome, senha) {
  let user = new User(email, nome, senha);
  localStorage.setItem(nome, JSON.stringify(user));
}

let validate = function (mail, passwd, passConfirm) {
  let booleano = true;

  if (mail.indexOf("@") === -1) {
    window.alert("E-mail inválido: Faltando '@'");
    booleano = false;
  }

  if (passwd.length < 7) {
    window.alert("senha com caracters insuficientes");
    booleano = false;
  }

  if (passwd !== passConfirm) {
    window.alert("Senhas não equivalentes");
    booleano = false;
  }

  return booleano;
};

document.querySelector("#bt").onclick = function () {
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#user").value;
  const passWord = document.querySelector("#password").value;
  const passConfirm = document.querySelector("#confirmation").value;

  if (validate(email, passWord, passConfirm)) {
    cadastra(email, name, passWord);
  } else {
    window.alert("senha com caracters insuficientes");
  }
};

let inputTag = document.getElementsByTagName("input");

for (let inputField of inputTag) {
  inputField.onfocus = function () {
    inputField.style.color = "white";
    inputField.style.transition = "2s";
    inputField.style.scale = "1.05";
  };

  inputField.onblur = function () {
    inputField.style.scale = "1";
  };
}
