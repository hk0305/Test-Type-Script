{
  /**
   * Type Assertions ๐ฉ
   * any๋ ์ฐ์ง๋ง์
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // undefined
  console.log((<string>result).length);   // undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // ๐ฑ

  // !๋ ๋ฌด์กฐ๊ฑด null์ด ์๋๋ผ๋ ๋ป
  numbers!.push(3); // ๐ฑ

  // !๋ ๋ฌด์กฐ๊ฑด null์ด ์๋๋ผ๋ ๋ป์ผ๋ก
  // ๊ฐ๋ฅํ๋ฉด ํผํด์ ์ฌ์ฉํด์ผ ํ๋ค.
  const button = document.querySelector('class')!;
}
