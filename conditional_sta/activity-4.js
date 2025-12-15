/*
 * ACTIVITY 4: Conditional Statements in Loops
 * 
 * Problem 1: Conditionals Inside Loops
 * Use conditionals to control loop behavior
 */

const numbers = [5, 12, 8, 20, 3, 15, 7];

// Your task:
// 1. Loop through numbers and log only even numbers
// 2. Loop through numbers and log only numbers greater than 10
// 3. Loop through numbers and calculate sum of positive numbers only
//
// 4. Challenge: Create a function 'filterAndTransform' that:
//    - Takes an array of numbers
//    - Returns new array with only numbers > 10, each multiplied by 2
//    - Use loop with conditionals

// 1. Log even numbers
for (let num of numbers) {
    if (num % 2 === 0) console.log(num);
}

// 2. Log numbers greater than 10
for (let num of numbers) {
    if (num > 10) console.log(num);
}

// 3. Sum of positive numbers
let sum = 0;
for (let num of numbers) {
    if (num > 0) sum += num;
}
console.log("Sum of positive numbers:", sum);

// 4. Challenge: filterAndTransform
const filterAndTransform = (arr) => {
    const result = [];
    for (let num of arr) {
        if (num > 10) result.push(num * 2);
    }
    return result;
};

console.log(filterAndTransform(numbers)); // [24, 40, 30]

// ============================================================================
// Problem 2: Break and Continue
// Control loop flow with conditionals
// ============================================================================

const scores = [85, 92, 78, 95, 88, 65, 90];

// Your task:
// 1. Loop through scores and stop when you find a score < 70 (use break)
// 2. Loop through scores and skip scores < 80 (use continue)
// 3. Find the first score >= 90 and log its index
//
// 4. Challenge: Create a function 'findFirstPassingScore' that:
//    - Takes an array of scores and passing threshold
//    - Returns index of first passing score
//    - Returns -1 if no passing score found
//    - Use break appropriately
// 1. Stop loop when score < 70
for (let score of scores) {
    if (score < 70) break;
    console.log(score);
}

// 2. Skip scores < 80
for (let score of scores) {
    if (score < 80) continue;
    console.log(score);
}

// 3. Find first score >= 90 and log index
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        console.log("First score >= 90 at index:", i);
        break;
    }
}

// 4. Challenge: findFirstPassingScore
const findFirstPassingScore = (arr, passing) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= passing) return i;
    }
    return -1;
};

console.log(findFirstPassingScore(scores, 80)); // 0
console.log(findFirstPassingScore(scores, 100)); // -1
// ============================================================================
// Problem 3: Nested Loops with Conditionals
// Use conditionals in nested loop structures
// ============================================================================

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Your task:
// 1. Loop through matrix and log all even numbers
// 2. Loop through matrix and calculate sum of all numbers
// 3. Loop through matrix and find the maximum value
//
// 4. Challenge: Create a function 'findInMatrix' that:
//    - Takes a 2D array and a target value
//    - Returns {row, col} if found, null if not found
//    - Use nested loops with conditional checks
// 1. Log all even numbers in matrix
for (let row of matrix) {
    for (let num of row) {
        if (num % 2 === 0) console.log(num);
    }
}

// 2. Sum of all numbers
let total = 0;
for (let row of matrix) {
    for (let num of row) {
        total += num;
    }
}
console.log("Sum of all numbers:", total);

// 3. Maximum value
let maxVal = -Infinity;
for (let row of matrix) {
    for (let num of row) {
        if (num > maxVal) maxVal = num;
    }
}
console.log("Max value:", maxVal);

// 4. Challenge: findInMatrix
const findInMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) return { row: i, col: j };
        }
    }
    return null;
};

console.log(findInMatrix(matrix, 5)); // { row: 1, col: 1 }
console.log(findInMatrix(matrix, 10)); // null
// ============================================================================
// Problem 4: Conditional Loop Control
// Complex loop scenarios with conditionals
// ============================================================================

const students = [
    { name: "Alice", grade: 85, attendance: 95 },
    { name: "Bob", grade: 92, attendance: 88 },
    { name: "Charlie", grade: 65, attendance: 75 },
    { name: "Diana", grade: 78, attendance: 90 }
];

// Your task:
// 1. Loop through students and log names of those who passed (grade >= 70)
// 2. Loop through students and count how many have perfect attendance (100)
// 3. Loop through students and find first student with grade < 70
//
// 4. Challenge: Create a function 'analyzeStudents' that:
//    - Takes array of student objects
//    - Returns object with:
//      - passed: array of passing students (grade >= 70)
//      - failed: array of failing students
//      - excellent: array of students with grade >= 90 AND attendance >= 95
//    - Use loops with multiple conditionals

// 1. Log names of students who passed (grade >= 70)
for (let student of students) {
    if (student.grade >= 70) console.log(student.name);
}

// 2. Count perfect attendance (100)
let perfectAttendance = 0;
for (let student of students) {
    if (student.attendance === 100) perfectAttendance++;
}
console.log("Perfect attendance count:", perfectAttendance);

// 3. Find first student with grade < 70
for (let student of students) {
    if (student.grade < 70) {
        console.log("First failing student:", student.name);
        break;
    }
}

// 4. Challenge: analyzeStudents
const analyzeStudents = (arr) => {
    const result = { passed: [], failed: [], excellent: [] };
    for (let s of arr) {
        if (s.grade >= 70) result.passed.push(s);
        else result.failed.push(s);

        if (s.grade >= 90 && s.attendance >= 95) result.excellent.push(s);
    }
    return result;
};

console.log(analyzeStudents(students));
/* Example output:
{
  passed: [Alice, Bob, Diana],
  failed: [Charlie],
  excellent: [Alice]
}
*/