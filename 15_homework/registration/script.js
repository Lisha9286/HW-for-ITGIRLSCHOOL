function check() {
    let resultName = document.getElementById('nameID');
    let resultConfirm = document.getElementById('confirmID');
    let resultEmail = document.getElementById('emailID');
    let resultPhone = document.getElementById('phoneID');
    let resultPassword = document.getElementById('passwordID');
    document.getElementById('errorMessege').innerHTML = "";
    if (resultName.value == '') {
        document.getElementById('errorMessege').innerHTML += "Enter Username!";
    } else if (resultEmail.value == '') {
        document.getElementById('errorMessege').innerHTML += "Enter email!";
    } else if (resultEmail.value == '/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i') {
        //document.getElementById('errorMessege').innerHTML += "Enter correct email!";
    } else if (resultPhone.value == '') {
        document.getElementById('errorMessege').innerHTML += "Enter phone number!";
    } else if (resultPhone.value.length <= 11) {
        document.getElementById('errorMessege').innerHTML += "Enter correct phone number!";
    } else if (resultPassword.value == '') {
        document.getElementById('errorMessege').innerHTML += "Create password!";
    } else if (resultPassword.value.length <= 7) {
        document.getElementById('errorMessege').innerHTML += "Use 8 characters or more for your password";
    } else if (resultConfirm.value == '') {
        document.getElementById('errorMessege').innerHTML += "Repeat password!";
    } else if (resultConfirm.value != resultPassword.value) {
        document.getElementById('errorMessege').innerHTML += "Those passwords didn t match. Try again.";
    }
}