// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit; // 사용하는 곳과 가까운 곳에 둔다

const order = retreiveOrder();

let charge;

// 예제 2
// 반복되는 코드 개선
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);

  return result;
}
