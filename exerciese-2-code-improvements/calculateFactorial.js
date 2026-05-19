/*
Function that needs improvements


function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var factorial = 1;
    for (var i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

*/

// improve version

const calculateFactorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let index = 2; index <= number; index++) {
      factorial *= index;
    }
    return factorial;
  }
};

console.log(calculateFactorial(5));
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
