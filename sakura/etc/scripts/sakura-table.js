const tableData = {
    "Артик": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Artik.jpeg",
    },
    "Архи": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Arhi.jpeg",
    },
    "Интерактив": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Inter.jpeg",
    },
    "Сергеевна": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Sergeevna.jpeg",
    },
    "Боня": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Bonya.jpeg",
    },
    "SOVEST": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Sovest.jpeg",
    },
    "Жнец": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Jnec.jpeg",
    },
    "Young": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Young.jpeg",
    },
    "Юрия": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Yria.jpeg",
    },
    "Скарлетт": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Skarlet.jpeg",
    },
    "Пчела": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Pcela.jpeg",
    },
    "Мориарти": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Moriarti.jpeg",
    },
    "Саранча": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Sarancha.jpeg",
    },
    "Весна": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Vesna.jpeg",
    },
    "Michael": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Michael.jpeg",
    },
    "Gadfour": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Gadfour.jpeg",
    },
    "Лекса": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Leksa.jpeg",
    },
    "Lina": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Lina.jpeg",
    },
    "Morti": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Morti.jpeg",
    },
    "Злая Киса": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/ZK.jpeg",
    },
    "Марго": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Margo.jpeg",
    },
    "Спонжик": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Sponjik.jpeg",
    },
    "Бестия": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Bestia.jpeg",
    },
    "Cherry Pick": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Cherry.png",
    },
    "Грибочки": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Gribochki.jpeg",
    },
    "Rocket Woman": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Roket.jpeg",
    },
    "Джейн": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Jane.jpeg",
    },
    "Curly": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Curly.jpeg",
    },
    "Манекен": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Maneken.jpeg",
    },
    "Карась": {
        nickname: "Карась",
        tours: 0,
        score: 0,
        img: "../etc/images/players/Karas.jpeg",
    },
};

const teamDate = {
    "teams": [
        {
            "teamName": "Ну мёд, медятина!",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Понапикали!",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Япона Мать",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Город-герой и 2 героини",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Не Ангелы!",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "С кем я мафия?!",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Под(д)ержим Ремчика!",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Ночная Фурия",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "ЗПГ",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Банда экстремистов",
            "games": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
    ],
};

$(document).ready(function() {
    let table = "<table>";
    table += "<tr><th>#</th><th>Команда</th><th>Серия 1</th><th>Серия 2</th><th>Серия 3</th><th>Серия 4</th><th>Серия 5</th>" + 
             "<th>Серия 6</th><th>Серия 7</th><th>Серия 8</th><th>Серия 9</th><th>Серия 10</th><th>Итог</th><th>Ср. зн.</th></tr>";

    teamDate.teams.forEach((team, index) => {
        let total = 0;
        let games = 0;
        table += "<tr><td>" + (index + 1) + "</td><td>" + team.teamName + "</td>";
        team.games.forEach((gameScore) => {
            table += gameScore !== 0 ? "<td>" + gameScore + "</td>" : "<td></td>";
            games += gameScore !== 0 ? 1 : 0;
            total += gameScore;
        });
        table += "<td>" + total + "</td>"

        const avg = games !== 0 ? (total / games) : ""; 
        table += "<td>" + avg + "</td>"

        table += "</tr>";
    });

    table += "</table>"
    $('.main-table').append(table);

    let soloTable = "<table>";
    soloTable += "<tr><th>#</th><th>Игрок</th><th>Итог (Ср. зн.)</th></tr>";
    Object.keys(tableData).forEach((playerName, index) => {
        soloTable += "<tr><td>" + (index + 1) + "</td><td class='solo-player'> <img src='" + tableData[playerName].img + "' />" + playerName + "</td>";
        const tours = tableData[playerName].tours;
        const avg = tours !== 0 ? (tableData[playerName].score / tours) : 0;
        soloTable += "<td>" + avg + "</td></tr>"
    });

    soloTable += "</table>"
    $('.solo-table').append(soloTable);

    $('#teams').click(function(event) {
        $('.solo-table').hide();
        $('.main-table').show();
        $('#teams').css("color", "lightpink");
        $('#solo').css("color", "antiquewhite");

    });

    $('#solo').click(function(event) {
        $('.main-table').hide();
        $('.solo-table').show();
        $('#solo').css("color", "lightpink");
        $('#teams').css("color", "antiquewhite");
    });
});