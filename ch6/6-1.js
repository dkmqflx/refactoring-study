export function printOwing(invoice) {
  let outstanding = 0; // TODO: let -> const 로 변경

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // TODO: for -> map 으로 변경, outstanding 을 계산하는 부분을 함수로 추출
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // TODO: 기존 객체 수정하지 않고 새로운 객체를 만들어서 반환하는 함수로 추출
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

/*--------------------------------
  리팩토링 후
--------------------------------*/

// 주문 합계를 계산하는 순수 함수 (for -> map/reduce, 재사용 가능)
const calculateOutstanding = (orders) =>
  orders.map((o) => o.amount).reduce((sum, amount) => sum + amount, 0);

// 기존 객체를 수정하지 않고 기한을 추가한 새 객체를 반환
const withDueDate = (invoice, daysToAdd = 30) => {
  const today = new Date();
  const dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysToAdd
  );
  return { ...invoice, dueDate };
};

const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
};

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

// 주석 내용을 반영한 개선 버전
export const printOwing2 = (invoice) => {
  const outstanding = calculateOutstanding(invoice.orders);
  const enrichedInvoice = withDueDate(invoice, 30);

  printBanner();

  printDetails(enrichedInvoice, outstanding);
};

/**
 * 함수 실행
 */
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

printOwing(invoice);
// printOwing2(invoice);
