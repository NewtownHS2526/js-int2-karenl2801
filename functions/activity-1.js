/*
 * ACTIVITY 1: Function Basics
 * 
 * Problem 1: Function Declarations
 * Create and use basic functions
 */

// Your task:
// 1. Create a function 'greet' that takes a name parameter and returns "Hello, [name]!"
// 2. Create a function 'add' that takes two numbers and returns their sum
// 3. Create a function 'multiply' that takes two numbers and returns their product
// 4. Test each function with different arguments
//
// 5. Challenge: Create a function 'calculate' that:
//    - Takes two numbers and an operation string ("add", "subtract", "multiply", "divide")
//    - Returns the result of the operation
//    - Handles division by zero

// 1. Greet function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Add function
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8

// 3. Multiply function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 7)); // 28

// 5. Challenge: Calculate function
function calculate(a, b, operation) {
    switch(operation) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide":
            if (b === 0) return "Error: Division by zero";
            return a / b;
        default: return "Invalid operation";
    }
}

console.log(calculate(10, 5, "add"));       // 15
console.log(calculate(10, 0, "divide"));    // "Error: Division by zero"

// ============================================================================
// Problem 2: Function Expressions
// Use function expressions and understand hoisting
// ============================================================================

// Function declaration
function sayHello() {
    return "Hello!";
}

// Your task:
// 1. Create a function expression: const sayGoodbye = function() { ... }
// 2. Test: Can you call sayHello before it's declared? (hoisting)
// 3. Test: Can you call sayGoodbye before it's assigned? Why not?
//
// 4. Challenge: Create three versions of the same function:
//    - Function declaration
//    - Function expression
//    - Arrow function
//    Compare their behavior and hoisting

// Function expression
const sayGoodbye = function() {
    return "Goodbye!";
};
console.log(sayGoodbye()); // "Goodbye!"

// Hoisting tests
console.log(sayHello()); // Works: "Hello!"
// console.log(sayGoodbye()); // Error if uncommented: Cannot access before initialization

// 4. Three versions
// Function declaration
function greetDecl() { return "Hi!"; }

// Function expression
const greetExpr = function() { return "Hi!"; }

// Arrow function
const greetArrow = () => "Hi!";

console.log(greetDecl(), greetExpr(), greetArrow()); // "Hi!" "Hi!" "Hi!"

// ============================================================================
// Problem 3: Parameters and Arguments
// Understand function parameters and arguments
// ============================================================================

// Your task:
// 1. Create a function 'introduce' that takes name and age parameters
//    - Returns formatted string: "I'm [name] and I'm [age] years old"
//
// 2. Create a function 'fullName' that takes firstName and lastName
//    - Returns full name
//    - What happens if you only pass one argument?
//
// 3. Challenge: Create a function 'sumAll' that:
//    - Takes any number of arguments
//    - Returns sum of all arguments
//    - Use 'arguments' object or rest parameters
//    - Handle edge cases (no arguments, non-numbers)

// 1. Introduce
function introduce(name, age) {
    return `I'm ${name} and I'm ${age} years old`;
}
console.log(introduce("Alice", 30));

// 2. Full name
function fullName(firstName, lastName) {
    return `${firstName || ""} ${lastName || ""}`.trim();
}
console.log(fullName("Alice", "Smith")); // "Alice Smith"
console.log(fullName("Alice"));          // "Alice"

// 3. Challenge: sumAll
function sumAll(...args) {
    if (args.length === 0) return 0;
    return args.reduce((sum, val) => sum + (typeof val === "number" ? val : 0), 0);
}
console.log(sumAll(1,2,3));       // 6
console.log(sumAll(5,"a",10));    // 15
console.log(sumAll());             // 0

// ============================================================================
// Problem 4: Return Values
// Understand how functions return values
// ============================================================================

// Your task:
// 1. Create a function 'isEven' that takes a number and returns true/false
// 2. Create a function 'getMax' that takes two numbers and returns the larger one
// 3. Create a function 'formatName' that takes first and last name, returns formatted string
//
// 4. Challenge: Create a function 'analyzeNumber' that:
//    - Takes a number
//    - Returns an object with: {value, isEven, isPositive, square, double}
//    - All properties calculated from the input number

// 1. isEven
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// 2. getMax
function getMax(a, b) {
    return a > b ? a : b;
}
console.log(getMax(10, 20)); // 20

// 3. formatName
function formatName(first, last) {
    return `${first} ${last}`;
}
console.log(formatName("Alice", "Smith")); // "Alice Smith"

// 4. Challenge: analyzeNumber
function analyzeNumber(num) {
    return {
        value: num,
        isEven: num % 2 === 0,
        isPositive: num > 0,
        square: num ** 2,
        double: num * 2
    };
}
console.log(analyzeNumber(5));
// { value: 5, isEven: false, isPositive: true, square: 25, double: 10 }
console.log(analyzeNumber(-4));
// { value: -4, isEven: true, isPositive: false, square: 16, double: -8 }