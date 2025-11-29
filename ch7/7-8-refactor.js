// 중개자, 위임 -> 컴포지션이라고 한다
// 예를들어 A라는 클래스에 모든 코드가 있는게 아니라
// B라는 클래스를 갖고 있으면
// A 클래스는 B 클래스르 통해서 위임을 한다
// 즉, B에서 필요한 데이터를 가져올 수 있다
// 따라서 A라는 클래스의 역할이 너무 많다면, B라는 클래스를 통해서 위임을 할 수 있다
// 세부적으로 B를 나누었다면, 이를 제거할 수 있다
// 아래는 중개자를 제거하는 예시
class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
}

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
