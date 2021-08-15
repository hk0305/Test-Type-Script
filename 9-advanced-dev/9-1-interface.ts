{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // Interface만 merge 가능
  // type PositionType {
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string
  // Name은 Person의 name Type을 갖는다. = computed properties

  // 아래와 같이 tpye 선언은 interface에서 불가능하다.
  type NumberType = number;
  type Direction = "left" | "right";
}
