function check() {
    const person = {
        resultName: document.querySelector('#nameID'),
        resultConfirm: document.querySelector('#confirmID'),
        resultEmail: document.querySelector('#emailID'),
        resultPhone: document.querySelector('#phoneID'),
        resultPassword: document.querySelector('#passwordID')
    }

    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const showErrorMessege = document.querySelector('#errorMessege');
    document.querySelector('#errorMessege').innerHTML = "";


    if (person.resultName.value == '') {
        showErrorMessege.innerHTML += "Enter Username!";
    } else if (person.resultEmail.value == '') {
        showErrorMessege.innerHTML += "Enter email!";
    } else if (person.resultEmail) {
        if (person.resultEmail.value.match(mailFormat)) {
            return true;
        } else {
            showErrorMessege.innerHTML += "Enter correct email!"
            return false;
        }
    } else if (person.resultPhone.value == '') {
        showErrorMessege.innerHTML += "Enter phone number!";
    } else if (person.resultPhone.value.length <= 11) {
        showErrorMessege.innerHTML += "Enter correct phone number!";
    } else if (person.resultPassword.value == '') {
        showErrorMessege.innerHTML += "Create password!";
    } else if (person.resultPassword.value.length <= 7) {
        showErrorMessege.innerHTML += "Use 8 characters or more for your password";
    } else if (person.resultConfirm.value == '') {
        showErrorMessege.innerHTML += "Repeat password!";
    } else if (person.resultConfirm.value != resultPassword.value) {
        showErrorMessege.innerHTML += "Those passwords did'n t match. Try again.";
    }
    return person
}