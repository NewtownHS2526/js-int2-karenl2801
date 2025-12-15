/*
 * ACTIVITY 6: Comparison Operators - Integration Challenge
 * 
 * Problem 1: Building a Validation System
 * Create a comprehensive validation system using comparisons
 */

// Your task:
// Create a 'Validator' class/object with methods using comparison operators:
// 1. isEmail(email) - checks email format (must contain @ and .)
// 2. isAge(age) - checks if age is between 0 and 150
// 3. isScore(score) - checks if score is between 0 and 100
// 4. isStringLength(str, min, max) - checks string length range
// 5. isPositive(num) - checks if number > 0
// 6. isInRange(num, min, max) - checks if number is in range

// Challenge: Create a 'validateForm' function that:
// - Takes form data and validation rules
// - Uses all comparison methods
// - Returns detailed validation results
// Example:
// validateForm({
//   email: "test@example.com",
//   age: 25,
//   score: 85
// }, {
//   email: ["isEmail"],
//   age: ["isAge"],
//   score: ["isScore", "isInRange", [0, 100]]
// })

// Validator object
const Validator = {
    isEmail: (email) => typeof email === "string" && email.includes("@") && email.includes("."),
    isAge: (age) => typeof age === "number" && age >= 0 && age <= 150,
    isScore: (score) => typeof score === "number" && score >= 0 && score <= 100,
    isStringLength: (str, min, max) => typeof str === "string" && str.length >= min && str.length <= max,
    isPositive: (num) => typeof num === "number" && num > 0,
    isInRange: (num, min, max) => typeof num === "number" && num >= min && num <= max
};

// validateForm function
const validateForm = (formData, rules) => {
    const result = {};
    for (let field in rules) {
        result[field] = [];
        rules[field].forEach(rule => {
            if (Array.isArray(rule)) {
                // For rules with parameters
                const [ruleName, ...params] = rule;
                if (!Validator[ruleName](formData[field], ...params)) result[field].push(`Failed ${ruleName}`);
            } else if (typeof rule === "string") {
                if (!Validator[rule](formData[field])) result[field].push(`Failed ${rule}`);
            }
        });
        result[field].valid = result[field].length === 0;
    }
    return result;
};

// Test
const form = {
    email: "test@example.com",
    age: 25,
    score: 85
};

const rules = {
    email: ["isEmail"],
    age: ["isAge"],
    score: ["isScore", ["isInRange", 0, 100]]
};

console.log(validateForm(form, rules));

// ============================================================================
// Problem 2: Building a Search/Filter System
// Create a flexible filtering system
// ============================================================================

const products = [
    { name: "Laptop", price: 999, rating: 4.5, stock: 10, category: "Electronics" },
    { name: "Phone", price: 699, rating: 4.8, stock: 5, category: "Electronics" },
    { name: "Book", price: 15, rating: 4.2, stock: 50, category: "Education" },
    { name: "Chair", price: 150, rating: 4.0, stock: 20, category: "Furniture" }
];

// Your task:
// Create a 'filterProducts' function that:
// 1. Filters by price range (minPrice, maxPrice)
// 2. Filters by minimum rating
// 3. Filters by stock availability (inStock: true/false)
// 4. Filters by category
// 5. Combines multiple filters using logical operators

// Challenge: Create an advanced filter that:
// - Takes a filter object: { price: [min, max], rating: min, inStock: boolean, category: string }
// - Applies all matching filters
// - Uses comparison operators efficiently
// - Returns filtered and sorted results

const filterProducts = (products, filter) => {
    return products.filter(p => {
        let pass = true;
        if (filter.price) pass = pass && p.price >= filter.price[0] && p.price <= filter.price[1];
        if (filter.rating !== undefined) pass = pass && p.rating >= filter.rating;
        if (filter.inStock !== undefined) pass = pass && ((filter.inStock && p.stock > 0) || (!filter.inStock));
        if (filter.category) pass = pass && p.category === filter.category;
        return pass;
    });
};

// Test
const filtered = filterProducts(products, { price: [100, 1000], rating: 4.5, inStock: true, category: "Electronics" });
console.log(filtered);

// ============================================================================
// Problem 3: Building a Priority Queue
// Use comparisons to prioritize items
// ============================================================================

// Your task:
// Create a 'PriorityQueue' class that:
// 1. Stores items with priority (number, higher = more important)
// 2. addItem(item, priority) - adds item with priority
// 3. getHighestPriority() - returns item with highest priority
// 4. removeHighest() - removes and returns highest priority item
// 5. Uses comparison operators to maintain order

