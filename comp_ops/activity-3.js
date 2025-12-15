/*
 * ACTIVITY 3: Advanced Comparison Techniques
 * 
 * Problem 1: Comparing Arrays and Objects
 * Understand how objects and arrays are compared
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

// Your task:
// 1. Test: arr1 === arr2 (what does this return and why?)
// 2. Test: arr1 === arr3 (what does this return and why?)
// 3. Test: obj1 === obj2 (what does this return and why?)
// 4. Test: obj1 === obj3 (what does this return and why?)
//
// 5. Challenge: Write a function 'deepEqual' that compares two objects/arrays 
//    by their values, not references
// 6. Challenge: Write a function 'compareArrays' that checks if two arrays 
//    have the same elements in the same order

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

// 1. arr1 === arr2 → false (different references)
console.log(arr1 === arr2); // false

// 2. arr1 === arr3 → true (same reference)
console.log(arr1 === arr3); // true

// 3. obj1 === obj2 → false (different references)
console.log(obj1 === obj2); // false

// 4. obj1 === obj3 → true (same reference)
console.log(obj1 === obj3); // true

// 5. Deep comparison for objects/arrays
const deepEqual = (a, b) => {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (a == null || b == null) return false;
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((val, index) => deepEqual(val, b[index]));
    }
    if (typeof a === "object") {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        return keysA.every(key => deepEqual(a[key], b[key]));
    }
    return false;
};

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(obj1, obj2)); // true

// 6. Compare arrays by elements
const compareArrays = (a, b) => 
    a.length === b.length && a.every((val, i) => val === b[i]);

console.log(compareArrays(arr1, arr2)); // true

// ============================================================================
// Problem 2: Chaining Comparison Operators
// Use comparison operator chaining effectively
// ============================================================================

const score = 85;
const age = 25;

// Your task:
// 1. Check if score is between 80 and 90: 80 <= score && score <= 90
// 2. Check if age is between 18 and 65: Use chaining
// 3. Check if score is NOT between 0 and 100 (invalid score)
//
// 4. Challenge: Create a function 'isInRange' that:
//    - Takes a value, min, and max
//    - Returns true if value is between min and max (inclusive)
//    - Handles edge cases (what if min > max?)
//
// 5. Challenge: Create a function 'validateInput' that checks:
//    - If a number is in valid range (0-100)
//    - If a string length is in valid range (1-50)
//    - Returns detailed validation result

const score = 85;
const age = 25;

// 1. Score between 80 and 90
console.log(80 <= score && score <= 90); // true

// 2. Age between 18 and 65
console.log(18 <= age && age <= 65); // true

// 3. Score NOT between 0 and 100
console.log(score < 0 || score > 100); // false

// 4. Function to check range safely
const isInRange = (value, min, max) => {
    if (min > max) [min, max] = [max, min]; // swap if min > max
    return value >= min && value <= max;
};

console.log(isInRange(50, 100, 0)); // true (swapped automatically)

// 5. validateInput function
const validateInput = (input) => {
    if (typeof input === "number") {
        return { valid: isInRange(input, 0, 100), type: "number" };
    }
    if (typeof input === "string") {
        return { valid: isInRange(input.length, 1, 50), type: "string" };
    }
    return { valid: false, type: typeof input };
};

console.log(validateInput(150));     // {valid: false, type: "number"}
console.log(validateInput("Hello")); // {valid: true, type: "string"}

// ============================================================================
// Problem 3: Comparison with Null and Undefined
// Handle edge cases in comparisons
// ============================================================================

let value1;
let value2 = null;
let value3 = 0;
let value4 = "";

// Your task:
// 1. Compare each value with: null, undefined, 0, ""
// 2. Predict: value1 == null, value1 === null, value2 == undefined
// 3. Create checks for:
//    - If a variable is defined (not undefined)
//    - If a variable has a value (not null or undefined)
//    - If a variable is "falsy" (0, "", null, undefined, false)
//
// 4. Challenge: Write a 'safeCompare' function that handles null/undefined gracefully:
//    safeCompare(a, b) should return:
//    - true if both are null/undefined
//    - false if one is null/undefined and other isn't
//    - actual comparison otherwise

let value1;
let value2 = null;
let value3 = 0;
let value4 = "";

// Compare with null/undefined
console.log(value1 == null);  // true
console.log(value1 === null); // false
console.log(value2 == undefined); // true

// Check if variable is defined
const isDefined = v => v !== undefined;
console.log(isDefined(value1)); // false

// Check if variable has value (not null or undefined)
const hasValue = v => v != null;
console.log(hasValue(value2)); // false

// Check if variable is falsy
const isFalsy = v => !v;
console.log(isFalsy(value3)); // true
console.log(isFalsy(value4)); // true

// Safe compare function
const safeCompare = (a, b) => {
    if ((a == null) && (b == null)) return true;
    if ((a == null) || (b == null)) return false;
    return a === b;
};

console.log(safeCompare(null, undefined)); // true
console.log(safeCompare(null, 0));         // false
console.log(safeCompare(5, 5));            // true

// ============================================================================
// Problem 4: Performance Considerations
// Optimize comparison operations
// ============================================================================

const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your task:
// 1. Compare: largeArray.length > 0 vs largeArray.length !== 0
//    Which is more readable? Which is slightly faster?
//
// 2. Compare: value == null vs value === null || value === undefined
//    Which is preferred and why?
//
// 3. Challenge: Create a 'findMax' function that:
//    - Takes an array of numbers
//    - Returns the maximum value
//    - Handles empty arrays, null/undefined
//    - Uses efficient comparisons
//
// 4. Challenge: Create a 'binarySearch' function that:
//    - Takes a sorted array and target value
//    - Uses comparisons efficiently (<, >, ===)
//    - Returns index if found, -1 otherwise

const largeArray = [1,2,3,4,5,6,7,8,9,10];

// 1. Compare length
console.log(largeArray.length > 0);  // true, more readable
console.log(largeArray.length !== 0); // true, slightly more operations

// 2. Compare null vs undefined
let val;
console.log(val == null); // true (checks null or undefined)
console.log(val === null || val === undefined); // same result, more verbose
// Preferred: val == null for simplicity

// 3. findMax function
const findMax = arr => (arr && arr.length > 0) ? Math.max(...arr) : null;

console.log(findMax([1,5,3])); // 5
console.log(findMax([]));      // null
console.log(findMax(null));    // null

// 4. Binary search function
const binarySearch = (arr, target) => {
    if (!arr || arr.length === 0) return -1;
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
};

console.log(binarySearch([1,3,5,7,9], 5)); // 2
console.log(binarySearch([1,3,5,7,9], 6)); // -1