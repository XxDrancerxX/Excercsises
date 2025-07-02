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

function countingElements(data){
    counter = 0
    for (let element of Object.values(data)){
        if(element)
    }
}

const sample_data = {
  user1: {
    name: "Alice",
    scores: [10, 20, 30],
    tags: new Set(["python", "developer"]), // ✅ Converted Python set
  },
  user2: {
    name: "Bob",
    scores: [25, 20.5, 30],
    tags: ["python", "mentor"], // ✅ Converted Python tuple to array
  },
  misc: [null, true, { notes: ["good", "bad"] }] // ✅ None → null, True → true
};

countingElements(sample_data)