<script setup>
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
import { computed } from 'vue';

const emits = defineEmits(['field-value', 'checkbox-value', 'delete-field', 'change-type']);
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: String,
  required: Boolean,
});

const textType = computed(() => {
  return props.type === 'number' ? 'Тип поля: number' : 'Тип поля: text';
});

const onInput = (e) => {
  emits('field-value', e.target.value);
};
const onCheckbox = (e) => {
  emits('checkbox-value', e.target.checked);
};

const onDelete = () => {
  emits('delete-field');
};

const onChangeType = () => {
  const type = props.type === 'text' ? 'number' : 'text';
  emits('change-type', type);
};
</script>

<template>
  <div class="edit-field">
    <div class="header">
      <div class="header__info">
        <span>{{ value }}</span>
        <button @click="onChangeType">{{ textType }}</button>
      </div>
      <button @click="onDelete" class="header__delete">Удалить поле</button>
    </div>
    <BaseInput @input="onInput" :placeholder="value" type="text" bottom="20" light />
    <BaseCheckbox @change="onCheckbox" :checked="required" center
      >Сделать поле обязательным</BaseCheckbox
    >
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
}

.header__info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header__info button {
  background: transparent;
  cursor: pointer;
  border: none;
  font-family: inherit;
  font-size: inherit;
  line-height: 1;
  color: var(--primary-color);
}

.header__delete {
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--primary-color);
}
</style>
