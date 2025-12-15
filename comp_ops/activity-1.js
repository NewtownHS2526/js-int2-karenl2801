/*
 * ACTIVITY 1: Understanding Comparison Operators
 * 
 * Problem 1: Equality Operators (== vs ===)
 * Understand the difference between loose and strict equality
 */

// Your task:
// 1. Predict the output of each comparison, then test:
console.log(5 == "5");        // What does this return?
console.log(5 === "5");       // What does this return?
console.log(0 == false);      // What does this return?
console.log(0 === false);     // What does this return?
console.log(null == undefined); // What does this return?
console.log(null === undefined); // What does this return?

// 2. Create 5 examples where == returns true but === returns false
// 3. Explain when you would use == vs === in real code

console.log(5 == "5");         // true (loose equality converts string "5" to number 5)
console.log(5 === "5");        // false (strict equality checks type too)
console.log(0 == false);       // true (0 is coerced to false)
console.log(0 === false);      // false (different types: number vs boolean)
console.log(null == undefined); // true (loosely equal)
console.log(null === undefined); // false (different types)

console.log("0" == 0);      // true, "0" → 0
console.log(false == 0);    // true, false → 0
console.log(true == 1);     // true, true → 1
console.log("" == 0);       // true, "" → 0
console.log(null == undefined); // true

// ============================================================================
// Problem 2: Relational Operators
// Work with <, >, <=, >= operators
// ============================================================================

const age1 = 18;
const age2 = 21;
const score1 = 85;
const score2 = 90;

// Your task:
// 1. Compare ages: Is age1 less than age2? Is age1 at least 18?
// 2. Compare scores: Is score1 greater than 80? Is score2 at least 90?
// 3. Create expressions that check if a student can:
//    - Vote (age >= 18)
//    - Drive (age >= 16)
//    - Drink (age >= 21)
//    - Get senior discount (age >= 65)
// 4. Challenge: Write a function 'checkEligibility' that takes age and returns 
//    an object with all eligibility checks

const age1 = 18;
const age2 = 21;
const score1 = 85;
const score2 = 90;

// Comparisons
console.log(age1 < age2);   // true
console.log(age1 >= 18);    // true
console.log(score1 > 80);   // true
console.log(score2 >= 90);  // true

// Eligibility checks
const canVote = age => age >= 18;
const canDrive = age => age >= 16;
const canDrink = age => age >= 21;
const seniorDiscount = age => age >= 65;

// Example checks
console.log(canVote(20));        // true
console.log(canDrive(15));       // false
console.log(canDrink(22));       // true
console.log(seniorDiscount(70)); // true

// Challenge: checkEligibility function
const checkEligibility = age => ({
    canVote: age >= 18,
    canDrive: age >= 16,
    canDrink: age >= 21,
    seniorDiscount: age >= 65
});

console.log(checkEligibility(20));

// ============================================================================
// Problem 3: String Comparisons
// Understand how strings are compared
// ============================================================================

const name1 = "Alice";
const name2 = "Bob";
const name3 = "alice";

// Your task:
// 1. Compare: name1 < name2 (what does this mean for strings?)
// 2. Compare: name1 === name3 (case-sensitive comparison)
// 3. How would you do a case-insensitive comparison?
// 4. Challenge: Create a function 'sortNames' that sorts an array of names 
//    alphabetically, case-insensitively

const name1 = "Alice";
const name2 = "Bob";
const name3 = "alice";

// Compare strings (lexicographical order)
console.log(name1 < name2);  // true ("A" comes before "B")
console.log(name1 === name3); // false (case-sensitive)

// Case-insensitive comparison
console.log(name1.toLowerCase() === name3.toLowerCase()); // true

// Challenge: sortNames function
const sortNames = arr => arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(sortNames(["Bob", "alice", "Charlie", "alice"])); 
// ["alice", "alice", "Bob", "Charlie"]

// ============================================================================
// Problem 4: Comparison with Different Data Types
// Understand type coercion in comparisons
// ============================================================================

// Your task:
// 1. Predict and test these comparisons:
//    "10" > 9
//    "10" < 20
//    "apple" > "banana"
//    true > false
//    null < 1
//    undefined == null

// 2. Create 3 examples where type coercion leads to unexpected results
// 3. Explain how to avoid these issues
// 4. Challenge: Write a 'safeCompare' function that compares two values 
//    strictly without type coercion, but handles edge cases gracefully
console.log("10" > 9);          // true ("10" → 10)
console.log("10" < 20);         // true ("10" → 10)
console.log("apple" > "banana"); // false (lexicographic)
console.log(true > false);       // true (true → 1, false → 0)
console.log(null < 1);           // true (null → 0)
console.log(undefined == null);  // true (loose equality)

console.log("" == 0);          // true
console.log(false == "0");     // true
console.log([] == "");         // true

const safeCompare = (a, b, operator) => {
    switch(operator) {
        case "==": return a === b;
        case "!=": return a !== b;
        case ">": return Number(a) > Number(b);
        case "<": return Number(a) < Number(b);
        case ">=": return Number(a) >= Number(b);
        case "<=": return Number(a) <= Number(b);
        default: throw new Error("Invalid operator");
    }
};

console.log(safeCompare("10", 10, "==")); // false (strict)
console.log(safeCompare("10", 10, ">"));  // false (10 > 10? no)
