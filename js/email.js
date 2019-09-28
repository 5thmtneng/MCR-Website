// form event listenters
document.getElementById('name').addEventListener('keyup', validateName);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('phone').addEventListener('keyup', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^([a-zA-Z]{1,30}) ([a-zA-Z]{1,30})? ?([a-zA-Z]{1,30})?$/;
    const nameFeedback = document.getElementById('name-feedback');

    if (!re.test(name.value)) {
        nameFeedback.classList.remove('feedback-invisible');
    } else {
        nameFeedback.classList.add('feedback-invisible');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const emailFeedback = document.getElementById('email-feedback');

    if (!re.test(email.value)) {
        emailFeedback.classList.remove('feedback-invisible');
    } else {
        emailFeedback.classList.add('feedback-invisible');
    }

}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-,., ]?\d{3}[-. ]?\d{4}$/;
    const phoneFeedback = document.getElementById('phone-feedback');

    if (!re.test(phone.value)) {
        phoneFeedback.classList.remove('feedback-invisible');
    } else {
        phoneFeedback.classList.add('feedback-invisible');
    }
}