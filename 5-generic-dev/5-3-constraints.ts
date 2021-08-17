interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서
// 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
// Employee로 타입을 반환해버려서 반환받은 객체는
// 구체 클래스의 함수를 사용할 수 없다.
// ex. 아래 const yhkAfterPay = payBad(yhk);는
// yhkAfterPay.workFullTime()을 사용할 수 없다!
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 따라서 위의 말도 안되는 상황을 방지 하려면?
// T extends Employee를 사용한다!
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const yhk = new FullTimeEmployee();
const bob = new PartTimeEmployee();
yhk.workFullTime();
bob.workPartTime();

// pay(yhk) as FullTimeEmployee를 사용할 수 있지만!
// 되도록 as는 사용하지 말자!
const yhkAfterPay = payBad(yhk);
const bobAfterPay = payBad(bob);

// 참고! 함수 표현식으로 사용해보자
const funcPay = <T extends Employee>(employee: T): T => {
  employee.pay();
  return employee;
};

// SAMPLE QUIZ
const obj = {
  name: "keun",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // keun
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

// ANSWER
// keyof = object안의 key
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
