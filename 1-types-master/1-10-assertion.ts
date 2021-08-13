{
  /**
   * Type Assertions 💩
   * any는 쓰지말자
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // undefined
  console.log((<string>result).length);   // undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  // !는 무조건 null이 아니라는 뜻
  numbers!.push(3); // 😱

  // !는 무조건 null이 아니라는 뜻으로
  // 가능하면 피해서 사용해야 한다.
  const button = document.querySelector('class')!;
}
