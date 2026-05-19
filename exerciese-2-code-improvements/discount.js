/* 
Funtion that needs improvements

function discount(totalamount) {
  var disc;
  if (totalamount > 100) {
    disc = totalamount * 0.1;
  } else {
    disc = totalamount * 0.05;
  }
  return disc;
}

*/

// improve version

function calculateDiscount(totalamount) {
  let discount;

  discount = totalamount > 100 ? totalamount * 0.1 : totalamount * 0.05;

  return discount;
}

console.log(calculateDiscount(700));
console.log(calculateDiscount(90));
