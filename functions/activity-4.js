/*
 * ACTIVITY 4: Higher-Order Functions
 * 
 * Problem 1: Functions as Arguments
 * Pass functions as arguments to other functions
 */

const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Create a function 'forEachCustom' that:
//    - Takes an array and a callback function
//    - Calls callback for each element
//    - Mimics Array.forEach behavior
//
// 2. Create a function 'mapCustom' that:
//    - Takes an array and a transformation function
//    - Returns new array with transformed values
//    - Mimics Array.map behavior
//
// 3. Create a function 'filterCustom' that:
//    - Takes an array and a predicate function
//    - Returns new array with filtered values
//    - Mimics Array.filter behavior
//
// 4. Challenge: Create a function 'reduceCustom' that:
//    - Takes array, reducer function, and initial value
//    - Returns accumulated result
//    - Mimics Array.reduce behavior

const numbers = [1, 2, 3, 4, 5];

// 1. forEachCustom
function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
forEachCustom(numbers, n => console.log(n * 2)); // 2,4,6,8,10

// 2. mapCustom
function mapCustom(arr, transform) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(transform(arr[i], i, arr));
    }
    return result;
}
console.log(mapCustom(numbers, n => n * 3)); // [3,6,9,12,15]

// 3. filterCustom
function filterCustom(arr, predicate) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
}
console.log(filterCustom(numbers, n => n % 2 === 0)); // [2,4]

// 4. reduceCustom
function reduceCustom(arr, reducer, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
console.log(reduceCustom(numbers, (acc, n) => acc + n, 0)); // 15

// ============================================================================
// Problem 2: Functions as Return Values
// Return functions from other functions
// ============================================================================

// Your task:
// 1. Create a function 'createGreeter' that:
//    - Takes a greeting message
//    - Returns a function that takes a name
//    - Returned function uses the greeting message
//
// 2. Create a function 'createCalculator' that:
//    - Returns an object with methods: add, subtract, multiply, divide
//    - Each method is a function that performs the operation
//
// 3. Challenge: Create a function 'createPipeline' that:
//    - Takes multiple transformation functions
//    - Returns a function that applies all transformations in sequence
//    - Example: const pipeline = createPipeline(double, addOne, square);
//              pipeline(5) // applies all three functions

// 1. createGreeter
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
const hiGreeter = createGreeter("Hi");
console.log(hiGreeter("Alice")); // "Hi, Alice!"

// 2. createCalculator
function createCalculator() {
    return {
        add: (a,b) => a+b,
        subtract: (a,b) => a-b,
        multiply: (a,b) => a*b,
        divide: (a,b) => b===0 ? null : a/b
    };
}
const calc = createCalculator();
console.log(calc.multiply(5,6)); // 30

// 3. createPipeline
function createPipeline(...funcs) {
    return function(input) {
        return funcs.reduce((acc, fn) => fn(acc), input);
    };
}
const double = n => n*2;
const addOne = n => n+1;
const square = n => n*n;

const pipeline = createPipeline(double, addOne, square);
console.log(pipeline(3)); // ((3*2)+1)^2 = 49

// ============================================================================
// Problem 3: Callback Functions
// Use callbacks for asynchronous-style operations
// ============================================================================

// Your task:
// 1. Create a function 'processData' that:
//    - Takes data and a callback function
//    - Processes data (e.g., doubles it)
//    - Calls callback with result
//
// 2. Create a function 'fetchUser' (simulate async) that:
//    - Takes userId and callback
//    - Simulates delay using setTimeout
//    - Calls callback with user data
//
// 3. Challenge: Create a function 'retryOperation' that:
//    - Takes an operation function and max retries
//    - Calls operation, retries on failure
//    - Calls success/error callbacks

// 1. processData
function processData(data, callback) {
    const result = data.map(x => x*2);
    callback(result);
}
processData([1,2,3], console.log); // [2,4,6]

// 2. fetchUser (simulate async)
function fetchUser(userId, callback) {
    setTimeout(() => {
        callback({id: userId, name: "User"+userId});
    }, 1000);
}
fetchUser(1, user => console.log("Fetched:", user));

// 3. retryOperation
function retryOperation(operation, maxRetries, successCallback, errorCallback) {
    let attempts = 0;
    function attempt() {
        attempts++;
        try {
            const result = operation();
            successCallback(result);
        } catch(e) {
            if(attempts < maxRetries) attempt();
            else errorCallback(e);
        }
    }
    attempt();
}
// Example
retryOperation(
    () => { if(Math.random()<0.7) throw "Fail"; return "Success"; },
    5,
    console.log,
    console.error
);

// ============================================================================
// Problem 4: Functional Programming Patterns
// Apply functional programming concepts
// ============================================================================

const students = [
    { name: "Alice", score: 85, age: 20 },
    { name: "Bob", score: 92, age: 19 },
    { name: "Charlie", score: 78, age: 21 }
];

// Your task:
// 1. Create reusable transformation functions:
//    - getName: extracts name
//    - getScore: extracts score
//    - isPassing: checks if score >= 70
//
// 2. Use these functions with map/filter:
//    - Get all names
//    - Get all passing students
//
// 3. Challenge: Create a function 'compose' that:
//    - Takes multiple functions
//    - Returns composed function
//    - Applies functions right to left
//    Example: compose(upperCase, addPrefix)("hello")

const students = [
    { name: "Alice", score: 85, age: 20 },
    { name: "Bob", score: 92, age: 19 },
    { name: "Charlie", score: 78, age: 21 }
];

// 1. Reusable transformation functions
const getName = s => s.name;
const getScore = s => s.score;
const isPassing = s => s.score >= 70;

// 2. map/filter usage
const names = students.map(getName);
console.log(names); // ["Alice","Bob","Charlie"]

const passingStudents = students.filter(isPassing);
console.log(passingStudents); // All three students

// 3. compose function
function compose(...funcs) {
    return function(input) {
        return funcs.reduceRight((acc, fn) => fn(acc), input);
    };
}
const upperCase = str => str.toUpperCase();
const addPrefix = str => "Student: " + str;

const composed = compose(upperCase, addPrefix);
console.log(composed("alice")); // "STUDENT: ALICE"