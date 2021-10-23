// https://codepen.io/drboolean/pen/poodxOm?editors=0010

const Box = require("./box");

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat_ = str =>
  parseFloat(str.replace(/\$/, ''))

const moneyToFloat = str => Box(str).fold(str => str.replace(/\$/, ''));


// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat_ = str => {
  const float = parseFloat(str.replace(/\%/, ''))
  return float * 0.0100
}

const percentToFloat = str =>
  Box(str)
    .map(str => str.replace(/\%/, ''))
    .map(parseFloat)
    .fold(float => float * 0.0100);





// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
  const cents = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cents - (cents * savings)
}

const applyDiscount = (price, discount) =>
  Box(price)
    .map(moneyToFloat)
    .chain(cents =>
      Box(percentToFloat(discount))
        .fold(savings => cents - (cents * savings))
    )