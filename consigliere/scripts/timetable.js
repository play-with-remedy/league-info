const teams = [
    {
        teamName: "Лучшие пупсики на вашу вечеринку❤️",
        slots: [
            1,30,15,21,8,30,5,17
        ],
    },
    {
        teamName: "Переполненный ЛХ",
        slots: [
            2,19,4,13,7,1,25,27
        ],
    },
    {
        teamName: "team3",
        slots: [
            3,8,23,29,10,29,15,7
        ],
    },
    {
        teamName: "team4",
        slots: [
            4,29,14,20,9,2,6,18
        ],
    },
    {
        teamName: "Крут и Пряник",
        slots: [
            5,18,3,30,12,28,26,8
        ],
    },
    {
        teamName: "team6",
        slots: [
            6,7,22,28,11,3,16,28
        ],
    },
    {
        teamName: "Клянусь, мы шериф",
        slots: [
            7,28,13,19,14,27,7,29
        ],
    },
    {
        teamName: "team8",
        slots: [
            8,17,2,8,13,4,27,9
        ],
    },
    {
        teamName: "team9",
        slots: [
            9,6,21,27,16,26,17,19
        ],
    },
    {
        teamName: "team10",
        slots: [
            10,27,12,9,15,5,8,30
        ],
    },
    {
        teamName: "team11",
        slots: [
            11,16,1,7,18,25,28,10
        ],
    },
    {
        teamName: "Бывшие",
        slots: [
            12,5,20,26,17,6,18,20
        ],
    },
    {
        teamName: "Боги игры",
        slots: [
            13,26,11,17,20,24,9,1
        ],
    },
    {
        teamName: "В щи",
        slots: [
            14,15,30,6,19,7,29,21
        ],
    },
    {
        teamName: "DDNIWE",
        slots: [
            15,4,19,25,22,23,19,11
        ],
    },
    {
        teamName: "Пёс да Лис",
        slots: [
            16,25,10,16,21,8,10,2
        ],
    },
    {
        teamName: "Инцест - дело семейное",
        slots: [
            17,14,29,5,24,22,30,12
        ],
    },
    {
        teamName: "team18",
        slots: [
            18,3,18,24,23,9,20,22
        ],
    },
    {
        teamName: "team19",
        slots: [
            19,24,9,18,26,21,11,3
        ],
    },
    {
        teamName: "team20",
        slots: [
            20,13,28,4,25,10,1,23
        ],
    },
    {
        teamName: "Рыжий неадекват 5.0",
        slots: [
            21,2,17,23,28,20,21,13
        ],
    },
    {
        teamName: "team22",
        slots: [
            22,23,8,14,27,11,12,4
        ],
    },
    {
        teamName: "team23",
        slots: [
            23,12,27,3,30,19,2,24
        ],
    },
    {
        teamName: "Молодые ебаки",
        slots: [
            24,1,16,22,29,12,22,14
        ],
    },
    {
        teamName: "team25",
        slots: [
            25,22,7,15,2,18,13,5
        ],
    },
    {
        teamName: "team26",
        slots: [
            26,11,26,2,1,13,3,25
        ],
    },
    {
        teamName: "team27",
        slots: [
            27,20,5,1,4,17,23,15
        ],
    },
    {
        teamName: "Без паники",
        slots: [
            28,21,6,12,3,14,4,6
        ],
    },
    {
        teamName: "Шляпа и звезда",
        slots: [
            29,10,25,11,6,16,14,26
        ],
    },
    {
        teamName: "team30",
        slots: [
            30,9,24,10,5,15,24,16
        ],
    },
];

$(document).ready(function() {
    let timetableArray = new Array(8);

    for (let i = 0; i < timetableArray.length; i++) {
        timetableArray[i] = new Array(10);
    }

    teams.forEach((team) => {
        team.slots.forEach((slot, index) => {
            timetableArray[index][slot] = team.teamName;
        });
    });

    let timetable = "";
    for(let i = 0; i < 8; i++) {
        const number = i + 1;
        timetable += "<div id='game-" + number + "' class='game'>";
        timetable += "<p class='game-number'>Игра " + number + "</p>";
        timetable += "<div class='mafia-table-wrapper'>";
        for (let j = 0; j < 3; j++) {
            timetable += "<div class='mafia-table'>";
            timetable += "<p>Стол " + (j + 1) + "</p><table>"
            for (let k = 0; k < 10; k++) {
                timetable +=  "<tr><td class='table-number'>" + (k + 1) + "</td><td>" + timetableArray[i][j*10+k+1]+ "</td></tr>";
            }
            timetable += "</table></div>";
        }
        timetable += "</div></div>";
    }

    $('#timetable').append(timetable);

});