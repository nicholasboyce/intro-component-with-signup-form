const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) {
        form.classList.add('error');
    };
})

firstName.addEventListener('invalid', () => {
    firstName.classList.add('error');

    const inputId = firstName.id;
    const errorSpan = document.querySelector(`[data-js='${inputId}'`);
    errorSpan.style.display = 'inline-block';
    errorSpan.textContent = 'First Name cannot be empty';
});

lastName.addEventListener('invalid', () => {
    lastName.classList.add('error');

    const inputId = lastName.id;
    const errorSpan = document.querySelector(`[data-js='${inputId}'`);
    errorSpan.style.display = 'inline-block';
    errorSpan.textContent = 'Last Name cannot be empty';
});

email.addEventListener('invalid', () => {
    email.classList.add('error');
    email.placeholder = 'email@example/com';

    const inputId = email.id;
    const errorSpan = document.querySelector(`[data-js='${inputId}'`);
    errorSpan.style.display = 'inline-block';
    errorSpan.textContent = 'Looks like this is not an email';
});

password.addEventListener('invalid', () => {
    password.classList.add('error');

    const inputId = password.id;
    const errorSpan = document.querySelector(`[data-js='${inputId}'`);
    errorSpan.style.display = 'inline-block';
    errorSpan.textContent = 'Password cannot be empty';
});