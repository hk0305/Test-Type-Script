interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

// 단일 연결 리스트를 사용해,
// 다음 노드를 계속 감싸는 방법
type StackNode = {
  readonly value: string;
  readonly next: StackNode | undefined;
};

class StackImpl implements Stack {
  // 내부에서 쓰이는 변수는 _를 붙힌다.
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is Full...");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stackService = new StackImpl(5);
stackService.push("Bob 1");
stackService.push("Nice 2");
stackService.push("Tom 3");
while (stackService.size != 0) {
  console.log(stackService.pop());
}
