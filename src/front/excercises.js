//   Reverse Integer

const { elementType } = require("prop-types");

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

//
// # 🔥 CHALLENGING PYTHON EXERCISE: Data Type Mastery
// # 🧩 Problem: Deep Data Type Analysis Tool
// # You're given a complex nested structure that contains different Python data types: dictionaries, lists, tuples, sets, and strings. Your task is to write a function called analyze_structure(data) that performs the following:

// # ✅ Required Output:
// # Return a dictionary with:

// # 'total_elements': total number of all elements (including nested ones)

// # 'data_types': a dictionary with counts of each data type found ('str', 'int', 'float', 'list', 'dict', 'set', 'tuple', etc.)

// # 'unique_values': the number of unique values across the entire structure (including deeply nested values)

// # 'most_common_type': the type that appears most frequently

// # Handle cycles (e.g., if an object references itself), and avoid infinite recursion.

// # 🧪 Example Input:
// # python
// # Copy
// # Edit
// # sample_data = {
// #     'user1': {
// #         'name': 'Alice',
// #         'scores': [10, 20, 30],
// #         'tags': {'python', 'developer'},
// #     },
// #     'user2': {
// #         'name': 'Bob',
// #         'scores': [25, 20.5, 30],
// #         'tags': ('python', 'mentor'),
// #     },
// #     'misc': [None, True, {'notes': ['good', 'bad']}]
// # }
// # 💡 Output Example:
// # python
// # Copy
// # Edit
// # {
// #     'total_elements': 20,
// #     'data_types': {
// #         'str': 7,
// #         'int': 4,
// #         'float': 1,
// #         'list': 3,
// #         'dict': 5,
// #         'set': 1,
// #         'tuple': 1,
// #         'NoneType': 1,
// #         'bool': 1
// #     },
// #     'unique_values': 15,
// #     'most_common_type': 'str'
// # }
// # ⚠️ Constraints
// # You must recursively explore nested structures.

// # Use the type() function and collections.Counter.

// # Do not mutate the original data.

// # You may need to convert unhashable types when tracking unique values.

// function countingElements(data) {
//   let counter = 0;
//   for (let element of Object.values(data)) {
//     if (typeof element === "object" && element !== null) {
//       if (Array.isArray(element)) {
//         for (let subElement of element) {
//           if (typeof subElement === "boolean" || subElement === null) {
//             counter += 1;
//           }
//           if (typeof subElement === "object" && subElement !== null) {
//             for (let item of Object.values(subElement)) {
//               for (let subItem of item) {
//                 counter += 1;
//               }
//             }
//           }
//         }
//       } else if (!Array.isArray(!element)) {
//         for (let item of Object.values(element)) {
//           if (typeof item === "string") {
//             counter += 1;
//           } else if (Array.isArray(item)) {
//             for (let subItem of item) {
//               counter += 1;
//             }
//           } else if (item instanceof Set) {
//             for (let subItem of item) {
//               counter += 1;
//             }
//           }
//         }
//       }
//     }
//   }
//   return counter;
// }

// const sample_data = {
//   user1: {
//     name: "Alice",
//     scores: [10, 20, 30],
//     tags: new Set(["python", "developer"]), // ✅ Converted Python set
//   },
//   user2: {
//     name: "Bob",
//     scores: [25, 20.5, 30],
//     tags: ["python", "mentor"], // ✅ Converted Python tuple to array
//   },
//   misc: [null, true, { notes: ["good", "bad"] }], // ✅ None → null, True → true
// };

// console.log(countingElements(sample_data), " ---> !!COUNTING!!!");

// // #===============================================================================================================================

// 🧠 Exercise: Event Conflict Resolver
// You are organizing a conference. Each speaker submits a list of time slots when they're available.

// You must find all pairs of speakers who have at least one overlapping time slot, and then resolve the conflict by printing:

// The speaker names

// The overlapping slot(s)

// A decision:

// If both have 2 or more available slots → assign next available non-overlapping time to one.

// If only one has 2+ slots → assign a new time to the one with more slots.

// If both have only 1 slot → log as "Unresolvable Conflict."

// 🔢 Input example:
// python
// Copy
// Edit
// # Python dict example
// speakers = {
//     "Alice": ["10:00", "11:00", "14:00"],
//     "Bob": ["11:00", "13:00"],
//     "Charlie": ["10:00"],
//     "Diana": ["14:00", "15:00"]
// }
// js
// Copy
// Edit
// // JS object equivalent
// const speakers = {
//     Alice: ["10:00", "11:00", "14:00"],
//     Bob: ["11:00", "13:00"],
//     Charlie: ["10:00"],
//     Diana: ["14:00", "15:00"]
// };
// 🧩 Expected Output (example):
// pgsql
// Copy
// Edit
// Alice & Bob have conflict at: 11:00 ➜ Assign Bob to 13:00
// Alice & Charlie have conflict at: 10:00 ➜ Unresolvable Conflict
// Alice & Diana have conflict at: 14:00 ➜ Assign Diana to 15:00
// 🎯 Your Task
// Compare each unique speaker pair (no repeat pairs).

