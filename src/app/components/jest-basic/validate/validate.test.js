//validate.test.js

const {validatePassword} = require('./validate');

test('비밀번호가 8자 이상인 경우 true가 반환되는지 확인하는 테스트 케이스를 작성해보세요.', () => {
  expect(validatePassword('123456789')).toBe(true);
});
test('비밀번호가 8자 미만인 경우 false가 반환되는지 확인하는 테스트 케이스를 작성해보세요.', () => {
  expect(validatePassword('1234567')).toBe(false);
});
