# Day 3: Function Factory — 12 Functions + Tests

## Project Overview

This project focuses on practicing JavaScript functions, arrow functions, parameters, return values, callbacks, closures, and variable scope.

It contains 12 functions, each tested with at least three calls, including edge cases where applicable.

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

## Functions Implemented

1. **square(n)** — Returns the square of a number using an arrow function with implicit return.
2. **isEven(n)** — Checks whether a number is even or odd.
3. **celsiusToFahrenheit(c)** and **fahrenheitToCelsius(f)** — Convert temperatures between Celsius and Fahrenheit.
4. **formatPrice(amount, currency = "RWF")** — Formats prices using `toLocaleString()`.
5. **getGrade(score)** — Calculates a grade from a score between 0 and 100 and rejects invalid inputs.
6. **max(...numbers)** — Finds the largest number using a loop without `Math.max()`.
7. **capitalize(word)** — Capitalizes the first letter of a word.
8. **countVowels(text)** — Counts vowels in a string without case sensitivity.
9. **isPalindrome(word)** — Checks whether a word reads the same forward and backward.
10. **repeatAction(times, callback)** — Calls a callback function with the round number.
11. **createCounter(start = 0)** — Creates a counter with `increment`, `decrement`, and `getValue` methods using a closure.
12. **makeDiscount(percent)** — Returns a function that calculates a discounted price.

## Additional Exercise: Scope Puzzle

The scope puzzle demonstrates how `let` variables behave in different scopes:

- Global scope
- Function scope
- Block scope

Expected output:

```text
inner 3
function 2
global 1
```

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Run the following command:

```bash
node day3.js
```

4. Check the results in the terminal.

## What I Learned

- Declaring and calling reusable functions.
- Using arrow functions and implicit returns.
- Working with parameters, default parameters, and rest parameters.
- Returning values from functions.
- Validating inputs using guard clauses.
- Using loops to process numbers and strings.
- Passing callbacks to other functions.
- Understanding closures and private variables.
- Understanding global, function, and block scope.
- Testing functions with normal inputs and edge cases.



## Status

Completed — JavaScript Day 3 Function Practice.
