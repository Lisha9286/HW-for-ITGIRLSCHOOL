function check(){
    let resultName = document.getElementById('nameID').value;
    if(resultName==''){
        alert ("Enter Username!");
    }

    let resultEmail = document.getElementById('emailID').value;
    if(resultEmail==''){
        alert ("Enter email!");
    }

    let resultPhone = document.getElementById('phoneID').value;
    if(resultPhone==''){
        alert ("Enter phone number!");
    }

    let resultPassword = document.getElementById('passwordID').value;
    if(resultPassword==''){
        alert ("Create password!");
    }

    let resultConfirm = document.getElementById('confirmID').value;
    if(resultConfirm==''){
        alert ("Repeat password!");
    }
}
