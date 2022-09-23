import { User } from "/app/model/User.js";

document.querySelector("#bt").onclick = function () {
  const email = document.querySelector("#email").value;
  const nome = document.querySelector("#nome").value;
  const senha = document.querySelector("#senha").value;

  cadastra(email, nome, senha);
};

function cadastra(email, nome, senha) {
  let user = new User(email, nome, senha);
  localStorage.setItem("1", JSON.stringify(user));
}
