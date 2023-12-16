<script setup>
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'h2',
    validator(value) {
      return ['h1', 'h2', 'h3'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'm',
    validator(value) {
      return ['m', 'l'].includes(value);
    },
  },
  top: String,
  bottom: String,
});

const styles = computed(() => ({
  'padding-top': props.top + 'px',
  'padding-bottom': props.bottom + 'px',
}));
</script>

<template>
  <Component :is="tag" class="title" :class="size" :style="styles">
    <slot />
  </Component>
</template>

<style scoped>
.title {
  color: #000;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.m {
  font-size: 24px;
}

.l {
  font-size: 40px;
}
</style>
