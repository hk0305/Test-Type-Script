{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public(=default)
    // private
    // protected
    class CoffeeMaker {
        
        // private
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level = static
        private coffeeBeans: number = 0;                // instance (object) level = not static

        // 아래 static으로 생성자를 만들 수 있으므로
        // 생성자를 외부에서 만들때는 아래 함수를 이용하도록 제한
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static이 붙은 생성자
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 내부 변경 가능한 함수
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(32);
    // invalid - 커피콩 양을 외부에서 변경할 수 없어야 한다. 💩
    // maker.coffeeBeans = -34;

    // valid
    maker.fillCoffeeBeans(32);

    // Setter와 Getter
    class User { 
        
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                // 유효성 검사
            }
            this.internalAge = num;
        }

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }

    const user = new User('Steve', 'Jobs');
    // getter 호출은 멤버변수 호출과 동일
    console.log(user.fullName);

    user.age = 6;
    console.log(user.age);

}
