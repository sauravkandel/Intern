/* You can flatten the array using .flat(Infinity) and then get the length. 
Using .flat() with an argument of Infinity will concatenate all the elements from the nested array into the one outer array, 
allowing you to count the number of elements:*/

//const getLength = arr => arr.flat(Infinity).length;

//console.log(getLength([1, [2, 3]])) // -> 3
//console.log(getLength([1, [2, [3, 4]]])) // -> 4
//console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) //--> 6
//console.log(getLength([1, [2], 1, [2], 1])) // ➞ 5

/* add the lengths for nested array or one. */

function getLength(array) {
    let count = 0;
    for (const item of array) count += !Array.isArray(item) || getLength(item);
    return count;

}
console.log(getLength([1, [2, 3]])) // -> 3
console.log(getLength([1, [2, [3, 4]]])) // -> 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) //--> 6
console.log(getLength([1, [2], 1, [2], 1])) // ➞ 5

