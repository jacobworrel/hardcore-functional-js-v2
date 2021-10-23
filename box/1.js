const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: () => `Box(${x})`,
});

// const nextCharForNumberString = str => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = number + 1;
//   return String.fromCharCode(nextNumber);
// };

const identity = x => x;

const nextCharForNumberString = str => {
  return Box(str)
    .map(x => x.trim())
    .map(trimmed => parseInt(trimmed))
    .map(num => num + 1)
    .map(String.fromCharCode)
    .fold(identity);
};

const result = nextCharForNumberString("  64 ");

console.log(result);
