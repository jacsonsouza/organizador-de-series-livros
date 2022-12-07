'use strict';

const express = require('express');
const router = express.Router();
const Controller = require('./controller.js');

router.get('/', (req, res) => {
  res.sendFile(
    '/home/jacson/Documentos/web2/organizador-de-series-livros/index.html'
  );
});
router.get('/profile', Controller.userProfile);
router.post('/login', Controller.userLogin);
router.post('/add', Controller.createUserSave);

module.exports = router;
