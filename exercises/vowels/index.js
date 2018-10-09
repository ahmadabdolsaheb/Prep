// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[iaoue]/gi)
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   return str.toLowerCase().split('').reduce((acc, item) => {
//     if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u'){
//       acc = acc + 1;
//     }
//     return acc
//   }, 0);
// }


// function vowels(str) {
//   return str.toLowerCase().split('').reduce((acc, item) => {
//     if (['a','e','o','u','i'].includes(item)) acc = acc + 1;
//     return acc
//   }, 0);
// }


// function vowels(str) {
//   return str.toLowerCase().split('').reduce((acc, item) => {
//     if (item.match(/[iaoue]/g)) acc = acc + 1;
//     return acc
//   }, 0);
// }
