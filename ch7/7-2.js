export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  set courses(courses) {
    this.#courses = courses;
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");

// 이렇게 하면 외부에서 수정할 수 있는 치명적인 문제 있다
// 외부에서 자료구조를 마음대로 사용하도록 노출시키는 것은 위험하다
// 할 수 있는 것만 외부에 노출하는 것이 중요하다
ellie.courses.push(new Course("리팩토링", true));

console.log(ellie.courses.length);
