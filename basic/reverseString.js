/* This function reverses any given string e.g. Kate becomes etaK */

function reverseString(str) {

	/* .split() helps splits our string into an array that we may reverse it
		.reverse() reversed the array
		.join() converts the array back into a string
	*/
  var str = str.split("").reverse().join("");

  //we return the reversed string
  return str;
}