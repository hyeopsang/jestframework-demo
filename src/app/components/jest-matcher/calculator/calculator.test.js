const {calculateDiscountedPrice} = require('./calculator');

test('20% 할인 적용 시 올바른 결과를 반환하는지 확인', () => {
  expect(calculateDiscountedPrice(100, 20)).toBe(80);
});
test('유효한 가격, 할인 적용 후 0보다 큰 숫자를 반환하는지 확인', () => {
  expect(calculateDiscountedPrice(100, 20)).toBeGreaterThan(70);
});
test('기본 가격, 할인 적용 후 가격이 기본 가격보다 작은지 확인', () => {
  expect(calculateDiscountedPrice(100, 20)).toBeLessThan(90);
});
test('유효하지 않은 입력(음수 할인율)에 대해 오류를 발생시키는지 확인', () => {
  expect(() => calculateDiscountedPrice(100, -20)).toThrow();
});
