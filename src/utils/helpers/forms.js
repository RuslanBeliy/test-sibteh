const KEY_FORMS = 'forms';

export const getFormById = (id) => {
  const LS = localStorage.getItem(KEY_FORMS);
  const forms = LS ? JSON.parse(LS) : {};
  return forms['form_' + id];
};

export const getAllForms = () => {
  const LS = localStorage.getItem(KEY_FORMS);
  return LS ? JSON.parse(LS) : {};
};

export const addNewForm = (fields) => {
  const LS = localStorage.getItem(KEY_FORMS);
  const forms = LS ? JSON.parse(LS) : {};
  const formId = 'form_' + Date.now().toString();
  forms[formId] = fields;
  localStorage.setItem(KEY_FORMS, JSON.stringify(forms));
};
