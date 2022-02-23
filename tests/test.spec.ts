function sayHello(name: string, fn: () => void) {
  if (name === 'dsy') {
    fn();
  }
}

test('测试加法', () => {
  expect(1 + 2).toBe(3);
});

test('测试函数', () => {
  const fn = jest.fn();
  sayHello('dsy', fn);
  expect(fn).toHaveBeenCalled();
});
