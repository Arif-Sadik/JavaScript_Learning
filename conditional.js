// conditionals are almost same as CPP
console.log(5 > 10);
console.log(5 < 10);

/*

== compares only value

=== compares value and type

*/

console.log(10 == "10"); //true
console.log(10 === "10"); //false

//   let, const, var       const makes constant

let score = 85;

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score < 90) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below (or invalid score)");
}



let age = 25;
let hasMemberPass = true;

if (age < 18) {
  // Outer Stage 1: Child
  if (hasMemberPass) {
    console.log("Child Ticket: Free");
  } else {
    console.log("Child Ticket: $5");
  }
} else {
  // Outer Stage 2: Adult
  if (hasMemberPass) {
    console.log("Adult Ticket: $10");
  } else {
    console.log("Adult Ticket: $15");
  }
}
