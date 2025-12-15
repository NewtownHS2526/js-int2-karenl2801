/*
 * ACTIVITY 5: Edge Cases and Special Comparisons
 * 
 * Problem 1: NaN Comparisons
 * Handle NaN in comparisons (Not a Number)
 */

const result1 = 0 / 0; // NaN
const result2 = Math.sqrt(-1); // NaN
const result3 = parseInt("not a number"); // NaN

// Your task:
// 1. Test: result1 === NaN (what happens?)
// 2. Test: result1 == NaN (what happens?)
// 3. Find the correct way to check if a value is NaN
// 4. Create a function 'isValidNumber' that:
//    - Returns true if value is a valid number
//    - Returns false for NaN, Infinity, or non-numbers
//
// 5. Challenge: Write a 'safeCalculation' function that:
//    - Takes two numbers and an operation (+, -, *, /)
//    - Performs calculation with comparison checks
//    - Returns null if result is NaN or Infinity

const result1 = 0 / 0;       // NaN
const result2 = Math.sqrt(-1); // NaN
const result3 = parseInt("not a number"); // NaN

// 1 & 2: NaN is NOT equal to itself
console.log(result1 === NaN); // false
console.log(result1 == NaN);  // false

// 3: Correct way to check NaN
console.log(Number.isNaN(result1)); // true
console.log(Number.isNaN(result2)); // true

// 4: isValidNumber function
const isValidNumber = (value) => typeof value === "number" && !isNaN(value) && isFinite(value);

console.log(isValidNumber(10));        // true
console.log(isValidNumber(NaN));       // false
console.log(isValidNumber(Infinity));  // false
console.log(isValidNumber("10"));      // false

// 5: safeCalculation
const safeCalculation = (a, b, op) => {
    let result;
    switch(op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        default: return null;
    }
    return isValidNumber(result) ? result : null;
};

console.log(safeCalculation(10, 5, "+")); // 15
console.log(safeCalculation(10, 0, "/")); // 0 (valid)
console.log(safeCalculation(0, 0, "/"));  // null (NaN)
console.log(safeCalculation(1e308, 1e308, "*")); // null (Infinity)

// ============================================================================
// Problem 2: Infinity Comparisons
// Handle Infinity in comparisons
// ============================================================================

const positiveInf = Infinity;
const negativeInf = -Infinity;
const largeNum = 1e308 * 2;

// Your task:
// 1. Compare: positiveInf > 1000
// 2. Compare: negativeInf < -1000
// 3. Compare: positiveInf === Infinity
// 4. Compare: largeNum (what is it? Is it Infinity?)
//
// 5. Challenge: Create a function 'isFiniteNumber' that:
//    - Checks if a number is finite (not Infinity, not NaN)
//    - Use comparisons and logical operators
//
// 6. Challenge: Create a 'clamp' function that:
//    - Takes a value, min, and max
//    - Returns value if in range
//    - Returns min if value < min
//    - Returns max if value > max
//    - Handles Infinity cases

const positiveInf = Infinity;
const negativeInf = -Infinity;
const largeNum = 1e308 * 2; // Infinity in JS

console.log(positiveInf > 1000); // true
console.log(negativeInf < -1000); // true
console.log(positiveInf === Infinity); // true
console.log(largeNum); // Infinity

// 5: isFiniteNumber
const isFiniteNumber = (num) => typeof num === "number" && isFinite(num);

console.log(isFiniteNumber(10));        // true
console.log(isFiniteNumber(Infinity));  // false
console.log(isFiniteNumber(NaN));       // false

// 6: clamp function
const clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};

console.log(clamp(50, 0, 100));    // 50
console.log(clamp(-10, 0, 100));   // 0
console.log(clamp(150, 0, 100));   // 100
console.log(clamp(Infinity, 0, 100)); // 100
console.log(clamp(-Infinity, 0, 100)); // 0

