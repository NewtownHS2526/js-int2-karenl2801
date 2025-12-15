/*
 * ACTIVITY 5: Error Handling and Edge Cases
 * 
 * Problem 1: Guard Clauses
 * Use early returns to handle edge cases
 */

function processUser(user) {
    // Your task:
    // 1. Add guard clause: if user is null/undefined, return early
    // 2. Add guard clause: if user.name is missing, return early
    // 3. Add guard clause: if user.age < 0, return early
    // 4. Then process valid user data
    
    return "Processed: " + user.name;
}

// Challenge: Rewrite processUser with guard clauses at the beginning
// Return appropriate error messages for each invalid case
function processUser(user) {
    // Guard clauses
    if (!user) return "Error: No user provided";
    if (!user.name) return "Error: Name is missing";
    if (typeof user.age !== "number" || user.age < 0) return "Error: Invalid age";

    // Process valid user
    return "Processed: " + user.name;
}

// Test cases
console.log(processUser(null)); // Error: No user provided
console.log(processUser({}));   // Error: Name is missing
console.log(processUser({ name: "Alice", age: -5 })); // Error: Invalid age
console.log(processUser({ name: "Bob", age: 25 }));   // Processed: Bob
// ============================================================================
// Problem 2: Null/Undefined Checks
// Handle null and undefined values in conditionals
// ============================================================================

const data = {
    user: {
        name: "Alice",
        address: {
            city: "New York"
        }
    }
};

// Your task:
// 1. Safely access data.user.name (handle if user is null)
// 2. Safely access data.user.address.city (handle nested nulls)
// 3. Create a function 'safeGet' that safely gets nested properties
//
// 4. Challenge: Create a function 'getUserCity' that:
//    - Takes a data object
//    - Returns city name if available
//    - Returns "Unknown" if any part of the path is null/undefined
//    - Use multiple conditional checks
// Safe access using conditional checks
const userName = data.user ? data.user.name : undefined;
const userCity = data.user && data.user.address ? data.user.address.city : undefined;
console.log(userName); // Alice
console.log(userCity); // New York

// safeGet function
const safeGet = (obj, path) => {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
};

// getUserCity function
const getUserCity = (data) => {
    return safeGet(data, ["user", "address", "city"]) || "Unknown";
};

console.log(getUserCity(data)); // New York
console.log(getUserCity({}));   // Unknown
// ============================================================================
// Problem 3: Input Validation
// Validate inputs before processing
// ============================================================================

function calculateDiscount(price, discountPercent) {
    // Your task:
    // 1. Add validation: price must be a number and > 0
    // 2. Add validation: discountPercent must be between 0 and 100
    // 3. Return early with error message if invalid
    // 4. Calculate and return discounted price
    
    return price * (1 - discountPercent / 100);
}

// Challenge: Enhance calculateDiscount with:
// - Type checking (both must be numbers)
// - Range validation
// - Clear error messages for each invalid case
// - Return object: {success: true/false, result: price or error: message}
function calculateDiscount(price, discountPercent) {
    // Type checks
    if (typeof price !== "number" || isNaN(price) || price <= 0)
        return { success: false, error: "Invalid price" };

    if (typeof discountPercent !== "number" || isNaN(discountPercent) || discountPercent < 0 || discountPercent > 100)
        return { success: false, error: "Invalid discount percent" };

    // Calculation
    const discountedPrice = price * (1 - discountPercent / 100);
    return { success: true, result: discountedPrice };
}

// Test cases
console.log(calculateDiscount(100, 10)); // {success: true, result: 90}
console.log(calculateDiscount(-5, 10));  // {success: false, error: "Invalid price"}
console.log(calculateDiscount(100, 200)); // {success: false, error: "Invalid discount percent"}
// ============================================================================
// Problem 4: Complex Error Handling
// Handle multiple error scenarios
// ============================================================================

function processOrder(order) {
    // Your task: Add comprehensive validation
    // 1. Check if order exists
    // 2. Check if order.items exists and is array with length > 0
    // 3. Check if order.total is valid number >= 0
    // 4. Check if order.customer exists with required fields
    // 5. Return early with specific error for each case
    // 6. Process valid order
    
    return "Order processed successfully";
}

// Challenge: Create a complete validation function that:
// - Takes an order object
// - Validates all required fields
// - Returns {valid: true/false, errors: []} with detailed error messages
// - Uses guard clauses and conditional checks throughout
function validateOrder(order) {
    const errors = [];

    if (!order) errors.push("Order is missing");
    if (!order.items || !Array.isArray(order.items) || order.items.length === 0) errors.push("Order items are invalid");
    if (typeof order.total !== "number" || order.total < 0) errors.push("Order total is invalid");
    if (!order.customer) errors.push("Customer information is missing");
    else {
        if (!order.customer.name) errors.push("Customer name is missing");
        if (!order.customer.email) errors.push("Customer email is missing");
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

function processOrder(order) {
    const validation = validateOrder(order);
    if (!validation.valid) return validation;

    // Process order logic here
    return { valid: true, message: "Order processed successfully" };
}

// Test cases
const validOrder = {
    items: [{ name: "Book", price: 15 }],
    total: 15,
    customer: { name: "Alice", email: "alice@example.com" }
};

const invalidOrder = {
    items: [],
    total: -5,
    customer: {}
};

console.log(processOrder(validOrder));
// { valid: true, message: "Order processed successfully" }

console.log(processOrder(invalidOrder));
// { valid: false, errors: ["Order items are invalid", "Order total is invalid", "Customer name is missing", "Customer email is missing"] }
