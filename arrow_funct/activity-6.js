/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 * 
 * Problem 1: Building a Data Transformer
 * Create a flexible data transformation system using arrow functions
 */

const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// Your task:
// 1. Create arrow functions to:
//    - Filter employees by department
//    - Calculate average salary for a department
//    - Give a 10% raise to employees above a certain age
//    - Get employee names in "Last, First" format (assume single word names for simplicity)
//
// 2. Challenge: Create a function 'analyzeDepartment' that:
//    - Takes a department name
//    - Returns an object with: {dept, employeeCount, avgSalary, totalBudget, employees}
//    Use arrow functions throughout

const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// Filter employees by department
const filterByDept = (arr, dept) => arr.filter(emp => emp.department === dept);

// Average salary for a department
const avgSalary = arr => arr.reduce((sum, e) => sum + e.salary, 0) / arr.length;

// Give 10% raise to employees above certain age
const raiseByAge = (arr, age) => arr.map(e => 
    e.age > age ? {...e, salary: e.salary * 1.1} : e
);

// Employee names "Last, First"
const namesLastFirst = arr => arr.map(e => {
    const [first, last] = e.name.split(" ");
    return `${last}, ${first}`;
});

// Analyze department
const analyzeDepartment = dept => {
    const deptEmployees = filterByDept(employees, dept);
    const totalBudget = deptEmployees.reduce((sum, e) => sum + e.salary, 0);
    return {
        dept,
        employeeCount: deptEmployees.length,
        avgSalary: avgSalary(deptEmployees) || 0,
        totalBudget,
        employees: namesLastFirst(deptEmployees)
    };
};

// Test
console.log(analyzeDepartment("IT"));

// ============================================================================
// Problem 2: Arrow Functions for Data Validation
// Build a validation system using arrow functions
// ============================================================================

// Your task:
// 1. Create validation arrow functions:
//    - isRequired(value) - checks if value exists
//    - minLength(str, len) - checks string length
//    - isEmail(str) - checks email format
//    - isNumber(val) - checks if number
//    - isPositive(num) - checks if positive number
//
// 2. Create a 'validateForm' function that takes an object and validation rules:
//    Example:
//    const rules = {
//        email: [isRequired, isEmail],
//        password: [isRequired, (p) => minLength(p, 8)]
//    };
//
// 3. Challenge: Create a validator that returns error messages for each field
//    Return format: {valid: true/false, errors: {field: ["error1", "error2"]}}

// Validation functions
const isRequired = value => value !== null && value !== undefined && value !== '';
const minLength = (str, len) => str.length >= len;
const isEmail = str => /\S+@\S+\.\S+/.test(str);
const isNumber = val => typeof val === 'number' && !isNaN(val);
const isPositive = num => isNumber(num) && num > 0;

// validateForm
const validateForm = (formData, rules) => {
    const errors = {};
    let valid = true;

    for (let field in rules) {
        const fieldErrors = rules[field]
            .map(fn => fn(formData[field]) ? null : fn.name)
            .filter(Boolean);
        if (fieldErrors.length > 0) valid = false;
        errors[field] = fieldErrors;
    }

    return { valid, errors };
};

// Test
const form = { email: "test@example.com", password: "12345" };
const rules = {
    email: [isRequired, isEmail],
    password: [isRequired, p => minLength(p, 8)]
};
console.log(validateForm(form, rules));

// ============================================================================
// Problem 3: Arrow Functions in Sorting and Filtering
// Implement complex sorting and filtering using arrow functions
// ============================================================================

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// Your task:
// 1. Create arrow functions to:
//    - Sort products by price (ascending and descending)
//    - Sort products by multiple criteria (category, then price)
//    - Filter products by category
//    - Filter products with low stock (< 10 items)
//
// 2. Challenge: Create a 'smartFilter' function that:
//    - Takes an array and multiple filter criteria
//    - Returns filtered and sorted results
//    Example: smartFilter(products, {category: "Electronics", maxPrice: 800, minStock: 10})

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// Sort ascending/descending by price
const sortByPriceAsc = arr => [...arr].sort((a,b) => a.price - b.price);
const sortByPriceDesc = arr => [...arr].sort((a,b) => b.price - a.price);

// Sort by category then price
const sortByCategoryThenPrice = arr => [...arr].sort((a,b) => 
    a.category.localeCompare(b.category) || a.price - b.price
);

// Filter by category
const filterByCategory = (arr, cat) => arr.filter(p => p.category === cat);

// Filter by low stock
const filterLowStock = arr => arr.filter(p => p.stock < 10);

// Smart filter challenge
const smartFilter = (arr, {category, maxPrice, minStock}) => arr
    .filter(p => (category ? p.category === category : true))
    .filter(p => (maxPrice !== undefined ? p.price <= maxPrice : true))
    .filter(p => (minStock !== undefined ? p.stock >= minStock : true));

console.log(smartFilter(products, {category: "Electronics", maxPrice: 800, minStock: 10}));

// ============================================================================
// Problem 4: Building a Utility Library
// Create a collection of useful arrow function utilities
// ============================================================================

// Your task:
// Create a utilities object with arrow function methods:
// 1. debounce(func, delay) - delays function execution until after delay milliseconds
// 2. throttle(func, limit) - limits function execution to once per limit milliseconds
// 3. memoize(func) - caches function results for same inputs
// 4. pipe(...functions) - composes functions left to right
// 5. compose(...functions) - composes functions right to left
//
// Challenge: Test each utility with real scenarios:
// - Use debounce for a search input
// - Use throttle for scroll events
// - Use memoize for expensive calculations (like fibonacci)
// - Use pipe/compose for data transformations

const utils = {
    debounce: (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    },
    throttle: (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    memoize: func => {
        const cache = {};
        return (...args) => {
            const key = JSON.stringify(args);
            if (!(key in cache)) cache[key] = func(...args);
            return cache[key];
        };
    },
    pipe: (...fns) => val => fns.reduce((res, fn) => fn(res), val),
    compose: (...fns) => val => fns.reduceRight((res, fn) => fn(res), val)
};

// Example: memoize for fibonacci
const fib = utils.memoize(n => n <= 1 ? n : fib(n-1) + fib(n-2));
console.log(fib(10)); // 55

// Example: pipe/compose
const add1 = x => x + 1;
const times2 = x => x * 2;
const square = x => x * x;
console.log(utils.pipe(add1, times2, square)(3));   // ((3+1)*2)^2 = 64
console.log(utils.compose(square, times2, add1)(3)); // ((3+1)*2)^2 = 64