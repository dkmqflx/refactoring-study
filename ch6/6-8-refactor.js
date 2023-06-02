// ������ ������ ��� ���� ���͸� �ϴ� �Լ�

// export function readingsOutsideRange(station, min, max) {
//   return station.readings.filter((r) => r.temp < min || r.temp > max);
// }

// �����丵 1
// �Ű������� �ϳ��� ��ü�� �����ش�
// ���� �ִ� ������ ��ü�� �����ؼ�  �Ű������� ���� ���� �� �ִ�
// export function readingsOutsideRange(station, range) {
//   return station.readings.filter(
//     (r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling
//   );
// }

// �Ʒ� ��ü ���
// const operationPlan = {
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

// �����丵 2
// �ܺο��� ����ϵ��� export ���
// �����͸� ��� �ִ� ������ �����͸� ó���ϴ� ������ �ϳ��� Ŭ�������� ó���Ѵ�
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
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

// ���� ��ü���� �ν��Ͻ��� �����丵
const operationPlan = new Number(51, 53);

export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

const result = readingsOutsideRange(station, operationPlan);

console.log(result);
