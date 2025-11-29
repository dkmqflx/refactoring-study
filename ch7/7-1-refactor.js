// 클래스를 사용하는 방식으로 리팩토링
// 어떤 값을 읽을 수 있는지
// 어떤 값을 변경할 수 있는지

class Organization {
  #name;
  #country;
  #data;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  // get rawData() {
  //   return { ...this.#data }; // 얉은복사, cloneDeep 사용하면 깊은 복사 가능
  // }

  // 위에 set 이 있기 때문에, 최신 값을 반환하고 싶다면 이렇게 처리한다
  get rawData() {
    return { name: this.#name, country: this.#country };
  }
}

// 프로젝트 내부에서 필요한 모듈들이라면 아래처럼 객체를 사용해서 전달하도록 하지 않고,
// 이렇게 인자를 순서대로 전달해준다
// 위의 constructor에서도 constructor(naem, country) 이렇게 인자를 순서대로 전달해준다
const organization1 = new Organization("Acme Gooseberries", "GB");

// 하지만 백엔드와 통신하면서 주고 받는 데이터이기 때문에 json으로 주고 받거나
// 외부 라이브러리에서 객체 형태로 반환하는 경우라면
// 이렇게 객체로 처리할 수도 있다
const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
