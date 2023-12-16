<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  center: Boolean,
});
</script>

<template>
  <label class="control" :class="{ center }">
    <input type="checkbox" v-bind="$attrs" />
    <span :class="color">
      <slot />
    </span>
  </label>
</template>

<style scoped>
.control {
  position: relative;
  padding-left: 40px;
  display: flex;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #212121;
}

.control span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 1px solid #212121;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
}

.center span::before {
  top: -30%;
}

.control span.green::before {
  border: 1px solid var(--primary-color);
}

.control input:checked ~ span:before {
  content: '✔';
}

.control input {
  display: none;
}
</style>
