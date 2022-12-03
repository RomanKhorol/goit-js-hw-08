import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);
onPageLoad();

const STORAGE_KEY = 'feedback-form-state';
const formData = null;

function onInputChange(event) {
  formData.mail = input.value;
  formData.message = textArea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData }));
}

let inputData = localStorage.getItem(STORAGE_KEY);
let storageData = JSON.parse(inputData);
function onPageLoad(e) {
  if (storageData) {
    input.value = storageData.formData.mail;
    textArea.value = storageData.formData.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
