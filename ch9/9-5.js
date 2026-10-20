class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
    // 나중에 이름을 변경하고 싶어서 수정하더라도
    // 위에서 값으로 사용한다면 name 필드 값이 이전 값으로 남아있는 문제가 생긴다.
  }

  get id() {
    return this._id;
  }
}

/**
 * 불변성을 유지한다는 것은 데이터가 하나라도 변경되면 새로운 버전을 만들어나가야 한다
 * 그런데 동일한 데이터 인데도 여러가지 버전이 있으면 문제가 되는 경우가 있다
 * 하나의 인스턴스에 대해서 업데이트를 했는데, 다른 인스턴스들은 업데이트 되지 않는 경우가 있다
 * 그렇기 때문에 특정한 값이 변경될 때 이걸 참조하는 여러군데에서 업데이트 되어야 한다면
 * 값 보다는 참조를 사용하는 것이 더 좋다
 */
