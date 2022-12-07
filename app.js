'use strict';
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const db = require('./app/util/db.js');
const userRoutes = require('./app/util/routes.js');

app.use(
  express.static('/home/jacson/Documentos/web2/organizador-de-series-livros')
);
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use('/book-list', userRoutes);

db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
