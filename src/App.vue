<template>
  <div>
    <AppHeader />
    <TodoInput />
    <TodoList />
    <AppFooter />
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
  methods: {},

  components: {
    AppHeader,
    TodoInput,
    TodoList,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped></style>
