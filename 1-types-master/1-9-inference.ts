/**
 * Type Inference
 */
let text = 'hello';

// 인자는 정확하게 어떠한 데이터를 사용하지는 지
// 꼭 명시하자
// message = 'hello'로 string 할당
function print(message = 'hello') {
  console.log(message);
}
print('hello');

// 인자가 number 이므로 return type은 number로 추론할 수 있다.
// 하지만 알아서 추론해주지만 선언해서 사용하는게 더 가독성이 좋다.
function add(x: number, y: number): number {
  return x + y;
}

// 아래 result1이 더 보기 좋다.
const result = add(1, 2);
const result1: number = add(1, 2);