//basics
//Mini Task 1 -Print your name, course and a number
console.log("Name: Maseeha Farhana Shakeel");
console.log("Course: CSBS");
console.log("Number: 24");

//task 2 -Create variables for an event
let eventName = "Tech Fest";
let ticketPrice = 100;
let availableTickets = 50;
console.log("Event Name:", eventName);
console.log("Ticket Price:", ticketPrice);
console.log("Available Tickets:", availableTickets);

//task3- Calculate the total price for 3 tickets and check whether it exceeds 200
let totalPrice = ticketPrice * 3;
console.log("Total Price:", totalPrice);
if (totalPrice > 200) {
    console.log("Total exceeds 200");
} else {
    console.log("Total does not exceed");
}

//task4 - Check whether a number is positive, zero or negative
let number = -5;
if (number > 0) {
    console.log("Positive number");
} else if (number === 0) {
    console.log("Zero");
} else {
    console.log("Negative number");
}

//task5 - Print even numbers from 2 to 10 using a loop
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//function and arrays
//task1 - Calculate Total Price 
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(100, 3));

//task2 -  Function with Name and Greeting
function greet(name) {
    console.log("Hello," + name + "!");
}
greet("Massu");

//task3 -Array of Five Event Names and Print Length
let events = ["Music Concert", "Art Exhibition","College"];
console.log(events);
console.log("Array Length:", events.length);

//task 4 -Use filter() to Keep Numbers Greater Than 10
let numbers = [5, 12, 8, 20, 15];
let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);

//Task 5: Use map() to Double Each Numbe
let values = [5, 12, 8, 20, 3];
let double = values.map(num => num * 2);
console.log(double);

//task6- use reduce() to Total [20, 30, 40]
let prices = [20, 30, 40];
let total = prices.reduce((sum,price) => sum + price,0);
console.log("Total:",total);

//task7 - Do These Methods Change the Original Array?
let original = [20, 30, 40];
let filtered = original.filter(num => num > 20);
let mapped = original.map(num => num * 2);
let reduced = original.reduce((sum,num) =>sum + num,0);
console.log("Original Array:", original);
console.log("Filtered Array:", filtered);
console.log("Mapped Array:", mapped);
console.log("Reduced Value:", reduced); 

//objects
//task1 -Create a book object and update its price
let book = {
    title: "JavaScript Basics",
    author: "Maseeha Farhana Shakeel",
    price: 500
};
book.price = 600;
console.log(book);
console.log(book.price);

//task2 - Create a nested user object and print the city
let user = {
    name: "Maseeha",
    age: 21,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
console.log(user.address.city);

//task3 -Create an array of three products and print each name
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
products.forEach(function(product) {
    console.log(product.name);
});

//task4 - Use destructuring to extract two properties
let student = {
    name: "Maseeha",
    age: 21,
    city: "Chennai"
};
let { name, age } = student;
console.log(name);
console.log(age);

//task5 -Use spread to copy and combine arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let copy = [...arr1];
let combined = [...arr1, ...arr2];
console.log(copy);
console.log(combined);

//task6 -  Use rest parameters to add any number of values
function add(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(1, 2, 3, 4, 5));

//task7-Use optional chaining and ?? for a fallback city
let userm = {
    name: "Maseeha",
};
let citys= user.address?.citys ?? "city not available";
console.log(citys);

//module 10
//task1 - create global varibal and print inside the fun
var names = "Massu"
function showGlobalName() {
    console.log(names);
}
showGlobalName();

//task2 - create an if block with let and var
if (true) {
    let m = 10;
    var n = 20;
}
console.log(n);
try {
    console.log(m);
} catch (error) {
    console.log("m is block-scoped");
}

//task3 - Task 3: Predict var and let behavior before declaration
console.log(q); 
var q = 10;
try {
    console.log(w);
} catch (error) {
    console.log("w is in the temporal dead zone");
}
let w = 20;

//Task 4: Create makeCounter() with a private variable
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
let counter = makeCounter();
counter(); 
counter(); 
counter(); 

//task 5 Create two independent counters
function makeCounters() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
let counter1 = makeCounters();
let counter2 = makeCounters();
counter1(); 
counter1(); 
counter2(); 
counter2();

//module 11
if (typeof document !== "undefined") {
    //task 1
    document.getElementById("heading").textContent =
        "Upcoming Campus Events";

    //Task 2: Add a highlight class to all event cards
    let cards = document.querySelectorAll(".event-card");
    cards.forEach(function(card) {
        card.classList.add("highlight");
    });

    //Task 3: Read a name from input and display it
    function showName() {
        let name = document.getElementById("name").value;
        document.getElementById("result").textContent =
            "Hello, " + name;
    }
    document.getElementById("showNameButton").addEventListener("click", showName);

    //Task 4: Create a card from an object and append it to the event list
    let event = {
        title: "Tech Fest",
        date: "20 October 2026"
    };
    let card = document.createElement("div");
    card.textContent = event.title + " - " + event.date;
    document.getElementById("event-list").appendChild(card);

    //Task 5: Add a Remove button to each generated card
    function addEvent() {
        let card = document.createElement("div");
        card.textContent = "Tech Fest ";
        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = function() {
            card.remove();
        };
        card.appendChild(btn);
        document.getElementById("event-list").appendChild(card);
    }
    document.getElementById("addEventButton").addEventListener("click", addEvent);

    //module 12
    // Task 1: Click event to update status
    let button = document.getElementById("btn");
    let status = document.getElementById("status");
    button.addEventListener("click", function () {
        status.textContent = "Button clicked successfully!";
    });

    // Task 2: Live character count
    let input = document.getElementById("message");
    let count = document.getElementById("count");
    input.addEventListener("input", function () {
        count.textContent = input.value.length;
    });

    // Task 3: Registration form without page reload
    let form = document.getElementById("registerForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

    // Task 4: Error and success messages
        let result = document.getElementById("result");
        if (name === "" || email === "") {
            result.textContent = "Please fill in all fields!";
        } else {
            result.textContent = "Registration successful!";
        }
    });
}
