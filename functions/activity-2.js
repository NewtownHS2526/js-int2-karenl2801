/*
 * ACTIVITY 2: Function Parameters and Defaults
 * 
 * Problem 1: Default Parameters
 * Use default parameter values
 */

// Your task:
// 1. Create a function 'greet' with default name parameter:
//    function greet(name = "Guest") { ... }
//    Test with and without arguments
//
// 2. Create a function 'calculateArea' with default dimensions:
//    - length default 10, width default 5
//    - Returns area
//
// 3. Challenge: Create a function 'createUser' with defaults:
//    - Takes: name, age (default 18), active (default true), role (default "user")
//    - Returns user object
//    - Test with different combinations of arguments

// 1. Greet with default
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet());        // "Hello, Guest!"

// 2. Calculate area with defaults
function calculateArea(length = 10, width = 5) {
    return length * width;
}
console.log(calculateArea(7, 3)); // 21
console.log(calculateArea());      // 50

// 3. Challenge: Create user with defaults
function createUser(name, age = 18, active = true, role = "user") {
    return { name, age, active, role };
}
console.log(createUser("Alice")); 
// { name: 'Alice', age: 18, active: true, role: 'user' }
console.log(createUser("Bob", 25, false, "admin")); 
// { name: 'Bob', age: 25, active: false, role: 'admin' }

// ============================================================================
// Problem 2: Rest Parameters
// Use rest parameters for variable arguments
// ============================================================================

// Your task:
// 1. Create a function 'sum' using rest parameters:
//    function sum(...numbers) { ... }
//    - Takes any number of arguments
//    - Returns their sum
//
// 2. Create a function 'findMax' using rest parameters:
//    - Takes any number of numbers
//    - Returns the maximum value
//
// 3. Create a function 'joinStrings' using rest parameters:
//    - Takes separator and any number of strings
//    - Returns joined string
//
// 4. Challenge: Create a function 'calculate' that:
//    - Takes operation string ("add", "multiply", etc.) and rest of numbers
//    - Performs operation on all numbers
//    - Returns result

// 1. Sum with rest
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1,2,3,4)); // 10

// 2. Find maximum
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax(5, 12, 3, 20)); // 20

// 3. Join strings
function joinStrings(separator, ...strings) {
    return strings.join(separator);
}
console.log(joinStrings("-", "a","b","c")); // "a-b-c"

// 4. Challenge: General calculate
function calculate(operation, ...numbers) {
    switch(operation) {
        case "add": return numbers.reduce((acc, n) => acc + n, 0);
        case "multiply": return numbers.reduce((acc, n) => acc * n, 1);
        case "subtract": return numbers.reduce((acc, n) => acc - n);
        case "divide": return numbers.reduce((acc, n) => n === 0 ? acc : acc / n);
        default: return null;
    }
}
console.log(calculate("add",1,2,3));      // 6
console.log(calculate("multiply",2,3,4)); // 24

// ============================================================================
// Problem 3: Destructuring Parameters
// Use destructuring in function parameters
// ============================================================================

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Your task:
// 1. Create a function 'displayPerson' that:
//    - Takes object with {name, age, city}
//    - Uses destructuring in parameters
//    - Returns formatted string
//
// 2. Create a function 'processCoordinates' that:
//    - Takes object with {x, y}
//    - Uses destructuring
//    - Returns distance from origin
//
// 3. Challenge: Create a function 'createEmail' that:
//    - Takes object with {firstName, lastName, domain}
//    - Uses destructuring with default values
//    - Returns email string: firstName.lastName@domain.com

// 1. Display person
function displayPerson({name, age, city}) {
    return `${name}, ${age} years old, lives in ${city}`;
}
console.log(displayPerson(person)); 
// "Alice, 30 years old, lives in New York"

// 2. Process coordinates
function processCoordinates({x, y}) {
    return Math.sqrt(x**2 + y**2);
}
console.log(processCoordinates({x:3, y:4})); // 5

// 3. Challenge: Create email
function createEmail({firstName = "John", lastName = "Doe", domain = "example.com"}) {
    return `${firstName}.${lastName}@${domain}`.toLowerCase();
}
console.log(createEmail({firstName:"Alice", lastName:"Smith", domain:"mail.com"})); 
// "alice.smith@mail.com"
console.log(createEmail({})); 
// "john.doe@example.com"

// ============================================================================
// Problem 4: Arguments Object
// Understand and use the arguments object
// ============================================================================

// Your task:
// 1. Create a function 'logArguments' that:
//    - Uses 'arguments' object
//    - Logs all arguments passed
//    - Converts arguments to array using Array.from()
//
// 2. Create a function 'findLongest' that:
//    - Uses arguments object
//    - Returns the longest string argument
//
// 3. Compare arguments object vs rest parameters:
//    - Create same function using both approaches
//    - Explain differences
//
// 4. Challenge: Create a function 'callWithDelay' that:
//    - Takes a function and delay time
//    - Takes additional arguments using arguments or rest
//    - Calls the function after delay with those arguments

// 1. Log arguments
function logArguments() {
    console.log(arguments);
    console.log(Array.from(arguments));
}
logArguments(1, "a", true);

// 2. Find longest string
function findLongest() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string" && arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}
console.log(findLongest("apple", "banana", "kiwi")); // "banana"

// 3. Compare arguments vs rest
function findLongestRest(...args) {
    return args.filter(a => typeof a === "string").reduce((a,b) => a.length > b.length ? a : b, "");
}
console.log(findLongestRest("apple","banana","kiwi")); // "banana"

// 4. Challenge: Call with delay
function callWithDelay(func, delay, ...args) {
    setTimeout(() => func(...args), delay);
}
callWithDelay(console.log, 1000, "Hello after 1s!"); 