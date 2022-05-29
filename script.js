let myLibrary = [];
let newBook = "";
let form = document.getElementById("formContainer");

function Book() {
    this.title = document.getElementById("bookTitle").value;
    this.author = document.getElementById("author").value;
    this.pages = document.getElementById("pages").value;
    if (document.getElementById("yes").checked == true) {
        this.read = "yes";
    } else { this.read = "no"; }
    if (document.getElementById("yesRecommend").checked == true) {
        this.recommend = "yes";
    } else {
        this.recommend = "no";
    }
}
const addBookToLibrary = function(book) {
    myLibrary.push(book);
    console.log(myLibrary);
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
    addBookToLibrary(newBook);

}
let addBookButton = document.getElementById("addButton");
let cancelButton = document.getElementById("cancelButton");
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", closeForm);
submitButton.addEventListener("click", submitBook);
cancelButton.addEventListener("click", closeForm);
addBookButton.addEventListener("click", openForm);
addBookButton.addEventListener("mousedown", () => addBookButton.style.backgroundColor = "rgba(30, 240, 170, 0.8)");
addBookButton.addEventListener("mouseup", () => addBookButton.style.backgroundColor = "rgba(30, 240, 170, 0.525)");
console.log(document.getElementById("bookTitle").innerText);