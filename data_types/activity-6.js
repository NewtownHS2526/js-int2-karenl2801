/*
 * ACTIVITY 6: Data Types - Integration Challenge
 * 
 * Problem 1: Type-Safe Data Processing
 * Build a robust data processing system
 */

const mixedData = [
    42,
    "hello",
    true,
    null,
    undefined,
    [1, 2, 3],
    { name: "Alice" },
    NaN,
    Infinity
];

// Your task:
// Create a function 'categorizeData' that:
// 1. Takes an array of mixed data types
// 2. Returns object with categories:
//    {
//      numbers: [],
//      strings: [],
//      booleans: [],
//      arrays: [],
//      objects: [],
//      nulls: [],
//      undefined: [],
//      invalid: []  // NaN, Infinity
//    }
// 3. Properly identifies each type
// 4. Handles all edge cases

// Challenge: Enhance to also count occurrences and provide statistics
function categorizeData(arr) {
    const result = {
        numbers: [],
        strings: [],
        booleans: [],
        arrays: [],
        objects: [],
        nulls: [],
        undefined: [],
        invalid: []  // NaN, Infinity
    };

    for (const item of arr) {
        if (item === null) result.nulls.push(item);
        else if (item === undefined) result.undefined.push(item);
        else if (Array.isArray(item)) result.arrays.push(item);
        else if (typeof item === "number") {
            if (isNaN(item) || !isFinite(item)) result.invalid.push(item);
            else result.numbers.push(item);
        }
        else if (typeof item === "string") result.strings.push(item);
        else if (typeof item === "boolean") result.booleans.push(item);
        else if (typeof item === "object") result.objects.push(item);
        else result.invalid.push(item);
    }

    // Challenge: add counts
    const stats = {};
    for (const key in result) {
        stats[key] = result[key].length;
    }

    return { categorized: result, counts: stats };
}

console.log(categorizeData(mixedData));

// ============================================================================
// Problem 2: Data Type Converter Utility
// Create a comprehensive type conversion utility
// ============================================================================

// Your task:
// Create a 'TypeConverter' object with methods:
// 1. toNumber(value) - converts to number, returns null if invalid
// 2. toString(value) - converts to string
// 3. toBoolean(value) - converts to boolean (truthy/falsy)
// 4. toArray(value) - converts to array (if possible)
// 5. toObject(value) - converts to object (if possible)

// Challenge: Add method 'smartConvert(value, targetType)' that:
// - Automatically determines best conversion
// - Handles nested structures
// - Returns detailed conversion result with success/error info

