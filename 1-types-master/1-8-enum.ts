{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  // 값이 없으면 0부터 시작
  // 값을 정해주면 +1씩 증가
  // Monday = 'monday' 처럼 String도 선언 가능
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  // enum으로 지정된 변수에 같은 타입의 숫자를 넣을 수 있다.
  // 요일에 없는 10을 넣어도 컴파일 에러가 발생하지 않는다.
  // 따라서 위험하기 때문에 사용하지 말자
  day = 10;
  console.log(day);

  // 아래처럼 들어가는 값을 제한하여 사용해야 한다.
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';

  // enum은 대부분의 union string literal로 처리 가능하다.
  // 단, 안드로이드나 IOS와 같은 모바일 클라이언트 Native 언어에서는
  // union을 표현할 방법이 없기 때문에 enum을 사용해야 한다.
  // 따라서 enum은 union string literal로 대부분 처리 가능하다!
}
