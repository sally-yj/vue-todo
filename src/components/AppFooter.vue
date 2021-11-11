<template>
  <div>
    <button @click="clearTodo" class="clearAllBtn">Clear All</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['clearTodo']),
    // clearTodo() {
    //   this.$store.commit('clearTodo');
    // },
  },
};
</script>

<style scoped>
.clearAllBtn {
  padding: 20px;
}
</style>
