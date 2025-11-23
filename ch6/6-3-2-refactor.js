export class Order {
  #data;

  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice * this.discount + this.shipping;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}

/**
 * Q. 굳이 getter를 써야할까요
 * 이렇게 해도 충분하지않나 생각이드네요
 *
 * A. 그렇게 하면 외부에서 basePrice와 discount의 값을 변경할 수 있어요.
 * set이 가능해지죠.getter를 사용하면 set 함수를 별도로 지정하지 않는다면 읽기모드만 가능합니다 :)
 */

export class Order2 {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }

  get itemPrice() {
    return this._data.itemPrice;
  }

  basePrice = this.quantity * this.itemPrice;

  discount = Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;

  shipping = Math.min(this.quantity * this.itemPrice * 0.1, 100);

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }
}
