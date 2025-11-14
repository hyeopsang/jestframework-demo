const {validateEmail} = require('./validate');

test('유효한 이메일 입력 시 true를 반환하는지 확인', () => {
  expect(validateEmail('test@example.com')).toBeTruthy();
});
test('유효하지 않은 이메일 입력 시 false를 반환하는지 확인', () => {
  expect(validateEmail('testexample.com')).toBeFalsy();
});
test('유효한 이메일 입력 시 true를 반환하는지 확인', () => {
  expect(validateEmail('test@')).not.toBeTruthy();
});
