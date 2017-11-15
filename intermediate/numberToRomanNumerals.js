/* This funtion gets the Roman Equivalent of every passed in Arabic Numeral */

function numberToRoman(num) {
  //create variable to hold Roman Numerals
  var romanValue = '';

  //create an array of Roman Numerals Object
  var romanNumerals = [
        {
          1: 'I',
          5: 'V',
        },
        {
          1: 'X',
          5: 'L',
        },
        {
          1: 'C',
          5: 'D',
        },
        {
          1: 'M',
        }

  ]


  var x = 1;
  var n=3;
  var divisor = 0;
  var repeater = 0;
  var temp = '';
  var isNine = false;



  //loop through num till it is zero
  while(num > 0){


      //decide the divisor for num
      divisor = Math.pow(10, n) / x;

      //test for 9 i.e. 9, 90, 900
      if(x==2)
        isNine = Math.floor(num / (divisor/5)) === 9;


      /* divide num by divisor and get integer result which acts as repeater for roman equivalent 
            e.g. 30 gives 3 when divided by 10 that is X repeated 3 times
            or 50 gives 1 when divided by 50 that is L will be repated once 
      */
      repeater = Math.floor(num / divisor);


      
      //Array Index and Key 
      arrayindex = x === 2 ? n-1: n;
      objectkey = x === 2 ? divisor / (divisor/5) : divisor/divisor;

      
      if(isNine){ //Perform action for numbers that begins with 9 e.g. 9, 90, and 900

        
        romanValue += romanNumerals[arrayindex][1] + romanNumerals[arrayindex+1][1] // concatenating the index from roman numeral array to the roman value

        num = num % (divisor/5); //find remainder and equate to num 

      }else if(repeater != 0){
          
          
          temp = romanNumerals[arrayindex][objectkey]; //get the object at index and key

          //produce roman numerals value by number of result if less than 4 else conacatenate two object at current array index with the lower commin first
          romanValue += repeater === 4 ? romanNumerals[arrayindex][1] + romanNumerals[arrayindex][5] : temp.repeat(repeater); 
          
          num = num % divisor; //find remainder and equate to num 
      }



      n = x=== 2 ? n-1 : n; // set value of n accordingly
      x = x === 1 ? 2 : 1; // set value of x accordingly
      isNine = false; // reset isNine to false value

  }

  

  

  

  


  return romanValue; //Return Roman value of Number given
}