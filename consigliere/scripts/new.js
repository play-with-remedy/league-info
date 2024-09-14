const games = [
    {

    },

];

const teams = [
    {
        teamName: "team1",
        slots: [
            1,2,3,4,5,6,7,8,
        ],
    },
    {
        teamName: "team2",
        slots: [
            10,1,2,3,4,5,6,7,
        ],
    },
    {
        teamName: "team3",
        slots: [
            9,10,1,2,3,4,5,6,
        ],
    },
    {
        teamName: "team4",
        slots: [
            8,9,10,1,2,3,4,5,
        ],
    },
    {
        teamName: "team5",
        slots: [
            7,8,9,10,1,2,3,4,
        ],
    },
    {
        teamName: "team6",
        slots: [
            6,7,8,9,10,1,2,3,
        ],
    },
    {
        teamName: "team7",
        slots: [
            5,6,7,8,9,10,1,2,
        ],
    },
    {
        teamName: "team8",
        slots: [
            4,5,6,7,8,9,10,1,
        ],
    },
    {
        teamName: "team9",
        slots: [
            3,4,5,6,7,8,9,10,
        ],
    },
    {
        teamName: "team10",
        slots: [
            2,3,4,5,6,7,8,9,
        ],
    },
];

$(document).ready(function() {
    let timetable = new Array(8);

    for (let i = 0; i < timetable.length; i++) {
        timetable[i] = new Array(10);
      }

    teams.forEach((team) => {
        team.slots.forEach((slot, index) => {
            timetable[index][slot] = team.teamName;
        });
    })

    console.log(timetable);

});