// payment.js

function processPayment(amount, currency = 'KRW', method = 'card') {
  if (amount <= 0) {
    throw new Error('결제 금액은 0보다 커야 합니다.');
  }

  const supportedMethods = ['card', 'bank', 'mobile'];
  if (!supportedMethods.includes(method)) {
    throw new Error(
      `지원하지 않는 결제 방식입니다. 지원 방식: ${supportedMethods.join(', ')}`
    );
  }

  console.log(
    `${amount}${
      currency === 'KRW' ? '원' : currency
    }이 ${method} 방식으로 성공적으로 결제 완료됐습니다.`
  );
}

module.exports = {processPayment};
