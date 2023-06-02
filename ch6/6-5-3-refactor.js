// export function inNewEngland(aCustomer) {
//   // 필요한 것은 state인데 전체 customer라는 모든 객체를 받고 있다
//   // 정말 필요한 객체만 받아온다
//   return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
// }

export function inNewEngland(state) {
  // 필요한 것은 state인데 전체 customer라는 모든 객체를 받고 있다
  // 정말 필요한 객체만 받아와서 외부 객체애 대한 의존도를 낮춘다
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
