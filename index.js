const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}
const addBook = document.getElementById("addBook");

//button opens the dialog
addBook.addEventListener("click", function () {});
