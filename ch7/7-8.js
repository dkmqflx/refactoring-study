// 중개자, 위임 -> 컴포지션이라고 한다
// 예를들어 A라는 클래스에 모든 코드가 있는게 아니라
// B라는 클래스를 갖고 있으면
// A 클래스는 B 클래스르 통해서 위임을 한다
// 즉, B에서 필요한 데이터를 가져올 수 있다
// 따라서 A라는 클래스의 역할이 너무 많다면, B라는 클래스를 통해서 위임을 할 수 있다
// 세부적으로 B를 나누었다면, 이를 제거할 수 있다

// 아래 클래스들 보변 단순히 get과 set만 하는 로직들이 있다
// 하나로 통합하는 것이 더 낫다

class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#department.manager;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
