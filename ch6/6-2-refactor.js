// 6.3 함수 인라인하기

// 예제 1
export function rating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
  // 함수 이름이 구체적으로 무슨 일을 하는지 명시되어 있다.
}

function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

// 반복적으로 사용되고, 함수 내부에서 조건이 3분인지 5분인지 변경된다면 별도의 함수로 빼줄 수 있다
// 함수 이름이 그대로 변수로 사용되고 있기 때문에 굳이 함수로 사용할 필요가 없다
// 나중에 필요할 때 함수롬 들어주면 된다
// 아래철럼 인라인으로 만들어준다

// 예제 1 - 리팩토링

export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const lines = [];
  gatherCustomerData(lines, customer);
  return lines;
}

function gatherCustomerData(out, customer) {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
}

// 예제 2 - 리팩토링

// 불필요하게 세밀하게 나눠져 있는 함수
// 아래철럼 인라인으로 만들어준다

function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}
