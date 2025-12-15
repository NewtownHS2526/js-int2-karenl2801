/*
 * ACTIVITY 3: Switch Statements
 * 
 * Problem 1: Basic Switch Statement
 * Use switch for multiple value comparisons
 */

const dayOfWeek = 3; // 1 = Monday, 7 = Sunday

// Your task:
// 1. Write a switch statement to log the day name based on dayOfWeek
//    - 1: "Monday", 2: "Tuesday", etc., default: "Invalid day"
// 2. Convert this if-else chain to switch:
//    if (status === "pending") {
//        message = "Please wait";
//    } else if (status === "approved") {
//        message = "Success!";
//    } else if (status === "rejected") {
//        message = "Sorry";
//    }
//
// 3. Challenge: Create a function 'getDayType' that:
//    - Takes dayOfWeek (1-7)
//    - Returns "Weekday" (1-5) or "Weekend" (6-7) or "Invalid"
//    - Use switch with fall-through cases

// 1. Day of week
switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 2. Convert if-else to switch
let message;
switch (status) {
    case "pending":
        message = "Please wait";
        break;
    case "approved":
        message = "Success!";
        break;
    case "rejected":
        message = "Sorry";
        break;
    default:
        message = "Unknown status";
}
console.log(message);

// 3. getDayType function
const getDayType = (day) => {
    switch (day) {
        case 1: case 2: case 3: case 4: case 5:
            return "Weekday";
        case 6: case 7:
            return "Weekend";
        default:
            return "Invalid";
    }
};

console.log(getDayType(3)); // Weekday
console.log(getDayType(6)); // Weekend
console.log(getDayType(10)); // Invalid

// ============================================================================
// Problem 2: Switch with Multiple Cases
// Use fall-through and multiple case values
// ============================================================================

const month = 2;

// Your task:
// 1. Write a switch to determine season:
//    - Dec, Jan, Feb: "Winter"
//    - Mar, Apr, May: "Spring"
//    - Jun, Jul, Aug: "Summer"
//    - Sep, Oct, Nov: "Fall"
//    - Use fall-through cases
//
// 2. Create a function 'getDaysInMonth' that:
//    - Takes month number (1-12)
//    - Returns number of days
//    - Handle February (28 days for simplicity)
//    - Use switch statement
//
// 3. Challenge: Create a function 'getGradeRange' that:
//    - Takes letter grade (A, B, C, D, F)
//    - Returns numeric range: A (90-100), B (80-89), etc.
//    - Use switch statement
//    - Handle lowercase letters too

// 1. Season by month
switch (month) {
    case 12: case 1: case 2:
        console.log("Winter");
        break;
    case 3: case 4: case 5:
        console.log("Spring");
        break;
    case 6: case 7: case 8:
        console.log("Summer");
        break;
    case 9: case 10: case 11:
        console.log("Fall");
        break;
    default:
        console.log("Invalid month");
}

// 2. Days in month
const getDaysInMonth = (month) => {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return 28;
        default:
            return "Invalid month";
    }
};
console.log(getDaysInMonth(2)); // 28
console.log(getDaysInMonth(11)); // 30

// 3. Grade range
const getGradeRange = (letter) => {
    switch (letter.toUpperCase()) {
        case "A": return "90-100";
        case "B": return "80-89";
        case "C": return "70-79";
        case "D": return "60-69";
        case "F": return "0-59";
        default: return "Invalid grade";
    }
};
console.log(getGradeRange("b")); // 80-89

// ============================================================================
// Problem 3: Switch vs if-else
// Understand when to use switch vs if-else
// ============================================================================

const score = 85;
const status = "active";
const temperature = 25;

// Your task:
// 1. Rewrite this using switch:
//    if (score >= 90) {
//        grade = "A";
//    } else if (score >= 80) {
//        grade = "B";
//    } else if (score >= 70) {
//        grade = "C";
//    }
//
// 2. Explain: When should you use switch? When should you use if-else?
//
// 3. Challenge: Create a function that takes a comparison type and two values:
//    - "equals": a === b
//    - "greater": a > b
//    - "less": a < b
//    - Use switch statement
//    - Return boolean result

// 1. Rewrite grade assignment using switch
let grade;
switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    default:
        grade = "F";
}
console.log(grade); // B

// 2. Switch vs if-else explanation
// - Use switch when comparing a single variable against multiple known values.
// - Use if-else for ranges, complex conditions, or boolean logic.

// 3. Comparison type function
const compareValues = (type, a, b) => {
    switch (type) {
        case "equals": return a === b;
        case "greater": return a > b;
        case "less": return a < b;
        default: return false;
    }
};
console.log(compareValues("greater", 5, 3)); // true
console.log(compareValues("equals", 5, 5));  // true

// ============================================================================
// Problem 4: Advanced Switch Patterns
// Use switch in complex scenarios
// ============================================================================

const userRole = "editor";
const action = "delete";

// Your task:
// 1. Create a permission checker using switch:
//    - "admin" can do: "read", "write", "delete", "manage"
//    - "editor" can do: "read", "write"
//    - "viewer" can do: "read"
//    - Use nested switch statements or switch with logical operators
//
// 2. Challenge: Create a function 'checkPermission' that:
//    - Takes userRole and action
//    - Returns true/false using switch statements
//    - Handle invalid roles/actions
//
// 3. Challenge: Create a calculator function using switch:
//    - Takes operator ("+", "-", "*", "/") and two numbers
//    - Returns result based on operator
//    - Handle division by zero
//    - Handle invalid operators

// 1 & 2. Permission checker
const checkPermission = (role, action) => {
    switch (role) {
        case "admin":
            switch(action) {
                case "read": case "write": case "delete": case "manage":
                    return true;
                default:
                    return false;
            }
        case "editor":
            switch(action) {
                case "read": case "write":
                    return true;
                default:
                    return false;
            }
        case "viewer":
            return action === "read";
        default:
            return false;
    }
};

console.log(checkPermission("editor", "write")); // true
console.log(checkPermission("viewer", "delete")); // false

// 3. Calculator function
const calculate = (operator, num1, num2) => {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operator";
    }
};

console.log(calculate("+", 5, 3)); // 8
console.log(calculate("/", 5, 0)); // Error: Division by zero