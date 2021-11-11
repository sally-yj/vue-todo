<template>
  <div>
    <button @click="clearTodo" class="clearAllBtn">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearTodo');
    },
  },
};
</script>

<style scoped>
.clearAllBtn {
  padding: 20px;
}
</style>
