let superheroesJSON;
let superheroes
document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem("superheroes"))
        superheroes = JSON.parse(localStorage.getItem("superheroes"));
    else
        superheroes = JSON.parse(superheroesJSON);
    let i = 0
    for (superhero of superheroes) {
        document.querySelector('.cards').innerHTML += `<div class="card"><div> <img class="img" src="${superhero.img}" alt="superhero"/></div>
    <div><span class="title">Вселенная:</span> ${superhero.universe}</div>
    <div><span class="title">Имя:</span> ${superhero.heroName}</div>
    <div><span class="title">Альтер-Эго:</span> ${superhero.realName}</div>
    <div><span class="title">Друзья:</span> ${superhero.friends}</div>
    <div><span class="title">Суперсилы:</span> ${superhero.superpowers}</div>
    <div class="rating-area">
    <label for="superhero">Ваша оценка:</label>
	<input id="rate${i}" name="superhero" type="number" max="10"/><br/>
    <button onclick="rating(${i})" class="btn btn-dark calc_btn">Отправить</button>
    <div id="result${i}">Ваш рейтинг: ${superhero.rating ? superhero.rating: ""} </div>
</div></div>`;
        i++;
    }
});


function rating(id) {
    document.getElementById("result" + id).innerHTML = "Ваш рейтинг: ";
    let rating = document.getElementById('rate' + id).value;
    document.getElementById("result" + id).innerHTML += rating;
    document.getElementById('rate' + id).value = "";
    superheroes[id].rating = rating;
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
}