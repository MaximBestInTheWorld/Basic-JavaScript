"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
    else {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let payment = amount - contribution;
  let monthlyPayment = payment * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
  return totalAmount;
}