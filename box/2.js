const Box = require("./box");

const first = xs => xs[0];

const halfTheFirstLargeNumber_ = xs => {
  const found = xs.filter(x => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

const halfTheFirstLargeNumber = (xs) =>
  Box(xs)
    .map(xs => xs.filter(x => x >= 20))
    .map(xs => first(xs) / 2)
    .fold(answer => `The answer is ${answer}`)

const res = halfTheFirstLargeNumber([1, 4, 50]);
console.log(res);
