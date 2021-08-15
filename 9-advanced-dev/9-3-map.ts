{
  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4] <- [1*1, 2*2]

  // 1. Optional
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // Optional<T> 사용하여 위와 동일하게 사용 + 확장(+재사용)
  type VideoOptional = Optional<Video>;

  // 2. ReadOnly
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };
  // ReadOnly<T>를 사용하여 위와 동일하게 사용 + 확장(+재사용)
  type VideoReadOnly = ReadOnly<Video>;
  // 또는
  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.title = "not edited";

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  // 3. Nullable
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  // Map Type 문서 Sample
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
