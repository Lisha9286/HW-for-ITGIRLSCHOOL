/*let saleJSON = `{
    "topProduct": ["Home Decore Range", "Disney Princess Dress", "Bathroom Essentials", "Apple Smartwatch"],
    "earnings": "$6078.76",
    "profit": "80%",
    "diffProfit": "48%"
}`*/

let cardsJSON = `[
    {
        "name": "Total Sales",
        "result": "$5k",
        "diffYesterday":"+10%",
        "img": "style/img/total_sales.png"
    },
    {
        "name": "Total Order",
        "result": "500",
        "diffYesterday":"+8%",
        "img": "style/img/total_orders.png"
    },
    {
        "name": "Pradact Sold",
        "result": "9",
        "diffYesterday":"+2%",
        "img": "style/img/product_orders.png"
    },
    {
        "name": "New Customer",
        "result": "12",
        "diffYesterday":"+3%",
        "img": "style/img/new_customer.png"
    }
]`

let cards
document.addEventListener("DOMContentLoaded", function () {
    cards = JSON.parse(cardsJSON);
    console.log(cards);
    let i = 0

    for (card of cards) {
        document.querySelector('#cards').innerHTML += `<div class="block__card">
    <img src="${card.img}" class="block__card_img"/>
    <p class="block__card_info">${card.result}</p>
    <p class="block__card_name">${card.name}</p>
    <p class="block__card_diff${i}">${card.diffYesterday} from yesterday</p>
</div>`
        i++;
    }
}); 

const Chart = require('chart.js');

// графики линейные
const labels = [
    '5',
    '10',
    '15',
    '20',
    '25',
    '30',
];

const dataLine = {
    labels: labels,
    datasets: [{
        label: 'Last Month $4,087',
        backgroundColor: 'rgb(169, 223, 216)',
        borderColor: 'rgb(169, 223, 216)',
        data: [0, 10, 5, 2, 20, 30],
    }]
};

const dataNewLine = {
    labels: labels,
    datasets: [{
        label: 'This Month $5,506',
        backgroundColor: 'rgba(242, 200, 237, 1)',
        borderColor: 'rgba(242, 200, 237, 1)',
        data: [30, 27, 24, 28, 22, 30],
    }]
};

const configLine = {
    type: 'line',
    data: dataLine,
    options: {}
};

const configNewLine = {
    type: 'line',
    data: dataNewLine,
    options: {}
};

const lastMonth = new Chart(
    document.getElementById('lastMonth'),
    configLine
);

const thisMonth = new Chart(
    document.getElementById('thisMonth'),
    configNewLine
);


//график столбцы

new Chart(document.getElementById('level'), {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '6'],
        datasets: [{
            label: "Level",
            backgroundColor: 'rgba(169, 223, 216, 1)',
            data: [700, 600, 400, 500, 800]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
        }
    }
});

//дата
const moment = require('moment');
let date = moment().format('lll');
document.querySelector('#date').innerHTML += date;

import 'css-doodle';
AOS.init();