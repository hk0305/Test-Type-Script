const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // -> 아래 makeCoffe는 만들어지는 Object마다 만들어진다.
  /* this.makeCoffee = shots => {
    console.log('making... ☕️');
  }; */
}

// Prototype member level
// proto안에 함수를 정의
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making... ☕️');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
// CoffeeMachine을 상속하기
// 이처럼 자바스크립트에서도 프로토 타입을 사용해 상속이 가능하다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
