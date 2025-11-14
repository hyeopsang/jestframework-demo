// apiClient.test.js
const {fetchData} = require('./apiClient');

describe('apiClient.js 테스트', () => {
  // ... 생략

  test('callback 함수가 제공되면 호출되는지 확인', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      // 어차피 테스트용이기 때문에 반환값을 자유롭게 수정해도 괜찮습니다.
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: '김철수',
        address: {
          street: '테스트 거리',
          suite: '테스트 호수',
          city: '서울',
        },
      }),
    });

    // Arrange
    // 여기서도 URL을 자유롭게 수정해도 괜찮습니다.
    const url = 'https://api.example.com/user/1';
    const callback = jest.fn();

    // Act
    await fetchData(url, callback);

    // Assert
    // 가짜 함수인 callback이 호출되었는지 확인
    expect(callback).toHaveBeenCalled();
    // toHaveBeenCalled는 호출 여부만 확인
    // toHaveBeenCalledWith는 호출된 인자를 확인
    expect(callback).toHaveBeenCalledWith({
      userId: 1,
      formattedName: '김철수',
      address: '테스트 거리 테스트 호수 서울',
    });
    // 0번 호출되었는지 확인
    expect(callback).toHaveBeenCalledTimes(0);
    // 또는 호출이 되지 않았는지 확인
    expect(callback).not.toHaveBeenCalled();
  });
});
