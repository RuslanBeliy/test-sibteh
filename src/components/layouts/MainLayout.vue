<script setup>
import BaseLogo from '@/components/ui/BaseLogo.vue';
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <BaseLogo class="sidebar__logo" />
      <slot name="sidebar" />
      <div class="sidebar__footer">
        <slot name="sidebar-footer" />
      </div>
    </aside>
    <main class="main">
      <slot />
    </main>

    <nav class="nav">
      <RouterLink to="/auth">Авторизация</RouterLink>
      <RouterLink to="/forms-list">Все формы</RouterLink>
      <RouterLink to="/add-fields">Добавить форму</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.sidebar {
  padding: 80px 95px 70px 180px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.sidebar__logo {
  margin-bottom: 30px;
}

.sidebar__footer {
  margin-top: auto;
  padding-top: 30px;
}

.main {
  flex-grow: 1;
}

.nav {
  position: absolute;
  right: 0;
  top: 0;
  top: 0;
  padding: 10px;
  border-radius: var(--border-radius);
  display: flex;
  gap: 10px;
  background: #fff;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.router-link-active {
  color: var(--primary-color);
}
</style>
