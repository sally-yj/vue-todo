<template>
  <div>
    <input
      v-model="todo"
      @keyup.enter="addTodo"
      type="text"
      placeholder="입력해봐"
    />
    <button @click="addTodo">추가</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고!</h3>
      <div slot="body">내용을 입력해주세요.</div>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      todo: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== '') {
        this.$store.commit('addTodo', this.todo);
        this.initializeTodo();
      } else {
        this.showModal = !this.showModal;
      }
    },
    initializeTodo() {
      this.todo = '';
    },
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss" scoped></style>
