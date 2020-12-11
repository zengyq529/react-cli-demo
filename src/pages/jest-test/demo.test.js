const sum = require('./demo').sum;


test('adds 1 + 2 to equal 6', () => {
  expect(sum(1,2,3)).toBe(6);
});