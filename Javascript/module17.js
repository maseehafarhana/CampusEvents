const button = document.getElementById("saveBtn");
const colour = document.getElementById("colour");
const step = document.getElementById("step");
const bookList = document.getElementById("bookList");
function saveData() {
    // Task 1: Save favourite colour in localStorage
    localStorage.setItem("colour", "Pink");
    const savedColour = localStorage.getItem("colour");
    colour.textContent = "Favourite Colour: " + savedColour;
    console.log("Favourite Colour:", savedColour);
    // Task 2: Save temporary step number in sessionStorage
    sessionStorage.setItem("step", "3");
    const savedStep = sessionStorage.getItem("step");
    step.textContent = "Step Number: " + savedStep;
    console.log("Step Number:", savedStep);
    // Task 3: Store three book titles as an array
    let books = ["Harry Potter", "Wings of Fire", "The Alchemist"];
    localStorage.setItem("books", JSON.stringify(books));
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    console.log("Books:", savedBooks);
    bookList.innerHTML = "";
    savedBooks.forEach(function (book) {
        let li = document.createElement("li");
        li.textContent = book;
        bookList.appendChild(li);
    });
}
button.addEventListener("click", saveData);
saveData();
