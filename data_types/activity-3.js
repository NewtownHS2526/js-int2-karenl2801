/*
 * ACTIVITY 3: Objects and Arrays
 * 
 * Problem 1: Object Basics
 * Work with object data structure
 */

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Your task:
// 1. Access properties: person.name, person["age"]
// 2. Add new property: person.email = "alice@example.com"
// 3. Modify property: person.age = 31
// 4. Check if property exists: "name" in person, person.hasOwnProperty("name")
//
// 5. Challenge: Create a function 'objectInfo' that:
//    - Takes an object
//    - Returns object with: {keys: [], values: [], size: number, isEmpty: boolean}

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// 1. Access properties
console.log(person.name);      // "Alice"
console.log(person["age"]);    // 30

// 2. Add new property
person.email = "alice@example.com";
console.log(person.email);     // "alice@example.com"

// 3. Modify property
person.age = 31;
console.log(person.age);       // 31

// 4. Check if property exists
console.log("name" in person);           // true
console.log(person.hasOwnProperty("name")); // true

// 5. Challenge: objectInfo function
function objectInfo(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return {
        keys,
        values,
        size: keys.length,
        isEmpty: keys.length === 0
    };
}

// Example
console.log(objectInfo(person));

// ============================================================================
// Problem 2: Array Basics
// Work with array data structure
// ============================================================================

const fruits = ["apple", "banana", "orange"];

// Your task:
// 1. Access elements: fruits[0], fruits[fruits.length - 1]
// 2. Add elements: fruits.push("grape"), fruits.unshift("mango")
// 3. Remove elements: fruits.pop(), fruits.shift()
// 4. Check if array: Array.isArray(fruits)
//
// 5. Challenge: Create a function 'arrayInfo' that:
//    - Takes an array
//    - Returns object with: {length, first, last, isEmpty, type: "array"}
const fruits = ["apple", "banana", "orange"];

// 1. Access elements
console.log(fruits[0]);                  // "apple"
console.log(fruits[fruits.length - 1]);  // "orange"

// 2. Add elements
fruits.push("grape");  // add to end
fruits.unshift("mango"); // add to start
console.log(fruits);    // ["mango","apple","banana","orange","grape"]

// 3. Remove elements
fruits.pop();  // removes "grape"
fruits.shift(); // removes "mango"
console.log(fruits); // ["apple","banana","orange"]

// 4. Check if array
console.log(Array.isArray(fruits)); // true

// 5. Challenge: arrayInfo function
function arrayInfo(arr) {
    return {
        length: arr.length,
        first: arr[0] ?? null,
        last: arr[arr.length - 1] ?? null,
        isEmpty: arr.length === 0,
        type: "array"
    };
}

// Example
console.log(arrayInfo(fruits));
/*
{
  length: 3,
  first: "apple",
  last: "orange",
  isEmpty: false,
  type: "array"
}
*/
// ============================================================================
// Problem 3: Nested Data Structures
// Work with objects and arrays inside other structures
// ============================================================================

const library = {
    books: [
        { title: "Book A", author: "Author 1", pages: 200 },
        { title: "Book B", author: "Author 2", pages: 150 }
    ],
    location: {
        city: "Boston",
        street: "Main St"
    }
};

// Your task:
// 1. Access nested properties: library.books[0].title
// 2. Add new book to array: library.books.push({...})
// 3. Access nested object: library.location.city
//
// 4. Challenge: Create a function 'deepAccess' that:
//    - Takes object and path string like "books.0.title"
//    - Returns value at that path
//    - Returns null if path doesn't exist
//    - Handles arrays and objects

const library = {
    books: [
        { title: "Book A", author: "Author 1", pages: 200 },
        { title: "Book B", author: "Author 2", pages: 150 }
    ],
    location: {
        city: "Boston",
        street: "Main St"
    }
};

// 1. Access nested properties
console.log(library.books[0].title); // "Book A"

// 2. Add new book
library.books.push({ title: "Book C", author: "Author 3", pages: 300 });
console.log(library.books.length); // 3

// 3. Access nested object
console.log(library.location.city); // "Boston"

// 4. Challenge: deepAccess function
function deepAccess(obj, path) {
    const keys = path.split(".");
    let current = obj;
    for (const key of keys) {
        if (current && (key in current || !isNaN(Number(key)))) {
            current = current[key];
        } else {
            return null;
        }
    }
    return current;
}

// Examples
console.log(deepAccess(library, "books.1.author")); // "Author 2"
console.log(deepAccess(library, "location.street")); // "Main St"
console.log(deepAccess(library, "books.5.title")); // null

// ============================================================================
// Problem 4: Reference vs Value
// Understand how objects and arrays are passed
// ============================================================================

const arr1 = [1, 2, 3];
const arr2 = arr1;
const obj1 = { a: 1 };
const obj2 = obj1;

// Your task:
// 1. Modify arr1: arr1.push(4)
//    - Check arr2, what happened? Why?
//
// 2. Modify obj1: obj1.b = 2
//    - Check obj2, what happened? Why?
//
// 3. Create copies:
//    - const arr3 = [...arr1] (spread operator)
//    - const obj3 = {...obj1} (spread operator)
//    - Modify arr3 and obj3, verify originals unchanged
//
// 4. Challenge: Create a function 'deepCopy' that:
//    - Takes any object or array
//    - Returns a complete independent copy
//    - Handles nested structures
//    - Test that modifications to copy don't affect original

const arr1 = [1, 2, 3];
const arr2 = arr1;

// 1. Modify arr1
arr1.push(4);
console.log(arr2); // [1,2,3,4] → arr2 reflects changes because arrays are reference types

const obj1 = { a: 1 };
const obj2 = obj1;

// 2. Modify obj1
obj1.b = 2;
console.log(obj2); // {a:1,b:2} → obj2 reflects changes (reference copy)

// 3. Create copies
const arr3 = [...arr1]; // spread operator
const obj3 = {...obj1};

arr3.push(5);
obj3.c = 3;

console.log(arr1); // [1,2,3,4]
console.log(arr3); // [1,2,3,4,5]
console.log(obj1); // {a:1,b:2}
console.log(obj3); // {a:1,b:2,c:3}

// 4. Challenge: deepCopy function
function deepCopy(item) {
    if (Array.isArray(item)) {
        return item.map(deepCopy);
    } else if (item && typeof item === "object") {
        const copy = {};
        for (const key in item) {
            copy[key] = deepCopy(item[key]);
        }
        return copy;
    } else {
        return item; // primitive value
    }
}

// Test deepCopy
const original = { a: 1, b: { c: 2 }, d: [1,2,3] };
const copy = deepCopy(original);

copy.b.c = 99;
copy.d.push(4);

console.log(original); // {a:1,b:{c:2},d:[1,2,3]}
console.log(copy);     // {a:1,b:{c:99},d:[1,2,3,4]}