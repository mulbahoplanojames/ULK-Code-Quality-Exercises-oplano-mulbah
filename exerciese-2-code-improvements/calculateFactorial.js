const calculateFactorial = (number, accumulator = 1) => {
  if (number === 0 || number === 1) {
    return accumulator;
  }
  return calculateFactorial(number - 1, number * accumulator);
};

console.log(calculateFactorial(5));
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
