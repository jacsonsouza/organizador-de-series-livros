import { User } from "/app/model/user.js";

document.querySelector("#bt").onclick = function () {
  const email = document.querySelector("#email").value;
  const nome = document.querySelector("#nome").value;
  const senha = document.querySelector("#senha").value;

  if (senha.length > 3) {
    cadastra(email, nome, senha);
  } else {
    alert("senha com caracters insuficientes");
  }
};

function cadastra(email, nome, senha) {
  let user = new User(email, nome, senha);
  localStorage.setItem(nome, JSON.stringify(user));
}

let inputTag = document.getElementsByTagName("input");

for (let i of inputTag) {
  i.onfocus = function () {
    i.style.color = "white";
    i.style.transition = "2s";
    i.style.scale = "1.05";
  };

  i.onblur = function () {
    i.style.color = "black";
    i.style.scale = "1";
  };
}
