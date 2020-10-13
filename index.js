function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str){
  //If the length is 0 
  //then return an empty string
  if(str.length === 0){
    return '';
  }
  
  //Call the function recursively with one character less and so on.
  return str.substring(str.length, str.length-1) + reverseString(str.substring(0, str.length-1));
}
function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let firstLetter = string[0];
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}
function addUpTo (arr, index) {
if (arr.length === 0) {
return 0
}
else {
return arr.splice(index)[0] + addUpTo(arr, arr.length - 1);
}
}

function maxOf(numArray) 
{
    // copy the given array 
    nums = numArray.slice();

    // base case: if we're at the last number, return it
    if (nums.length == 1) { return nums[0]; }

    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }

    // with one less number in the array, call the same function
    return maxOf(nums);
}