function findEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(testNumbers));
