<script setup>
import { computed } from 'vue';

const props = defineProps({
  top: String,
  bottom: String,
});

const styles = computed(() => ({
  'margin-top': props.top + 'px',
  'margin-bottom': props.bottom + 'px',
}));
</script>

<template>
  <button class="btn" :style="styles">
    <span><slot /></span>
    <img src="/plus.svg" alt="plus" />
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 20px 30px;
  width: 100%;
  background: transparent;
  border: 1px dashed var(--primary-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--primary-color);
}
</style>
