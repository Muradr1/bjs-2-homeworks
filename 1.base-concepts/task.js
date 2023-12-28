"use strict"
function solveEquation(a, b, c) {
  let d = (b ** 2) - 4 * a * c;
  let arr = [];

  if(d < 0) {
    arr = [];
  }else if(d === 0) {
    arr.push((-b / (2 * a)));
  }else if(d > 0) {
    arr.push((-b + Math.sqrt(d) ) / (2 * a)),
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  };
  
    return arr;
};
solveEquation(1, 5, 4);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  let result = payment * countMonths;
  
  result = (result).toFixed(2);

    return (Number (result));
};
calculateTotalMortgage(10, 0, 50000, 12);