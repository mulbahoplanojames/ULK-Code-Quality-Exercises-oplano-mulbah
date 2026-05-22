const calculateAverage = (numbers) => {
  let sum = 0;
  let count = 0;

  numbers.forEach((number) => {
    sum += number;
    count++;
  });

  let average = sum / count;
  return average;
};

const num1Arr = [3, 4, 5, 67, 8, 9, 9];
const num2Arr = [3, 4, 5, 1];

console.log(calculateAverage(num1Arr));
console.log(calculateAverage(num2Arr));
