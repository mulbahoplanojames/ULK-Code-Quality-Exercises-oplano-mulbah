const removeArrayDuplicates = (array) => {
  return [...new Set(array)];
};

console.log(removeArrayDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeArrayDuplicates([]));
console.log(removeArrayDuplicates([1, 2, 3, 4, 5, 5, 4, 1]));
