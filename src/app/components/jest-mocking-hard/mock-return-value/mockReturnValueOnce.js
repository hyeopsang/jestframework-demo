// 만약에 여러 호출을 한번에 해야하는 상황이 있을 때 mockReturnValue를 쓰면 마지막 하나만 모킹하게 된다.
// 이때 mockReturnValueOnce를 쓰면 모두 모킹이 가능하다
describe('동기 함수 테스트', () => {
  test('mockReturnValue 테스트', () => {
    const mockFn = jest.fn().mockReturnValue(123);
    console.log(mockFn()); // 123
    expect(mockFn()).toBe(123);
  });

  test('mockReturnValueOnce 테스트', () => {
    const mockFn = jest
      .fn()
      .mockReturnValueOnce(1) // 첫 번째 호출에만 1 반환
      .mockReturnValueOnce(2) // 이후 호출은 2 반환
      .mockReturnValueOnce(3); // 이후 호출은 3 반환

    expect(mockFn()).toBe(1);
    expect(mockFn()).toBe(2);
    expect(mockFn()).toBe(3);
  });
});
