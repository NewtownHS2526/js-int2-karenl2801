/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 * You're building a data processing system for an e-commerce site.
 */

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// Your task:
// 1. Create an arrow function to calculate total price (price * quantity) for each item
// 2. Create an arrow function to apply a discount of 15% if quantity is 5 or more
// 3. Create an arrow function to add tax of 8.5% to the final price
// 4. Create an arrow function to filter out items with total less than $10
// 5. Challenge: Chain all operations together to get the final processed cart array. 
//    Then calculate the grand total of all items after all transformations

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

const calcTotal = item => ({ 
    ...item, 
    total: item.price * item.quantity 
});

const applyDiscount = item => ({
    ...item,
    total: item.quantity >= 5 ? item.total * 0.85 : item.total
});

const addTax = item => ({
    ...item,
    total: item.total * 1.085
});

const filterExpensive = item => item.total >= 10;

const processedCart = cart
    .map(calcTotal)
    .map(applyDiscount)
    .map(addTax)
    .filter(filterExpensive);

console.log(processedCart);

const grandTotal = processedCart
    .reduce((sum, item) => sum + item.total, 0);

console.log("Grand Total:", grandTotal.toFixed(2));

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// Create a 'ShoppingCart' object using arrow functions for methods
// ============================================================================

// Your task:
// Create a ShoppingCart object with:
// 1. items array property: []
// 2. addItem(name, price) - adds an item to the cart
// 3. removeItem(name) - removes an item by name
// 4. getTotal() - calculates total price using arrow function
// 5. applyCoupon(percent) - applies discount percentage

// Challenge: Implement this using both arrow functions and regular functions. 
// Test how 'this' behaves differently. Which approach works better and why?
const ShoppingCart = {
    items: [],
    addItem(name, price) {
        this.items.push({ name, price });
    },
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    },
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    },
    applyCoupon(percent) {
        this.items = this.items.map(item => ({
            ...item,
            price: item.price * (1 - percent / 100)
        }));
    }
};

ShoppingCart.addItem("Book", 12);
ShoppingCart.addItem("Pen", 2);
ShoppingCart.applyCoupon(10);
console.log(ShoppingCart.getTotal()); // 12*0.9 + 2*0.9 = 12.6

this.items.map(item => item.price * 2); // fine

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// Convert Promise-based code to use arrow functions throughout
// ============================================================================

// Given code (commented out - you'll rewrite it):
// fetch('https://api.example.com/data')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         return data.filter(function(item) {
//             return item.status === 'active';
//         });
//     })
//     .then(function(activeItems) {
//         console.log(activeItems);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// Your task:
// 1. Rewrite the above using arrow functions for all callbacks
// 2. Challenge: Rewrite it again using async/await with arrow functions
// 3. Compare all three approaches and explain their advantages
// Note: You can test with a mock data array if fetch is not available

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => data.filter(item => item.status === 'active'))
    .then(activeItems => console.log(activeItems))
    .catch(error => console.error(error));

    const fetchActiveItems = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        const activeItems = data.filter(item => item.status === 'active');
        console.log(activeItems);
    } catch (error) {
        console.error(error);
    }
};

fetchActiveItems();

// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// Create a 'createValidator' function that returns an arrow function
// ============================================================================

// Your task:
// 1. Create a createValidator function that returns an arrow function
//    The validator should:
//    - Check if a value is a string
//    - Check minimum length
//    - Check if it matches a pattern (regex)
//
// 2. Example usage:
//    const validateLength = createValidator((value) => value.length >= 5);
//
// 3. Challenge: Create a validator factory that can combine multiple validation rules.
//    Use arrow functions to create validators like:
//    - isValidEmail (must contain @ and .)
//    - isValidPassword (at least 8 chars, one number, one letter)
//    - isValidPhoneNumber (format: XXX-XXX-XXXX)
//    These should be reusable and chainable

const createValidator = rule => value => rule(value);

const validateLength = createValidator(value => value.length >= 5);
console.log(validateLength("Hello")); // true
console.log(validateLength("Hi"));    // false

const isValidEmail = createValidator(value => /\S+@\S+\.\S+/.test(value));
const isValidPassword = createValidator(value => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value));
const isValidPhoneNumber = createValidator(value => /^\d{3}-\d{3}-\d{4}$/.test(value));

console.log(isValidEmail("test@example.com")); // true
console.log(isValidPassword("abc12345"));      // true
console.log(isValidPhoneNumber("123-456-7890")); // true
