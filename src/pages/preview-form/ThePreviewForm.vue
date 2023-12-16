<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getFormById } from '@/utils/helpers/forms.js';

const route = useRoute();

const form = reactive({});

onMounted(() => {
  const formLS = getFormById(route.params.id);
  Object.assign(form, formLS);
});
</script>

<template>
  <BaseContainer>
    <div class="wrapper">
      <form class="form">
        <BaseTitle>Предпросмотр</BaseTitle>
        <BaseInput
          v-for="field in form"
          :key="field.id"
          :placeholder="field.value"
          :required="field.required"
          :type="field.type"
        />
        <BaseButton mode="fill" size="m">Отправить</BaseButton>
      </form>
    </div>
  </BaseContainer>
</template>

<style scoped>
.wrapper {
  margin: 50px auto;
  padding: 50px;
  border-radius: var(--border-radius);
  background: #fff;
  max-width: 400px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