// Challenge: Enhance it to:
// - Support priority ties (use secondary comparison like timestamp)
// - Have methods: isEmpty(), size(), peek()
// - Handle edge cases (empty queue, single item, etc.)
// - Use efficient comparison-based sorting

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    addItem(item, priority) {
        const timestamp = Date.now();
        this.queue.push({ item, priority, timestamp });
        this.queue.sort((a, b) => b.priority - a.priority || a.timestamp - b.timestamp);
    }

    getHighestPriority() {
        return this.queue.length ? this.queue[0].item : null;
    }

    removeHighest() {
        return this.queue.length ? this.queue.shift().item : null;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    peek() {
        return this.getHighestPriority();
    }
}

// Test
const pq = new PriorityQueue();
pq.addItem("Task 1", 5);
pq.addItem("Task 2", 10);
pq.addItem("Task 3", 10);
console.log(pq.peek()); // Task 2 (earlier with same priority)
console.log(pq.removeHighest()); // Task 2
console.log(pq.removeHighest()); // Task 3

// ============================================================================
// Problem 4: Complete Comparison Challenge
// Build a comprehensive comparison-based application
// ============================================================================

const students = [
    { name: "Alice", grades: [85, 90, 88], age: 20, attendance: 95 },
    { name: "Bob", grades: [92, 88, 90], age: 19, attendance: 98 },
    { name: "Charlie", grades: [78, 82, 80], age: 21, attendance: 87 },
    { name: "Diana", grades: [95, 92, 94], age: 20, attendance: 100 }
];

// Your task:
// Create a comprehensive 'StudentAnalyzer' system with:

// 1. calculateAverage(grades) - calculates average grade
// 2. isPassing(student, passingGrade) - checks if average >= passingGrade
// 3. hasGoodAttendance(student, threshold) - checks attendance >= threshold
// 4. compareStudents(a, b) - compares by average grade
// 5. getTopPerformers(students, count) - returns top N students
// 6. getStudentsByCriteria(students, criteria) - filters by multiple criteria

// Challenge: Create a 'generateReport' function that:
// - Analyzes all students
// - Uses multiple comparison operations
// - Returns a report with:
//   - Students passing (grade >= 70 AND attendance >= 90)
//   - Students at risk (grade < 70 OR attendance < 90)
//   - Top 3 performers
//   - Average class performance
//   - Statistics by age group
// - All using comparison and logical operators effectively

const StudentAnalyzer = {
    calculateAverage: (grades) => grades.reduce((sum, g) => sum + g, 0) / grades.length,
    
    isPassing: (student, passingGrade = 70) => 
        StudentAnalyzer.calculateAverage(student.grades) >= passingGrade,

    hasGoodAttendance: (student, threshold = 90) => student.attendance >= threshold,

    compareStudents: (a, b) => 
        StudentAnalyzer.calculateAverage(b.grades) - StudentAnalyzer.calculateAverage(a.grades),

    getTopPerformers: (students, count = 3) => 
        [...students].sort(StudentAnalyzer.compareStudents).slice(0, count),

    getStudentsByCriteria: (students, criteria) => 
        students.filter(s => {
            let pass = true;
            if (criteria.minGrade !== undefined) pass = pass && StudentAnalyzer.calculateAverage(s.grades) >= criteria.minGrade;
            if (criteria.maxGrade !== undefined) pass = pass && StudentAnalyzer.calculateAverage(s.grades) <= criteria.maxGrade;
            if (criteria.minAttendance !== undefined) pass = pass && s.attendance >= criteria.minAttendance;
            if (criteria.maxAttendance !== undefined) pass = pass && s.attendance <= criteria.maxAttendance;
            if (criteria.age !== undefined) pass = pass && s.age === criteria.age;
            return pass;
        }),

    generateReport: (students) => {
        const passingStudents = students.filter(s => 
            StudentAnalyzer.isPassing(s) && StudentAnalyzer.hasGoodAttendance(s)
        );

        const atRiskStudents = students.filter(s => 
            !StudentAnalyzer.isPassing(s) || !StudentAnalyzer.hasGoodAttendance(s)
        );

        const topPerformers = StudentAnalyzer.getTopPerformers(students, 3);

        const avgClassPerformance = students.reduce((sum, s) => sum + StudentAnalyzer.calculateAverage(s.grades), 0) / students.length;

        const statsByAge = {};
        students.forEach(s => {
            if (!statsByAge[s.age]) statsByAge[s.age] = [];
            statsByAge[s.age].push(s);
        });

        return {
            passingStudents,
            atRiskStudents,
            topPerformers,
            avgClassPerformance,
            statsByAge
        };
    }
};

// Test
console.log(StudentAnalyzer.generateReport(students));