<template>
  <div>
    <AppHeader />
    <TodoInput @addOneItem="addOneItem" />
    <TodoList @removeTodo="removeTodo" @toggleTodo="toggleTodo" />
    <!--  데이터 넘김-->
    <AppFooter @clearTodo="clearTodo" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addOneItem(todo) {
      const obj = { completed: false, item: todo };
      localStorage.setItem(todo, JSON.stringify(obj));
      this.todos.push(obj);
    },
    removeTodo(todo, index) {
      console.log(index);
      localStorage.removeItem(todo.item);
      this.todos.splice(index, 1);
    },
    toggleTodo(todo, index) {
      // todo.completed = !todo.completed;  이거보다는
      this.todos[index].completed = !this.todos[index].completed; // 이게 권장되는 방식이다.
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.item, JSON.stringify(todo));
    },
    clearTodo() {
      if (localStorage.length < 1) return;
      localStorage.clear();
    },
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) === 'loglevel:webpack-dev-server') return;

  //       const parsedTodo = JSON.parse(
  //         localStorage.getItem(localStorage.key(i))
  //       );
  //       this.todos.push(parsedTodo);
  //     }
  //   }
  // },
  components: {
    AppHeader,
    TodoInput,
    TodoList,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped></style>
