function check() {
    const person = {
        resultName: document.querySelector('#nameID'),
        resultConfirm: document.querySelector('#confirmID'),
        resultEmail: document.querySelector('#emailID'),
        resultPhone: document.querySelector('#phoneID'),
        resultPassword: document.querySelector('#passwordID')
    }

    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    document.querySelector('#errorMessege').innerHTML = "";

    if (person.resultName.value == '') {
        document.querySelector('#errorMessege').innerHTML += "Enter Username!";
    } else if (person.resultEmail.value == '') {
        document.querySelector('#errorMessege').innerHTML += "Enter email!";
    } else if (person.resultEmail) {
        if (person.resultEmail.value.match(mailFormat)) {
            return true;
        } else {
            document.querySelector('#errorMessege').innerHTML += "Enter correct email!"
            return false;
        }
    } else if (person.resultPhone.value == '') {
        document.querySelector('#errorMessege').innerHTML += "Enter phone number!";
    } else if (person.resultPhone.value.length <= 11) {
        document.querySelector('#errorMessege').innerHTML += "Enter correct phone number!";
    } else if (person.resultPassword.value == '') {
        document.querySelector('#errorMessege').innerHTML += "Create password!";
    } else if (person.resultPassword.value.length <= 7) {
        document.querySelector('#errorMessege').innerHTML += "Use 8 characters or more for your password";
    } else if (person.resultConfirm.value == '') {
        document.querySelector('#errorMessege').innerHTML += "Repeat password!";
    } else if (person.resultConfirm.value != resultPassword.value) {
        document.querySelector('#errorMessege').innerHTML += "Those passwords did'n t match. Try again.";
    }
    return person
}