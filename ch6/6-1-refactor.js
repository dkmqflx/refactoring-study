// 6.3 함수 추출하기

/**
 * 아래 함수 코드의 문제점 - 함수 내부가 너무 길다
 * 가독성이 떨어진다
 * 너무 많은 일을 하기 때문에 중간중간 주석이 들어가게 된다
 * 재사용성도 떨어진다
 *
 *
 * 아래 함수를 리팩토링 하는 방법
 * 코드를 읽어 나가면서 주석을 달아준다
 * 주석을 달면 총 4개의 함수로 나누면 되겠다는 감이 온다
 */

export function printOwing(invoice) {
  printBanner();
  // 배너를 출력
  // console.log('***********************');
  // console.log('**** Customer Owes ****');
  // console.log('***********************');

  // 총 가격을 계산한다
  // let outstanding = 0; // 맨 위가 아니라 변수가 사용되는 곳으로 이동한다
  // // calculate outstanding
  // for (const o of invoice.orders) {
  //   outstanding += o.amount;
  // }

  let outstanding = caculateOutStanding(invoice); // 맨 위가 아니라 변수가 사용되는 곳으로 이동한다

  // // 지급 날짜를 계산한다
  // const today = new Date();
  // invoice.dueDate = new Date(
  //   today.getFullYear(),
  //   today.getMonth(),
  //   today.getDate() + 30
  // );

  recordDueDate(invoice);

  // 세부사항을 출력한다
  // console.log(`name: ${invoice.customer}`);
  // console.log(`amount: ${outstanding}`);
  // console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function caculateOutStanding(invoice) {
  let result = 0; // 반환하는 것이 목적이라면 result라는 이름을 많이 쓴다

  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);
