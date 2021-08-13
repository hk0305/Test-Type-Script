{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  // 선언 되었으나 아직 값이 할당되어 있지 않은 경우
  // 무언가를 찾고자 했는데 해당 하는 값이 존재하지 않은 경우
  // (DB, File, Network등 다양한 곳에 쿼리를 했는데 값이 없는 경우)
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  // 타입이 없는 자바스크립트와 어울리기 위해 사용
  // return type을 모르는 경우 unknown return
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  // 절대 return 계획 없음
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {} // 도달하지 못하므로 흐리게 표시
    // return; <- 불가함
  }
  let neverEnding: never; // 💩

  // objet
  // 원시타입을 제외한 모든 타입(배열도 가능)
  // 어떤 object인지 모르기 때문에 사용하지 않는다.
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
