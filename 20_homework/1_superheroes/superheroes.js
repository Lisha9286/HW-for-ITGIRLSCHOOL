let superheroesJSON = `[{
    "universe": "DC Comics",
    "heroName": "Бэтмен",
    "realName": "Брюс Уэйн",
    "frinds": [" Робин", " Бэтгерл"],
    "superpowers": [" интеллект", " обширные познания", " знания боевых искусств", " ловкость"],
    "img": "img/Batman.jpg"
},
{
    "universe": "DC Comics",
    "heroName": "Супермен",
    "realName": "Кларк Кент",
    "frinds": ["собака Крипто"],
    "superpowers": [" непробиваемость", " суперсила", " самоисцеление", " суперзрение", " суперслух"],
    "img": "img/Superman.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Железный человек",
    "realName": "Тони Старк",
    "frinds": ["Мстители"],
    "superpowers": [" высокий уровень интеллекта", " широкие познания науки и техники",
        "связь со всемирной паутиной", "бронекостюмы"
    ],
    "img": "img/Ironman.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Человек-паук",
    "realName": "Питер Паркер",
    "intelligence": "",
    "frinds": [" Мстители", " Фантастическая четверка", " Люди Икс"],
    "superpowers": [" сверхчеловеческие рефлексы", " паучье чутье",
        " способность прилепляться к твердым поверхностям", " производство паутины"
    ],
    "img": "img/Spiderman.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Капитан Америка",
    "realName": "Стивен Роджерс",
    "frinds": ["Мстители"],
    "superpowers": [" сила", " выносливость", " бессмертие", " быстрая регенерация",
        " мастерство скрытности и боя"
    ],
    "img": "img/CaptainAmerica.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Тор",
    "realName": "Тор Одинсон",
    "frinds": ["Мстители"],
    "superpowers": [" полёт", " способность призывать молнию", " божественное чувство", " магия рун"],
    "img": "img/Thor.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Халк",
    "realName": "Брюс Беннер",
    "frinds": ["Мстители"],
    "superpowers": [" сверхчеловеческая сила искорость", " выносливость", " Гениальный интеллект"],
    "img": "img/Hulk.jpg"
},
{
    "universe": "DC Comics",
    "heroName": "Чудо-женщина",
    "realName": "Диана Принс",
    "frinds": [" Лига Справедливости", " Бэтмен", " Супермен"],
    "superpowers": [" сверхчеловеческая сила искорость", " выносливость", " выносливость"],
    "img": "img/WonderWoman.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Черная вдова",
    "realName": "Наташа Романофф",
    "frinds": ["Мстители"],
    "superpowers": [" пик человеческого физического потенциала", " замедленное старение",
        " знание многих языков"
    ],
    "img": "img/BlackWidow.jpg"
},
{
    "universe": "Marvel Comics",
    "heroName": "Дэдпул",
    "realName": "Уэйд Уинстон Уилсон",
    "frinds": [" Мстители", " Человек-паук", " Росомаха"],
    "superpowers": [" высокий болевой порог", " регенерация и бессмертие",
        " сверхчеловеческая иммунная система"
    ],
    "img": "img/deadpoll.jpg"
}
]`;
let superheroes
document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem("superheroes"))
        superheroes = JSON.parse(localStorage.getItem("superheroes"));
    else
        superheroes = JSON.parse(superheroesJSON);
    let superheroCard = "";
    let i = 0
    for (superhero of superheroes) {
        superheroCard += `<div class="card"><div> <img class="img" src="${superhero.img}" alt="superhero"/></div>
    <div><span class="title">Вселенная:</span> ${superhero.universe}</div>
    <div><span class="title">Имя:</span> ${superhero.heroName}</div>
    <div><span class="title">Альтер-Эго:</span> ${superhero.realName}</div>
    <div><span class="title">Друзья:</span> ${superhero.frinds}</div>
    <div><span class="title">Суперсилы:</span> ${superhero.superpowers}</div>
    <div class="rating-area">
    <label for="superhero">Ваша оценка:</label>
	<input id="rate${i}" name="superhero" type="number" max="10"/><br/>
    <button onclick="rating(${i})" class="btn btn-dark calc_btn">Отправить</button>
    <div id="result${i}">Ваш рейтинг: `+(superhero.rating ? superhero.rating: "")+` </div>
</div></div>`;
        i++;
    }
    document.querySelector('.cards').innerHTML = superheroCard;
});


function rating(id) {
    document.getElementById("result" + id).innerHTML = "Ваш рейтинг: ";
    let rating = document.getElementById('rate' + id).value;
    document.getElementById("result" + id).innerHTML += rating;
    document.getElementById('rate' + id).value = "";
    superheroes[id].rating = rating;
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
}