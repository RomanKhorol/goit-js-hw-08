import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
onPageLoad();
function onInputChange(event) {
  formData.mail = input.value;
  formData.message = textArea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData }));
}

function onPageLoad(e) {
  let inputData = localStorage.getItem(STORAGE_KEY);
  if (inputData) {
    let storageData = JSON.parse(inputData);
    input.value = storageData.formData.mail;
    textArea.value = storageData.formData.message;
    formData.mail = storageData.formData.mail;
    formData.message = storageData.formData.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
