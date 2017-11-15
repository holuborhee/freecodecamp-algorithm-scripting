
/*This function is to find the factorial of any number 
	e.g. 5! = 5*4*3*2*1 = 120
	Therefore our function will return 120 for if an argument of value is passed to it
*/
function factorialize(num) {

	//Create Variable to hold final result and initialize to 1
  	var final = 1;

  	//Loop through number until it is equal to 1
	  while (num>1){

	  	// multiply final result by current value of num
	    final *= num;

	    //Decrease value of num by 1
	    num--;
	  }

  // Return final Result
  return final;
}