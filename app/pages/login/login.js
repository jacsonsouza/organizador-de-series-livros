'use strict';

const btSubmit = document.getElementById('bt');

btSubmit.addEventListener('submit', function () {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  $.ajax({
    url: '/book-list/login',
    type: 'post',
    data: {
      name: name,
      password: password,
    },
    dataType: 'json',
    success: function () {
      window.location = '/book-list';
    },
    fail: function () {
      console.log('Algo deu errado');
    },
  });
});
