const User = require('../model/user.js');
const LocalStorage = require('node-localstorage').LocalStorage;
let local = new LocalStorage('./scratch');

module.exports = class Controller {
  static createUserSave(req, res) {
    const user = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    };
    console.log(req.body.email);
    User.create(user)
      .then(res.redirect('/book-list'))
      .catch((err) => console.log(err));
  }

  static userLogin(req, res) {
    const { name, password } = req.body;
    console.log('1°: ' + name);
    if (!name) {
      return res.status(422).json({ msg: 'O email é obrigatório!' + password });
    }

    if (!password) {
      return res.status(422).json({ msg: 'A senha é obrigatório!' });
    }

    User.findOne({ where: { name: name } })
      .then((data) => {
        if (!data) {
          return res.status(422).json({ msg: 'Usuário não encontrado' });
        }

        if (password !== data.password) {
          return res.status(404).json({ msg: 'Senha inválida!' });
        }
        local.setItem('idUser', data.id);
        res.cookie('logged', 'true');
        res.cookie('user', data.name);
        res.redirect('/book-list');
      })
      .catch((err) => console.log('Deu errado' + err));
  }

  static userProfile(req, res) {
    const id = local.getItem('idUser');

    User.findOne({ where: { id: id } })
      .then((data) => {
        return res.send(data);
      })
      .catch((err) => console.log('Deu errado' + err));
  }
};
