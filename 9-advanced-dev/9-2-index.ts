{
  const obj = {
    name: "keun",
  };
  obj.name; //'keun
  obj["name"]; //'keun

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // 다른 타입을 사용하여 새로운 타입을 정의
  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'

  // 키만 갖고 오기
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "keun",
    gender: "male",
  };
}
