function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}

// 동일한 값을 return 하는 조건문을 함수로 분리해준다
function isNotEligibleForDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
