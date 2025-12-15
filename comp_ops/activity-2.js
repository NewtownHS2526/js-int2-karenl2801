/*
 * ACTIVITY 2: Logical Operators in Comparisons
 * 
 * Problem 1: Combining Comparisons with &&, ||, !
 */

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// Your task:
// 1. Check if a person can drive: age >= 18 && hasLicense
// 2. Check if a person needs insurance: hasLicense && !hasInsurance
// 3. Check if a person can rent a car: age >= 21 && hasLicense && hasInsurance
// 4. Challenge: Create a 'canDrive' function that checks all conditions and 
//    returns a detailed message explaining which conditions are met/not met

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// 1. Can drive
const canDriveBasic = age >= 18 && hasLicense;
console.log(canDriveBasic); // true

// 2. Needs insurance
const needsInsurance = hasLicense && !hasInsurance;
console.log(needsInsurance); // true

// 3. Can rent a car
const canRentCar = age >= 21 && hasLicense && hasInsurance;
console.log(canRentCar); // false

// 4. Challenge: detailed canDrive function
const canDrive = (age, hasLicense, hasInsurance) => {
    if (age < 18) return "Too young to drive.";
    if (!hasLicense) return "Cannot drive without a license.";
    if (!hasInsurance) return "Must have insurance to drive legally.";
    return "You can drive safely.";
};

console.log(canDrive(25, true, false)); // "Must have insurance to drive legally."
console.log(canDrive(17, true, true));  // "Too young to drive."
console.log(canDrive(25, true, true));  // "You can drive safely."

// ============================================================================
// Problem 2: Complex Logical Expressions
// Build complex comparison logic
// ============================================================================

const temperature = 75;
const isSunny = true;
const isWeekend = false;

// Your task:
// 1. Determine if it's a good day for picnic:
//    temperature between 70-85 AND isSunny AND isWeekend
//
// 2. Determine if it's good for indoor activities:
//    temperature < 60 OR temperature > 90 OR !isSunny
//
// 3. Challenge: Create a function 'recommendActivity' that:
//    - Takes temperature, isSunny, isWeekend
//    - Returns an activity recommendation based on conditions
//    - Use multiple comparison operators and logical operators

const temperature = 75;
const isSunny = true;
const isWeekend = false;

// 1. Good day for picnic
const goodForPicnic = temperature >= 70 && temperature <= 85 && isSunny && isWeekend;
console.log(goodForPicnic); // false (isWeekend is false)

// 2. Good for indoor activities
const goodForIndoor = temperature < 60 || temperature > 90 || !isSunny;
console.log(goodForIndoor); // false (none are true)

// 3. Challenge: recommendActivity function
const recommendActivity = (temp, sunny, weekend) => {
    if (temp >= 70 && temp <= 85 && sunny && weekend) return "Go for a picnic!";
    if (temp < 60 || temp > 90 || !sunny) return "Stay indoors and relax.";
    return "You can go for a walk or light activity.";
};

console.log(recommendActivity(75, true, false)); // "You can go for a walk or light activity."
console.log(recommendActivity(55, false, true)); // "Stay indoors and relax."
console.log(recommendActivity(80, true, true));  // "Go for a picnic!"

// ============================================================================
// Problem 3: Comparison Operator Precedence
// Understand operator precedence in complex expressions
// ============================================================================

const x = 5;
const y = 10;
const z = 15;

// Your task:
// 1. Predict the result of: x < y && y < z
// 2. Predict the result of: x < y || y > z
// 3. Predict the result of: !(x > y) && z > x
// 4. Predict the result of: x === 5 && y !== 10 || z > 20
//    (Hint: && has higher precedence than ||)
//
// 5. Challenge: Add parentheses to make the logic explicit for question 4
// 6. Explain why operator precedence matters

const x = 5;
const y = 10;
const z = 15;

// 1. x < y && y < z
console.log(x < y && y < z); // true

// 2. x < y || y > z
console.log(x < y || y > z); // true

// 3. !(x > y) && z > x
console.log(!(x > y) && z > x); // true

// 4. x === 5 && y !== 10 || z > 20
console.log(x === 5 && y !== 10 || z > 20); // false
// Explanation: && evaluated first: (x === 5 && y !== 10) → false, then || z > 20 → false

// 5. Add parentheses to clarify
console.log((x === 5 && y !== 10) || (z > 20)); // false

// ============================================================================
// Problem 4: Real-World Comparison Scenarios
// Apply comparisons to practical problems
// ============================================================================

const product = {
    price: 50,
    stock: 5,
    rating: 4.5,
    onSale: false
};

// Your task:
// 1. Check if product is affordable: price < 100
// 2. Check if product is in stock: stock > 0
// 3. Check if product is highly rated: rating >= 4.0
// 4. Check if product is a good deal: (onSale === true || price < 75) && rating >= 4.0
//
// 5. Challenge: Create a 'evaluateProduct' function that:
//    - Takes a product object
//    - Returns a recommendation: "Buy", "Consider", or "Skip"
//    - Consider price, stock, rating, and sale status
//    - Use multiple comparison and logical operators

const product = {
    price: 50,
    stock: 5,
    rating: 4.5,
    onSale: false
};

// 1. Affordable
console.log(product.price < 100); // true

// 2. In stock
console.log(product.stock > 0); // true

// 3. Highly rated
console.log(product.rating >= 4.0); // true

// 4. Good deal
console.log((product.onSale === true || product.price < 75) && product.rating >= 4.0); // true

// 5. Challenge: evaluateProduct function
const evaluateProduct = ({price, stock, rating, onSale}) => {
    if (stock === 0) return "Skip";
    if ((onSale || price < 75) && rating >= 4) return "Buy";
    if (rating >= 4 || price < 100) return "Consider";
    return "Skip";
};

console.log(evaluateProduct(product)); // "Buy"
console.log(evaluateProduct({price: 120, stock: 0, rating: 3.5, onSale: false})); // "Skip"
console.log(evaluateProduct({price: 80, stock: 10, rating: 4.2, onSale: false})); // "Consider"