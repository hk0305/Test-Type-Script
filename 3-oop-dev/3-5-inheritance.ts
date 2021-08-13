{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        
        // private
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level = static
        private coffeeBeans: number = 0;                // instance (object) level = not static

        // 아래 static으로 생성자를 만들 수 있으므로
        // 생성자를 외부에서 만들때는 아래 함수를 이용하도록 제한
        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static이 붙은 생성자
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        // 내부 변경 가능한 함수
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine... 💦')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffeeBeans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕`)
            return {
                shots,
                hasMilk: false,
            }
        }

        // 함수
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
    
    class CafeLatteMachine extends CoffeeMachine {
        // 자식 클래스에서 생성자를 선언할 때,
        // super를 통해 부모 클래스에서 사용하는 필수 인자를 받아와야 한다.
        // 자식 클래스에서 시리얼 넘버를 추가.
        constructor(coffeeBeans: number, public readonly serialNumber: string) {
            super(coffeeBeans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        };

        makeCoffee(shots: number): CoffeeCup {
            // super 사용하기
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            };
        };

    }

    const latteMachine = new CafeLatteMachine(23, 'SERIAL10000');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);

}
