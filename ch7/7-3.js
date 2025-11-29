export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;

// 책에 나온 예제 너무 복잡하다고 생각
// 아래 예제를 통해 쉽게 파악할 수 있다

// 이렇게 글로벌 번호가 사용되는 경우라면
const telephoneNumber = "010-1234-5678";

const globalPhoneCode = "+82" + "010-1234-5678";

// 아래와 같이 캡슐화 해서 처리할 수 있다
class TelephoneNumber {
  constructor(areaCode, number) {
    this.areaCode = areaCode;
    this.number = number;
  }

  get telephoneNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }
}
