<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todo, index) in this.storedTodoItems" :key="todo.item">
        <span
          class="checkBtn"
          :class="{ checkComplete: todo.completed }"
          @click="toggleTodo({ todo, index })"
          >{{ todo.completed ? '완료' : '미완료' }}</span
        >
        <span :class="{ todoComplete: todo.completed }">{{ todo.item }}</span>
        <button class="remove" @click="removeTodo({ todo, index })">X</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeTodo',
      toggleTodo: 'toggleTodo',
    }),
  },
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 20px;
}
.checkBtn {
  background: #ddd;
  padding: 10px;
  margin-right: 20px;
}
.checkComplete {
  background: dodgerblue;
  color: #fff;
}
.todoComplete {
  color: #ddd;
}
.remove {
  margin-left: 20px;
}

/* transition 
  https://v3.vuejs.org/guide/transitions-list.html#list-entering-leaving-transitions
*/
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
