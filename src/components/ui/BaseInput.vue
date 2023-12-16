<script setup>
import { computed } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  light: Boolean,
  top: String,
  bottom: String,
});

const styles = computed(() => ({
  'padding-top': props.top + 'px',
  'padding-bottom': props.bottom + 'px',
}));
</script>

<template>
  <div class="control" :style="styles">
    <input v-bind="$attrs" :class="{ light }" />
  </div>
</template>

<style scoped>
.control input {
  padding: 30px;
  background: var(--bg-color);
  border: none;
  border-radius: var(--border-radius);
  width: 100%;
  height: 100%;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.control input.light {
  background: #fff;
}
.control input.light::placeholder {
  color: #000;
}
</style>
