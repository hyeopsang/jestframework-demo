// matcher.test.js

test('jest-extended matcher 예제', () => {
  // 배열 관련
  // 배열 타입 확인
  expect([1, 2, 3]).toBeArray();
  // 배열 포함 여부 확인 -> 모두 포함되어야 함
  expect([1, 2, 3]).toIncludeAllMembers([1, 2]);
  // 배열 포함 여부 확인 -> 하나라도 포함되어야 함
  expect([1, 2, 3]).toIncludeAnyMembers([1, 4]);
  // 배열 모든 요소 확인 -> 모든 요소가 조건을 만족해야 함
  expect([1, 2, 3]).toSatisfyAll((n) => n > 0);

  // 객체 관련
  expect({a: 1, b: 2}).toBeObject();
  // 객체 키 포함 여부 확인 -> 일부 키만 포함해도 가능 (단, 하나라도 불일치하면 안됨)
  expect({a: 1, b: 2}).toContainKeys(['a', 'b']);
  // 객체 키 포함 여부 확인 -> 모든 키를 포함해야 함
  expect({a: 1, b: 2}).toContainAllKeys(['a', 'b']);

  // 숫자 관련
  expect(123).toBePositive();
  expect(-123).toBeNegative();
  expect(3).toBeWithin(1, 5);

  // 문자열 관련
  expect('hello').toBeString();
  expect('hello').toStartWith('he');
  expect('hello').toEndWith('lo');

  // 날짜 관련
  const date = new Date();
  expect(date).toBeDate();
  expect(date).toBeBefore(new Date('2099-12-31'));
  expect(date).toBeAfter(new Date('1970-01-01'));
});
