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