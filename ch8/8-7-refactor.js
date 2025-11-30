export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  // 반복문이 반복되는 것을 방지하기 위해, 개선 전 코드처럼 한번의 반복문에서 모든 것을 처리하려고 하는 경향이 있따
  // 반복문은 빅오(n), 배열의 길이에 비례하는 시간 복잡도를 가진다
  // 그렇다고 해도 n^n이 아니라, 2*n, 즉 n앞에 있는 수는 무시할 수 있을 정도의 복잡도
  // 그러므로 반복문을 쪼개서 처리하도록 한다

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}
