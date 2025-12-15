/*
 * ACTIVITY 6: Conditional Statements - Integration Challenge
 * 
 * Problem 1: Building a Decision Tree
 * Create a complex decision-making system
 */

const user = {
    age: 25,
    isMember: true,
    purchaseAmount: 150,
    hasCoupon: true
};

// Your task:
// Create a function 'calculateFinalPrice' that:
// 1. Base price: purchaseAmount
// 2. Age discount: 10% if age >= 65
// 3. Member discount: 5% if isMember
// 4. Coupon discount: 15% if hasCoupon
// 5. Large purchase discount: 10% if purchaseAmount > 200
// 6. Rules:
//    - Only one discount can apply (highest one)
//    - Except: member discount stacks with one other discount
//    - Minimum price: $10
//
// Challenge: Return detailed breakdown: {original, discounts, final, savings}

function calculateFinalPrice(user) {
    const { age, isMember, purchaseAmount, hasCoupon } = user;
    const discounts = [];

    // Determine eligible discounts
    const ageDiscount = age >= 65 ? 0.10 : 0;
    const memberDiscount = isMember ? 0.05 : 0;
    const couponDiscount = hasCoupon ? 0.15 : 0;
    const largePurchaseDiscount = purchaseAmount > 200 ? 0.10 : 0;

    // Pick highest discount (except member stacks)
    const otherDiscounts = [ageDiscount, couponDiscount, largePurchaseDiscount];
    const maxOtherDiscount = Math.max(...otherDiscounts);

    let appliedDiscount = maxOtherDiscount;
    if (isMember) appliedDiscount += memberDiscount;

    // Calculate final price
    let finalPrice = purchaseAmount * (1 - appliedDiscount);
    if (finalPrice < 10) finalPrice = 10;

    return {
        original: purchaseAmount,
        discounts: {
            ageDiscount,
            memberDiscount,
            couponDiscount,
            largePurchaseDiscount
        },
        final: finalPrice,
        savings: purchaseAmount - finalPrice
    };
}

// Example:
console.log(calculateFinalPrice(user));

// ============================================================================
// Problem 2: State Machine
// Implement a simple state machine using conditionals
// ============================================================================

// Your task:
// Create a 'TrafficLight' state machine:
// 1. States: "red", "yellow", "green"
// 2. Function 'changeState(currentState)' that:
//    - red -> green
//    - green -> yellow
//    - yellow -> red
//    - Returns new state
//
// 3. Function 'canGo(currentState)' that returns true for "green"
//
// 4. Challenge: Create a 'GameState' machine with states:
//    - "menu", "playing", "paused", "gameOver"
//    - Implement transitions between states
//    - Validate that transitions are legal
//    - Use switch statements for state handling

const TrafficLight = {
    states: ["red", "green", "yellow"],
    
    changeState(currentState) {
        switch (currentState) {
            case "red": return "green";
            case "green": return "yellow";
            case "yellow": return "red";
            default: return "invalid";
        }
    },

    canGo(currentState) {
        return currentState === "green";
    }
};

// Example
console.log(TrafficLight.changeState("red"));   // green
console.log(TrafficLight.canGo("green"));      // true
console.log(TrafficLight.canGo("yellow"));     // false

// ============================================================================
// Problem 3: Conditional-Based Routing
// Create a routing system using conditionals
// ============================================================================

const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/products": "Products"
};

// Your task:
// 1. Create function 'getPage(path)' that:
//    - Takes a path string
//    - Returns page name if route exists
//    - Returns "404 - Not Found" if route doesn't exist
//
// 2. Enhance to handle query parameters:
//    - "/products?category=electronics"
//    - Extract and validate query parameters
//
// 3. Challenge: Create a 'Router' that:
//    - Handles multiple routes with conditionals
//    - Supports route parameters: "/user/:id"
//    - Supports protected routes (requires authentication)
//    - Returns appropriate response or error

