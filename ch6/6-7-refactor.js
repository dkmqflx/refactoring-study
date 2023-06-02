let a = height * width; // a는 무엇을 나타내는지 알 수 없다

let area = width * height; // 보통 너비와 높이라고 하기 때문

const cpyNm = '애플'; // 너무 축약된 이름 사용하지 말 것

const companyName = '애플';

let tpHd = '제목없음'; // h1 태그에서 사용하니까, 타이틀이라고 유추하는데 이렇게 유추하지 않고 한눈에 파악할 수 있도록 변수 이름을 작성한다
// let result = `<h1>${tpHd}</h1>`;

// 아래처럼 변수 이름을 구체적으로 작성해준다
let title = '제목없음';
let result = `<h1>${title}</h1>`;
