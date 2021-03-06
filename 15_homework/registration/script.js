function check() {
    const person ={
        resultName: document.getElementById('nameID'),
        resultConfirm: document.getElementById('confirmID'),
        resultEmail: document.getElementById('emailID'),
        resultPhone: document.getElementById('phoneID'),
        resultPassword: document.getElementById('passwordID')
    }  

    document.getElementById('errorMessege').innerHTML = "";
    if (person.resultName.value == '') {
        document.getElementById('errorMessege').innerHTML += "Enter Username!";
    } else if (person.resultEmail.value == '') {
        document.getElementById('errorMessege').innerHTML += "Enter email!";
    } else if (person.resultPhone.value == '') {
        document.getElementById('errorMessege').innerHTML += "Enter phone number!";
    } else if (person.resultPhone.value.length <= 11) {
        document.getElementById('errorMessege').innerHTML += "Enter correct phone number!";
    } else if (person.resultPassword.value == '') {
        document.getElementById('errorMessege').innerHTML += "Create password!";
    } else if (person.resultPassword.value.length <= 7) {
        document.getElementById('errorMessege').innerHTML += "Use 8 characters or more for your password";
    } else if (person.resultConfirm.value == '') {
        document.getElementById('errorMessege').innerHTML += "Repeat password!";
    } else if (person.resultConfirm.value != person.resultPassword.value) {
        document.getElementById('errorMessege').innerHTML += "Those passwords did'n t match. Try again.";
    }
    return person          
}