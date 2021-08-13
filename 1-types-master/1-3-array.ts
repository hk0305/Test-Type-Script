{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];

  // readonly - Object의 불변성 보장
  // string[]만 가능
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // Tuple 사용을 권장하지 않는다.
  // student[0], student[1]과 같이
  // 어떠한 값이 있는지 찾아봐야하기 때문이다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  // 동적으로 관련있는 다른 타입의 데이터를
  // 사용자가 묶어서 사용할 때 사용한다.
  const [name, age] = student;
}