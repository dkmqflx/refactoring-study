class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  // 가격을 계산하는 메서드를 분리하여 가독성을 높였다
  get basePrice() {
    return this.#quantity * this.#item.price;
  }

  // 할인 요소를 계산하는 메서드를 분리하여 가독성을 높였다
  get discountFactor() {
    return this.basePrice > 1000 ? 0.95 : 0.98;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
