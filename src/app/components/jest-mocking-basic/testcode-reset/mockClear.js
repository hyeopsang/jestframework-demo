// apiClient.test.js
const {fetchData} = require('./mockClear');

describe('apiClient.js 테스트', () => {
  const callback = jest.fn();

  beforeEach(() => {
    callback.mockClear(); // callback 함수의 호출 기록을 초기화
    // jest.clearAllMocks(); // 모든 mock의 호출 기록을 초기화
  });

  test('API 호출 후 데이터 포맷이 올바르게 되는지 확인', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, // fetch가 성공적으로 호출되었음을 나타냄
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Leanne Graham',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
        },
      }),
    });
    // Arrange
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    // Act
    const result = await fetchData(url);

    // Assert
    expect(result).toEqual({
      userId: 1,
      formattedName: 'LEANNE GRAHAM',
      address: 'Kulas Light Apt. 556 Gwenborough',
    });
  });

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
    // const callback = jest.fn();

    // Act
    await fetchData(url, callback);

    // Assert
    // 가짜 함수인 callback이 호출되었는지 확인
    expect(callback).toHaveBeenCalled();
  });

  test('callback 함수가 포멧된 데이터를 인자로 가지고 호출되는지 확인', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
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
    const url = 'https://api.example.com/user/1';
    // const callback = jest.fn();

    // Act
    await fetchData(url, callback);

    // Assert
    // toHaveBeenCalled는 호출 여부만 확인
    // toHaveBeenCalledWith는 호출된 인자를 확인
    expect(callback).toHaveBeenCalledWith({
      userId: 1,
      formattedName: '김철수',
      address: '테스트 거리 테스트 호수 서울',
    });
  });

  test('callback 함수가 한 번 호출되는지 확인', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
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
    const url = 'https://api.example.com/user/1';
    // const callback = jest.fn();

    // Act
    await fetchData(url, callback);

    // Assert
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('callback이 제공되지 않은 경우 callback 함수가 호출되지 않는지 확인', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
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
    const url = 'https://api.example.com/user/1';
    // const callback = jest.fn();

    // Act
    // callback 함수 전달 X
    await fetchData(url);

    // Assert
    // 0번 호출되었는지 확인
    expect(callback).toHaveBeenCalledTimes(0);
    // 또는 호출이 되지 않았는지 확인
    expect(callback).not.toHaveBeenCalled();
  });
});
