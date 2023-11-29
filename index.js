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
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBook();
}

// function to display books
function displayBook() {
  let libraryEl = document.querySelector(".library");
  libraryEl.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `<h2>${book.title}</h2>
     <h4>${book.author}</h4>
     <h4>${book.pages}</h4>
     <p>${book.read ? "Read" : "Not Read"}</p>`;
    libraryEl.appendChild(bookEl);
  }
}

const addBook = document.getElementById("addBook");
const form = document.getElementById("modal");
const submitBook = document.getElementById("submit");

//button opens the dialog
addBook.addEventListener("click", function () {
  form.style.display = "flex";
});

// submit new book to the library
submitBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
});
