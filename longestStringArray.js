// function that accepts an array of strings. Return the longest string.

const longestString2 = (arr) => {
	let longest = ''; // Step 0
	arr.forEach((item) => { // Step 1
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest; // Step 5
};