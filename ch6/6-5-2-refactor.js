export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // �켱������ �� ������ �� ���� ����Ǵ� �߰����� ����� �ִٰ� ����
  // boolean���� �ٸ� ������ �ϴ� �Լ��� ���� �ʴ�
  // �̷� boolean�� flag��� �Ѵ�
  // ������ �������� �ʿ��� �����, �Ʒ�ó�� ������ �ش� �Լ��� ȣ���ϴ� �κп��� ���� ���� �ʵ��� false�� �⺻ �� �������ش�
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
