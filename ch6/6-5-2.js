export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // 더 우선순위가 높은 customer를 추가하고 싶다면, 어떻게 코드를 수정하면 될까?
  addReservation(customer) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
