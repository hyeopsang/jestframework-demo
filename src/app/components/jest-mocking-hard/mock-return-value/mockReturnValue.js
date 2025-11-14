// Promise를 반환하지 않는 가짜함수를 만들 때 사용
describe('동기 함수 테스트', () => {
  test('mockReturnValue 테스트', () => {
    const mockFn = jest.fn().mockReturnValue(123);

    // console.log(mockFn()); // 123
    expect(mockFn()).toBe(123);
  });
});
