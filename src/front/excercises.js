//   Reverse Integer

// Solution
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

// #------------------------------------------------------------------------------------------------------------------------------

// function reverseString(num) {
//   const maxRange = Math.pow(2, 31) - 1;
//   const minRange = -Math.pow(2, 31);
//   console.log("Input number:", num);
//   console.log("Max Range:", maxRange);
//   console.log("Min Range:", minRange);

//   const sign =  num < 0 ? -1 : 1;
//   const positiveValue = Math.abs(num)
//   const reverseStr = String(positiveValue).split("").reverse().join("");
//   const converToInt =  sign * parseInt(reverseStr,10);

//   if( converToInt < minRange || converToInt > maxRange){
//     return 0
//   }

//   return converToInt


// }
// console.log(reverseString(-120));