function getPage(path) {
    // Extract route without query params
    const route = path.split("?")[0];
    if (routes[route]) return routes[route];
    return "404 - Not Found";
}

// Example
console.log(getPage("/"));                     // Home
console.log(getPage("/products?category=electronics")); // Products
console.log(getPage("/invalid"));              // 404 - Not Found

// ============================================================================
// Problem 4: Complete Conditional System
// Build a comprehensive system using all conditional techniques
// ============================================================================

const library = {
    books: [
        { title: "Book A", available: true, genre: "Fiction", rating: 4.5 },
        { title: "Book B", available: false, genre: "Non-Fiction", rating: 4.0 },
        { title: "Book C", available: true, genre: "Fiction", rating: 4.8 },
        { title: "Book D", available: true, genre: "Science", rating: 3.5 }
    ],
    members: [
        { id: 1, name: "Alice", type: "student", booksBorrowed: 2 },
        { id: 2, name: "Bob", type: "faculty", booksBorrowed: 5 }
    ]
};

// Your task:
// Create a complete 'LibrarySystem' with functions using conditionals:

// 1. 'findAvailableBooks(genre, minRating)'
//    - Filters books by availability
//    - Optional genre filter
//    - Optional minimum rating filter
//    - Returns array of matching books

// 2. 'canBorrowBook(memberId, bookTitle)'
//    - Checks if member exists
//    - Checks if book exists and is available
//    - Checks borrowing limits: students (3 max), faculty (10 max)
//    - Returns {canBorrow: true/false, reason: string}

// 3. 'recommendBooks(memberId)'
//    - Gets member's preferred genre from borrowing history
//    - Recommends available books in that genre
//    - Prioritizes highly rated books
//    - Returns top 3 recommendations

// Challenge: Create a complete 'borrowBook' function that:
// - Validates all conditions
// - Updates book availability
// - Updates member's borrowed count
// - Returns success/error with detailed message
// - Uses nested conditionals, guard clauses, and logical operators
// - Handles all edge cases

const LibrarySystem = {
    books: library.books,
    members: library.members,

    findAvailableBooks(genre, minRating) {
        return this.books.filter(book => {
            if (!book.available) return false;
            if (genre && book.genre !== genre) return false;
            if (minRating && book.rating < minRating) return false;
            return true;
        });
    },

    canBorrowBook(memberId, bookTitle) {
        const member = this.members.find(m => m.id === memberId);
        if (!member) return { canBorrow: false, reason: "Member not found" };

        const book = this.books.find(b => b.title === bookTitle);
        if (!book) return { canBorrow: false, reason: "Book not found" };
        if (!book.available) return { canBorrow: false, reason: "Book not available" };

        const limit = member.type === "student" ? 3 : 10;
        if (member.booksBorrowed >= limit) return { canBorrow: false, reason: "Borrowing limit reached" };

        return { canBorrow: true, reason: "Eligible to borrow" };
    },

    recommendBooks(memberId) {
        const member = this.members.find(m => m.id === memberId);
        if (!member) return [];

        // Determine preferred genre from previous borrowed books
        const borrowedBooks = this.books.filter(b => !b.available && b.title.includes(member.name));
        const preferredGenre = borrowedBooks[0]?.genre || "Fiction";

        // Recommend top 3 available books in preferred genre
        return this.findAvailableBooks(preferredGenre)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
    },

    borrowBook(memberId, bookTitle) {
        const eligibility = this.canBorrowBook(memberId, bookTitle);
        if (!eligibility.canBorrow) return { success: false, message: eligibility.reason };

        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.title === bookTitle);

        // Update counts
        member.booksBorrowed += 1;
        book.available = false;

        return { success: true, message: `${member.name} successfully borrowed "${book.title}"` };
    }
};

// Example usage
console.log(LibrarySystem.findAvailableBooks("Fiction", 4.5));
console.log(LibrarySystem.canBorrowBook(1, "Book A"));
console.log(LibrarySystem.borrowBook(1, "Book A"));