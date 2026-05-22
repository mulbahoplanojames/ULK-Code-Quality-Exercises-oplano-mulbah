function recursiveSum(array, index = 0, accumulator = 0) {
  if (index >= array.length) {
    return accumulator;
  }

  const currentValue = array[index];
  const updatedAccumulator = accumulator + currentValue;

  return recursiveSum(array, index + 1, updatedAccumulator);
}

const array = [1, 2, 3, 4, 5];
const sum = recursiveSum(array);
const sum2 = recursiveSum([]);
console.log(sum);
console.log(sum2);
