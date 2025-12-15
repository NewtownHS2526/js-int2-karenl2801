/*
 * ACTIVITY 2: Type Conversion and Coercion
 * 
 * Problem 1: Explicit Type Conversion
 * Convert between data types intentionally
 */

const numStr = "123";
const strNum = 456;
const boolStr = "true";

// Your task:
// 1. Convert string to number:
//    - Number("123")
//    - parseInt("123")
//    - parseFloat("123.45")
//    - +"123"
//
// 2. Convert number to string:
//    - String(123)
//    - (123).toString()
//    - 123 + ""
//
// 3. Convert to boolean:
//    - Boolean(1), Boolean(0)
//    - Boolean(""), Boolean("text")
//
// 4. Challenge: Create a function 'smartConvert' that:
//    - Takes a value and target type ("number", "string", "boolean")
//    - Returns converted value
//    - Handles invalid conversions gracefully
const numStr = "123";
const strNum = 456;
const boolStr = "true";

// 1. Convert string to number
console.log(Number(numStr));      // 123
console.log(parseInt(numStr));    // 123
console.log(parseFloat("123.45"));// 123.45
console.log(+"123");              // 123

// 2. Convert number to string
console.log(String(strNum));      // "456"
console.log((strNum).toString()); // "456"
console.log(strNum + "");         // "456"

// 3. Convert to boolean
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean("text"));     // true

// 4. Challenge: smartConvert function
function smartConvert(value, targetType) {
    switch(targetType) {
        case "number":
            const num = Number(value);
            return isNaN(num) ? null : num; // null for invalid numbers
        case "string":
            return String(value);
        case "boolean":
            return Boolean(value);
        default:
            return value; // unknown type, return as is
    }
}

// Examples
console.log(smartConvert("123", "number"));   // 123
console.log(smartConvert("abc", "number"));   // null
console.log(smartConvert(456, "string"));     // "456"
console.log(smartConvert("", "boolean"));     // false

// ============================================================================
// Problem 2: Type Coercion
// Understand implicit type conversion
// ============================================================================

// Your task:
// 1. Predict and test these expressions:
//    "5" + 3        // What happens?
//    5 + "3"        // What happens?
//    "5" - 3        // What happens?
//    "5" * 3        // What happens?
//    "5" / 3        // What happens?
//
// 2. Test comparisons:
//    "5" == 5       // Loose equality
//    "5" === 5      // Strict equality
//    0 == false
//    0 === false
//
// 3. Challenge: Create examples showing:
//    - When coercion is helpful
//    - When coercion causes problems
//    - How to avoid unwanted coercion

// 1. Implicit conversions
console.log("5" + 3); // "53"   (string concatenation)
console.log(5 + "3"); // "53"   (string concatenation)
console.log("5" - 3); // 2      (string coerced to number)
console.log("5" * 3); // 15     (string coerced to number)
console.log("5" / 3); // 1.666.. (string coerced to number)

// 2. Comparisons
console.log("5" == 5);  // true  (loose equality, type coercion)
console.log("5" === 5); // false (strict equality, no coercion)
console.log(0 == false); // true
console.log(0 === false);// false

// 3. Examples of coercion
// Helpful:
console.log("123" - 23); // 100

// Causes problems:
console.log("123" + 23); // "12323" (concatenation instead of numeric addition)

// Avoid unwanted coercion by using strict operators and explicit conversion
console.log(Number("123") + 23); // 146

// ============================================================================
// Problem 3: Type Checking
// Check data types accurately
// ============================================================================

const value1 = 42;
const value2 = "42";
const value3 = null;
const value4 = undefined;
const value5 = [];
const value6 = {};

// Your task:
// 1. Use typeof operator on each value
// 2. Understand typeof limitations:
//    - typeof null returns "object" (why?)
//    - typeof [] returns "object"
//
// 3. Better type checking:
//    - Array.isArray([])
//    - value === null for null
//    - value === undefined for undefined
//
// 4. Challenge: Create a function 'getType' that:
//    - Returns accurate type: "number", "string", "boolean", "null", 
//      "undefined", "array", "object", "function"
//    - Handles all edge cases correctly

const value1 = 42;
const value2 = "42";
const value3 = null;
const value4 = undefined;
const value5 = [];
const value6 = {};

// 1. typeof
console.log(typeof value1); // "number"
console.log(typeof value2); // "string"
console.log(typeof value3); // "object"  (JS quirk)
console.log(typeof value4); // "undefined"
console.log(typeof value5); // "object"  (arrays are objects)
console.log(typeof value6); // "object"

// 2. Better type checking
console.log(Array.isArray(value5)); // true
console.log(value3 === null);       // true
console.log(value4 === undefined);  // true

// 3. Challenge: getType function
function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value; // number, string, boolean, undefined, function, object
}

// Examples
console.log(getType(42));      // "number"
console.log(getType("hello")); // "string"
console.log(getType([]));      // "array"
console.log(getType(null));    // "null"
console.log(getType({}));      // "object"

// ============================================================================
// Problem 4: Type Safety Practices
// Write type-safe code
// ============================================================================

function addNumbers(a, b) {
    // Your task:
    // 1. Add type checking to ensure a and b are numbers
    // 2. Return error message if types are invalid
    // 3. Handle edge cases (null, undefined, string numbers)
    
    return a + b;
}

// Challenge: Create a function 'safeAdd' that:
// - Validates both parameters are numbers
// - Converts string numbers if possible ("123" -> 123)
// - Returns {success: true, result: sum} or {success: false, error: message}
// - Never throws errors, always returns a result object

function addNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: both parameters must be numbers";
    }
    return a + b;
}

// Challenge: safeAdd function
function safeAdd(a, b) {
    // Convert string numbers if possible
    const numA = typeof a === "string" ? Number(a) : a;
    const numB = typeof b === "string" ? Number(b) : b;

    if (typeof numA !== "number" || isNaN(numA)) {
        return {success: false, error: "Invalid first parameter"};
    }
    if (typeof numB !== "number" || isNaN(numB)) {
        return {success: false, error: "Invalid second parameter"};
    }

    return {success: true, result: numA + numB};
}

// Examples
console.log(safeAdd(10, 5));       // {success: true, result: 15}
console.log(safeAdd("10", 5));     // {success: true, result: 15}
console.log(safeAdd("abc", 5));    // {success: false, error: "Invalid first parameter"}
console.log(safeAdd(10, null));    // {success: false, error: "Invalid second parameter"}