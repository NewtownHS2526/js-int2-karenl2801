/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 * 
 * Problem 1: Arrow Functions with Default Parameters
 * Create arrow functions with default parameter values
 */

// Your task:
// 1. Create an arrow function 'greet' with default name parameter ("Guest")
// 2. Create an arrow function 'calculatePrice' with default tax (0.1) and discount (0) parameters
// 3. Create an arrow function 'formatDate' with default format parameter ("YYYY-MM-DD")
// 4. Test each function with and without parameters

const greet = (name = "Guest") => `Hello, ${name}!`;

console.log(greet());        // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"

const calculatePrice = (price, tax = 0.1, discount = 0) =>
    price + price * tax - discount;

console.log(calculatePrice(100));           // 110
console.log(calculatePrice(100, 0.2, 5));   // 115

const formatDate = (date = new Date(), format = "YYYY-MM-DD") => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    if (format === "YYYY-MM-DD") return `${y}-${m}-${d}`;
    if (format === "DD/MM/YYYY") return `${d}/${m}/${y}`;
    return date.toString();
};

console.log(formatDate());                      // e.g., "2025-12-14"
console.log(formatDate(new Date(), "DD/MM/YYYY")); // e.g., "14/12/2025"


// ============================================================================
// Problem 2: Arrow Functions with Rest Parameters
// Use arrow functions with rest parameters to handle variable arguments
// ============================================================================

// Your task:
// 1. Create an arrow function 'sumAll' that takes any number of arguments and returns their sum
//    Example: sumAll(1, 2, 3, 4, 5) should return 15
//
// 2. Create an arrow function 'findMax' that finds the maximum value from any number of arguments
//
// 3. Create an arrow function 'combineStrings' that combines any number of strings with a separator
//    Example: combineStrings("-", "a", "b", "c") should return "a-b-c"
//
// 4. Challenge: Create a function 'createLogger' that returns an arrow function accepting 
//    any number of arguments and logs them with a timestamp prefix

const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);

console.log(sumAll(1, 2, 3, 4, 5)); // 15

const findMax = (...numbers) => Math.max(...numbers);

console.log(findMax(1, 9, 3, 7)); // 9

const combineStrings = (separator, ...strings) => strings.join(separator);

console.log(combineStrings("-", "a", "b", "c")); // "a-b-c"

const createLogger = () => (...args) => 
    console.log(new Date().toISOString(), ...args);

const log = createLogger();
log("Event started"); // "2025-12-14T19:00:00.000Z Event started"
log("Another message", 123);
// ============================================================================
// Problem 3: Currying with Arrow Functions
// Implement function currying using arrow functions
// ============================================================================

// Your task:
// 1. Create a curried arrow function 'add' where add(5)(10) returns 15
// 2. Create a curried arrow function 'multiply' where multiply(2)(3)(4) returns 24
// 3. Challenge: Create a generic 'curry' function that takes any function and curries it
//    Example: const curriedAdd = curry((a, b, c) => a + b + c);
//             curriedAdd(1)(2)(3) should return 6

const add = a => b => a + b;

console.log(add(5)(10)); // 15

const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4)); // 24

const curry = fn => {
    const curried = (...args) => 
        args.length >= fn.length 
            ? fn(...args) 
            : (...next) => curried(...args, ...next);
    return curried;
};

const curriedAdd = curry((a, b, c) => a + b + c);
console.log(curriedAdd(1)(2)(3)); // 6

// ============================================================================
// Problem 4: Arrow Functions with Closures
// Use arrow functions to create closures that maintain state
// ============================================================================

// Your task:
// 1. Create a function 'createCounter' that returns an object with arrow function methods:
//    - increment() - increases counter by 1
//    - decrement() - decreases counter by 1
//    - getValue() - returns current counter value
//    - reset() - resets counter to 0
//
// 2. Create a function 'createBankAccount' with arrow function methods:
//    - deposit(amount) - adds to balance
//    - withdraw(amount) - subtracts from balance (can't go below 0)
//    - getBalance() - returns current balance
//    The balance should be private and only accessible through these methods
//
// 3. Challenge: Create a 'createGameScore' that tracks multiple players' scores using closures
//    Methods: addScore(player, points), getScore(player), getLeader()

const createCounter = () => {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getValue: () => count,
        reset: () => { count = 0; }
    };
};

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
counter.decrement();
console.log(counter.getValue()); // 1
counter.reset();
console.log(counter.getValue()); // 0

const createBankAccount = () => {
    let balance = 0;
    return {
        deposit: amount => balance += amount,
        withdraw: amount => balance = Math.max(0, balance - amount),
        getBalance: () => balance
    };
};

const account = createBankAccount();
account.deposit(100);
account.withdraw(30);
console.log(account.getBalance()); // 70
account.withdraw(100);
console.log(account.getBalance()); // 0

const createGameScore = () => {
    const scores = {};
    return {
        addScore: (player, points) => scores[player] = (scores[player] || 0) + points,
        getScore: player => scores[player] || 0,
        getLeader: () => Object.entries(scores)
            .reduce((leader, [player, score]) => score > leader.score ? {player, score} : leader, {player: null, score: -Infinity})
    };
};

const game = createGameScore();
game.addScore("Alice", 10);
game.addScore("Bob", 15);
game.addScore("Alice", 5);
console.log(game.getScore("Alice")); // 15
console.log(game.getLeader()); // {player: "Bob", score: 15}
