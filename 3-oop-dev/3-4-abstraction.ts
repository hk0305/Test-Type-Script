{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // 상업 커피머신
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(baens: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        
        // private
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level = static
        private coffeeBeans: number = 0;                // instance (object) level = not static

        // 아래 static으로 생성자를 만들 수 있으므로
        // 생성자를 외부에서 만들때는 아래 함수를 이용하도록 제한
        private constructor(coffeeBeans: number) {
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

    /* const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);
    
    const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);

    const maker3:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker3.fillCoffeeBeans(32);
    maker3.makeCoffee(2);
    maker3.clean(); */
    
    /////////
    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker4:CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker4);
    const pro = new ProBarista(maker4);
    pro.makeCoffee();

}
