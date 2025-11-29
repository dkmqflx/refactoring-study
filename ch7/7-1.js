const organization = { name: "Acme Gooseberries", country: "GB" };

// object.freeze를 통해서 객체를 불변성으로 만들 수 있지만,
// 프로그래밍 언어에 의존하지 않는 보편적인 방법으로도 처리할 수 있다
organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