// Check for overlapping time slots.

// Based on how many total slots each speaker has, resolve or label as unresolvable.

// Print the decision clearly.

// function conference(speakersObj) {
//   const namesOfSpeakers = Object.keys(speakersObj);
//   for (let i = 0; i < namesOfSpeakers.length; i++) {
//     for (let j = i + 1; j < namesOfSpeakers.length; j++) {
//       let namesOfSpeakers1 = namesOfSpeakers[i];
//       let namesOfSpeakers2 = namesOfSpeakers[j];

//       let available1 = speakersObj[namesOfSpeakers1];
//       let available2 = speakersObj[namesOfSpeakers2];

//       let common = available1.filter(time => available2.includes(time));

//       if (common.length > 0) {
//         let selected = common[0];
//         console.log(
//           `${namesOfSpeakers1} and ${namesOfSpeakers2} can meet at ${selected}`
//         );
//       } else {
//         console.log(
//           `${namesOfSpeakers1} and ${namesOfSpeakers2} have no coomon time`
//         );
//       }
//     }
//   }
// }

// // JS object equivalent
// const speakers = {
//   Alice: ["10:00", "11:00", "14:00"],
//   Bob: ["11:00", "13:00"],
//   Charlie: ["10:00"],
//   Diana: ["14:00", "15:00"],
// };
// conference(speakers)

// #===============================================================================================================================
//   Delete Node in a Linked List

// Solution
// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:

// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.

// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Constraints:

// The number of the nodes in the given list is in the range [2, 1000].
// -1000 <= Node.val <= 1000
// The value of each node in the list is unique.
// The node to be deleted is in the list and is not a tail node.
// JavaScript
// 1
// /**
// 2
//  * Definition for singly-linked list.
// 3
//  * function ListNode(val) {
// 4
//  *     this.val = val;
// 5
//  *     this.next = null;
// 6
//  * }
// 7
//  */
// 8
// /**
// 9
//  * @param {ListNode} node
// 10
//  * @return {void} Do not return anything, modify node in-place instead.
// 11
//  */
// 12
// var deleteNode = function(node) {
// 13

// 14
// };

// function removeNode(node){
//   node.val = node.next.val;
// }
// head = [4, 5, 1, 9], node = 5

// #===============================================================================================================================

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// //  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// // Output: [[7,4,1],[8,5,2],[9,6,3]]
// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

// #------------------------------------------------------------------------------------------------------------------------------
// function rotateImage(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = i + 1; j < matrix[0].length; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
//   console.log("!First loop!! -- ", matrix);
//   for (let i = 0; i < matrix.length; i++) {
//     let left = 0;
//     let right = matrix[i].length - 1;

//     while (left < right) {
//       let temp = matrix[i][left];
//       matrix[i][left] = matrix[i][right];
//       matrix[i][right] = temp;
//       left++;
//       right--;
//     }
//   }
//   console.log("!!Second loop!! -- ",matrix);
// }

// m = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];
// rotateImage(m);

// // #===============================================================================================================================
// 🚨 HARD EXERCISE 1: Deep Variable Behavior
// ✅ Problem Description (in both languages)
// You're given a list of employees. Each employee has a name and a list of skills. You must:

// Clone the original list

// Modify one of the inner lists (skills)

// Prove whether your clone is deep or shallow

// Show how variable declarations or object references affect the result
// 🟨 JavaScript Version (Advanced let, const, mutability, clone behavior)
// // ➕ Bonus: Try cloning with .map() + spread operator and then JSON.parse(JSON.stringify(...)) — compare the two.
// 🟦 Expected Concepts Tested:
// const does not make objects immutable

// Shallow copy vs deep copy

// Object references

// Variable declaration ≠ content lock

// #------------------------------------------------------------------------------------------------------------------------------
// function mutatesElement(element){
//   const shallowCopy = element.slice();
//   const deepClone = JSON.parse(JSON.stringify(element))
//   shallowCopy[1]["skills"] = ["aaa","aaaaaa"]
//   deepClone[1]["skills"] = ["aaa","bbbbbb"]
//   console.log("original --", element);
//   console.log("!!shallow copy --",shallowCopy);
//   console.log("!!Deep Copy copy --",deepClone);

// }
// const employees = [
//   { name: "Alice", skills: ["JS", "Python"] },
//   { name: "Bob", skills: ["HTML", "CSS"] }
// ];
// mutatesElement(employees)