// ============================================================================
// Problem 3: Date Comparisons
// Compare dates and times
// ============================================================================

const date1 = new Date("2024-01-15");
const date2 = new Date("2024-02-15");
const date3 = new Date("2024-01-15");

// Your task:
// 1. Compare: date1 < date2 (earlier date is "less")
// 2. Compare: date1 === date3 (what happens? why?)
// 3. How do you properly compare if two dates are the same?
// 4. Create checks for:
//    - If date is in the past
//    - If date is in the future
//    - If date is today
//
// 5. Challenge: Create a 'compareDates' function that:
//    - Takes two dates
//    - Returns -1 if first is earlier, 0 if equal, 1 if later
//    - Uses proper date comparisons

const date1 = new Date("2024-01-15");
const date2 = new Date("2024-02-15");
const date3 = new Date("2024-01-15");

// 1. Compare dates
console.log(date1 < date2); // true

// 2. Direct equality check fails
console.log(date1 === date3); // false

// 3. Proper comparison
console.log(date1.getTime() === date3.getTime()); // true

// 4. Checks for past, future, today
const today = new Date();
const isPast = (d) => d < today;
const isFuture = (d) => d > today;
const isToday = (d) => d.toDateString() === today.toDateString();

console.log(isPast(date1));
console.log(isFuture(date2));
console.log(isToday(today));

// 5. compareDates function
const compareDates = (d1, d2) => {
    const t1 = d1.getTime();
    const t2 = d2.getTime();
    if (t1 < t2) return -1;
    if (t1 > t2) return 1;
    return 0;
};

console.log(compareDates(date1, date2)); // -1
console.log(compareDates(date1, date3)); // 0
console.log(compareDates(date2, date1)); // 1

// ============================================================================
// Problem 4: Complex Real-World Comparison Problem
// Build a comprehensive comparison system
// ============================================================================

const event = {
    name: "Conference",
    date: new Date("2024-12-15"),
    price: 150,
    capacity: 100,
    registered: 85,
    isCancelled: false
};

// Your task:
// Create a function 'checkEventStatus' that evaluates:
// 1. If event is in the past (date < today)
// 2. If event is full (registered >= capacity)
// 3. If event is almost full (registered >= capacity * 0.9)
// 4. If event is expensive (price > 100)
// 5. If event is cancelled
//
// Challenge: Return an object with status and recommendations:
// {
//   status: "available" | "full" | "past" | "cancelled",
//   canRegister: boolean,
//   urgency: "low" | "medium" | "high",
//   recommendation: string
// }
// Use multiple comparison operators and logical combinations

const event = {
    name: "Conference",
    date: new Date("2024-12-15"),
    price: 150,
    capacity: 100,
    registered: 85,
    isCancelled: false
};

const checkEventStatus = (evt) => {
    const today = new Date();
    const statusObj = {};

    // Status
    if (evt.isCancelled) statusObj.status = "cancelled";
    else if (evt.date < today) statusObj.status = "past";
    else if (evt.registered >= evt.capacity) statusObj.status = "full";
    else statusObj.status = "available";

    // Can register
    statusObj.canRegister = !evt.isCancelled && evt.registered < evt.capacity && evt.date >= today;

    // Urgency
    const ratio = evt.registered / evt.capacity;
    statusObj.urgency = ratio >= 0.9 ? "high" : ratio >= 0.7 ? "medium" : "low";

    // Recommendation
    if (statusObj.status === "cancelled") statusObj.recommendation = "Do not register";
    else if (statusObj.status === "past") statusObj.recommendation = "Event ended";
    else if (statusObj.urgency === "high") statusObj.recommendation = "Register immediately";
    else statusObj.recommendation = "Register soon";

    return statusObj;
};

console.log(checkEventStatus(event));
/* Example output:
{
  status: "available",
  canRegister: true,
  urgency: "medium",
  recommendation: "Register soon"
}
*/