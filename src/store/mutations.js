const addTodo = (state, payload) => {
  const obj = { completed: false, item: payload };
  localStorage.setItem(payload, JSON.stringify(obj));
  state.todos.push(obj);
};
const removeTodo = (state, payload) => {
  localStorage.removeItem(payload.todo.item);
  state.todos.splice(payload.index, 1);
};
const toggleTodo = (state, payload) => {
  // todo.completed = !todo.completed;  이거보다는
  state.todos[payload.index].completed = !state.todos[payload.index].completed; // 이게 권장되는 방식이다.
  localStorage.removeItem(payload.todo.item);
  localStorage.setItem(payload.todo.item, JSON.stringify(payload.todo));
};
const clearTodo = (state) => {
  if (localStorage.length < 1) return;
  localStorage.clear();
  state.todos = [];
};

export { addTodo, removeTodo, toggleTodo, clearTodo };
