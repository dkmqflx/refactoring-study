export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비

  // 주석이 없다면 아래 코드가 무엇을 하는지 알기 어렵다.
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

// 아래처럼 코드를 수정하면, 주석 없이 코드를 이해할 수 있다
export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discount + shipping;
}
