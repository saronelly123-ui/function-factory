
 // 1. square(n) — arrow function with implicit return
const square = (n) => n * n;

console.log("1.", square(4));  // 16
console.log("1.", square(7));  // 49
console.log("1.", square(0));  // Edge case: 0


// 2. isEven(n) — returns a boolean
function isEven(n) {
  return n % 2 === 0;
}

console.log("2.", isEven(4));  // true
console.log("2.", isEven(7));  // false
console.log("2.", isEven(0));  // Edge case: true


// 3. Celsius to Fahrenheit and Fahrenheit to Celsius
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

console.log("3a.", celsiusToFahrenheit(0));    // 32
console.log("3a.", celsiusToFahrenheit(100));  // 212
console.log("3a.", celsiusToFahrenheit(-40));  // Edge case: -40

console.log("3b.", fahrenheitToCelsius(32));   // 0
console.log("3b.", fahrenheitToCelsius(212));  // 100
console.log("3b.", fahrenheitToCelsius(-40));  // Edge case: -40


// 4. formatPrice(amount, currency = "RWF")
function formatPrice(amount, currency = "RWF") {
  return `${amount.toLocaleString("en-US")} ${currency}`;
}

console.log("4.", formatPrice(1500));             // 1,500 RWF
console.log("4.", formatPrice(250000));           // 250,000 RWF
console.log("4.", formatPrice(99.5, "USD"));      // 99.5 USD


// 5. getGrade(score) — guard clause for invalid input
function getGrade(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    return "Invalid score";
  }

  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}

console.log("5.", getGrade(85));   // A
console.log("5.", getGrade(65));   // C
console.log("5.", getGrade(101));  // Edge case: Invalid score


// 6. max(...numbers) — without Math.max
function max(...numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log("6.", max(4, 9, 2));      // 9
console.log("6.", max(15, 30, 20));   // 30
console.log("6.", max());             // Edge case: undefined


// 7. capitalize(word)
function capitalize(word) {
  if (word.length === 0) {
    return "";
  }

  return word[0].toUpperCase() + word.slice(1);
}

console.log("7.", capitalize("kigali"));  // Kigali
console.log("7.", capitalize("rwanda"));  // Rwanda
console.log("7.", capitalize(""));        // Edge case: ""


// 8. countVowels(text) — case-insensitive
function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";

  for (const character of text.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }

  return count;
}

console.log("8.", countVowels("Kigali"));       // 3
console.log("8.", countVowels("EDUCATION"));    // 5
console.log("8.", countVowels("rhythm"));       // Edge case: 0


// 9. isPalindrome(word)
function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

console.log("9.", isPalindrome("racecar"));  // true
console.log("9.", isPalindrome("hello"));    // false
console.log("9.", isPalindrome("a"));        // Edge case: true


// 10. repeatAction(times, callback)
function repeatAction(times, callback) {
  for (let round = 1; round <= times; round++) {
    callback(round);
  }
}

repeatAction(3, (round) => console.log("10. Round", round));
repeatAction(1, (round) => console.log("10. Only round", round));
repeatAction(0, (round) => console.log("10. Never printed", round));


// 11. createCounter(start = 0) — closure
function createCounter(start = 0) {
  let count = start;

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },

    getValue: function () {
      return count;
    }
  };
}

const counter1 = createCounter();

console.log("11a.", counter1.getValue());  // 0
console.log("11a.", counter1.increment()); // 1
console.log("11a.", counter1.decrement()); // Edge case: back to 0

const counter2 = createCounter(10);

console.log("11b.", counter2.getValue());  // 10
console.log("11b.", counter2.increment()); // 11
console.log("11b.", counter2.decrement()); // 10


// 12. makeDiscount(percent)
function makeDiscount(percent) {
  return function (price) {
    return price * (1 - percent / 100);
  };
}

const discount10 = makeDiscount(10);
const discount50 = makeDiscount(50);

console.log("12.", discount10(1000));  // 900
console.log("12.", discount50(2000));  // 1000
console.log("12.", makeDiscount(0)(500)); // Edge case: 500


// SCOPE PUZZLE
// Predictions before running:
// inner 3 — x belongs to the if block.
// function 2 — x belongs to function a.
// global 1 — x belongs to the global scope.

let x = 1;

function a() {
  let x = 2;

  if (true) {
    let x = 3;
    console.log("inner", x);
  }

  console.log("function", x);
}

a();
console.log("global", x);
day3