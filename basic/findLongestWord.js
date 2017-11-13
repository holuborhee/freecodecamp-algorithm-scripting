function findLongestWord(str) {
  //Split the String into an array
  var splittedStr = str.split(' ');

  //Create a variable to hold the string with maximum length
  //and initalize to first index of Array of Splitted Strings
  var maxStr = splittedStr[0];


  //Loop through the Array of Strings
  splittedStr.map(function(currentStr){

	  	//Check if the current String is longer than length of current maximum String
	    if(maxStr.length < currentStr.length)
	      maxStr = currentStr; //Initialize max string to be the current string

  });


  return maxStr.length; //Return max String
}