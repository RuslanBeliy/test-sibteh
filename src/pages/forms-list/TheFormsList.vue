<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SidebarNav from '@/components/layouts/SidebarNav.vue';
import { formsListNav } from '@/utils/constants/index.js';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import FormCard from '@/components/forms/FormCard.vue';
import { computed, onMounted, reactive } from 'vue';

const testMock = { 'Форма регистрации участников': [] };

const forms = reactive(testMock);

const hasForms = computed(() => Object.keys(forms).length);

onMounted(() => {
  const LS = localStorage.getItem('forms');
  const formsLS = LS ? JSON.parse(LS) : {};
  Object.assign(forms, formsLS);
});
</script>

<template>
  <BaseContainer>
    <MainLayout>
      <template #sidebar>
        <SidebarNav :list="formsListNav" />
      </template>
      <template #sidebar-footer>
        <BaseButton mode="outline" size="m">Выход</BaseButton>
      </template>

      <div class="forms-list">
        <header class="header">
          <BaseTitle tag="h1" size="l">Формы</BaseTitle>
          <BaseButton mode="fill" size="l" to="/add-fields">Создать форму</BaseButton>
        </header>

        <ul v-if="hasForms" class="list">
          <FormCard v-for="(_, key) in forms" :key="key" :title="key" />
        </ul>
        <BaseTitle v-else>Вы еще не создали формы</BaseTitle>
      </div>
    </MainLayout>
  </BaseContainer>
</template>

<style scoped>
.forms-list {
  padding: 80px 0 80px 30px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
