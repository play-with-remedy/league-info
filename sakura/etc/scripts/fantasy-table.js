const data = {
    "Архи": [
        "Архи", "Gadfour", "Грибочки", "Джейн",
    ],
    "Флэш": [
        "Интерактив", "Весна", "Бестия", "Карась",
    ],
    "Марко Ройс": [
        "Интерактив", "Злая Киса", "Rocket Woman", "Марго",
    ],
    "SCHOKK": [
        "Интерактив", "Саранча", "Злая Киса", "Манекен",
    ],
    "Карась": [
        "Артик", "Боня", "Манекен", "Карась",
    ],
    "ППК": [
        "Интерактив", "Morti", "Gadfour", "Манекен",
    ],
    "Morti": [
        "Архи", "Morti", "Rocket Woman", "Карась",
    ],
    "Есаул": [
        "Артик", "Gadfour", "Злая Киса", "Джейн",
    ],
    "Марго": [
        "Боня", "Пчела", "Марго", "Джейн",
    ],
    "Лекса": [
        "SOVEST", "Лекса", "Злая Киса", "Спонжик",
    ],
    "Скарлетт": [
        "Интерактив", "Скарлетт", "Джейн", "Манекен",
    ],
    "Пчела": [
        "Интерактив", "Пчела", "Cherry Pick", "Манекен",
    ],
    "Бендер": [
        "Интерактив", "Саранча", "Марго", "Манекен",
    ],
    "Юрия": [
        "Юрия", "Мориарти", "Спонжик", "Марго",
    ],
    "SOVEST": [
        "SOVEST", "Лекса", "Злая Киса", "Бестия",
    ],
    "Сергеевна": [
        "Сергеевна", "Бестия", "Грибочки", "Карась",
    ],
    "Манекен": [
        "Интерактив", "Бестия", "Грибочки", "Манекен",
    ],
    "Весна": [
        "Артик", "Весна", "Бестия", "Манекен",
    ],
    "Джейн": [
        "SOVEST", "Пчела", "Rocket Woman", "Джейн",
    ],
    "Бестия": [
        "Сергеевна", "Саранча", "Бестия", "Манекен",
    ],
    "Michael": [
        "Интерактив", "Michael", "Джейн", "Манекен",
    ],
    "Rocket Woman": [
        "Артик", "Саранча", "Джейн", "Rocket Woman",
    ],
    "Cherry Pick": [
        "Интерактив", "Morti", "Cherry Pick", "Rocket Woman",
    ],
    "Lina": [
        "Интерактив", "Lina", "Спонжик", "Манекен",
    ],
    "Young": [
        "Young", "Пчела", "Злая Киса", "Cherry Pick",
    ],
    "Лексус": [
        "Боня", "Morti", "Злая Киса", "Бестия",
    ],
    "Yuliya": [
        "Интерактив", "Morti", "Лекса", "Манекен",
    ],
    "Curly": [
        "Сергеевна", "Пчела", "Curly", "Джейн",
    ],
    "Грибочки": [
        "Сергеевна", "Скарлетт", "Грибочки", "Манекен",
    ],
    "Спонжик": [
        "Интерактив", "Gadfour", "Спонжик", "Джейн",
    ],
    "Артик": [
        "Артик", "Саранча", "Бестия", "Карась",
    ],
    "Злая Киса": [
        "Интерактив", "Злая Киса", "Бестия", "Манекен",
    ],
    "Мориарти": [
        "Юрия", "Мориарти", "Спонжик", "Злая Киса",
    ],
    "Самаритянка": [
        "Интерактив", "Мориарти", "Бестия", "Карась",
    ],
    "Паника": [
        "Интерактив", "Gadfour", "Марго", "Джейн",
    ],
    "Саранча": [
        "Артик", "Саранча", "Rocket Woman", "Манекен",
    ],
    "Панда из Руанды": [
        "Юрия", "Марго", "Грибочки", "Манекен",
    ],
    "Ася": [
        "Young", "Мориарти", "Марго", "Rocket Woman",
    ],
    "Виктор": [
        "Сергеевна", "Саранча", "Rocket Woman", "Cherry Pick",
    ],
    "Гурнік": [
        "Юрия", "Скарлетт", "Бестия", "Джейн",
    ],
    "Жнец": [
        "Артик", "Жнец", "Манекен", "Карась",
    ],
    "Gadfour": [
        "Архи", "Gadfour", "Lina", "Карась",
    ],
    "Teslex": [
        "Пчела", "Весна", "Rocket Woman", "Джейн",
    ],
    "Sni Wy Demer": [
        "Архи", "Артик", "Интерактив", "Сергеевна",
    ],
    "Remedy": [
        "Сергеевна", "Пчела", "Злая Киса", "Манекен",
    ],
    "Ад": [
        "Жнец", "Michael", "Lina", "Curly",
    ],
    "Slam": [
        "SOVEST", "Саранча", "Lina", "Джейн",
    ],
    "Лили": [
        "Интерактив", "Lina", "Бестия", "Джейн",
    ],
    "Мишок": [
        "Артик", "Весна", "Спонжик", "Карась",
    ],
    "Боня": [
        "Боня", "Morti", "Марго", "Бестия",
    ],
    "Интерактив": [
        "Интерактив", "Gadfour", "Марго", "Манекен",
    ],
    "Yesterday": [
        "Интерактив", "Michael", "Rocket Woman", "Манекен",
    ],
};

let fanTable = [];

$(document).ready(function() {
    Object.keys(data).forEach((fpsPlayerName, index) => {
        let playerObject = { "playerName" : fpsPlayerName, "team": [], };
        let totalScore = 0;
        let totalTours = 0;
        data[fpsPlayerName].forEach(player => {
            const playerScore = tableData[player].score;
            const playerTours = tableData[player].tours;
            const playerImg = tableData[player].img;
            playerObject.team.push( {"playerImg": playerImg, "playerScore": playerScore} );
            totalScore += playerScore;
            totalTours += playerTours;
        });

        playerObject.totalScore = totalScore;
        if (totalTours !== 0) {
            let avg = (totalScore / totalTours).toFixed(2);
            playerObject.averageScore = avg;
        } else {
            playerObject.averageScore = 0;
        }
        fanTable.push(playerObject);
    });

    sortFantasy("totalScore");
});

function sortFantasy(param) {
    fanTable.sort((a, b) => {
        if (a[param] < b[param]) {
            return 1;
        }
        if (a[param] > b[param]) {
            return -1;
        }
        return 0;
    });

    buildTable();
}

function buildTable() {
    $('.main-fanstasy-table').empty();
    let t = "<table><tr><th>#</th><th>Игрок</th><th colspan='4'>Команда</th><th id='total'>Итог</th><th id='average'>Ср. зн.</th></tr>";
    fanTable.forEach((row, index) => {
        t += "<tr><td>" + (index + 1) + "</td><td class='player-name'>" + row.playerName + "</td>";
        row.team.forEach(team => {
            t += "<td><div name='" + row.playerName + "'class='main-fanstasy-table-player-img' style='background-image: url(" + team.playerImg + ")'></div>" 
                    + "<p>" + team.playerScore + "</p></td>";
        });
        t += "<td class='score'>" + row.totalScore + "</td>";
        t += "<td class='score'>" + row.averageScore + "</td>";
        t += "</tr>";
    });


    t += "</table>";
    $('.main-fanstasy-table').append(t);

    $('#total').click(function() {
        sortFantasy("totalScore");
    });

    $('#average').click(function(event) {
        sortFantasy("averageScore");
    });
}