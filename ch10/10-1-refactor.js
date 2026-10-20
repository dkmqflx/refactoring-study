function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  // 질의 함수 형태로 분리해서 의미 있는 이름을 붙여준다
  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
