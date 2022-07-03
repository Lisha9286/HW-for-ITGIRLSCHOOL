function check() {
    const person = {
        resultName: document.querySelector('#nameID'),
        resultConfirm: document.querySelector('#confirmID'),
        resultEmail: document.querySelector('#emailID'),
        resultPhone: document.querySelector('#phoneID'),
        resultPassword: document.querySelector('#passwordID')
    }

    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const phoneFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    const passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    const showErrorMessege = document.querySelector('#errorMessege');
    document.querySelector('#errorMessege').innerHTML = "";


    if (person.resultName.value == '') {
        showErrorMessege.innerHTML += "Enter Username!";
    } else if (person.resultEmail.value == '') {
        showErrorMessege.innerHTML += "Enter email!";
    } else if (!person.resultEmail.value.match(mailFormat)) {
        showErrorMessege.innerHTML += "Enter correct email!";
        return false;
    } else if (person.resultPhone.value == '') {
        showErrorMessege.innerHTML += "Enter phone number!";
    } else if (!person.resultPhone.value.match(phoneFormat)) {
        showErrorMessege.innerHTML += "Enter correct phone number!";
        return false;
    } else if (person.resultPassword.value == '') {
        showErrorMessege.innerHTML += "Create password!";
    } else if (!person.resultPassword.value.match(passwordFormat)) {
        showErrorMessege.innerHTML += "Passwords must contain:<br/> a minimum of 1 lower case letter [a-z] and<br/> a minimum of 1 upper case letter [A-Z] and<br/> a minimum of 1 numeric character [0-9] and<br/> a minimum of special character.";
        return false;
    } else if (person.resultConfirm.value == '') {
        showErrorMessege.innerHTML += "Repeat password!";
    } else if (person.resultConfirm.value != resultPassword.value) {
        showErrorMessege.innerHTML += "Those passwords did'n t match. Try again.";
    } else {
        const user = {
            name: document.querySelector('#nameID').value,
            email: document.querySelector('#emailID').value,
            phone: document.querySelector('#phoneID').value,
            password: document.querySelector('#passwordID').value
        }
        fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user),
            })

            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    
}