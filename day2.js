
// DAY 2: LOGIC PRACTICE
// Pseudocode first, then JavaScript


// 1. EVEN OR ODD
// Pseudocode:
// - Get a number.
// - If the number divided by 2 has remainder 0, print "even".
// - Otherwise, print "odd".

let number = 7;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}


// 2. GRADE CALCULATOR
// Pseudocode:
// - Check if the score is between 0 and 100.
// - If invalid, print "Invalid score" and stop.
// - Otherwise, check the grade from highest to lowest.

let score = 85;

if (score < 0 || score > 100) {
  console.log("Invalid score");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}


// 3. TICKET PRICE
// Pseudocode:
// - If age is over 65, ticket is free.
// - Otherwise, if age is under 12, price is 2000 RWF.
// - Otherwise, if the person is a student, price is 3000 RWF.
// - Otherwise, price is 5000 RWF.

let age = 20;
let isStudent = true;
let ticketPrice;

if (age > 65) {
  ticketPrice = 0;
} else if (age < 12) {
  ticketPrice = 2000;
} else if (isStudent) {
  ticketPrice = 3000;
} else {
  ticketPrice = 5000;
}

console.log("Ticket price:", ticketPrice, "RWF");


// 4. DAY PLANNER
// Pseudocode:
// - Get a day name.
// - Use switch to identify the day.
// - Print the class activity.
// - Print "No class" on weekends.

let day = "Monday";

switch (day.toLowerCase()) {
  case "monday":
    console.log("Monday: JavaScript basics");
    break;
  case "tuesday":
    console.log("Tuesday: Logic practice");
    break;
  case "wednesday":
    console.log("Wednesday: Functions");
    break;
  case "thursday":
    console.log("Thursday: Arrays and objects");
    break;
  case "friday":
    console.log("Friday: Project practice");
    break;
  case "saturday":
  case "sunday":
    console.log("No class");
    break;
  default:
    console.log("Invalid day");
}


// 5. COUNTDOWN
// Pseudocode:
// - Start at 10.
// - Print each number while counting down to 1.
// - Print "Liftoff!" after the loop.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Liftoff!");


// 6. SUM AND AVERAGE
// Pseudocode:
// - Create an array of five scores.
// - Start sum at 0.
// - Use for...of to add each score.
// - Divide sum by the number of scores.

const scores = [45, 78, 90, 62, 88];
let sum = 0;

for (const item of scores) {
  sum += item;
}

const average = sum / scores.length;

console.log("Sum:", sum);
console.log("Average:", average);


// 7. FIND THE FIRST NUMBER GREATER THAN 100
// Pseudocode:
// - Loop through the array.
// - If a number is greater than 100, print it.
// - Use break to stop the loop.

const numbers = [25, 60, 105, 150, 200];

for (const item of numbers) {
  if (item > 100) {
    console.log("First number greater than 100:", item);
    break;
  }
}


// 8. SKIP NEGATIVES
// Pseudocode:
// - Loop through the array.
// - If the number is negative or zero, skip it.
// - Otherwise, print the positive number.

const values = [-5, 10, -2, 8, 0, 15];

for (const item of values) {
  if (item <= 0) {
    continue;
  }

  console.log("Positive:", item);
}


// 9. MULTIPLICATION TABLE
// Pseudocode:
// - Start at 1 and stop at 12.
// - Multiply 7 by each number.
// - Print the multiplication in the required format.

for (let i = 1; i <= 12; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}


// 10. FIZZBUZZ + KIGALI
// Pseudocode:
// - Loop through numbers 1 to 100.
// - If divisible by both 3 and 5, print "FizzBuzz".
// - Otherwise, if divisible by 7, print "Kigali".
// - Otherwise, if divisible by 3, print "Fizz".
// - Otherwise, if divisible by 5, print "Buzz".
// - Otherwise, print the number.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 7 === 0) {
    console.log("Kigali");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// CHALLENGE: RIGHT-ANGLED TRIANGLE
// Pseudocode:
// - Use an outer loop for 5 rows.
// - For each row, use an inner loop to add stars.
// - Print the stars for each row.

for (let row = 1; row <= 5; row++) {
  let stars = "";

  for (let col = 1; col <= row; col++) {
    stars += "*";
  }

  console.log(stars);
}
