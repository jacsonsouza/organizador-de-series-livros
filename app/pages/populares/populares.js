$(function () {
  $(".button-collapse").sideNav();
});

$(document).ready(function () {
  $("select").formSelect();
});

const allTitles = document.querySelectorAll(".title");

for (let i = 0; i < allTitles.length; i++) {
  let title = allTitles[i];

  title.onmouseover = show(title);

  title.onmouseout = hide(title);
}

function show(title) {
  title.style.display = "block";
}

var hide = function (title) {
  title.style.display = "none";
};
