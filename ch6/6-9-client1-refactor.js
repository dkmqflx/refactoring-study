import { acquireReading } from "./6-9.js";

const reading = acquireReading();

// baseRate 더 이상 사용되지 않는다
// baseCharge는 Reading 클래스에 정의한다
console.log(reading.baseCharge);
