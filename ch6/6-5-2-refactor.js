export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // 우선순위가 더 높으면 더 먼저 예약되는 추가적인 기능이 있다고 하자
  // boolean으로 다른 동작을 하는 함수는 좋지 않다
  // 이런 boolean을 flag라고 한다
  // 하지만 정말정말 필요한 경우라면, 아래처럼 기존에 해당 함수를 호출하던 부분에서 에러 나지 않도록 false로 기본 값 설정해준다
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
