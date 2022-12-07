'use strict';

/**
 * Imports
 */
import Cookie from '../../node_modules/js-cookie/dist/js.cookie.mjs';

/**
 * Declarações
 */
let logged = Cookie.get('logged');
let menu = '';

/**
 * Verifica se há usuário logado
 */
if (logged === 'true') {
  menu = '/menu-sign.html';
} else {
  menu = '/menu.html';
}

/**
 * Carrega o menu e o footer usando jquery
 */
$('#menu').load(menu);
$('#footer').load('/footer.html');

/**
 * Inicialização do nav responsive com jquery
 */
setTimeout(function () {
  $('.sidenav').sidenav();
}, 1000);
