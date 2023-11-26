const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
}
const addBook = document.getElementById("addBook");
const form = document.getElementById("modal");
const submitBook = document.getElementById("submit");

//button opens the dialog
addBook.addEventListener("click", function () {
  form.style.display = "flex";
});

// submit new book to the library
submitBook.addEventListener("click", function () {
  event.preventDefault();
  addBookToLibrary();
});
