// JavaScript Basics
console.log("Hello, JS");
console.log("This is a simple JavaScript console log message.");
console.log(10 + 20);

let eventName = "click";
console.log(eventName);

//type conversion and coerison
let value = 25;
console.log(String(value));
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);
console.log("5" == 5);
console.log("5" === 5);

//arithmtic operators
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); 

//assignment and increment
let x = 10;

x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

x %= 4;
console.log(x); // 2

// Increment and decrement
let count = 5;

console.log(++count); 
console.log(count++); 
console.log(count);   

console.log(--count); 
console.log(count--); 
console.log(count);   

//comparison operator

console.log(a == b);  
console.log(a === b); 
console.log(a != b);   
console.log(a !== b); 

console.log(a > b);   
console.log(a < b);   
console.log(a >= 10); 
console.log(b <= 20); 

//logical operators
let age = 22;
let hasID = true;

console.log(age >= 18 && hasID); 
console.log(age < 18 || hasID);  
console.log(!hasID); 
console.log(true && false); 
console.log(true || false); 
console.log(!true);         

//ternary operator
let number = 7;

let answer = number % 2 === 0 ? "Even" : "Odd";
console.log(answer); 

//decision making
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else {
    console.log("Fail");
}

//comination condition
let isStudent = false;
let isEmployee = true;

if (isStudent || isEmployee) {
    console.log("Access granted");
}

let isBlocked = false;

if (!isBlocked) {
    console.log("Account is active");
}

//switch case
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
//functions
//functions
function greet() {
    console.log("Hello JS function");
}
greet()
greet()

//declaration
function showEvent() {
    console.log("Tech Fest");
}
showEvent()

//parameter and argument
function add(a,b){
    console.log(a + b);
}
add(5, 10);

//function with a Return Value
function multiply(b,c){
    return b * c;
}
let result = multiply(4, 5);
console.log(result);

//arrow function
let divide = (x, y) => {
    return x / y;
}   
console.log(divide(10, 2));

//deafult parameters
function greetUser(name = "Guest") {
    console.log("Hello, " + name);
}
greetUser(); 
greetUser("Alice");

//scope
let name =" Maseeha";
function hello () {
    console.log(name);
}
hello();
console.log(name);

//event loop
console.log("Shakeel");
setTimeout(() => console.log("Nithya"), 0);
Promise.resolve().then(() => console.log("Jessita"));
console.log("Farhana");
console.log("Maseeha");
let intervalId = setInterval(() => {
    console.log("Massu");
}, 500);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 3000);