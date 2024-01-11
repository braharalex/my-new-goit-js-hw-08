import throttle from 'lodash.throttle';
const FORM_KEY = 'feedback-form-state';
let formFields = {};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 700));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formFields[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formFields));
}

console.log(form.elements);

restoreFormFields();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Відправляєм форму');
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}

function restoreFormFields() {
  const restoredFields = localStorage.getItem(FORM_KEY);

  if (restoredFields) {
    formFields = JSON.parse(restoredFields);
    const keys = Object.keys(formFields);

    for (let key of keys) {
      form.elements[key].value = formFields[key];
    }
  }
}
