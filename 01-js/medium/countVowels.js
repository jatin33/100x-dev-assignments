/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    if (str.length === 0) return 0;
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelsMap = new Map();
   
    for (const vowel of vowels) {
      vowelsMap.set(vowel, 1);
    }
    return str.split("").filter((item) => item !== " ").reduce((acc, curr) => {
      if (vowelsMap.get(curr)) {
        acc += 1;
      }
      return acc;
    }, 0);
}

module.exports = countVowels;