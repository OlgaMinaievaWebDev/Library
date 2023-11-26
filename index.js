const myLibrary = [];

function Book(title, author, pages) {
 this.title = title,
  this.author = author,
  this.pages = pages,
  this.info = function () {
  console.log(`${title} by ${author}, ${pages} pages`)
  }
};

const hobbit = new Book('hobbit', 'dontknow', 345);
hobbit.info();