// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 제네릭은 타입을 길게 쓰지 않는다!
// 대문자를 따서 사용한다
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5

// 이처럼 Generic을 통해 다양한 Type을 사용할 수 있다.
const best = new SimpleEither({ name: "yhk" }, "hello");
