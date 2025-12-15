/*
 * ACTIVITY 6: Functions - Integration Challenge
 * 
 * Problem 1: Building a Function Library
 * Create a collection of utility functions
 */

// Your task:
// Create a 'MathUtils' object with methods:
// 1. add(...numbers) - sums all arguments
// 2. multiply(...numbers) - multiplies all arguments
// 3. average(...numbers) - calculates average
// 4. range(min, max) - generates array of numbers from min to max
// 5. random(min, max) - generates random number in range

// Challenge: Add methods with error handling and validation

const MathUtils = {
    add: (...numbers) => {
        if (!numbers.every(n => typeof n === "number")) throw new Error("All arguments must be numbers");
        return numbers.reduce((sum, n) => sum + n, 0);
    },
    multiply: (...numbers) => {
        if (!numbers.every(n => typeof n === "number")) throw new Error("All arguments must be numbers");
        return numbers.reduce((prod, n) => prod * n, 1);
    },
    average: (...numbers) => {
        if (numbers.length === 0) return 0;
        return MathUtils.add(...numbers) / numbers.length;
    },
    range: (min, max) => {
        if (typeof min !== "number" || typeof max !== "number") throw new Error("Min and max must be numbers");
        if (min > max) return [];
        const arr = [];
        for (let i = min; i <= max; i++) arr.push(i);
        return arr;
    },
    random: (min, max) => {
        if (typeof min !== "number" || typeof max !== "number") throw new Error("Min and max must be numbers");
        return Math.random() * (max - min) + min;
    }
};

// Example usage:
console.log(MathUtils.add(1,2,3)); // 6
console.log(MathUtils.range(3,7)); // [3,4,5,6,7]

// ============================================================================
// Problem 2: Building a Function Composition System
// Create a system for composing and chaining functions
// ============================================================================

// Your task:
// 1. Create a 'pipe' function that:
//    - Takes multiple functions
//    - Returns a function that applies them left-to-right
//    Example: pipe(addOne, double, square)(5)
//
// 2. Create a 'compose' function that:
//    - Takes multiple functions
//    - Returns a function that applies them right-to-left
//
// 3. Challenge: Create a 'chain' function that:
//    - Takes an initial value and multiple functions
//    - Applies functions sequentially
//    - Each function receives result of previous

// Pipe: left-to-right
const pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x);

// Compose: right-to-left
const compose = (...fns) => (x) => fns.reduceRight((v, fn) => fn(v), x);

// Chain: sequential application with initial value
const chain = (initialValue, ...fns) => fns.reduce((val, fn) => fn(val), initialValue);

// Example functions
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

console.log(pipe(addOne, double, square)(3)); // ((3+1)*2)^2 = 64
console.log(compose(square, double, addOne)(3)); // square(double(addOne(3))) = 64
console.log(chain(3, addOne, double, square)); // 64

// ============================================================================
// Problem 3: Building a Function Decorator System
// Create decorators to enhance function behavior
// ============================================================================

// Your task:
// 1. Create a 'memoize' function that:
//    - Takes a function
//    - Returns memoized version (caches results)
//    - Useful for expensive calculations
//
// 2. Create a 'debounce' function that:
//    - Takes a function and delay
//    - Returns debounced version (delays execution)
//
// 3. Create a 'throttle' function that:
//    - Takes a function and limit
//    - Returns throttled version (limits execution rate)
//
// 4. Challenge: Create a 'retry' function that:
//    - Takes a function and max retries
//    - Retries on failure
//    - Returns promise-like result

// 1. Memoize
const memoize = fn => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};

// 2. Debounce
const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
};

// 3. Throttle
const throttle = (fn, limit) => {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
};

// 4. Retry (promise-like)
const retry = async (fn, maxRetries) => {
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === maxRetries) throw err;
        }
    }
};

// Example: memoized fibonacci
const fib = memoize(n => (n <= 1 ? n : fib(n-1) + fib(n-2)));
console.log(fib(10)); // 55

// ============================================================================
// Problem 4: Complete Function-Based Application
// Build a comprehensive system using all function concepts
// ============================================================================

