/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1 === str2) return true;

  if (str1.length !== str2.length) return false;

  if ((str1 === "" && str2.length !== 0) || (str2 === "" && str1.length !== 0)) return false;

  const letterMap = str1
    .toLowerCase()
    .split("")
    .filter((item) => item !== " ")
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

  let copyOfStr2 = str2
    .toLowerCase()
    .split("")
    .filter((item) => item !== " ")
    .join("");

  for (let char of copyOfStr2) {
    if (letterMap[char]) {
      letterMap[char] -= 1;
    }
  }

  return Object.values(letterMap).reduce((acc, curr) => acc + curr, 0) === 0;
}

console.log("isAnagram", isAnagram("hello", "world"));
module.exports = isAnagram;
