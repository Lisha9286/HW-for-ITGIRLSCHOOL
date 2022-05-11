let op;

function calc() {
    let result;
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    switch (op) {
        case '+':
            result = +firstNumber + +secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            if (secondNumber = '0') {
                alert('На ноль делить нельзя!');
            }
            break;
    }

alert(`Ваш результат: ${result}`);
}

function changeColor(sender) {
sender.classList.add("changeColor");
}