// #===============================================================================================================================

//   Longest Common Prefix

// Solution
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// function findPrefix(string) {
//   let prefix = "";
//   let firstWord = string[0];

//   for (let i = 0; i < firstWord.length; i++) {
//     let char = firstWord[i];

//     for (let j = 1; j < string.length; j++) {
//       if (string[j][i] !== char) {
//         return prefix;
//       }
//     }
//     prefix += char;
//   }
//   return prefix;
// }

// strs = ["dog", "racecar", "car"];
// findPrefix(strs);
// console.log(findPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(findPrefix(["dog", "racecar", "car"])); // ""
// console.log(findPrefix(["interview", "interrupt", "integrate", "integral"])); // "int"

// #===============================================================================================================================

// # 🚨 HARD EXERCISE 2: Nested Data Transformation by Type

// ## ✅ Problem Description (in both languages)

// You're given a **deeply nested data structure** (a mix of lists/arrays, dictionaries/objects, strings, numbers, and booleans).

// Your task:

// 1. Traverse the entire structure (deep traversal)
// 2. For each value:
//     - If it's a **string**, convert to uppercase
//     - If it's a **number**, multiply by 10
//     - If it's a **boolean**, flip it
//     - Leave anything else untouched
// 3. Return a **new structure** (don't mutate the original)
// 4. Must support **nested structures of any depth**

// #------------------------------------------------------------------------------------------------------------------------------
// //first solution:
// function dataTypes(obj) {
//   const newObj = {};
//   for (let element in obj) {
//     const value = obj[element];
//     console.log("!!VALUE!! --", value);

//     // 1. Primitive at top-level
//     if (typeof value == "string") {
//       newObj[element] = value.toUpperCase();
//     }

//     // 2. Array at top-level (like "skills")
//     else if (Array.isArray(value)) {
//       const newArray = [];
//       for (let subValue of value) {
//         if (typeof subValue == "string") {
//           newArray.push(subValue.toUpperCase());
//         } else if (typeof subValue == "number") {
//           newArray.push(subValue * 10);
//         }
//       }
//       newObj[element] = newArray;
//     }

//     // 3. preferences object (handled manually)
//     else if (
//       typeof value == "object" &&
//       value != null &&
//       !Array.isArray(value)
//     ) {
//       const newNestedObj = {};
//       for (let key in value) {
//         const subValue = value[key];
//         if (typeof subValue == "boolean") {
//           newNestedObj[key] = !subValue;
//         } else if (typeof subValue == "number") {
//           newNestedObj[key] = subValue * 10;
//         } else if (typeof subValue === "string") {
//           newNestedObj[key] = subValue.toUpperCase();
//         } else if (Array.isArray(subValue)) {
//           const newArray = [];
//           for (let subValueArray of subValue) {
//             if (typeof subValueArray == "string") {
//               newArray.push(subValueArray.toUpperCase());
//             } else if (typeof subValueArray == "boolean") {
//               newArray.push(!subValueArray);
//             } else if (typeof subValueArray == "number") {
//               newArray.push(subValueArray * 10);
//             }
//           }
//           newNestedObj[key] = newArray;
//         }
//       }
//       newObj[element] = newNestedObj
//     } else if (typeof value == "number") {
//       newObj[element] = value * 10;
//     } else if (typeof value == "boolean") {
//       newObj[element] = !value;
//     } else {
//       newObj[element] = value;
//     }
//   }
//   return newObj;
// }

// const input = {
//   name: "alice",
//   age: 25,
//   active: true,
//   skills: ["js", "python", 3],
//   preferences: {
//     darkMode: false,
//     fontSize: 14,
//     tags: ["code", true, 7],
//   },
// };

// console.log(dataTypes(input));

// Your function should return a transformed object with same structure but changed values based on type.

// #------------------------------------------------------------------------------------------------------------------------------
//Second solution:
// function handleDataTypes(obj) {
//   if (typeof obj === "string") {
//     return obj.toUpperCase();
//   } else if (typeof obj == "number") {
//     return obj * 10;
//   } else if (typeof obj === "boolean") {
//     return !obj;
//   }
//   else if(Array.isArray(obj)){
//     return obj.map(function (item){
//       return handleDataTypes(item);
//     })
//   }
//   else if(typeof obj === "object" && obj != null){
//     const newObj = {}
//     for(let key in obj){
//       newObj[key] = handleDataTypes(obj[key])
//     }
//     return newObj
//   }
// }

// const input = {
//   name: "alice",
//   age: 25,
//   active: true,
//   skills: ["js", "python", 3],
//   preferences: {
//     darkMode: false,
//     fontSize: 14,
//     tags: ["code", true, 7],
//   },
// };

// console.log(handleDataTypes(input));
