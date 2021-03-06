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

  // Type Unsafe π©
  // μ΄μ²λΌ λͺ¨λ  νμμ λ€ μ²΄ν¬νλ λ‘μ§μ λ§λ€μ΄μΌ ν κΉ? NO!!!
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid any!");
    }
    return arg;
  }
  // const result2 = checkNotNullAnyBad(123);

  // Generic
  // μ¬μ©νλ μ¬λμ΄ νμμ κ²°μ 
  // Type Safe π
  function checkNotNullGeneric<T>(arg: T | null) {
    if (arg == null) {
      throw new Error("not valid generic!");
    }
    return arg;
  }
  const number = checkNotNullGeneric(123);
  const boal: boolean = checkNotNullGeneric(true);
}
