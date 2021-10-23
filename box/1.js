const Box = require("./box");

const nextCharForNumberString_ = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

const identity = x => x;

const nextCharForNumberString = str =>
  Box(str)
    .map(x => x.trim())
    .map(trimmed => parseInt(trimmed))
    .map(num => num + 1)
    .map(String.fromCharCode)
    .fold(identity);

const result = nextCharForNumberString("  64 ");

console.log(result);
