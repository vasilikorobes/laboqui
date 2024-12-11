// Create a new Date object
let currentDate = new Date();

// Get the current month (returns a number from 0 to 11)
let currentMonth = currentDate.getMonth();

// Get the current year (returns the full 4-digit year)
let currentYear = currentDate.getFullYear();

// Display the current month and year
console.log('Current Month:', currentMonth + 1); // Adding 1 because getMonth() returns a zero-based index
console.log('Current Year:', currentYear);
