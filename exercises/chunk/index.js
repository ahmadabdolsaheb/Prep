// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let index = 0;

  while (index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;

// let arr = [];
// let smallarr = [];
// let counter = 0;
//
// for(let i in array){
//   smallarr.push(array[i]);
//   if(counter == size - 1 || i == array.length-1){
//     arr.push(smallarr);
//     smallarr = [];
//     counter = 0;
//   }else{
//     counter++;
//   }
// }
// console.log(arr);
// return arr;



// const chunked = [];
// for (let element of array){
//   const last = chunked[chunked.length - 1];
//   if(!last || last.length === size){
//     chunked.push([element]);
//   } else {
//     last.push(element);
//   }
// }
// return chunked;
