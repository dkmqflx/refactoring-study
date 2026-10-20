export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}
/**
 * 기존의 switch 문에서는, 새로운 케이스가 생길 때 마다 추가해줘야 하는 불편함이 있다
 * 즉, bird의 type이 추가되면 이를 사용하는 모든 곳에서 수정해줘야 하는 불편함이 있다
 * 이를 클래스로 해결한 것
 */

class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return "unknown";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super("EuropeanSwallow");
  }

  get plumage() {
    return "average";
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super("AfricanSwallow");
  }
  get plumage() {
    return this.numberOfCoconuts > 2 ? "tired" : "average";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super("NorwegianBlueParrot");
  }
  get plumage() {
    return this.voltage > 100 ? "scorched" : "beautiful";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()]);
console.log(result);
