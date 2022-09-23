export class User {
  constructor(email, name, password) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.books = [];
  }

  addBooks(book) {
    this.books.push(book);
  }
}
