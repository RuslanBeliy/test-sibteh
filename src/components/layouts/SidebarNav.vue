<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
  activeItem: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <ul class="sidebar-list">
    <li v-for="(el, i) in list" :key="el" :class="{ active: i + 1 === activeItem }">{{ el }}</li>
  </ul>
</template>

<style scoped>
.sidebar-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sidebar-list li {
  cursor: pointer;
  color: #212121;
}

.sidebar-list li.active {
  color: var(--primary-color);
}
</style>
