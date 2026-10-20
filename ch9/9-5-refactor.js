const customerRepository = new CustomerRepository();

// order 인스턴스를 만들 때, 고객 인스턴스를 만들어서 전달한다
const oder = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
  // id가 있는 고객이 있으면 그 고객에 해당하는 인스턴스를 전달하고, 아니면 새로 만들어서 전달한다
);

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

/**
 * 고객은 하나의 id를 가지고 있어야 하는데 여러개 id를 갖게 되면 안된다
 * 기존 코드에서는 그런 문제가 발생할 수 있다
 * 고객당 하나의 id를 갖고 있다는 것을 보장하기 위해 레포지토리 패턴을 사용할 수 있다
 */
class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }

    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
