// 책에서 나온 솔루션 마음에 안들어서 내 마음대로 만들 것
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan("normal");
  }
}

// order 안에 priority를 처리하기 보다는
// 별도의  priority 클래스를 만들어서 처리하는 방식
// 정말 필요한 경우에만 Priority 클래스를 만들어서 사용하는 것이 좋다
class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      // 이렇게 생성자 안에서 에러를 던지는 것은 보안에 취약하기 때문에 좋지 않은 방법
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  // 우선순위 비교
  equals(other) {
    return this.#index === other.index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  // 우선순위별로 순서가 되어 있으므로, index가 높을 수록 우선순위가 높다
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
}

const orders = [
  new Order(new Priority("normal")),
  new Order(new Priority("high")),
  new Order(new Priority("rush")),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
console.log(highPriorityCount);
