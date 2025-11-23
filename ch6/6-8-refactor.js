// 정해진 범위를 벗어난 것을 필터링 하는 함수

// export function readingsOutsideRange(station, min, max) {
//   return station.readings.filter((r) => r.temp < min || r.temp > max);
// }

// 리팩토링 1
// 매개변수를 하나의 객체로 묶어준다
// 연관 있는 값들을 객체로 전달해서  매개변수의 수를 줄일 수 있다
// export function readingsOutsideRange(station, range) {
//   return station.readings.filter(
//     (r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling
//   );
// }

// 아래 객체 사용
// const operationPlan = {
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

// 리팩토링 2
// 외부에서 사용하도록 export 사용
// 데이터를 담고 있는 로직과 데이터를 처리하는 로직을 하나의 클래스에서 처리한다
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

// 기존 객체에서 인스턴스로 리팩토링
const operationPlan = new NumberRange(51, 53);

export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

const result = readingsOutsideRange(station, operationPlan);

console.log(result);

/**
 * 리팩토링 3
 * readingOutsideRange함수가 station 대신 station.readings를 받게 수정해보았습니다.
 * NumberRange의 getter는 사용하지 않으니 없애고
 * contains 함수를 활용해 isOutlier 함수를 만들어보았습니다.
 */
export class NumberRange2 {
  #min;
  #max;

  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  contains(number) {
    return this.#min <= number && this.#max >= number;
  }

  isOutside(number) {
    return this.contains(number);
  }
}

export function readingsOutsideRange2(data, range) {
  return data.filter((r) => range.isOutside(r.temp));
}
