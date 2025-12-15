/*
 * ACTIVITY 2: Arrow Functions vs Regular Functions
 * 
 * Problem 1: Function Declaration Analysis
 * Compare and contrast these two implementations:
 */

// Version 1
function double(x) {
    return x * 2;
}

// Version 2
const double = (x) => x * 2;

// Your task:
// 1. Can you call 'double' before it's declared in each version? Test your hypothesis.
// 2. Can you reassign 'double' in each version? Why or why not?
// 3. Which would you use in different scenarios and why?
// 4. Create test cases for each scenario

// version 1
function double(x) {
    return x * 2;
}

//version 2 
const double = (x) => x * 2;

// yes, version 1 can call double befpre it's declared but version 2 cannot. i can reassign double to version 1 but can't with version 2
//test cases:
console.log(double(5)); // 10

// ============================================================================
// Problem 2: Arrow Function with Callbacks
// You need to process a list of students' grades. Write arrow functions to:
// ============================================================================

const scores = [95, 82, 73, 88, 67, 91, 55, 78];

// Your task:
// 1. Filter students who scored above 75
// 2. Map their scores to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
// 3. Calculate the average score of all students
// 4. Challenge: Combine all operations to get letter grades for only passing students (75+), 
//    then calculate the average of those passing scores

const scores = [95, 82, 73, 88, 67, 91, 55, 78];
//students above 75 grade
const above75 = scores.filter(score => score > 75);
console.log(above75);

//map scores
const letterGrades = scores.map(score => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
});
console.log(letterGrades);

//average score
const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(average);

// passing students only
const passingAverage = scores
    .filter(score => score >= 75)
    .reduce((sum, score, _, arr) => sum + score / arr.length, 0);

console.log(passingAverage);

// ============================================================================
// Problem 3: Nested Arrow Functions
// Create a function 'createMultiplier' that takes a number and returns an arrow function.
// The returned arrow function should take another number and multiply it by the first number.
// ============================================================================

// Example usage:
// const double = createMultiplier(2);
// console.log(double(5)); // Should output 10

// Your task:
// 1. Implement createMultiplier using arrow functions
// 2. Create triple = createMultiplier(3) and test it
// 3. Challenge: Create a 'createCalculator' function that returns an object with four 
//    arrow function methods: add, subtract, multiply, and divide, all using the initial 
//    number as one operand

//create multiplier
const createMultiplier = x => y => x * y;

//test
const triple = createMultiplier(3);
console.log(triple(5)); // 15

//calculator
const createCalculator = x => ({
    add: y => x + y,
    subtract: y => x - y,
    multiply: y => x * y,
    divide: y => x / y
});

//test it
const calc = createCalculator(10);
console.log(calc.add(5));       // 15
console.log(calc.subtract(3));  // 7
console.log(calc.multiply(2));  // 20
console.log(calc.divide(5));    // 2

// ============================================================================
// Problem 4: Debugging Arrow Functions
// The following code has errors. Identify and fix them:
// ============================================================================

const processData = (data) => {
    return data.map(item => {
        if (item > 10) {
            return item * 2;
        }
        return item;
    }).filter(item => item > 5);
}

const numbers = [3, 8, 15, 22, 5];

// Your task:
// 1. Identify all errors in the code above
// 2. Fix the errors
// 3. Test with the numbers array
// 4. Challenge: Rewrite to handle edge cases like empty arrays, non-numeric values, 
//    and null/undefined

//no errors
//test:
const numbers = [3, 8, 15, 22, 5];
console.log(processData(numbers)); // [8, 30, 44]
//rewrite
const processData = data => {
    if (!Array.isArray(data)) return [];

    return data
        .filter(item => typeof item === "number")
        .map(item => (item > 10 ? item * 2 : item))
        .filter(item => item > 5);
};
