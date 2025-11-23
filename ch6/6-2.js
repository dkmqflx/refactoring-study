// 예제 1
export function rating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

// 예제 2
function reportLines(customer) {
  // TODO:push 대신 새로운 객체를 만들어서 반환하도록 수정
  const lines = [];
  gatherCustomerData(lines, customer);
  return lines;
}

function gatherCustomerData(out, customer) {
  out.push(["name", customer.name]);
  out.push(["location", customer.location]);
}

/**
 * --------------------------------
 * 리팩토링 후
 * --------------------------------
 */

export function reportLines2(customer) {
  return [
    ["name", customer.name],
    ["location", customer.location],
  ];
}
