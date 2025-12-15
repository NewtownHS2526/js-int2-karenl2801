/*
 * ACTIVITY 4: Comparison Operators in Conditional Logic
 * 
 * Problem 1: Using Comparisons in if Statements
 */

const userAge = 20;
const userScore = 85;
const hasMembership = true;

// Your task:
// 1. Write an if statement to check if user is adult (age >= 18)
// 2. Write an if-else to check if score is passing (>= 70)
// 3. Write nested if statements to check:
//    - If user is adult AND has membership, give discount
//    - If user is adult but no membership, show membership offer
//    - If user is not adult, show age restriction message
//
// 4. Challenge: Create a 'calculateDiscount' function that:
//    - Takes age, score, hasMembership
//    - Returns discount percentage based on multiple comparisons
//    - Uses clear comparison logic

const userAge = 20;
const userScore = 85;
const hasMembership = true;

// 1. Check if user is adult
if (userAge >= 18) {
    console.log("User is an adult");
}

// 2. Check if score is passing
if (userScore >= 70) {
    console.log("Passing score");
} else {
    console.log("Failing score");
}

// 3. Nested if statements for membership and age
if (userAge >= 18) {
    if (hasMembership) {
        console.log("Discount applied!");
    } else {
        console.log("Offer membership to get discount");
    }
} else {
    console.log("You are underage");
}

// 4. calculateDiscount function
const calculateDiscount = (age, score, hasMembership) => {
    if (age < 18) return 0;
    if (score < 70) return 5; // small discount for low score
    if (hasMembership) return 20; // full discount
    return 10; // adult without membership
};

console.log(calculateDiscount(20, 85, true));  // 20
console.log(calculateDiscount(17, 90, true));  // 0
console.log(calculateDiscount(25, 65, false)); // 5

// ============================================================================
// Problem 2: Ternary Operator with Comparisons
// Use ternary operator for simple comparisons
// ============================================================================

const price = 100;
const isMember = true;

// Your task:
// 1. Use ternary to set discount: isMember ? 0.1 : 0
// 2. Use ternary to set status: price > 50 ? "expensive" : "affordable"
// 3. Create nested ternary for:
//    - If member: 20% discount
//    - Else if price > 100: 10% discount
//    - Else: 0% discount
//
// 4. Challenge: Convert a multi-condition if-else to a readable ternary chain
// 5. Explain when to use ternary vs if-else

    const price = 100;
const isMember = true;

// 1. Discount based on membership
const discount = isMember ? 0.1 : 0;
console.log(discount); // 0.1

// 2. Status based on price
const status = price > 50 ? "expensive" : "affordable";
console.log(status); // "expensive"

// 3. Nested ternary
const discount2 = isMember
    ? 0.2
    : price > 100
    ? 0.1
    : 0;
console.log(discount2); // 0.2

// 4. Convert multi-condition if-else to ternary
const getDiscount = (member, price) =>
    member ? 20 : price > 100 ? 10 : 0;

console.log(getDiscount(true, 120)); // 20
console.log(getDiscount(false, 150)); // 10
console.log(getDiscount(false, 50));  // 0

// ============================================================================
// Problem 3: Comparison in Loops
// Use comparisons to control loop execution
// ============================================================================

const numbers = [5, 10, 15, 20, 25, 30];

// Your task:
// 1. Use for loop to find all numbers greater than 15
// 2. Use while loop to find first number greater than 20
// 3. Use forEach with comparison to count numbers between 10 and 25
//
// 4. Challenge: Create a 'filterByRange' function that:
//    - Takes an array, min, and max
//    - Returns filtered array using comparisons
//    - Handles edge cases (min > max, empty array, etc.)

const numbers = [5, 10, 15, 20, 25, 30];

// 1. For loop: numbers > 15
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) {
        console.log(numbers[i]);
    }
}

// 2. While loop: first number > 20
let index = 0;
while (index < numbers.length) {
    if (numbers[index] > 20) {
        console.log(numbers[index]); // 25
        break;
    }
    index++;
}

// 3. forEach: count numbers between 10 and 25
let count = 0;
numbers.forEach(num => {
    if (num >= 10 && num <= 25) count++;
});
console.log(count); // 4 (10, 15, 20, 25)

// 4. filterByRange function
const filterByRange = (arr, min, max) => {
    if (!arr || arr.length === 0) return [];
    if (min > max) [min, max] = [max, min];
    return arr.filter(num => num >= min && num <= max);
};

console.log(filterByRange(numbers, 12, 28)); // [15,20,25]
console.log(filterByRange(numbers, 30, 10)); // [10,15,20,25,30] (swapped)

// ============================================================================
// Problem 4: Comparison-Based Sorting
// Use comparisons to sort data
// ============================================================================

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 }
];

// Your task:
// 1. Sort students by grade (ascending) using comparison in sort()
// 2. Sort students by grade (descending) using comparison
// 3. Sort students by name alphabetically
//
// 4. Challenge: Create a 'multiSort' function that:
//    - Takes an array and sort criteria
//    - Can sort by multiple fields (e.g., grade then name)
//    - Uses comparison operators effectively
//    Example: multiSort(students, ["grade", "desc"], ["name", "asc"])

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 }
];

// 1. Sort by grade ascending
students.sort((a, b) => a.grade - b.grade);
console.log(students.map(s => s.name)); // ["Charlie","Alice","Bob","Diana"]

// 2. Sort by grade descending
students.sort((a, b) => b.grade - a.grade);
console.log(students.map(s => s.name)); // ["Diana","Bob","Alice","Charlie"]

// 3. Sort by name alphabetically
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students.map(s => s.name)); // ["Alice","Bob","Charlie","Diana"]

// 4. multiSort function
const multiSort = (arr, ...criteria) => {
    return [...arr].sort((a, b) => {
        for (let [key, order] of criteria) {
            let cmp;
            if (typeof a[key] === "string") {
                cmp = a[key].localeCompare(b[key]);
            } else {
                cmp = a[key] - b[key];
            }
            if (cmp !== 0) return order === "desc" ? -cmp : cmp;
        }
        return 0;
    });
};

console.log(
    multiSort(
        students,
        ["grade", "desc"],
        ["name", "asc"]
    ).map(s => s.name)
); // ["Diana","Bob","Alice","Charlie"]