/* this function checks if a word is a palindrome, it even checks sentences
	It removes every other character except alphabets and numbers
	and also convert to lower case before it performs its checks,
	the function returns TRUE if string is palindrome and FALSE otherwise
*/

function palindrome(str) {
  // remove evry character except for alphabets and numbers
  str = str.replace(/[\W_]+/g, "");

  //convert string to lowercase
  str = str.toLowerCase();

  //reverse the string
  reversedString = str.split('').reverse().join('');

  //check if reversed String is same as passed in argument and it returns the result
  return reversedString === str;
  
}