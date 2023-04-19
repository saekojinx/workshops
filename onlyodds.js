// Create a JavaScript code that modifies a copy of an array of numbers and 
// returns a new array with only the odd numbers from the original array. 
// If there is only one odd number in the array, return an array with that single value.
// [2, 4, 6, 8, 11, 20, 15, 22]	= [ 11, 15]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	= [1, 3, 5, 7, 9]
// [70, 42, 55, 81, 21, 91, 34] =	[55, 81, 21, 91]
// [2, 4, 6, 8, 10, 11, 12] = [11]
// only odd numbers




function filterOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 1) {
      return oddNumbers;
    } else {
      return oddNumbers.length > 0 ? oddNumbers : [];
    }
  }
  
  
  const input1 = [2, 4, 6, 8, 11, 20, 15, 22];
  const output1 = filterOddNumbers(input1);
  console.log(output1); // Output: [11, 15]
  
  const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const output2 = filterOddNumbers(input2);
  console.log(output2); // Output: [1, 3, 5, 7, 9]
  
  const input3 = [70, 42, 55, 81, 21, 91, 34];
  const output3 = filterOddNumbers(input3);
  console.log(output3); // Output: [55, 81, 21, 91]
  
  const input4 = [2, 4, 6, 8, 10, 11, 12];
  const output4 = filterOddNumbers(input4);
  console.log(output4); // Output: [11]