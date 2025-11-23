import { getDefaultOwner } from "./6-6.js";

const owner = getDefaultOwner();
owner.firstName = "엘리";
console.log(owner); // 엘리로 변경
console.log(getDefaultOwner()); // 원본 객체도 엘리로 변경, 객체의 참조값을 반환받기 때문
