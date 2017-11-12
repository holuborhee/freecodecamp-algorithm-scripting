function findLongestWord(str) {
  
  splittedStr = str.split(' ');
  maxStr = splittedStr[0];
  for(var currentStr of splittedStr){
    if(maxStr.length < currentStr.length)
      maxStr = currentStr;
  }
  return maxStr.length;
}