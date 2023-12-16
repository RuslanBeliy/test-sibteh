<script setup>
defineProps({
  mode: {
    type: String,
    validator(value) {
      return ['fill', 'outline'].includes(value);
    },
  },
  size: {
    type: String,
    validator(value) {
      return ['l', 'm'].includes(value);
    },
  },
  to: String,
});
</script>

<template>
  <RouterLink v-if="to" :to="to" class="btn" :class="[mode, size]"><slot /></RouterLink>
  <button v-else class="btn" :class="[mode, size]"><slot /></button>
</template>

<style scoped>
.btn {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius);
  min-width: 160px;
  color: var(--primary-color);
}

.m {
  padding: 16px 32px;
}
.l {
  padding: 20px 32px;
}

.fill {
  background: var(--primary-color);
  color: #fff;
  border: 1px solid transparent;
}
.outline {
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}
</style>
