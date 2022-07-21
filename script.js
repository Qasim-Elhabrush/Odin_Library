let myLibrary = [];
let newBook = "";
let form = document.getElementById("formContainer");

function Book() {
    this.title = document.getElementById("bookTitle").value.trim();
    this.author = document.getElementById("author").value.trim();
    this.pages = document.getElementById("pages").value.trim();
    if (document.getElementById("yes").checked == true) {
        this.read = "Book has been read";
    } else if (document.getElementById("yes").checked == true) { this.read = "Book has not been read"; } else {
        this.read = "";
    }
    if (document.getElementById("yesRecommend").checked == true) {
        this.recommend = "Would Recommend";
    } else if (document.getElementById("notRecommend").checked == true) {
        this.recommend = "Would not Recommend";
    } else {
        this.recommend = "";
    }
    this.info = `${this.title}\nby: ${this.author}\npages: ${this.pages}\n ${this.read}\n${this.recommend}`;
}
const addBookToLibrary = function(book) {
    myLibrary.push(book);
    updateLibrary(book);
}
const openForm = function() {
    form.style.display = "flex";
}
const closeForm = function() {
    form.style.display = "none";
}
const submitBook = function() {
    newBook = document.getElementById("bookTitle").innerText;
    newBook = new Book();
    if (newBook.title != "" && newBook.author != "" && newBook.pages != "") {
        addBookToLibrary(newBook);
    }
    document.getElementById("bookTitle").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;
    document.getElementById("yesRecommend").checked = false;
    document.getElementById("notRecommend").checked = false;

}
let addBookButton = document.getElementById("addButton");
let cancelButton = document.getElementById("cancelButton");
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", closeForm);
submitButton.addEventListener("click", submitBook);
cancelButton.addEventListener("click", closeForm);
addBookButton.addEventListener("click", openForm);
addBookButton.addEventListener("mousedown", () => addBookButton.style.backgroundColor = "rgba(30, 240, 170, 0.8)");
addBookButton.addEventListener("mouseup", () => addBookButton.style.backgroundColor = "rgb(72, 216, 154)");
console.log(document.getElementById("bookTitle").innerText);
const updateLibrary = function(book) {
    if (myLibrary.length <= 8) {
        let divs = document.createElement("div");
        divs.innerText = book.info;
        divs.className = "book";
        document.getElementById("bookContainer").appendChild(divs);
    }
}