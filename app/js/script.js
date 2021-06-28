const form = document.getElementById('form');
const email = document.querySelector('.email');
const span = document.querySelector('.span');


if(form){
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});
}

function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === '') 
    {
        setErrorFor(email, 'Email cannot be empty');
        span.classList.add('m-error');
    }
    else if (!isEmail(emailValue)) 
    {
        setErrorFor(email, 'Please provide a valid email address');
        span.classList.add('m-error');
    }
    else 
    {
        setSuccessFor(email);
        span.classList.remove('m-error');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');

    span.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

