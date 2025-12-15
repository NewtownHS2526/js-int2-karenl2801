/*
 * ACTIVITY 3: Advanced Arrow Function Patterns
 * 
 * Problem 1: Implicit vs Explicit Returns
 * For each scenario, determine whether to use implicit or explicit return
 */

// Your task:
// 1. A function that returns a single expression - write with implicit return
// 2. A function that has conditional logic before returning - write with explicit return
// 3. A function that needs to log something before returning - write with explicit return
// 4. A function that returns an object literal - write both ways and explain the difference

const add = (a, b) => a + b;
//because only one expression is returned so implicit return is the best

const isPassing = score => {
    if (score >= 70) {
        return true;
    }
    return false;
};

const doubleAndLog = x => {
    console.log("Doubling:", x);
    return x * 2;
};

const makeUserImplicit = name => ({ name: name });

const makeUserExplicit = name => {
    return { name: name };
};
// ============================================================================
// Problem 2: Arrow Functions with Destructuring
// Create arrow functions that use destructuring in their parameters
// ============================================================================

// Your task:
// 1. Create a function that takes an object {x, y} and returns the distance from origin
//    Example: distanceFromOrigin({x: 3, y: 4}) should return 5
// 
// 2. Create a function that takes an array [firstName, lastName, age] and returns 
//    a formatted string: "First Name: [name], Last Name: [name], Age: [age]"
//
// 3. Create a function that takes an object with nested properties {user: {name, email}} 
//    and extracts them to return "Name: [name], Email: [email]"
//
// 4. Challenge: Combine all three into a function that processes user data from different 
//    formats (object with coordinates, array format, nested object format)

const distanceFromOrigin = ({ x, y }) =>
    Math.sqrt(x * x + y * y);

const formatPerson = ([firstName, lastName, age]) =>
    `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`;

const extractUser = ({ user: { name, email } }) =>
    `Name: ${name}, Email: ${email}`;

const processData = data => {
    if (Array.isArray(data)) {
        const [first, last, age] = data;
        return `First Name: ${first}, Last Name: ${last}, Age: ${age}`;
    }

    if (data.user) {
        const { user: { name, email } } = data;
        return `Name: ${name}, Email: ${email}`;
    }

    if ("x" in data && "y" in data) {
        const { x, y } = data;
        return `Distance: ${Math.sqrt(x * x + y * y)}`;
    }

    return "Unknown format";
};

// ============================================================================
// Problem 3: Arrow Functions and Event Handlers
// Given this scenario: You have a button element that you want to add event listeners to
// ============================================================================

// Simulated button element (in real scenario, you'd use document.getElementById)
const button = {
    text: "Click me",
    counter: 0,
    innerText: "Click me"
};

// Your task:
// 1. Write an arrow function for click event that increments a counter
// 2. Write an arrow function for double-click event that resets the counter
// 3. Write an arrow function for mouseover event that changes the button's text
// 4. Challenge: Create a counter component using arrow functions that handles multiple 
//    events. The counter should persist across page reloads using localStorage.
//    (You'll need to use: localStorage.setItem, localStorage.getItem)

const handleClick = () => {
    button.counter++;
};

const handleDoubleClick = () => {
    button.counter = 0;
};

const handleMouseOver = () => {
    button.innerText = "Hovered!";
};

const loadCounter = () => {
    button.counter = Number(localStorage.getItem("count")) || 0;
};

const saveCounter = () => {
    localStorage.setItem("count", button.counter);
};

const increment = () => {
    button.counter++;
    saveCounter();
};

const reset = () => {
    button.counter = 0;
    saveCounter();
};

// ============================================================================
// Problem 4: Functional Composition with Arrow Functions
// Create a series of arrow functions that can be composed together:
// ============================================================================

// Your task:
// 1. Create 'increment' - adds 1 to a number
// 2. Create 'double' - multiplies a number by 2
// 3. Create 'square' - squares a number
// 4. Challenge: Write a 'pipe' function that takes multiple functions and composes them 
//    left-to-right (pipe(increment, double, square)(5) = square(double(increment(5))))
// 5. Challenge: Write a 'compose' function that composes right-to-left
// 6. Use both to transform the number 5 using all three operations in different orders. 
//    What are the results?

const increment = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const pipe = (...fns) => value =>
    fns.reduce((result, fn) => fn(result), value);

const compose = (...fns) => value =>
    fns.reduceRight((result, fn) => fn(result), value);

pipe(increment, double, square)(5);    // 144
compose(increment, double, square)(5); // 51
