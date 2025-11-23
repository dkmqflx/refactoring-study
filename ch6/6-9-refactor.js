/**
 * 6-9-client1.js, 6-9-client2.js, 6-9-client3.js 를 보면,
 * 데이터를 정의한 곳과 사용하는 곳이 여 기저기 분리되어 있다
 * */

export class Reading {
  #customer;
  #quantity;
  #month;
  #year;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}

/**
 * Q.
 * 클래스 생성자 함수에서 받은 인자들을 프라이빗 필드로 만들고 해당 필드중
 * 외부로 노출하고 싶은 필드를 게터로 노출 하는 부분에서 모든 필드가 그렇겠지만 예를들어
 * baseRate 경우 method처럼 값을 외부로 노출 시킬 수 도 있을것 같은데 여
 * 기서 게터를 이용하는 이유는 특정 기능을 수행 한다기 보다는 값에 가깝기 때문에 게터를 이용하게 되는 것일까요?
 *
 * A.
 * 값에 가까울 경우에는 getter를 이용해서, 외부에서는 일반 속성에 (필드) 접근하는 것처럼 사용하도록 만들어 두어요.
 * 대신 데이터베이스에서 읽거나, 네트워크 통신이 필요하거나, 단순한 값이 아니라, 복잡한 무언가를 처리 해서 계산된 결과를 도출하는 경우에는,
 * 함수로 사용하는것이 더 좋아요. (사용하는 입장에서 더 직관적임)
 */

/**
 * Q
 * 1. 이번 강의에서 처럼 js파일에  Reading 인스턴스를 만들고,  acquireReading() 함수를 통해서 그 인턴스를 받아서 사용하게 된다면 싱글톤으로 동작하나요?
 * 2. 한번 export, import 된 js 파일은 메모리에 올라가 프로세스가 다시 시작되기전까지 싱글톤처럼 유지되는 건가요?
 * 3.위에서 처럼  클래스 문법을 사용하지 않고, 그냥 날것의 js 파일에  변수를 선언하고, 함수를 선언해서 메서드처럼 활용할 함수들만 export function(){...}해두면 접근하는 변수들은  다른 js파일들에서 import, export 횟수 상관없이 싱글톤처럼 최초의 상태로 공유되는 상태인가요?
 *
 * A.
 * https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af
 */
