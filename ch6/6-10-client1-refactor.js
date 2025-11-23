import { acquireReading, enrichReading } from "./6-10.js";

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);

/**
 * 왠만하면 클래스로 만들어주는게 좋다
 * 클래스의 get을 사용하면, 나중에 데이터가 변경되더라도,
 * get 하는 시점에 변경된 데이터를 바로 사용할 수 있다
 *
 * 히지만, 변환 함수를 사용하게 되면,
 * 변환 함수를 사용하는 시점에 데이터를 가지고 계산하게 된다
 * 나중에 데이터가 변경되더라도, 변경된 값이 반영되지 않기 때문에
 * 내가 원하는 시점의 데이터를 사용하기 위해서는 변환 함수를 다시 호출해야하는 문제가 있다
 */
