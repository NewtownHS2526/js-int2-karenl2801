/*
 * ACTIVITY 5: Recursion
 * 
 * Problem 1: Basic Recursion
 * Understand and implement recursive functions
 */

// Your task:
// 1. Create a recursive function 'factorial' that:
//    - Takes a number n
//    - Returns n! (n * (n-1) * ... * 1)
//    - Base case: factorial(0) = 1
//
// 2. Create a recursive function 'fibonacci' that:
//    - Takes position n
//    - Returns nth Fibonacci number
//    - Base cases: fibonacci(0) = 0, fibonacci(1) = 1
//
// 3. Challenge: Create a recursive function 'power' that:
//    - Takes base and exponent
//    - Returns base^exponent
//    - Base case: power(x, 0) = 1

// 1. Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 2. Fibonacci
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8

// 3. Power
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
console.log(power(2, 5)); // 32

// ============================================================================
// Problem 2: Recursion with Arrays
// Use recursion to process arrays
// ============================================================================

const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Create recursive function 'sumArray' that:
//    - Takes an array of numbers
//    - Returns sum of all elements
//    - Base case: empty array returns 0
//
// 2. Create recursive function 'findMax' that:
//    - Takes an array of numbers
//    - Returns maximum value
//    - Base case: single element returns that element
//
// 3. Challenge: Create recursive function 'reverseArray' that:
//    - Takes an array
//    - Returns reversed array
//    - Base case: empty or single element array

const numbers = [1, 2, 3, 4, 5];

// 1. Sum of array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray(numbers)); // 15

// 2. Find max
function findMax(arr) {
    if (arr.length === 1) return arr[0];
    const maxRest = findMax(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
}
console.log(findMax(numbers)); // 5

// 3. Reverse array
function reverseArray(arr) {
    if (arr.length <= 1) return arr;
    return reverseArray(arr.slice(1)).concat(arr[0]);
}
console.log(reverseArray(numbers)); // [5,4,3,2,1]

// ============================================================================
// Problem 3: Recursive Problem Solving
// Solve problems using recursion
// ============================================================================

// Your task:
// 1. Create recursive function 'countDown' that:
//    - Takes a number
//    - Logs countdown from that number to 0
//
// 2. Create recursive function 'isPalindrome' that:
//    - Takes a string
//    - Returns true if palindrome, false otherwise
//    - Base case: empty or single character
//
// 3. Challenge: Create recursive function 'flattenArray' that:
//    - Takes nested array
//    - Returns flattened array
//    - Example: flattenArray([1, [2, 3], [4, [5]]]) // [1, 2, 3, 4, 5]

// 1. Countdown
function countDown(n) {
    if (n < 0) return;
    console.log(n);
    countDown(n - 1);
}
countDown(5); // 5 4 3 2 1 0

// 2. Palindrome check
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// 3. Flatten array
function flattenArray(arr) {
    if (!Array.isArray(arr)) return [arr];
    if (arr.length === 0) return [];
    return flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
}
console.log(flattenArray([1, [2, 3], [4, [5]]])); // [1,2,3,4,5]

// ============================================================================
// Problem 4: Advanced Recursion
// Handle complex recursive problems
// ============================================================================

// Your task:
// 1. Create recursive function 'binarySearch' that:
//    - Takes sorted array, target, start index, end index
//    - Returns index of target or -1
//    - Base case: element found or search space exhausted
//
// 2. Create recursive function 'permutations' that:
//    - Takes a string
//    - Returns array of all permutations
//    - Base case: single character
//
// 3. Challenge: Create recursive function 'pathFinder' that:
//    - Takes a 2D array (maze) and start/end positions
//    - Returns true if path exists, false otherwise
//    - Use recursion to explore paths

// 1. Binary Search
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}
console.log(binarySearch([1,3,5,7,9], 5)); // 2

// 2. Permutations
function permutations(str) {
    if (str.length <= 1) return [str];
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (const perm of permutations(remaining)) {
            result.push(char + perm);
        }
    }
    return result;
}
console.log(permutations("abc")); 
// ["abc","acb","bac","bca","cab","cba"]

// 3. Path Finder in Maze (0 = empty, 1 = wall)
function pathFinder(maze, start, end, visited = {}) {
    const [x, y] = start;
    const [ex, ey] = end;
    const key = `${x},${y}`;
    if (x < 0 || y < 0 || x >= maze.length || y >= maze[0].length) return false;
    if (maze[x][y] === 1 || visited[key]) return false;
    if (x === ex && y === ey) return true;

    visited[key] = true;
    // explore 4 directions
    return pathFinder(maze, [x+1,y], end, visited) ||
           pathFinder(maze, [x-1,y], end, visited) ||
           pathFinder(maze, [x,y+1], end, visited) ||
           pathFinder(maze, [x,y-1], end, visited);
}
const maze = [
    [0,0,1],
    [0,0,0],
    [1,0,0]
];
console.log(pathFinder(maze, [0,0], [2,2])); // true