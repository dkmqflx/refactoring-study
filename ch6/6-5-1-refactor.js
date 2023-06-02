// 너무 축약된 함수 이름을 사용하고 있다
export function circum(radius) {
  return 2 * Math.PI * radius;
}

// 책에서 나오는 것 처럼 그렇게 수동적으로
// 코드 에디터에서 리팩토링을 지원해준다
// 함수 이름에다가 오른쪽 마우스 클릭하면 rename symbol 있다
// 수정하면 해당 함수 이름 뿐 아니라 함수를 사용하는 모든 곳에서 이름을 변경해준다
// 원주율이라는 이름 모두 적어준다
export function circumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 *
 * Q. 함수명이라 calculateCircumference 라고 생각을 했었는데, 혹시 그냥 circumference라고 네이밍하신 이유가 있을까요?!
 *
 * A.함수명이 길어져서 저는 생략 했는데 그렇게 작성하셔도 좋아요 ?
 *  무언가 길게 계산하고, 네트워크 통신을 하거나, 데이터베이스에서 읽을떄는 함수명을 꼭 동사로 시작하도록 작성해서 명확하게 해주는게 좋아요
 * get..
 * fetch..
 * read..=
 * calcuate...
 *
 * 다만, 클래스/겍체/모듈 안에서 속성처럼 쓰이는 경우 (긴 계산이 아니라, 속성값과 유사한 경우) 명사로도 사용 가능합니다.
 * person.name;
 * person.fullname;
 * shape.circumference;
 *
 * class Shape {
 * get circumference() { } ..
 * }
 */
