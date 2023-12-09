/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const toIgnore = [" ", ",", ".", "?", "!"];
  return str.toLowerCase().split("").filter((item) => !toIgnore.includes(item)).join("") === str.toLowerCase().split("").reverse().filter((item) => !toIgnore.includes(item)).join("")
}

module.exports = isPalindrome;
