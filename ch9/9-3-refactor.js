// 예제 1
class Order {
  // 다른 코드 있다고 가정

  // discount 변경하는데,_discountedTotal도 변경하고 있었기 때문에
  // 따라서 get 하는 순간 필요한 계산을 해서 전달하도록 했다.
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  // 코듣를 이렇게 수정해준다
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    // 필요한 순간에 질의 함수를 통해 계산하도록 했다.
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
