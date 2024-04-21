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
        tours: 1,
        score: 26.5,
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
        tours: 1,
        score: 21,
        img: "../etc/images/players/Young.jpeg",
    },
    "Юрия": {
        tours: 1,
        score: 22.5,
        img: "../etc/images/players/Yria.jpeg",
    },
    "Скарлетт": {
        tours: 1,
        score: 25.5,
        img: "../etc/images/players/Skarlet.jpeg",
    },
    "Пчела": {
        tours: 1,
        score: 28,
        img: "../etc/images/players/Pcela.jpeg",
    },
    "Мориарти": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Moriarti.jpeg",
    },
    "Саранча": {
        tours: 1,
        score: 19.5,
        img: "../etc/images/players/Sarancha.jpeg",
    },
    "Весна": {
        tours: 0,
        score: 0,
        img: "../etc/images/players/Vesna.jpeg",
    },
    "Michael": {
        tours: 1,
        score: 23,
        img: "../etc/images/players/Michael.jpeg",
    },
    "Gadfour": {
        tours: 1,
        score: 27.25,
        img: "../etc/images/players/Gadfour.jpeg",
    },
    "Лекса": {
        tours: 1,
        score: 26,
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
        tours: 1,
        score: 32.5,
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
                28, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Понапикали!",
            "games": [
                22.25, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Япона Мать",
            "games": [
                26, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Город-герой и 2 героини",
            "games": [
                25.5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Не Ангелы",
            "games": [
                26.5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "С кем я мафия?!",
            "games": [
                21, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Под(д)ержим Ремчика!",
            "games": [
                27.25, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Ночная Фурия",
            "games": [
                32.5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "ЗПГ",
            "games": [
            19.5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
        {
            "teamName": "Банда экстремистов",
            "games": [
                23, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        },
    ],
};

$(document).ready(function() {
    applyTeamTable();
    applySoloTable();


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

function applyTeamTable() {
    let table = "<table>";
    table += "<tr><th>#</th><th>Команда</th><th>Серия 1</th><th>Серия 2</th><th>Серия 3</th><th>Серия 4</th><th>Серия 5</th>" + 
             "<th>Серия 6</th><th>Серия 7</th><th>Серия 8</th><th>Серия 9</th><th>Серия 10</th><th>Итог</th></tr>";

    teamDate.teams.sort((a, b) => {
        let total1 = 0;
        let total2 = 0;

        a.games.forEach((gameScore) => {
            total1 += gameScore;
        });
        b.games.forEach((gameScore) => {
            total2 += gameScore;
        });

        if (total1 < total2) {
            return 1;
        }
        if (total1 > total2) {
            return -1;
        }
        return 0;
    });

    teamDate.teams.forEach((team, index) => {
        let total = 0;
        let games = 0;
        table += "<tr><td>" + (index + 1) + "</td><td>" + team.teamName + "</td>";
        team.games.forEach((gameScore) => {
            table += gameScore !== 0 ? "<td>" + gameScore + "</td>" : "<td></td>";
            games += gameScore !== 0 ? 1 : 0;
            total += gameScore;
        });
        table += "<td class='total-score'>" + total + "</td></tr>";
    });

    table += "</table>"
    $('.main-table').append(table);
}


function applySoloTable() {
    let soloTable = "<table>";
    soloTable += "<tr><th>#</th><th>Игрок</th><th>Итог (Ср. зн.)</th></tr>";

    let playerNamesArray = Object.keys(tableData).sort((a, b) => {
        if (tableData[a].score < tableData[b].score) {
        return 1;
        }
        if (tableData[a].score > tableData[b].score) {
        return -1;
        }
        return 0;
    });

    playerNamesArray.forEach((playerName, index) => {
        soloTable += "<tr><td>" + (index + 1) + "</td><td class='solo-player'> <img src='" + tableData[playerName].img + "' />" + playerName + "</td>";
        const tours = tableData[playerName].tours;
        const avg = tours !== 0 ? (tableData[playerName].score / tours) : 0;
        soloTable += "<td class='avg-score'>" + avg + "</td></tr>"
    });

    soloTable += "</table>"
    $('.solo-table').append(soloTable);
}