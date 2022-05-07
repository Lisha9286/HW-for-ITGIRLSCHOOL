function ask()
    {
    const name = prompt('Как тебя зовут?');
    alert (`Привет, ${name} !`);
    }

function sub()
{
    let firstSub = prompt('Вы выбрали умножение, введите первое число.');
    let secondSub = prompt('Введите второе число, на которое надо умножить перовое.');
    let subResult = +firstSub * +secondSub;
    alert (`Ваш результат: ${subResult}`);
}

function seg()
{
    let firstSeg = prompt('Вы выбрали деление, введите первое число.');
    let secondSeg = prompt('Введите второе число, на которое надо разделить первое.');
    let segResult = +firstSeg / +secondSeg;
    alert (`Ваш результат: ${segResult}`);
}

function plus()
{
    let firstPlus = prompt('Вы выбрали сумму чисел, введите первое число.');
    let secondPlus = prompt('Введите второе число.');
    let plusResult = +firstPlus + +secondPlus;
    alert (`Ваш результат: ${plusResult}`);
}

function minus()
{
    let firstMinus = prompt('Вы выбрали вычитание, введите первое число.');
    let secondMinus = prompt('Введите второе число.');
    let minusResult = Number(firstMinus) - Number(secondMinus);
    alert (`Ваш результат: ${minusResult}`);
}