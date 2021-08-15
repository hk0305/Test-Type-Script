// 호출하는 곳이 window이므로 this는 window이다.
console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc(); // 과 동일하다.
console.clear();

console.log('------not use arrow function------')
class Counter {
  count = 0;

  // counter Class에서 호출했으므로, Counter가 this다.
  increase = function() {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// counter class로 바인딩하여 this를 counter로 선언
// const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();

console.log('------use arrow function------')
// 아래 arrow function을 통해
// 사용하는 클래스 바인딩이 바로 가능하다.
class CounterArrow {
  count = 0;
  // arrow function
  increase = () => {
    console.log(this);
  };
}
const counterArrow = new CounterArrow();
counter.increase();
const callerArrow = counterArrow.increase;
callerArrow();
bob.run = counterArrow.increase;
bob.run();
