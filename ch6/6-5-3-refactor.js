// export function inNewEngland(aCustomer) {
//   // �ʿ��� ���� state�ε� ��ü customer��� ��� ��ü�� �ް� �ִ�
//   // ���� �ʿ��� ��ü�� �޾ƿ´�
//   return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
// }

export function inNewEngland(state) {
  // �ʿ��� ���� state�ε� ��ü customer��� ��� ��ü�� �ް� �ִ�
  // ���� �ʿ��� ��ü�� �޾ƿͼ� �ܺ� ��ü�� ���� �������� �����
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
