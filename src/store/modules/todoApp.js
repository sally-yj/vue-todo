const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  },
};

const state = {
  todos: storage.fetch(),
  headerText: 'Header',
};

const getters = {
  storedTodoItems(state) {
    return state.todos;
  },
};

const mutations = {
  addTodo(state, payload) {
    const obj = { completed: false, item: payload };
    localStorage.setItem(payload, JSON.stringify(obj));
    state.todos.push(obj);
  },
  removeTodo(state, payload) {
    localStorage.removeItem(payload.todo.item);
    state.todos.splice(payload.index, 1);
  },
  toggleTodo(state, payload) {
    // todo.completed = !todo.completed;  이거보다는
    state.todos[payload.index].completed =
      !state.todos[payload.index].completed; // 이게 권장되는 방식이다.
    localStorage.removeItem(payload.todo.item);
    localStorage.setItem(payload.todo.item, JSON.stringify(payload.todo));
  },
  clearTodo(state) {
    if (localStorage.length < 1) return;
    localStorage.clear();
    state.todos = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
