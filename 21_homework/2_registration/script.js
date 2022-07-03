function sendPOST(person) {
    fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(person),
            })

            .then(response => response.json())
            .then(person => {
                console.log(person);
            })
            .catch(error => console.log(error));
            console.log(person)
}

function check() {
    const person = {
        resultName: document.querySelector('#nameID').value,
        resultConfirm: document.querySelector('#confirmID').value,
        resultEmail: document.querySelector('#emailID').value,
        resultPhone: document.querySelector('#phoneID').value,
        resultPassword: document.querySelector('#passwordID').value
    }

    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const phoneFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    const passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    const showErrorMessege = document.querySelector('#errorMessege');
    document.querySelector('#errorMessege').innerHTML = "";


    if (person.resultName == '') {
        showErrorMessege.innerHTML += "Enter Username!";
    } else if (person.resultEmail == '') {
        showErrorMessege.innerHTML += "Enter email!";
    } else if (!person.resultEmail.match(mailFormat)) {
        showErrorMessege.innerHTML += "Enter correct email!";
        return false;
    } else if (person.resultPhone == '') {
        showErrorMessege.innerHTML += "Enter phone number!";
    } else if (!person.resultPhone.match(phoneFormat)) {
        showErrorMessege.innerHTML += "Enter correct phone number!";
        return false;
    } else if (person.resultPassword == '') {
        showErrorMessege.innerHTML += "Create password!";
    } else if (!person.resultPassword.match(passwordFormat)) {
        showErrorMessege.innerHTML += "Passwords must contain:<br/> a minimum of 1 lower case letter [a-z] and<br/> a minimum of 1 upper case letter [A-Z] and<br/> a minimum of 1 numeric character [0-9] and<br/> a minimum of special character.";
        return false;
    } else if (person.resultConfirm == '') {
        showErrorMessege.innerHTML += "Repeat password!";
    } else if (person.resultConfirm!= person.resultPassword) {
        showErrorMessege.innerHTML += "Those passwords did'n t match. Try again.";
    } 

    sendPOST(person)
}