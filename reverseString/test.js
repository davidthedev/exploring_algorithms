const reverse = require('./index');

test('function exists', () => {
  expect(reverse).toBeDefined();
});

test('reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('reverses a diff string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
