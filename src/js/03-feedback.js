var throttle = require('lodash.throttle');

const formRef = document.querySelector('form');
const inputRef = formRef.querySelector('input');
const textAreaRef = formRef.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";
let objectOfValues = {};

checkSavedValues();

formRef.addEventListener('input', throttle(handleInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function handleInput(event) {
    if (event.currentTarget) {
    const {elements: {email, message}} = event.currentTarget;
    let objectOfValues = {
    email: email.value,
    message: message.value
}
}

localStorage.setItem(STORAGE_KEY, JSON.stringify(objectOfValues));

}

function onFormSubmit(event) {
    event.preventDefault();
const {elements: {email, message}} = event.currentTarget;
const objectOfValues = {
    email: email.value,
    message: message.value
}
console.log(objectOfValues);
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);

}

function checkSavedValues() {
 
    const objectFromStorage = localStorage.getItem(STORAGE_KEY);
    const ugrObjFromStorage = JSON.parse(objectFromStorage);

    
    if (objectFromStorage) {
        inputRef.value = ugrObjFromStorage.email;
        textAreaRef.value = ugrObjFromStorage.message;
    }
}