/*
 * ACTIVITY 4: Special Data Types and Values
 * 
 * Problem 1: NaN (Not a Number)
 * Understand and handle NaN values
 */

const result1 = 0 / 0;
const result2 = Number("not a number");
const result3 = Math.sqrt(-1);

// Your task:
// 1. Check what typeof NaN returns
// 2. Test: NaN === NaN (what does this return? why?)
// 3. Test: isNaN(NaN), isNaN("text"), isNaN(123)
// 4. Use Number.isNaN() for more accurate checking
//
// 5. Challenge: Create a function 'safeDivide' that:
//    - Takes two numbers
//    - Returns result of division
//    - Returns null if result is NaN or Infinity
//    - Handles division by zero

const result1 = 0 / 0;
const result2 = Number("not a number");
const result3 = Math.sqrt(-1);

// 1. typeof NaN
console.log(typeof NaN); // "number"

// 2. NaN comparison
console.log(NaN === NaN); // false → NaN is not equal to anything, even itself

// 3. isNaN tests
console.log(isNaN(NaN));        // true
console.log(isNaN("text"));     // true (coerces to number first!)
console.log(isNaN(123));        // false

// 4. Number.isNaN (more accurate)
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("text"));     // false (does not coerce)
console.log(Number.isNaN(123));        // false

// 5. Challenge: safeDivide function
function safeDivide(a, b) {
    const result = a / b;
    if (!Number.isFinite(result)) {
        return null;
    }
    return result;
}

console.log(safeDivide(10, 2));   // 5
console.log(safeDivide(10, 0));   // null
console.log(safeDivide(0, 0));    // null

// ============================================================================
// Problem 2: Infinity
// Understand Infinity values
// ============================================================================

const posInf = Infinity;
const negInf = -Infinity;
const largeNum = 1e308 * 2;

// Your task:
// 1. Check typeof Infinity
// 2. Test comparisons:
//    - Infinity > 1000
//    - -Infinity < -1000
//    - Infinity === Infinity
//
// 3. Test: Number.isFinite(Infinity), Number.isFinite(123)
//
// 4. Challenge: Create a function 'safeNumber' that:
//    - Takes any value
//    - Returns true if it's a finite number
//    - Returns false for NaN, Infinity, -Infinity, or non-numbers

const posInf = Infinity;
const negInf = -Infinity;
const largeNum = 1e308 * 2;

// 1. typeof Infinity
console.log(typeof Infinity); // "number"

// 2. Comparisons
console.log(Infinity > 1000);      // true
console.log(-Infinity < -1000);    // true
console.log(Infinity === Infinity);// true

// 3. Number.isFinite
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(123));      // true

// 4. Challenge: safeNumber function
function safeNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}

console.log(safeNumber(100));      // true
console.log(safeNumber(Infinity)); // false
console.log(safeNumber(NaN));      // false
console.log(safeNumber("123"));    // false

// ============================================================================
// Problem 3: Symbol Type
// Understand Symbol data type
// ============================================================================

const sym1 = Symbol("description");
const sym2 = Symbol("description");

// Your task:
// 1. Check typeof sym1
// 2. Test: sym1 === sym2 (are they equal? why not?)
// 3. Create symbol property:
//    const obj = {};
//    obj[sym1] = "value";
//
// 4. Challenge: Create a function 'createUniqueKey' that:
//    - Takes a description
//    - Returns a unique Symbol
//    - Use it to create private properties in an object
const sym1 = Symbol("description");
const sym2 = Symbol("description");

// 1. typeof
console.log(typeof sym1); // "symbol"

// 2. Symbols are unique
console.log(sym1 === sym2); // false → each Symbol() is unique

// 3. Symbol as object property
const obj = {};
obj[sym1] = "value";
console.log(obj[sym1]); // "value"

// 4. Challenge: createUniqueKey function
function createUniqueKey(description) {
    return Symbol(description);
}

// Example: private property
const privateKey = createUniqueKey("secret");
const user = {};
user[privateKey] = "hidden info";
console.log(user[privateKey]); // "hidden info"
// ============================================================================
// Problem 4: BigInt Type
// Work with large integers
// ============================================================================

const bigNum1 = BigInt(123);
const bigNum2 = 456n; // BigInt literal

// Your task:
// 1. Check typeof bigNum1
// 2. Perform operations: bigNum1 + bigNum2, bigNum1 * 2n
// 3. Understand limitations:
//    - Can't mix BigInt with regular numbers
//    - Test: bigNum1 + 5 (what error do you get?)
//
// 4. Challenge: Create a function 'safeBigInt' that:
//    - Takes a number or string
//    - Converts to BigInt safely
//    - Handles invalid inputs gracefully
//    - Returns null if conversion fails

const bigNum1 = BigInt(123);
const bigNum2 = 456n; // BigInt literal

// 1. typeof
console.log(typeof bigNum1); // "bigint"

// 2. Operations
console.log(bigNum1 + bigNum2); // 579n
console.log(bigNum1 * 2n);      // 246n

// 3. Limitations
// console.log(bigNum1 + 5); // ❌ TypeError: can't mix BigInt and other types

// 4. Challenge: safeBigInt function
function safeBigInt(value) {
    try {
        if (typeof value === "bigint") return value;
        if (typeof value === "number") return BigInt(value);
        if (typeof value === "string") return BigInt(value.trim());
    } catch (e) {
        return null; // conversion failed
    }
    return null; // unsupported type
}

// Examples
console.log(safeBigInt(123));     // 123n
console.log(safeBigInt("456"));   // 456n
console.log(safeBigInt("abc"));   // null
console.log(safeBigInt(789n));    // 789n