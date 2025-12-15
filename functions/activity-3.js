/*
 * ACTIVITY 3: Function Scope and Closures
 * 
 * Problem 1: Variable Scope
 * Understand function scope and lexical scope
 */

let globalVar = "I'm global";

// Your task:
// 1. Create a function 'testScope' that:
//    - Has a local variable with same name as globalVar
//    - Logs both global and local variables
//    - Demonstrates scope difference
//
// 2. Create nested functions to demonstrate:
//    - Outer function variable accessible in inner function
//    - Inner function variable NOT accessible in outer function
//
// 3. Challenge: Create a scope demonstration:
//    - Global variable
//    - Function-level variable
//    - Block-level variable (inside if/for)
//    - Show which variables are accessible where

let globalVar = "I'm global";

function testScope() {
    let globalVar = "I'm local"; // local variable shadows global
    console.log("Local:", globalVar);   // "I'm local"
    console.log("Global:", window.globalVar || globalVar); // "I'm global" in browser
}

testScope();

// Nested functions
function outerFunction() {
    let outerVar = "outer";
    function innerFunction() {
        let innerVar = "inner";
        console.log("OuterVar inside inner:", outerVar); // accessible
        console.log("InnerVar inside inner:", innerVar); // accessible
    }
    innerFunction();
    // console.log(innerVar); // Error: innerVar not accessible here
}

outerFunction();

// Block scope demonstration
let globalBlock = "global";
function scopeDemo() {
    let funcVar = "function";
    if (true) {
        let blockVar = "block";
        console.log(globalBlock, funcVar, blockVar); // all accessible here
    }
    console.log(globalBlock, funcVar); // blockVar NOT accessible
}
scopeDemo();

// ============================================================================
// Problem 2: Closures
// Understand and create closures
// ============================================================================

// Your task:
// 1. Create a function 'createCounter' that:
//    - Returns a function
//    - Returned function increments and returns a counter
//    - Counter persists between calls (closure)
//    Example: const counter = createCounter(); counter(); // 1, counter(); // 2
//
// 2. Create a function 'createMultiplier' that:
//    - Takes a number
//    - Returns a function that multiplies its argument by that number
//    Example: const double = createMultiplier(2); double(5); // 10
//
// 3. Challenge: Create a function 'createBankAccount' that:
//    - Has private balance variable (closure)
//    - Returns object with methods: deposit, withdraw, getBalance
//    - Balance is only accessible through methods

// 1. Counter
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 2. Multiplier
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// 3. Bank Account
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance; // private
    return {
        deposit(amount) { balance += amount; return balance; },
        withdraw(amount) {
            if(amount > balance) return "Insufficient funds";
            balance -= amount;
            return balance;
        },
        getBalance() { return balance; }
    };
}
const account = createBankAccount(100);
console.log(account.deposit(50));   // 150
console.log(account.withdraw(70));  // 80
console.log(account.getBalance());  // 80

// ============================================================================
// Problem 3: IIFE (Immediately Invoked Function Expression)
// Use IIFE for scope isolation
// ============================================================================

// Your task:
// 1. Create an IIFE that:
//    - Logs a message immediately
//    - Has its own scope
//
// 2. Create an IIFE that:
//    - Takes parameters
//    - Performs calculation
//    - Returns result
//
// 3. Challenge: Create a module pattern using IIFE:
//    - Private variables and functions
//    - Public API returned as object
//    - Example: calculator module with private operations

// 1. Simple IIFE
(function() {
    console.log("This runs immediately!");
})();

// 2. IIFE with parameters
const result = (function(a, b) {
    return a + b;
})(5, 10);
console.log(result); // 15

// 3. Module pattern using IIFE
const calculator = (function() {
    // private
    function add(a,b){ return a+b; }
    function multiply(a,b){ return a*b; }

    // public API
    return {
        sum: add,
        product: multiply
    };
})();
console.log(calculator.sum(3,4)); // 7
console.log(calculator.product(2,5)); // 10

// ============================================================================
// Problem 4: Closure in Practice
// Apply closures to real-world scenarios
// ============================================================================

// Your task:
// 1. Create a function 'createLogger' that:
//    - Takes a prefix string
//    - Returns a function that logs messages with prefix
//    - Uses closure to remember prefix
//
// 2. Create a function 'createValidator' that:
//    - Takes validation rules
//    - Returns a function that validates values using those rules
//    - Rules stored in closure
//
// 3. Challenge: Create a function 'createCache' that:
//    - Returns an object with methods: get, set, clear
//    - Uses closure to store cache data privately
//    - Cache persists between method calls
//    - Example: const cache = createCache(); cache.set("key", "value"); cache.get("key");

// 1. Logger with prefix
function createLogger(prefix) {
    return function(message) {
        console.log(`[${prefix}] ${message}`);
    };
}
const infoLogger = createLogger("INFO");
infoLogger("System started"); // [INFO] System started

// 2. Validator
function createValidator(rules) {
    return function(value) {
        const errors = [];
        if(rules.required && !value) errors.push("Required");
        if(rules.minLength && value.length < rules.minLength) errors.push("Too short");
        return { valid: errors.length === 0, errors };
    };
}
const validator = createValidator({required: true, minLength: 5});
console.log(validator("abc")); // { valid: false, errors: ["Too short"] }
console.log(validator("abcdef")); // { valid: true, errors: [] }

// 3. Cache
function createCache() {
    const data = {}; // private
    return {
        set(key, value) { data[key] = value; },
        get(key) { return key in data ? data[key] : null; },
        clear() { for(let key in data) delete data[key]; }
    };
}
const cache = createCache();
cache.set("user", "Alice");
console.log(cache.get("user")); // "Alice"
cache.clear();
console.log(cache.get("user")); // null
