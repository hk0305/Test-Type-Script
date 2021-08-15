interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

// 단일 연결 리스트를 사용해,
// 다음 노드를 계속 감싸는 방법
type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  // 내부에서 쓰이는 변수는 _를 붙힌다.
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is Full...");
    }
    // 명확한 타입 추론은 생략 가능하다(: StachNode<T>).
    // const node: StachNode<T> = { value, next: this.head };
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    // undefined를 optional을 추가하지말고
    // 데이터를 보장하는 것으로 개발!
    // null과 undefined 체크는 아래와 같다.
    // 1. null == undefined   // == null 체크만으로도 undefined가 걸러진다.
    // 2. null !== undefined
    if (this.head == null) {
      throw new Error("Stack is Empty! ...⏰");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stackService = new StackImpl<string>(5);
stackService.push("Bob 1");
stackService.push("Nice 2");
stackService.push("Tom 3");
while (stackService.size != 0) {
  console.log(stackService.pop());
}

const stack2 = new StackImpl<number>(5);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size != 0) {
  console.log(stack2.pop());
}
