const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

// 요즘엔 이런 여러 함수를 변환 함수로 묶는 방법 잘 안쓴다
