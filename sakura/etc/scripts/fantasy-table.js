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
    //"Есаул": [
    //    "Артик", "Gadfour", "Злая Киса", "Джейн",
    //],
    "Марго": [
        "Боня", "Пчела", "Марго", "Джейн",
    ],
    "Лекса": [
        "SOVEST", "Скарлетт", "Спонжик", "Манекен",
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
    //"Хаус": [
    //    "Сергеевна", "Саранча", "Gadfour", "Манекен",
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
};

$(document).ready(function() {
    let table = "<table>";
    table += "<tr><th>#</th><th>Player</th><th colspan='4'>Team</th><th>Sum</th><th>Avg</th></tr>";
    Object.keys(data).forEach((fpsPlayerName, index) => {
        table += "<tr><td>" + (index + 1) + "</td><td class='player-name'>" + fpsPlayerName + "</td>"
        let totalScore = 0;
        let totalTours = 0;
        data[fpsPlayerName].forEach(player => {
            const playerScore = tableData[player].score;
            const playerTours = tableData[player].tours;
            const playerImg = tableData[player].img;
            table += "<td><div class='main-fanstasy-table-player-img' style='background-image: url(" + playerImg + ")'></div>" 
                    + "<p>" + playerScore + "</p></td>";
            totalScore += playerScore;
            totalTours += playerTours;
        });
        table += "<td class='score'>" + totalScore + "</td>";
        if (totalTours !== 0) {
            table += "<td class='score'>" + (totalScore / totalTours).toFixed(2) + "</td>";
        } else {
            table += "<td class='score'>0</td>";
        }
        table += "</tr>";
    });
    table += "</table>"
    $('.main-fanstasy-table').append(table);

});