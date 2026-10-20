class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  // 더 적절한 이름으로 변경
  // 내부에서는 여전히 name을 사용하고 있지만, 외부에서는 title을 사용하도록 변경
  get title() {
    return this._name;
  }

  // 더 적절한 이름으로 변경
  set title(value) {
    this._name = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  name: "드림코딩",
  country: "대한민국",
});
