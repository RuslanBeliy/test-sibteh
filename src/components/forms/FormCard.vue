<script setup>
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const previewLink = computed(() => {
  const id = props.title.split('_')[1];
  return '/preview/' + id;
});
</script>

<template>
  <li class="form-card">
    <div class="form-card__header">
      <BaseTitle tag="h2" size="m">{{ title }}</BaseTitle>
      <BaseButton :to="previewLink" size="m" mode="outline">Просмотр формы</BaseButton>
    </div>
    <div class="form-card__user text">Автор: user 1</div>
    <div class="form-card__footer">
      <span class="text">Дата создания: 01.01.23</span>
      <BaseButton size="m">Удалить</BaseButton>
    </div>
  </li>
</template>

<style scoped>
.form-card {
  padding: 24px;
  background: #fff;
  border-radius: var(--border-radius);
  font-size: 14px;
}

.form-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 8px;
}

.form-card__user {
  margin-bottom: 58px;
}

.form-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.text {
  opacity: 0.5;
}
</style>
