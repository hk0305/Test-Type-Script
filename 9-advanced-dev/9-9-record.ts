{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Page는 Key로,
  // PageInfo를 Value로
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };

  type Product = "cat" | "dog";
  // 대문자로 사용하기
  type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}
