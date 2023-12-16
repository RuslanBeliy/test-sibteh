<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <BaseContainer>
    <MainLayout>
      <template #sidebar>
        <BaseTitle tag="h1" size="l" bottom="30">Авторизация</BaseTitle>

        <form class="form">
          <BaseInput placeholder="Логин" bottom="10" />
          <BaseInput placeholder="Пароль" bottom="30" />
          <BaseButton mode="fill" size="m">Вход</BaseButton>
        </form>
      </template>
      <template #sidebar-footer>
        <div class="links">
          <p>Если возникла проблема, то можете написать <span>Алёне из Сибтеха</span></p>
          <p>С любовью, ваш <span>Сибтех</span></p>
        </div>
      </template>

      <div class="left"></div>
    </MainLayout>
  </BaseContainer>
</template>

<style scoped>
.form {
  width: 350px;
}

.links {
  max-width: 260px;
}

.links p:first-child {
  margin-bottom: 8px;
}

.links span {
  cursor: pointer;
  color: var(--primary-color);
}

.left {
  height: 100%;
  background: url('/bg-auth.jpg') center/cover no-repeat;
}
</style>
