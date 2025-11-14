describe('비동기 함수 테스트', () => {
  test('mockResolvedValueOnce 테스트', async () => {
    const mockFn = jest
      .fn()
      .mockResolvedValueOnce({id: 1, name: '첫 번째 응답'})
      .mockResolvedValueOnce({id: 2, name: '두 번째 응답'})
      .mockResolvedValueOnce({id: 3, name: '세 번째 응답'});

    // 각 호출마다 다른 결과값 반환
    const result1 = await mockFn();
    const result2 = await mockFn();
    const result3 = await mockFn();

    expect(result1).toEqual({id: 1, name: '첫 번째 응답'});
    expect(result2).toEqual({id: 2, name: '두 번째 응답'});
    expect(result3).toEqual({id: 3, name: '세 번째 응답'});
  });
});
