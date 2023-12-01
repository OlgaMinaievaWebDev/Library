const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//toggle read/not read

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBook();
}



function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

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
    <button class="toggle"  onclick="toggleRead(${i})">${
      book.read ? "Read"  : "Not Read"
    }</button>
    <button class="remove" onclick="removeBook(${i})">Remove</button>`;
    libraryEl.appendChild(bookEl);

    form.style.display = "none";
  }
}

const addBook = document.getElementById("addBook");
const form = document.getElementById("pop-up");
const submitBook = document.getElementById("submit");

//form opens the dialog and erase data after each entry
addBook.addEventListener("click", function () {
  form.style.display = "block";
  title.value = "";
  author.value = "";
  pages.value = "";
});

// submit new book to the library
submitBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
});

// remove book function
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}
