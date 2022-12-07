const User = require('../model/user.js');

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
        console.log(localStorage.getItem('login'));
        if (!data) {
          return res.status(422).json({ msg: 'Usuário não encontrado' });
        }

        if (password !== data.password) {
          return res.status(404).json({ msg: 'Senha inválida!' });
        }
        localStorage.setItem('idUser', data.id);
        res.cookie('login', 'true');
        res.cookie('user', data.name);
        res.redirect('/book-list');
      })
      .catch((err) => console.log('Deu errado' + err));
  }

  static userProfile(req, res) {
    const id = localStorage.getItem('idUser');

    User.findOne({ where: { id: id } })
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((err) => console.log('Deu errado' + err));
  }
};
