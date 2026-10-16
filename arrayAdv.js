// join(): Converts an array into a single string using a separator.
// concat(): Merges two or more arrays together into a new array.
// slice(): Copies a specific portion of an array without changing the original.
// splice(): Adds, removes, or replaces elements directly inside the original array.

// 1. join Example
const letters = ["A", "B", "C"];
let joinedStr = letters.join("-");
console.log(joinedStr); 

// 2. concat Example (Added spaces inside brackets so it shows up!)
const first = [ 1, 2, 3 ];
const second = [ 4, 5, 6 ];
let combinedArr = first.concat(second);
console.log(combinedArr); 

// 3. slice Example (Does not change original array)   
const items = ["Gold", "Silver", "Bronze", "Iron"];
let topTwo = items.slice(0, 3); ///"Gold","Silver", "Bronze"    1,2    not 3     till 1 less than 3
console.log(topTwo); 

// 4. splice Example (Modifies original array in place)
const days = ["Mon", "Tue", "Sun", "Thu"];
days.splice(2, 1, "Wed"); 
console.log(days); 
