function calculateDiscount(totalamount) {
  let rate = totalamount > 100 ? 0.1 : 0.05;
  let discount = totalamount * rate;
  return discount;
}

console.log(calculateDiscount(700));
console.log(calculateDiscount(90));
console.log(calculateDiscount(700));
console.log(calculateDiscount(90));
