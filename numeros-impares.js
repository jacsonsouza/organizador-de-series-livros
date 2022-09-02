//window.onload = function() {} usar quando estiver no começo a tag script

let impares = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
    impares += i + "-";
  }
}
document.querySelector("#my-button").onclick = function () {
  document.getElementsByTagName("body")[0].style.backgroundColor = "red";
};
window.alert(impares);
let numberDiv = document.getElementById("number-list");
//numberDiv.innerHTML = '<strong>' + impares + '</strong>';
numberDiv.innerHTML = `<strong> ${impares} </strong>`;
numberDiv.textContent += `<strong> ${impares} </strong>`;

let nome = window.prompt("Qual é o seu nome?");
console.log(nome);
