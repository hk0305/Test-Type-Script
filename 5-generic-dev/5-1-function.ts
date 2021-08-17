{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result1 = checkNotNull(123);
  console.log(result1);
  // checkNotNull(null);

  // Type Unsafe 💩
  // 이처럼 모든 타입을 다 체크하는 로직을 만들어야 할까? NO!!!
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid any!");
    }
    return arg;
  }
  // const result2 = checkNotNullAnyBad(123);

  // Generic
  // 사용하는 사람이 타입을 결정
  // Type Safe 🌟
  function checkNotNullGeneric<T>(arg: T | null) {
    if (arg == null) {
      throw new Error("not valid generic!");
    }
    return arg;
  }
  const number = checkNotNullGeneric(123);
  const boal: boolean = checkNotNullGeneric(true);
}
