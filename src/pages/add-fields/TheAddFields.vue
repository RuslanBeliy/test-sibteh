<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SidebarNav from '@/components/layouts/SidebarNav.vue';
import { addFieldsNav } from '@/utils/constants/index.js';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
import AddButton from '@/components/forms/AddButton.vue';
import EditFormField from '@/components/forms/EditFormField.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { addNewForm } from '@/utils/helpers/forms.js';

const router = useRouter();

const fields = reactive([
  { id: 1, value: 'Имя', type: 'text', required: true },
  { id: 2, value: 'Фамилия', type: 'text', required: false },
]);

const saveFields = () => {
  addNewForm(fields);
  router.replace('/forms-list');
};

const handleFields = (id, key, val) => {
  const field = fields.find((el) => el.id === id);
  field[key] = val;
};

const addField = () => {
  const defaultField = { id: Date.now(), value: 'Название поля', type: 'text', required: false };
  fields.push(defaultField);
};

const deleteField = (id) => {
  const idx = fields.findIndex((el) => el.id === id);
  fields.splice(idx, 1);
};
</script>

<template>
  <BaseContainer>
    <MainLayout>
      <template #sidebar>
        <button class="back">Назад</button>

        <SidebarNav :list="addFieldsNav" :active-item="3" />
      </template>
      <template #sidebar-footer>
        <div class="wrap-footer">
          <BaseButton mode="outline" size="l">Скрипт</BaseButton>
          <BaseButton @click="saveFields" mode="fill" size="l">Сохранить</BaseButton>
        </div>
      </template>

      <div class="add-fields">
        <div class="add-fields__left">
          <BaseTitle tag="h1" size="l" bottom="30">Поля</BaseTitle>
          <BaseTitle tag="h2" size="m" bottom="30">Скрытое поле</BaseTitle>
          <AddButton @click="addField">Добавить поле</AddButton>
          <BaseTitle tag="h2" size="m" bottom="30" top="50">Поля</BaseTitle>

          <div class="list-fields">
            <EditFormField
              v-for="field in fields"
              :key="field.id"
              :value="field.value"
              :required="field.required"
              :type="field.type"
              @field-value="handleFields(field.id, 'value', $event)"
              @checkbox-value="handleFields(field.id, 'required', $event)"
              @change-type="handleFields(field.id, 'type', $event)"
              @delete-field="deleteField(field.id)"
            />
          </div>
          <AddButton @click="addField" bottom="30">Добавить поле</AddButton>
          <AddButton>Добавить страницу формы</AddButton>
        </div>

        <div class="add-fields__right">
          <form class="form">
            <BaseTitle tag="h2" size="m">Форма регистрации участников</BaseTitle>

            <div class="form__inputs">
              <BaseInput
                v-for="field in fields"
                :key="field.id"
                :placeholder="field.value"
                :type="field.type"
                :required="field.required"
              />
            </div>

            <BaseCheckbox name="send" color="green">
              Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности
            </BaseCheckbox>

            <BaseButton size="m" mode="fill" class="form__btn">Отправить</BaseButton>
          </form>
        </div>
      </div>
    </MainLayout>
  </BaseContainer>
</template>

<style scoped>
.back {
  position: relative;
  margin-bottom: 50px;
  padding: 6px 0 6px 18px;
  align-self: start;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #212121;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.back::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: url('/arrow-left.svg');
}

.wrap-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-fields {
  display: flex;
  flex-grow: 1;
}
.add-fields__left {
  width: 50%;
  padding: 80px 30px;
}

.list-fields {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
}

.add-fields__right {
  padding: 88px 20px;
  width: 50%;
  min-height: 100vh;
  background: var(--primary-color);
}

.form {
  margin: 0 auto;
  padding: 40px;
  max-width: 350px;
  background: #fff;
  border-radius: 20px;
}
.form__inputs {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form__btn {
  width: 100%;
  margin-top: 50px;
}
</style>
