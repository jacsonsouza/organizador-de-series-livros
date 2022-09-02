let ling = ["java", "phyton", "js", "c++", "a", "b", "c", "d", "e", "f"];
let inverso = ling.reverse();
inverte();
function inverte() {
  let inversoUl = document.getElementById("inversoUl");
  let liString = "";
  for (let linguagem of inverso) {
    liString += `<li>${linguagem}</li>`;
  }
  inversoUl.innerHTML = liString;
}
function alfabetica() {
  let alfabeticaUl = document.getElementById();
}