const TypeConverter = {
    toNumber(value) {
        const num = Number(value);
        return isNaN(num) || !isFinite(num) ? null : num;
    },
    toString(value) {
        return value === null || value === undefined ? "" : String(value);
    },
    toBoolean(value) {
        return Boolean(value);
    },
    toArray(value) {
        if (Array.isArray(value)) return value;
        if (value === null || value === undefined) return [];
        if (typeof value === "object") return Object.values(value);
        return [value];
    },
    toObject(value) {
        if (value === null || typeof value !== "object") return null;
        return { ...value };
    },
    smartConvert(value, targetType) {
        try {
            let converted;
            switch (targetType) {
                case "number": converted = this.toNumber(value); break;
                case "string": converted = this.toString(value); break;
                case "boolean": converted = this.toBoolean(value); break;
                case "array": converted = this.toArray(value); break;
                case "object": converted = this.toObject(value); break;
                default: return { success: false, error: "Unknown target type" };
            }
            return { success: converted !== null, result: converted };
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
};

console.log(TypeConverter.smartConvert("123", "number")); // {success: true, result: 123}
console.log(TypeConverter.smartConvert(null, "string"));  // {success: true, result: ""}

// ============================================================================
// Problem 3: Data Validation System
// Build a comprehensive validation system
// ============================================================================

const formData = {
    name: "Alice",
    age: "25",
    email: "alice@example.com",
    score: "95.5",
    isActive: "true"
};

// Your task:
// Create a function 'validateAndConvert' that:
// 1. Takes form data object (all values are strings)
// 2. Validates and converts each field:
//    - name: string, required, min 2 chars
//    - age: number, 0-150
//    - email: valid email format
//    - score: number, 0-100
//    - isActive: boolean
// 3. Returns: {valid: true/false, data: converted object, errors: []}

// Challenge: Make it extensible with validation rules object

function validateAndConvert(data) {
    const errors = [];
    const converted = {};

    // Name: string, min 2 chars
    if (!data.name || data.name.length < 2) errors.push("Name must be at least 2 characters");
    else converted.name = String(data.name);

    // Age: number 0-150
    const age = TypeConverter.toNumber(data.age);
    if (age === null || age < 0 || age > 150) errors.push("Age must be 0-150");
    else converted.age = age;

    // Email
    const email = data.email || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email");
    else converted.email = email;

    // Score: number 0-100
    const score = TypeConverter.toNumber(data.score);
    if (score === null || score < 0 || score > 100) errors.push("Score must be 0-100");
    else converted.score = score;

    // isActive: boolean
    const boolVal = data.isActive === "true" || data.isActive === true;
    converted.isActive = Boolean(boolVal);

    return { valid: errors.length === 0, data: converted, errors };
}

console.log(validateAndConvert(formData));

// ============================================================================
// Problem 4: Complete Data Type System
// Build a comprehensive data management system
// ============================================================================

const studentData = [
    { name: "Alice", age: "20", grades: [85, 90, 88], active: "true" },
    { name: "Bob", age: "21", grades: [92, 88], active: "false" },
    { name: "Charlie", age: "nineteen", grades: "invalid", active: "yes" }
];

// Your task:
// Create a complete 'DataProcessor' system:

// 1. 'cleanData' function:
//    - Takes raw student data
//    - Validates and converts all fields
//    - Removes invalid entries
//    - Returns cleaned array

// 2. 'analyzeData' function:
//    - Takes cleaned student data
//    - Calculates statistics:
//      - Average age (number)
//      - Average grade per student (number)
//      - Active students count (number)
//      - Grade distribution (object)

// 3. 'generateReport' function:
//    - Takes analyzed data
//    - Formats as readable report string
//    - Includes type information
//    - Handles missing/invalid data gracefully

// Challenge: Create complete system that:
// - Handles all data types correctly
// - Provides type-safe operations
// - Generates detailed error reports
// - Works with various input formats
// - Validates and converts throughout the pipeline

const DataProcessor = {
    cleanData(rawData) {
        const cleaned = [];
        for (const student of rawData) {
            const converted = validateAndConvert({
                name: student.name,
                age: student.age,
                score: student.grades && Array.isArray(student.grades) ? undefined : undefined,
                isActive: student.active
            });

            // Validate grades separately
            let validGrades = Array.isArray(student.grades) && student.grades.every(g => typeof g === "number");
            if (converted.valid && validGrades) {
                cleaned.push({
                    name: converted.data.name,
                    age: converted.data.age,
                    grades: student.grades,
                    active: converted.data.isActive
                });
            }
        }
        return cleaned;
    },

    analyzeData(cleaned) {
        const stats = {
            averageAge: 0,
            studentAverages: [],
            activeCount: 0,
            gradeDistribution: {}
        };
        if (cleaned.length === 0) return stats;

        stats.averageAge = cleaned.reduce((sum, s) => sum + s.age, 0) / cleaned.length;
        for (const s of cleaned) {
            const avgGrade = s.grades.reduce((a,b)=>a+b,0)/s.grades.length;
            stats.studentAverages.push({ name: s.name, averageGrade: avgGrade });
            s.active && stats.activeCount++;
            for (const g of s.grades) {
                stats.gradeDistribution[g] = (stats.gradeDistribution[g] || 0) + 1;
            }
        }
        return stats;
    },

    generateReport(stats) {
        return `
Data Report:
- Average Age: ${stats.averageAge.toFixed(1)}
- Active Students: ${stats.activeCount}
- Student Average Grades:
${stats.studentAverages.map(s => `  ${s.name}: ${s.averageGrade.toFixed(2)}`).join("\n")}
- Grade Distribution: ${JSON.stringify(stats.gradeDistribution)}
        `;
    }
};

// Example usage
const cleaned = DataProcessor.cleanData(studentData);
const stats = DataProcessor.analyzeData(cleaned);
console.log(DataProcessor.generateReport(stats));