/*

Function that needs improvements 


function maxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
}

*/

// improve version

const maxNumber = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else {
    return number3;
  }
};

console.log(maxNumber(1, 2, 3));
console.log(maxNumber(10, 5, 2));
console.log(maxNumber(20, 25, 30));
