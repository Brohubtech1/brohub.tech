const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const textbox = document.getElementById('textbox');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const textboxValue = textbox.value.trim();


    if (firstnameValue === '') {
        //show error
        //add error class
        setErrorFor(firstname, 'First Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(firstname);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email is required');
    } else {
        setSuccessFor(email);
    }

    if (textboxValue === '') {
        setErrorFor(textbox, 'Message area cannot be blank');
    } else {
        setSuccessFor(textbox);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}