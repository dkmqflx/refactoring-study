class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
    // 이렇게 하지 않고 null을 사용하면
    // 아래 cleanRooms 메서드에서 오류가 발생한다.
    // 따라서 이렇게 null 대신 나타낼 수 있는 특이 케이스를 추가해준다
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }

  clean() {
    console.log(`${this.roomNumber} 깨끗하게 청소합니다!`);
  }
}

class EmptyRoom extends Room {
  clean() {
    console.log(`${this.roomNumber} 방이 비어있어요~~`);
  }
}

const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.cleanRooms();
hotel.emptyRoom(1);
hotel.cleanRooms();

// ------------------------------------------------------------

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

// 특이 케이스를 처리하는 클래스를 만들어준다
class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name;
  return customerName;
}
