{
  // Array
  const fruits: string[] = ['ð', 'ð'];
  const scroes: Array<number> = [1, 3, 4];

  // readonly - Objectì ë¶ë³ì± ë³´ì¥
  // string[]ë§ ê°ë¥
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // Tuple ì¬ì©ì ê¶ì¥íì§ ìëë¤.
  // student[0], student[1]ê³¼ ê°ì´
  // ì´ë í ê°ì´ ìëì§ ì°¾ìë´ì¼íê¸° ëë¬¸ì´ë¤.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  // ëì ì¼ë¡ ê´ë ¨ìë ë¤ë¥¸ íìì ë°ì´í°ë¥¼
  // ì¬ì©ìê° ë¬¶ì´ì ì¬ì©í  ë ì¬ì©íë¤.
  const [name, age] = student;
}