function getArrayNestingLevel(arr) {
  return (
    arr.reduce((maxLevel, item) => {
      const level = getArrayNestingLevel(item);
      return Math.max(maxLevel, level);
    }, 1) + 1
  );
}

function flattenArray(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const nestedArray = [1, [2, [3, [4]]], 5];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
