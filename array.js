///same as cpp    we can do push pop also
// shift does the same as pop()   but from beginning   not the end
// unshift does as push     but at begin
// includes      exists or not

//index of       gives -1 if doesnt exist
//Array.isArray         Array or not 


let scores =[7.8 , 9];
scores.push(95);


let fruits = ["Apple", "Banana", "Cherry", "Mango"];
fruits.push("Orange");
fruits.pop();

let attendance = [true, false, true, true, false];
attendance.push(true);
attendance.pop();

let userProfile = ["Alex", 25, true];
userProfile.push("Admin");
userProfile.pop();

console.log(scores);
scores.pop();
console.log(scores);
console.log(fruits[3]);
console.log(attendance);
console.log(userProfile);


//shift  unshift
const colors = ["Green", "Blue"];

colors.unshift("Red");
console.log(colors); 

colors.shift();
console.log(colors); 



//includes     exists or not
const tools = ["C++", "JavaScript", "Python"];

let hasCPP = tools.includes("C++");
let hasJava = tools.includes("Java");

console.log(hasCPP);  // Outputs: true
console.log(hasJava); // Outputs: false

//Index of
const colors = ["Red", "Green", "Blue", "Green"];

let firstGreen = colors.indexOf("Green");
let missingColor = colors.indexOf("Yellow");

console.log(firstGreen);   // Outputs: 1
console.log(missingColor); // Outputs: -1



//Array.isArray         Array or not 
const fruits = ["Apple", "Banana"];
const text = "Hello";

console.log(Array.isArray(fruits)); // Outputs: true
console.log(Array.isArray(text));   // Outputs: false
