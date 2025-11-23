export function priceOrder(product, quantity, shippingMethod) {
  // 기본 제품 가격
  const basePrice = calculateBasePrice(product, quantity);
  s;

  // 할인 가격
  const discount = calculateDiscountedPrice(product, quantity);

  // 총 배송비
  const shippingCost = calculateShippingCost(
    basePrice,
    quantity,
    shippingMethod
  );

  // 총 가격
  return basePrice - discount + shippingCost;
}

// 함수만 봐도 이해할 수 있도록 리팩토링 했다.
// 만약 나라면 Order 라는 클래스를 만들고, 그 안에 변수를 전달받아서 계산하는 함수를 만들 것 같다
// 이 부분은 이후 캡슐화에서 자세히 다루겠다

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
