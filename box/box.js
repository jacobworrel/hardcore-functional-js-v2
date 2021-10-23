const Box = (x) => ({
  map: (f) => Box(f(x)),
  chain: (f) => f(x),
  fold: (f) => f(x),
  toString: () => `Box(${x})`,
});

module.exports = Box;