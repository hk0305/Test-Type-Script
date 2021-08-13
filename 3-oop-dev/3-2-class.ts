{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // class 사용하기
    class CoffeeMaker {
        
        // 멤버 변수
        static BEANS_GRAMM_PER_SHOT:number = 7; // class level = static
        coffeeBeans: number = 0;                // instance (object) level = not static

        // 생성자
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static이 붙은 생성자
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 함수
        makeCoffee(shots: number): CoffeeCup {
            // CoffeeMaker.static
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                // 키와 이름이 같으므로 생략(shot: shots)
                shots,
                hasMilk: false,
            }
        }

    }

    // 방법1. 생성자 호출
    const maker = new CoffeeMaker(32);
    // static(=class level)은 출력 X
    console.log(maker);

    const maker2 = new CoffeeMaker(32);
    console.log(maker2.makeCoffee(1));

    // 방법2. 생성자 없이 바로 클래스 호출
    // (Java의 Math Class와 같음)
    // Class Level에서 바로 클래스 함수를 호출
    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);

}
