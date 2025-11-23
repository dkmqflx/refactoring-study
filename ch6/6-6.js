let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  return defaultOwner;
}

/**
 * 외부에서 getDefaultOwner 통해서 defaultOwner 객체를 반환받아서 사용할 수 있다
 * 하지만, 외부에서 defaultOwner 객체를 변경할 수 있다 (6.6-use.js 참고)
 */

/**
 * 방법1.
 * 새로운 객체를 반환하도록 한다
 */
export function getDefaultOwner2() {
  return { ...defaultOwner };
}

/**
 * 방법2.
 * 다른 프로그래밍 언어에서도 공통적으로 사용할 수 있는 방법인 클래스를 사용하기
 *
 * 아래처럼 클래스를 정의하면, getter만 있고, setter는 없기 때문에
 * 외부에서 객체를 변경할 수 없다
 * 즉, 클래스를 통해서 어떤 객체를 변경할 수 있고, 없는지 파악할 수 있다
 */

export class Person {
  #lastName;
  #firstName;

  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }

  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

const defaultOwner2 = new Person({ firstName: "마틴", lastName: "파울러" });

export function getDefaultOwner3() {
  return defaultOwner2;
}
const owner = getDefaultOwner3();
owner.firstName = "엘리"; // 여기서 에러 발생
console.log(owner);

/**
 * Q. Object.assign(), Object.freeze(),  ES6의 Spread operator 등을 이용하여 기존 객체를 복사하여 제공할 때 중첩된 객체들은 얕은복사가 되는 문제가 있었는데,
 * 이를 클래스로 캡슐화하면 해결할 수 있을까요?  그렇지 않다면,
 * JSON.parse(), JSON.stringify()를 이용하거나, 재귀함수를 이용하는 방법으로 진행해야겠죠?
 *
 * A. 클래스로 만들어도, 복사하는 멤버 함수들을 구현해 주셔야 합니다 :)
 * dog.deepCopy() 이런식으로요.
 * 자바스크립트에서는 loadash 라이브러리의 cloneDeep 함수를 사용해 볼 수도 있어요.
 * 구현사항: https://github.com/lodash/lodash/blob/master/.internal/baseClone.js
 */

/**
 * 얕은 복사 해결방법
 * 방법1대로 하면, 얕은 복사가 이루어지기 때문에
 * 객체 안에 또 다른 객체가 있다면, 그 객체는 그대로 참조값을 사용하게 되는 문제가 있다
 */

// ------------------------------------------------------------
// 객체에 대한 얕은 복산 해결방법
// ------------------------------------------------------------
import { cloneDeep } from "lodash";

// 중첩된 객체가 있는 원본 데이터
let defaultOwner3 = {
  firstName: "마틴",
  lastName: "파울러",
  address: {
    // 중첩된 객체
    city: "서울",
    zipCode: "12345",
    details: {
      // 더 깊은 중첩
      street: "강남대로",
      number: 123,
    },
  },
};

// ============================================
// 문제: Spread operator 사용 시 (얕은 복사)
// ============================================
export function getDefaultOwner2() {
  return { ...defaultOwner3 };
}

// ❌ 문제: 중첩된 객체는 참조로 공유됨
const owner1 = getDefaultOwner2();
owner1.address.city = "부산";
console.log(defaultOwner3.address.city); // "부산" (원본도 변경됨!)

// ============================================
// 해결: lodash cloneDeep 사용
// ============================================
export function getDefaultOwnerWithCloneDeep() {
  return cloneDeep(defaultOwner3);
}

// ✅ 해결: 완전한 깊은 복사
const owner2 = getDefaultOwnerWithCloneDeep();
owner2.address.city = "대전";
owner2.address.details.street = "서초대로";
console.log(defaultOwner3.address.city); // "서울" (원본 변경 안됨)
console.log(defaultOwner3.address.details.street); // "강남대로" (원본 변경 안됨)

// 모든 중첩 레벨에서 독립적인 복사본이 생성됨

// ------------------------------------------------------------
// 객체에 대한 얕은 복산 해결방법
// ------------------------------------------------------------

import { cloneDeep } from "lodash";

export class PersonWithLodash {
  #firstName;
  #lastName;
  #address;
  #contact; // 두 번째 중첩 객체

  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
    this.#address = data.address || {};
    this.#contact = data.contact || {}; // 두 번째 중첩 객체 초기화
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get address() {
    return this.#address;
  }

  get contact() {
    return this.#contact;
  }

  // lodash의 cloneDeep을 사용한 깊은 복사
  deepCopy() {
    return cloneDeep(this);
  }
}

// ============================================
// 사용 예시: 중첩된 객체가 2개 있는 경우
// ============================================

const person1 = new PersonWithLodash({
  firstName: "마틴",
  lastName: "파울러",
  address: {
    // 첫 번째 중첩 객체
    city: "서울",
    zipCode: "12345",
    details: {
      // address 내부의 중첩 객체
      street: "강남대로",
      number: 123,
    },
  },
  contact: {
    // 두 번째 중첩 객체
    email: "martin@example.com",
    phone: {
      // contact 내부의 중첩 객체
      mobile: "010-1234-5678",
      home: "02-1234-5678",
    },
  },
});

// 깊은 복사 실행
const person2 = person1.deepCopy();

// ✅ 첫 번째 중첩 객체(address) 변경 테스트
person2.address.city = "부산";
person2.address.details.street = "해운대대로";
console.log(person1.address.city); // "서울" (원본 변경 안됨)
console.log(person1.address.details.street); // "강남대로" (원본 변경 안됨)

// ✅ 두 번째 중첩 객체(contact) 변경 테스트
person2.contact.email = "new@example.com";
person2.contact.phone.mobile = "010-9999-9999";
console.log(person1.contact.email); // "martin@example.com" (원본 변경 안됨)
console.log(person1.contact.phone.mobile); // "010-1234-5678" (원본 변경 안됨)

// ✅ 깊은 중첩까지 독립적으로 복사됨
person2.address.details.number = 999;
person2.contact.phone.home = "02-9999-9999";
console.log(person1.address.details.number); // 123 (원본 변경 안됨)
console.log(person1.contact.phone.home); // "02-1234-5678" (원본 변경 안됨)
