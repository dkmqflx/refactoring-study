/**
 * 6-9-client1.js, 6-9-client2.js, 6-9-client3.js 를 보면,
 * 데이터를 정의한 곳과 사용하는 곳이 여 기저기 분리되어 있다
 * */

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
