{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // 부분적인 ToDo 값만 전달하기 - Partial<ToDo>
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  // 부분적으로 업데이트 하기
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
