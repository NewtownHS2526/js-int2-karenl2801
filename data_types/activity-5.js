/*
 * ACTIVITY 5: Working with Strings
 * 
 * Problem 1: String Methods and Operations
 * Master string manipulation
 */

const text = "Hello World";
const email = "user@example.com";

// Your task:
// 1. String methods:
//    - text.toUpperCase(), text.toLowerCase()
//    - text.indexOf("World"), text.includes("Hello")
//    - text.slice(0, 5), text.substring(0, 5)
//    - text.replace("World", "JavaScript")
//
// 2. Challenge: Create a function 'analyzeString' that:
//    - Takes a string
//    - Returns object with: {length, wordCount, hasNumbers, hasLetters, uppercase, lowercase}

const text = "Hello World";
const email = "user@example.com";

// 1. String methods
console.log(text.toUpperCase());       // "HELLO WORLD"
console.log(text.toLowerCase());       // "hello world"
console.log(text.indexOf("World"));    // 6
console.log(text.includes("Hello"));   // true
console.log(text.slice(0, 5));         // "Hello"
console.log(text.substring(0, 5));     // "Hello"
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"

// 2. Challenge: analyzeString function
function analyzeString(str) {
    return {
        length: str.length,
        wordCount: str.trim().split(/\s+/).length,
        hasNumbers: /\d/.test(str),
        hasLetters: /[a-zA-Z]/.test(str),
        uppercase: str.toUpperCase(),
        lowercase: str.toLowerCase()
    };
}

console.log(analyzeString("Hello World 123"));
// {
//   length: 13,
//   wordCount: 3,
//   hasNumbers: true,
//   hasLetters: true,
//   uppercase: "HELLO WORLD 123",
//   lowercase: "hello world 123"
// }
// ============================================================================
// Problem 2: Template Literals
// Use template literals for string interpolation
// ============================================================================

const name = "Alice";
const age = 30;
const city = "New York";

// Your task:
// 1. Create strings using template literals:
//    - `My name is ${name}`
//    - Multi-line strings with template literals
//    - Expressions inside: `Next year I'll be ${age + 1}`
//
// 2. Challenge: Create a function 'formatEmail' that:
//    - Takes user object: {firstName, lastName, domain}
//    - Returns formatted email using template literals
//    - Format: firstName.lastName@domain.com
const name = "Alice";
const age = 30;
const city = "New York";

// 1. Basic template literals
console.log(`My name is ${name}`); // "My name is Alice"

// Multi-line string
console.log(`Name: ${name}
Age: ${age}
City: ${city}`);

// Expressions inside template literals
console.log(`Next year I'll be ${age + 1}`); // "Next year I'll be 31"

// 2. Challenge: formatEmail function
function formatEmail(user) {
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@${user.domain.toLowerCase()}.com`;
}

const userObj = {firstName: "Alice", lastName: "Smith", domain: "example"};
console.log(formatEmail(userObj)); // "alice.smith@example.com"
// ============================================================================
// Problem 3: String Conversion and Parsing
// Convert and parse strings
// ============================================================================

const numStr = "123.45";
const dateStr = "2024-12-15";
const csvLine = "apple,banana,orange";

// Your task:
// 1. Parse number from string:
//    - parseInt(numStr), parseFloat(numStr)
//    - Number(numStr), +numStr
//
// 2. Split string: csvLine.split(",")
//
// 3. Challenge: Create a function 'parseCSV' that:
//    - Takes a CSV string line
//    - Returns array of values
//    - Handles quotes and commas inside values
//    - Converts numbers automatically
const numStr = "123.45";
const dateStr = "2024-12-15";
const csvLine = "apple,banana,orange";

// 1. Parse numbers
console.log(parseInt(numStr));   // 123
console.log(parseFloat(numStr)); // 123.45
console.log(Number(numStr));     // 123.45
console.log(+numStr);            // 123.45

// 2. Split CSV
console.log(csvLine.split(",")); // ["apple", "banana", "orange"]

// 3. Challenge: parseCSV function
function parseCSV(line) {
    // Simple CSV parsing, numbers auto-converted
    return line.split(",").map(val => {
        val = val.trim().replace(/^"|"$/g, ""); // remove quotes
        return !isNaN(val) && val !== "" ? +val : val;
    });
}

console.log(parseCSV('apple, "42", 3.14, banana')); 
// ["apple", 42, 3.14, "banana"]
// ============================================================================
// Problem 4: String Validation
// Validate string formats
// ============================================================================

// Your task:
// 1. Check if string is empty: str.length === 0, str === ""
// 2. Check if string contains only letters: use regex or loop
// 3. Check if string is valid email format (basic check)
//
// 4. Challenge: Create a function 'validateString' that:
//    - Takes a string and validation type ("email", "phone", "password")
//    - Returns {valid: true/false, errors: []}
//    - Validates format according to type
//    - Returns detailed error messages

// 1. Check empty
const str = "";
console.log(str.length === 0); // true
console.log(str === "");       // true

// 2. Check letters only
function isLettersOnly(s) {
    return /^[a-zA-Z]+$/.test(s);
}
console.log(isLettersOnly("Hello")); // true
console.log(isLettersOnly("Hello123")); // false

// 3. Basic email format check
function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("userexample.com"));  // false

// 4. Challenge: validateString function
function validateString(str, type) {
    const errors = [];
    let valid = true;

    if (!str || str.trim() === "") {
        valid = false;
        errors.push("String is empty");
    }

    if (type === "email") {
        if (!isValidEmail(str)) {
            valid = false;
            errors.push("Invalid email format");
        }
    } else if (type === "phone") {
        // simple phone: digits only, 10-15 chars
        if (!/^\d{10,15}$/.test(str)) {
            valid = false;
            errors.push("Invalid phone number");
        }
    } else if (type === "password") {
        // minimum 8 chars, at least 1 letter and 1 number
        if (!/(?=.*[a-zA-Z])(?=.*\d).{8,}/.test(str)) {
            valid = false;
            errors.push("Password must be at least 8 chars, with letters and numbers");
        }
    }

    return {valid, errors};
}

console.log(validateString("user@example.com", "email"));
// { valid: true, errors: [] }

console.log(validateString("12345", "phone"));
// { valid: false, errors: ["Invalid phone number"] }

console.log(validateString("pass123", "password"));
// { valid: false, errors: ["Password must be at least 8 chars, with letters and numbers"] }