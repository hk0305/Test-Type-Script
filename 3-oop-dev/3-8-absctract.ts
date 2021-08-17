{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract 사용하기
  // 추상 클래스로 Object를 생성할 수 없다.
  abstract class CoffeeMachine implements CoffeeMaker {
    // private
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level = static
    private coffeeBeans: number = 0; // instance (object) level = not static

    // 아래 static으로 생성자를 만들 수 있으므로
    // 생성자를 외부에서 만들때는 아래 함수를 이용하도록 제한
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 내부 변경 가능한 함수
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }

      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine... 💦");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffeeBeans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    // 추상 메소드는 구현부가 없다.
    protected abstract extract(shots: number): CoffeeCup;

    // 함수
    // 공통적으로 필요한 로직을 사용하므로
    // 템플릿 디자인 패턴이라 볼 수 있다.
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);

      /* // CoffeeMaker.static
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                // 키와 이름이 같으므로 생략(shot: shots)
                shots,
                hasMilk: false,
            } */
    }
  }

  // 추상클래스에 makeCoffee가 구현되어 있으므로
  // 추상 메소드인 extract만 구현하면 된다.
  class CafeLatteMachine extends CoffeeMachine {
    // 자식 클래스에서 생성자를 선언할 때,
    // super를 통해 부모 클래스에서 사용하는 필수 인자를 받아와야 한다.
    // 자식 클래스에서 시리얼 넘버를 추가.
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine(16, "SERAIL1000"),
    new SweetCoffeeMaker(16),
    new CafeLatteMachine(16, "SERAIL2000"),
    new SweetCoffeeMaker(16),
  ];

  // 다형성의 장점은
  // 내부적으로 구현된 다양한 클래스들이
  // 한가지 인터페이스를 구현하거나
  // 또는 동일한 부모 클래스를 상속했을 때
  // 동일한 함수를 어떠한 클래스인지 구분하지않고
  // 공통된 API를 호출할 수 있다.
  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}
