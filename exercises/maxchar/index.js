// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = str.split("")
  .reduce(function (accu, curr) {
  accu[curr] = accu[curr] + 1 || 1
  return accu;
  }, {});

  let top = [0, 0];

  for( let item in obj){
    if(obj[item]> top[1]){
      top[0] = item;
      top [1] = obj[item]
    }
  }
  return top[0];
}

module.exports = maxChar;



// let obj = {}
// let top = [0, 0];
// for( let item of str){
//   obj[item] = obj[item] + 1 || 1;
// }
//
// for( let item in obj){
//   if(obj[item]> top[1]){
//     top[0] = item;
//     top [1] = obj[item]
//   }
// }
// return top[0];