const inventory = [
    { id: 1, name: "Laptop", price: 999, stock: 10, category: "Electronics" },
    { id: 2, name: "Phone", price: 699, stock: 5, category: "Electronics" },
    { id: 3, name: "Book", price: 15, stock: 50, category: "Education" }
];

// Your task:
// Create a complete 'InventoryManager' system:

// 1. Query functions (using higher-order functions):
//    - findByCategory(category)
//    - filterByPrice(min, max)
//    - filterByStock(minStock)
//    - searchByName(name)

// 2. Transformation functions:
//    - applyDiscount(percent)
//    - addTax(taxRate)
//    - formatCurrency(currency)

// 3. Aggregation functions:
//    - totalValue()
//    - averagePrice()
//    - stockByCategory()

// 4. Operation functions (using closures):
//    - createUpdateStock(itemId)
//    - createPriceAdjuster(multiplier)

// Challenge: Create a complete 'processOrder' function that:
// - Takes order object
// - Validates items (using validator functions)
// - Calculates totals (using composition)
// - Applies discounts (using decorators)
// - Updates inventory (using closure-based updaters)
// - Returns detailed order summary
// - Uses all function concepts: closures, HOFs, composition, recursion where needed

const InventoryManager = (() => {
    let items = [...inventory]; // private inventory copy

    // Query Functions
    const findByCategory = (category) => items.filter(i => i.category === category);
    const filterByPrice = (min, max) => items.filter(i => i.price >= min && i.price <= max);
    const filterByStock = (minStock) => items.filter(i => i.stock >= minStock);
    const searchByName = (name) => items.filter(i => i.name.toLowerCase().includes(name.toLowerCase()));

    // Transformation Functions
    const applyDiscount = (percent) => {
        if (percent < 0 || percent > 100) throw new Error("Invalid discount");
        items = items.map(i => ({...i, price: i.price * (1 - percent/100)}));
    };
    const addTax = (taxRate) => {
        items = items.map(i => ({...i, price: i.price * (1 + taxRate/100)}));
    };
    const formatCurrency = (currency = "$") => items.map(i => ({...i, priceFormatted: `${currency}${i.price.toFixed(2)}`}));

    // Aggregation Functions
    const totalValue = () => items.reduce((sum, i) => sum + i.price * i.stock, 0);
    const averagePrice = () => items.reduce((sum, i) => sum + i.price, 0) / items.length;
    const stockByCategory = () => items.reduce((acc, i) => {
        acc[i.category] = (acc[i.category] || 0) + i.stock;
        return acc;
    }, {});

    // Closure-based Operations
    const createUpdateStock = (itemId) => (newStock) => {
        const item = items.find(i => i.id === itemId);
        if (!item) throw new Error("Item not found");
        item.stock = newStock;
    };
    const createPriceAdjuster = (multiplier) => (itemId) => {
        const item = items.find(i => i.id === itemId);
        if (!item) throw new Error("Item not found");
        item.price *= multiplier;
    };

    // Process Order Example
    const processOrder = (order) => {
        const summary = {total: 0, details: []};
        order.items.forEach(oi => {
            const item = items.find(i => i.id === oi.id);
            if (!item) throw new Error(`Item ${oi.id} not found`);
            if (item.stock < oi.quantity) throw new Error(`Not enough stock for ${item.name}`);
            item.stock -= oi.quantity;
            const cost = item.price * oi.quantity;
            summary.total += cost;
            summary.details.push({...item, quantity: oi.quantity, cost});
        });
        return summary;
    };

    return {
        findByCategory,
        filterByPrice,
        filterByStock,
        searchByName,
        applyDiscount,
        addTax,
        formatCurrency,
        totalValue,
        averagePrice,
        stockByCategory,
        createUpdateStock,
        createPriceAdjuster,
        processOrder
    };
})();

// Example usage
console.log(InventoryManager.findByCategory("Electronics"));
InventoryManager.applyDiscount(10);
console.log(InventoryManager.totalValue());
