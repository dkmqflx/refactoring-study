import fs from "fs";

// nodemon ch6/6-11-2.js ch6/orders.json 로 실행
// nodemon ch6/6-11-2.js ch6/orders.json -r 로 실행

// 사용자에게 입력을 받아옴 -> 유효성 검사
// 필요한 로직 처리

// 바로 process에 접근해서, 인자가 어떤게 전달되었는지 확인한다면 테스트 코드를 작성하기 힘들다
// 이 부분은 챕터 마지막에 배울 것
// 노드에 제공하는 프로세스에 바로 접근한다면 테스트 코드를 작성하기 어렵기 때문에
// 그래서 인자를 받아오는 함수를 만들어서 사용한다

// 1. run이라는 함수를 만들어서 노드의 process 디펜던시를 제거함
run(process.argv);

function run(args) {
  const command = parseCommand(args);

  countOrders(command);
}

// 2. 사용자에게 입력을 받아옴 -> 유효성 검사
function parseCommand(args) {
  if (!args[2]) {
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  const countReadyOnly = args.includes("-r");

  return {
    fileName,
    countReadyOnly,
  };
}

// 3. 필요한 로직 처리
function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);

  const filtered = command.countReadyOnly
    ? orders.filter((order) => order.status === "ready")
    : orders;

  console.log(filtered.length);
}
