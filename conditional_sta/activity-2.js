/*
 * ACTIVITY 2: Ternary Operator and Logical Operators
 * 
 * Problem 1: Ternary Operator
 * Use ternary operator for simple conditionals
 */

const age = 18;
const price = 100;

// Your task:
// 1. Use ternary to assign status: age >= 18 ? "Adult" : "Minor"
// 2. Use ternary to calculate discount: price > 50 ? price * 0.9 : price
// 3. Use ternary to set message: age >= 21 ? "Can drink" : "Cannot drink"
//
// 4. Challenge: Convert these if-else statements to ternary:
//    if (score >= 70) {
//        result = "Pass";
//    } else {
//        result = "Fail";
//    }

// 1. Assign status based on age
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// 2. Calculate discount based on price
const discountedPrice = price > 50 ? price * 0.9 : price;
console.log(discountedPrice); // 90

// 3. Set message based on drinking age
const drinkingMessage = age >= 21 ? "Can drink" : "Cannot drink";
console.log(drinkingMessage); // Cannot drink

// 4. Convert if-else to ternary
const score = 75;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result); // Pass

// ============================================================================
// Problem 2: Logical Operators in Conditionals
// Use &&, ||, ! in conditional statements
// ============================================================================

const isLoggedIn = true;
const hasPermission = false;
const isAdmin = true;

// Your task:
// 1. Check if user can access: isLoggedIn && hasPermission
// 2. Check if user can delete: isLoggedIn && (hasPermission || isAdmin)
// 3. Check if user is blocked: !isLoggedIn
//
// 4. Challenge: Create a function 'checkAccess' that:
//    - Takes isLoggedIn, hasPermission, isAdmin, isBlocked
//    - Returns access level using logical operators:
//      - "Full access" if logged in AND (hasPermission OR isAdmin) AND not blocked
//      - "Limited access" if logged in AND not blocked
//      - "No access" otherwise

// 1. Can user access
console.log(isLoggedIn && hasPermission); // false

// 2. Can user delete
console.log(isLoggedIn && (hasPermission || isAdmin)); // true

// 3. Check if user is blocked
console.log(!isLoggedIn); // false

// 4. checkAccess function
const checkAccess = (isLoggedIn, hasPermission, isAdmin, isBlocked) => {
    if (isLoggedIn && (hasPermission || isAdmin) && !isBlocked) return "Full access";
    else if (isLoggedIn && !isBlocked) return "Limited access";
    else return "No access";
};

// Test
console.log(checkAccess(true, false, true, false));  // Full access
console.log(checkAccess(true, false, false, false)); // Limited access
console.log(checkAccess(false, true, true, false));  // No access
console.log(checkAccess(true, true, false, true));   // No access

// ============================================================================
// Problem 3: Short-Circuit Evaluation
// Understand how && and || work in conditionals
// ============================================================================

const user = {
    name: "Alice",
    email: "alice@example.com"
};

// Your task:
// 1. Use && to safely access: user && user.name
// 2. Use || to provide default: user.name || "Guest"
// 3. Combine both: user && user.email || "No email"
//
// 4. Challenge: Create a function 'getUserDisplayName' that:
//    - Takes a user object (may be null/undefined)
//    - Returns user.name if exists, or user.email if name doesn't exist, or "Anonymous"
//    - Use short-circuit evaluation

// 1. Safe access using &&
console.log(user && user.name); // Alice

// 2. Default value using ||
console.log(user.name || "Guest"); // Alice

// 3. Combine both
console.log((user && user.email) || "No email"); // alice@example.com

// 4. getUserDisplayName function
const getUserDisplayName = (user) => 
    (user && user.name) || (user && user.email) || "Anonymous";

// Test
console.log(getUserDisplayName(user));               // Alice
console.log(getUserDisplayName({email: "bob@x.com"})); // bob@x.com
console.log(getUserDisplayName(null));               // Anonymous

// ============================================================================
// Problem 4: Complex Conditional Logic
// Combine multiple conditional techniques
// ============================================================================

const score = 85;
const attendance = 92;
const hasSubmittedAll = true;

// Your task:
// 1. Determine if student passes:
//    - Score >= 70 AND attendance >= 80 AND hasSubmittedAll
//    - Use logical operators
//
// 2. Determine grade with extra credit:
//    - If score >= 90 AND attendance >= 95, add 5 points
//    - If score >= 80 AND attendance >= 90, add 3 points
//    - Use nested conditionals with logical operators
//
// 3. Challenge: Create a function 'calculateFinalGrade' that:
//    - Takes score, attendance, hasSubmittedAll, hasExtraCredit
//    - Base grade: score
//    - Penalty: -10 if attendance < 80 OR !hasSubmittedAll
//    - Bonus: +5 if hasExtraCredit AND attendance >= 95
//    - Returns final grade (0-100)
//    - Use complex conditional logic

// 1. Determine if student passes
const passes = score >= 70 && attendance >= 80 && hasSubmittedAll;
console.log(passes); // true

// 2. Determine grade with extra credit
let adjustedScore = score;
if (score >= 90 && attendance >= 95) adjustedScore += 5;
else if (score >= 80 && attendance >= 90) adjustedScore += 3;

console.log(adjustedScore); // 88 (85 + 3)

// 3. calculateFinalGrade function
const calculateFinalGrade = (score, attendance, hasSubmittedAll, hasExtraCredit) => {
    let finalGrade = score;

    // Penalty
    if (attendance < 80 || !hasSubmittedAll) finalGrade -= 10;

    // Bonus
    if (hasExtraCredit && attendance >= 95) finalGrade += 5;

    // Ensure 0-100 range
    if (finalGrade > 100) finalGrade = 100;
    if (finalGrade < 0) finalGrade = 0;

    return finalGrade;
};

// Test
console.log(calculateFinalGrade(85, 92, true, false)); // 85
console.log(calculateFinalGrade(85, 75, true, false)); // 75 (penalty)
console.log(calculateFinalGrade(95, 98, true, true));  // 100 (bonus)
console.log(calculateFinalGrade(50, 70, false, true)); // 40 (penalty)