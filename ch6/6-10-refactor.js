import { cloneDeep } from "lodash";

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  const result = cloneDeep(original); // 깊은 복사

  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - result.taxThreshold);

  return result;
}

function calculateBaseCharge(reading) {
  return reading.baseRate * reading.quantity;
}

// 요즘엔 이런 여러 함수를 변환 함수로 묶는 방법 잘 안쓴다
