/* 
Function that needs imptovements 

function findEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

*/

function findEvenNumbers(numbers) {
  var evenNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  return evenNumbers;
}

const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findEvenNumbers(testNumbers));
