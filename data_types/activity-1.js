/*
 * ACTIVITY 1: Primitive Data Types
 * 
 * Problem 1: Number Type
 * Work with numbers and understand numeric operations
 */

const num1 = 10;
const num2 = 3.14;
const num3 = -5;
const num4 = 1e6; // Scientific notation

// Your task:
// 1. Log the type of each number using typeof operator
// 2. Perform arithmetic: addition, subtraction, multiplication, division, modulo
// 3. Understand special numbers:
//    - What is typeof Infinity?
//    - What is typeof NaN?
//    - Test: 0 / 0, 1 / 0, -1 / 0
//
// 4. Challenge: Create a function 'numberInfo' that:
//    - Takes a number
//    - Returns object with: {type, isInteger, isPositive, isFinite, value}
//    - Handles edge cases (NaN, Infinity)

const num1 = 10;
const num2 = 3.14;
const num3 = -5;
const num4 = 1e6; // 1,000,000

// 1. Log type of each number
console.log(typeof num1); // "number"
console.log(typeof num2); // "number"
console.log(typeof num3); // "number"
console.log(typeof num4); // "number"

// 2. Arithmetic operations
console.log(num1 + num2); // Addition: 13.14
console.log(num1 - num3); // Subtraction: 15
console.log(num1 * num2); // Multiplication: 31.4
console.log(num1 / num2); // Division: ~3.183
console.log(num1 % num2); // Modulo: 10 % 3.14 ~ 0.58

// 3. Special numbers
console.log(typeof Infinity); // "number"
console.log(typeof NaN);      // "number"

console.log(0 / 0);   // NaN
console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity

// 4. Challenge: numberInfo function
function numberInfo(value) {
    return {
        type: typeof value,
        isInteger: Number.isInteger(value),
        isPositive: value > 0,
        isFinite: Number.isFinite(value),
        value
    };
}

// Example
console.log(numberInfo(0 / 0)); // {type: "number", isInteger: false, isPositive: false, isFinite: false, value: NaN}
console.log(numberInfo(42));    // {type: "number", isInteger: true, isPositive: true, isFinite: true, value: 42}

// ============================================================================
// Problem 2: String Type
// Work with strings and string operations
// ============================================================================

const str1 = "Hello";
const str2 = 'World';
const str3 = `Template`;

// Your task:
// 1. Log the type of each string
// 2. Concatenate strings: str1 + " " + str2
// 3. Use template literals: `${str1} ${str2}!`
// 4. Access string length: str1.length
// 5. Access characters: str1[0], str1.charAt(0)
//
// 6. Challenge: Create a function 'stringAnalyzer' that:
//    - Takes a string
//    - Returns object with: {length, firstChar, lastChar, isEmpty, type}
//    - Handle empty strings and edge cases

const str1 = "Hello";
const str2 = 'World';
const str3 = `Template`;

// 1. Log types
console.log(typeof str1); // "string"
console.log(typeof str2); // "string"
console.log(typeof str3); // "string"

// 2. Concatenation
console.log(str1 + " " + str2); // "Hello World"

// 3. Template literals
console.log(`${str1} ${str2}!`); // "Hello World!"

// 4. String length
console.log(str1.length); // 5

// 5. Access characters
console.log(str1[0]);       // "H"
console.log(str1.charAt(0)); // "H"

// 6. Challenge: stringAnalyzer function
function stringAnalyzer(str) {
    return {
        type: typeof str,
        length: str.length,
        firstChar: str.charAt(0) || null,
        lastChar: str.charAt(str.length - 1) || null,
        isEmpty: str.length === 0
    };
}

// Example
console.log(stringAnalyzer("Hello")); // {type: "string", length: 5, firstChar: "H", lastChar: "o", isEmpty: false}
console.log(stringAnalyzer(""));      // {type: "string", length: 0, firstChar: null, lastChar: null, isEmpty: true}

// ============================================================================
// Problem 3: Boolean Type
// Work with boolean values and logical operations
// ============================================================================

const bool1 = true;
const bool2 = false;
const truthy1 = 1;
const falsy1 = 0;

// Your task:
// 1. Log the type of bool1 and bool2
// 2. Understand truthy/falsy values:
//    - Test: Boolean(0), Boolean(""), Boolean(null), Boolean(undefined)
//    - Test: !!0, !!"", !!null
// 3. Use logical operators: &&, ||, !
//
// 4. Challenge: Create a function 'isTruthy' that:
//    - Takes any value
//    - Returns true if value is truthy, false if falsy
//    - Test with various data types

const bool1 = true;
const bool2 = false;
const truthy1 = 1;
const falsy1 = 0;

// 1. Log types
console.log(typeof bool1); // "boolean"
console.log(typeof bool2); // "boolean"

// 2. Truthy/falsy values
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

console.log(!!0);               // false
console.log(!!"");              // false
console.log(!!null);            // false

// 3. Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// 4. Challenge: isTruthy function
function isTruthy(value) {
    return !!value;
}

// Examples
console.log(isTruthy(0));       // false
console.log(isTruthy("Hello")); // true
console.log(isTruthy(null));    // false
console.log(isTruthy(42));      // true

// ============================================================================
// Problem 4: Undefined and Null
// Understand the difference between undefined and null
// ============================================================================

let undefVar;
const nullVar = null;

// Your task:
// 1. Check types: typeof undefVar, typeof nullVar
// 2. Understand when variables are undefined vs null
// 3. Test comparisons:
//    - undefined == null
//    - undefined === null
//    - undefVar === undefined
//    - nullVar === null
//
// 4. Challenge: Create a function 'checkValue' that:
//    - Takes any value
//    - Returns: "undefined", "null", "empty string", "zero", or "has value"
//    - Handles all edge cases appropriately

let undefVar;
const nullVar = null;

// 1. Check types
console.log(typeof undefVar); // "undefined"
console.log(typeof nullVar);  // "object" (JS quirk)

// 2. Comparisons
console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log(undefVar === undefined); // true
console.log(nullVar === null);       // true

// 3. Challenge: checkValue function
function checkValue(value) {
    if (value === undefined) return "undefined";
    if (value === null) return "null";
    if (value === "") return "empty string";
    if (value === 0) return "zero";
    return "has value";
}

// Examples
console.log(checkValue(undefined)); // "undefined"
console.log(checkValue(null));      // "null"
console.log(checkValue(""));        // "empty string"
console.log(checkValue(0));         // "zero"
console.log(checkValue("Hello"));   // "has value"