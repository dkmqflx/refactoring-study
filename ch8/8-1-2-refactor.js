export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  // overdraftCharge 함수 내부를 보면 isPremium이 사용되고 있고
  // 로직을 보았을 때 Account와는 밀접하게 관련이 없으므로 AccountType 클래스로 분리
  get isPremium() {
    return this._type === "Premium";
  }

  // AccountType 는 타입에 대한 정보만 갖고 있어야 하는 클래스
  // overdraftCharge 함수는 daysOverdrawn 인자로 전달받고 있다
  // 따라서 나는 Account에 있는게 맞다고 생각
  // 사실 이건 주관적인 결정이다
  overdraftCharge(daysOverdrawn) {
    // 중첩된 if 대신 early return 을 사용해보자
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }

    const baseCharge = 10;

    return daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
