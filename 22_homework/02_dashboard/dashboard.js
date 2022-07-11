let cards


document.addEventListener("DOMContentLoaded", async function () {
    let url = 'dashboard.json';
    let response = await fetch(url);
    cards = await response.json();
    
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
    AOS.init();
    time();
    chart();
});

async function chart() {
    let url = 'info.json';
    let response = await fetch(url);
    info = await response.json();
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
            label: `Last Month ${info.lastMonthPrice}`,
            backgroundColor: 'rgb(169, 223, 216)',
            borderColor: 'rgb(169, 223, 216)',
            data: [0, 10, 5, 2, 20, 30],
        }]
    };

    const dataNewLine = {
        labels: labels,
        datasets: [{
            label: `This Month ${info.thisMonthPrice}`,
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
}

//дата
function time() {
    const moment = require('moment');
    let date = moment().format('lll');
    document.querySelector('#date').innerHTML += date;
}


