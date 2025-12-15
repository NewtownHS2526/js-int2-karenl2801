/*
 * ACTIVITY 1: Basic Conditional Statements
 * 
 * Problem 1: Simple if Statements
 * Practice basic conditional logic
 */

const age = 18;
const temperature = 25;

// Your task:
// 1. Write an if statement to check if age is 18 or older, log "Adult"
// 2. Write an if statement to check if temperature is above 30, log "Hot day"
// 3. Write an if statement to check if temperature is below 0, log "Freezing"
// 4. Challenge: Create a function 'checkAgeStatus' that categorizes age:
//    - "Child" if age < 13
//    - "Teen" if age >= 13 and age < 18
//    - "Adult" if age >= 18

// 1. Check if age is 18 or older
if (age >= 18) {
    console.log("Adult");
}

// 2. Check if temperature is above 30
if (temperature > 30) {
    console.log("Hot day");
}

// 3. Check if temperature is below 0
if (temperature < 0) {
    console.log("Freezing");
}

// 4. Function to categorize age
const checkAgeStatus = (age) => {
    if (age < 13) return "Child";
    else if (age >= 13 && age < 18) return "Teen";
    else return "Adult";
};

// Test
console.log(checkAgeStatus(10)); // Child
console.log(checkAgeStatus(15)); // Teen
console.log(checkAgeStatus(20)); // Adult

// ============================================================================
// Problem 2: if-else Statements
// Practice decision-making with two outcomes
// ============================================================================

const score = 85;
const isMember = true;

// Your task:
// 1. Write if-else to check if score >= 70, log "Pass" or "Fail"
// 2. Write if-else to check if isMember, log "Welcome back!" or "Join now!"
// 3. Create a function 'checkDiscount' that:
//    - Takes price and isMember
//    - Returns price with 10% discount if member, otherwise full price
//
// 4. Challenge: Write a function 'gradeAssignment' that:
//    - Takes a score (0-100)
//    - Returns letter grade: A (90+), B (80-89), C (70-79), D (60-69), F (<60)
//    - Use if-else chains

// 1. Pass/Fail based on score
if (score >= 70) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 2. Membership check
if (isMember) {
    console.log("Welcome back!");
} else {
    console.log("Join now!");
}

// 3. Discount function
const checkDiscount = (price, isMember) => {
    if (isMember) return price * 0.9; // 10% discount
    else return price;
};

// Test
console.log(checkDiscount(100, true));  // 90
console.log(checkDiscount(100, false)); // 100

// 4. Grade assignment function
const gradeAssignment = (score) => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
};

// Test
console.log(gradeAssignment(85)); // B
console.log(gradeAssignment(72)); // C
console.log(gradeAssignment(59)); // F

// ============================================================================
// Problem 3: if-else if-else Chains
// Handle multiple conditions
// ============================================================================

const time = 14; // hours in 24-hour format

// Your task:
// 1. Write if-else if-else to categorize time:
//    - "Morning" if 5 <= time < 12
//    - "Afternoon" if 12 <= time < 17
//    - "Evening" if 17 <= time < 21
//    - "Night" otherwise
//
// 2. Create a function 'getWeatherAdvice' that:
//    - Takes temperature
//    - Returns advice: "Too cold" (< 10), "Cold" (10-15), "Cool" (16-20), 
//      "Warm" (21-25), "Hot" (26-30), "Too hot" (> 30)
//
// 3. Challenge: Write a function 'calculateShipping' that:
//    - Takes weight (in kg)
//    - Returns shipping cost: $5 (< 1kg), $10 (1-5kg), $20 (5-10kg), $50 (> 10kg)

// 1. Categorize time
if (time >= 5 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 17) {
    console.log("Afternoon");
} else if (time >= 17 && time < 21) {
    console.log("Evening");
} else {
    console.log("Night");
}

// 2. Weather advice function
const getWeatherAdvice = (temp) => {
    if (temp < 10) return "Too cold";
    else if (temp <= 15) return "Cold";
    else if (temp <= 20) return "Cool";
    else if (temp <= 25) return "Warm";
    else if (temp <= 30) return "Hot";
    else return "Too hot";
};

// Test
console.log(getWeatherAdvice(8));  // Too cold
console.log(getWeatherAdvice(22)); // Warm
console.log(getWeatherAdvice(31)); // Too hot

// 3. Shipping cost function
const calculateShipping = (weight) => {
    if (weight < 1) return 5;
    else if (weight <= 5) return 10;
    else if (weight <= 10) return 20;
    else return 50;
};

// Test
console.log(calculateShipping(0.5));  // 5
console.log(calculateShipping(3));    // 10
console.log(calculateShipping(7));    // 20
console.log(calculateShipping(12));   // 50

// ============================================================================
// Problem 4: Nested Conditionals
// Use conditionals inside other conditionals
// ============================================================================

const age2 = 20;
const hasLicense = true;
const hasInsurance = true;

// Your task:
// 1. Write nested if statements to check:
//    - If age >= 18, check if hasLicense
//    - If hasLicense, check if hasInsurance
//    - Log appropriate messages at each level
//
// 2. Create a function 'canRentCar' that:
//    - Takes age, hasLicense, hasInsurance
//    - Returns true only if age >= 21 AND hasLicense AND hasInsurance
//    - Use nested conditionals with clear logic
//
// 3. Challenge: Write a function 'evaluateStudent' that:
//    - Takes grade and attendance percentage
//    - If grade >= 70, check attendance:
//      - If attendance >= 90, return "Excellent"
//      - If attendance >= 80, return "Good"
//      - Else return "Needs improvement"
//    - If grade < 70, return "Failed"
//    - Use nested conditionals

// 1. Nested checks for age, license, insurance
if (age2 >= 18) {
    if (hasLicense) {
        if (hasInsurance) {
            console.log("You can drive safely!");
        } else {
            console.log("Get insurance to drive.");
        }
    } else {
        console.log("You need a license to drive.");
    }
} else {
    console.log("You are too young to drive.");
}

// 2. canRentCar function
const canRentCar = (age, hasLicense, hasInsurance) => {
    if (age >= 21) {
        if (hasLicense) {
            if (hasInsurance) return true;
            else return false;
        } else return false;
    } else return false;
};

// Test
console.log(canRentCar(22, true, true)); // true
console.log(canRentCar(20, true, true)); // false

// 3. evaluateStudent function
const evaluateStudent = (grade, attendance) => {
    if (grade >= 70) {
        if (attendance >= 90) return "Excellent";
        else if (attendance >= 80) return "Good";
        else return "Needs improvement";
    } else {
        return "Failed";
    }
};

// Test
console.log(evaluateStudent(75, 92)); // Excellent
console.log(evaluateStudent(75, 85)); // Good
console.log(evaluateStudent(75, 70)); // Needs improvement
console.log(evaluateStudent(65, 95)); // Failed