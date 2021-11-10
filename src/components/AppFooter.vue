<template>
  <div>
    <button @click="$emit('clearTodo')" class="clearAllBtn">Clear All</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.clearAllBtn {
  padding: 20px;
}
</style>
