var a1 = {'id':'A-1', 'name': 'Freddy Krueger', 'points' : 0, 'extra' : 0, 'total' : 0};
var a2 = {'id':'A-2', 'name': 'Green', 'points' : 0, 'extra' : 0, 'total' : 0};
var a3 = {'id':'A-3', 'name': 'Продажник', 'points' : 0, 'extra' : 0, 'total' : 0};
var a4 = {'id':'A-4', 'name': 'Гаджет', 'points' : 0, 'extra' : 0, 'total' : 0};
var a5 = {'id':'A-5', 'name': 'Kinder', 'points' : 0, 'extra' : 0, 'total' : 0};
var a6 = {'id':'A-6', 'name': 'Алекси', 'points' : 0, 'extra' : 0, 'total' : 0};
var a7 = {'id':'A-7', 'name': 'Мориарти', 'points' : 0, 'extra' : 0, 'total' : 0};
var a8 = {'id':'A-8', 'name': 'Зодиак', 'points' : 0, 'extra' : 0, 'total' : 0};
var a9 = {'id':'A-9', 'name': 'Маг', 'points' : 0, 'extra' : 0, 'total' : 0};
var a10 = {'id':'A-10', 'name': 'Крузенштерн', 'points' : 0, 'extra' : 0, 'total' : 0};

var b1 = {'id':'B-1', 'name': 'Light', 'points' : 0, 'extra' : 0, 'total' : 0};
var b2 = {'id':'B-2', 'name': 'Опер', 'points' : 0, 'extra' : 0, 'total' : 0};
var b3 = {'id':'B-3', 'name': 'Искра', 'points' : 0, 'extra' : 0, 'total' : 0};
var b4 = {'id':'B-4', 'name': 'Эцио', 'points' : 0, 'extra' : 0, 'total' : 0};
var b5 = {'id':'B-5', 'name': 'Инженер', 'points' : 0, 'extra' : 0, 'total' : 0};
var b6 = {'id':'B-6', 'name': 'Жнец', 'points' : 0, 'extra' : 0, 'total' : 0};
var b7 = {'id':'B-7', 'name': 'Yesterday', 'points' : 0, 'extra' : 0, 'total' : 0};
var b8 = {'id':'B-8', 'name': 'Архи', 'points' : 0, 'extra' : 0, 'total' : 0};
var b9 = {'id':'B-9', 'name': 'Sky', 'points' : 0, 'extra' : 0, 'total' : 0};
var b10 = {'id':'B-10', 'name': 'Bon', 'points' : 0, 'extra' : 0, 'total' : 0};

var players_all = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];
var players_a = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var players_b = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];

var game_1_table_1 = {
    'table_id' : '#round1 #table1',
    'table_name' : 'Table 1',
    'player' : [a9, a2, b9, b5, b3, b8, b4, a10, a1, a7],
    'role' : ['C', 'M', 'C', 'M', 'D', 'Sh', 'C', 'C', 'C', 'C'],
    'points' : [1, 0, 1, 0, 0, 1, 1, 1, 1, 1],
    'extra' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25]
};

var game_1_table_2 = {
    'table_id' : '#round1 #table2',
    'table_name' : 'Table 2',
    'player' : [b10, a3, b6, a6, b1, b2, a4, a5, b7, a8],
    'role' : ['C', 'C', 'M', 'D', 'M', 'C', 'C', 'C', 'C', 'Sh'],
    'points' : [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    'extra' : [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0.3]
};

var game_2_table_1 = {
    'table_id' : '#round2 #table1',
    'table_name' : 'Table 1',
    'player' : [a5, b7 ,a1, a4, b2, a2, b6, b9, a9, b3],
    'role' : ['C', 'C', 'M', 'Sh', 'C', 'C', 'M', 'C', 'C', 'D'],
    'points' : [0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    'extra' : [0, 0, 0, 0, 0.2, 0, 0.3, 0, 0, 0.2]
};

var game_2_table_2 = {
    'table_id' : '#round2 #table2',
    'table_name' : 'Table 2',
    'player' : [a6, b4, a7, a10, b1, b10, a8, b8, a3, b5],
    'role' : ['Sh', 'C', 'M', 'C', 'C', 'D', 'C', 'C', 'C', 'M'],
    'points' : [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    'extra' : [0.3, 0, 0, 0, 0, 0, 0.4, 0.4, 0, 0]
};

var game_3_table_1 = {
    'table_id' : '#round3 #table1',
    'table_name' : 'Table 1',
    'player' : [b1, b5, b10, b3, a6, a10, a3, b6, b8, b7],
    'role' : ['C', 'C', 'C', 'C', 'D', 'M', 'Sh', 'C', 'M', 'C'],
    'points' : [1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
    'extra' : [0, 0, 0, 0.4, 0, 0, 0, 0.25, 0, 0]
};

var game_3_table_2 = {
    'table_id' : '#round3 #table2',
    'table_name' : 'Table 2',
    'player' : [a2, b4, b2, a7, a1, a5, a9, a4, b9, a8],
    'role' : ['M', 'M', 'C', 'C', 'C', 'C', 'C', 'C', 'D', 'Sh'],
    'points' : [0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    'extra' : [0, 0, 0.4, 0.25, 0, 0, 0, 0, 0, 0]
};

var game_4_table_1 = {
    'table_id' : '#round4 #table1',
    'table_name' : 'Table 1',
    'player' : [b2, b1, a10, b4, b8, b9, b7, a3, a6, a5],
    'role' : ['D', '', '', '', '', '', 'Sh', '', 'M', 'M'],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_4_table_2 = {
    'table_id' : '#round4 #table2',
    'table_name' : 'Table 2',
    'player' : [a8, a4, b6, a9, b10, b3, a2, b5, a1, a7],
    'role' : ['M', '', '', '', 'M', '', '', 'D', '', 'Sh'],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_5_table_1 = {
    'table_id' : '#round5 #table1',
    'table_name' : 'Table 1',
    'player' : [a3, a4, a6, a8, a1, b5, b2, b4, a2, b7],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_5_table_2 = {
    'table_id' : '#round5 #table2',
    'table_name' : 'Table 2',
    'player' : [a7, b10, b6, a5, a10, b9, b3, b8, b1, a9],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_6_table_1 = {
    'table_id' : '#round6 #table1',
    'table_name' : 'Table 1',
    'player' : [b3, b8, a2, b7, a4, b10, b5, b6, a5, a10],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_6_table_2 = {
    'table_id' : '#round6 #table2',
    'table_name' : 'Table 2',
    'player' : [a7, a6, b9, b4, a9, a1, b1, b2, a8, a3],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_7_table_1 = {
    'table_id' : '#semi1 #table1',
    'table_name' : 'Table 1',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_7_table_2 = {
    'table_id' : '#semi1 #table2',
    'table_name' : 'Table 2',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_8_table_1 = {
    'table_id' : '#semi2 #table1',
    'table_name' : 'Table 1',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_8_table_2 = {
    'table_id' : '#semi2 #table2',
    'table_name' : 'Table 2',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_9_table_1 = {
    'table_id' : '#semi3 #table1',
    'table_name' : 'Table 1',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_9_table_2 = {
    'table_id' : '#semi3 #table2',
    'table_name' : 'Table 2',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_10_table_1 = {
    'table_id' : '#final1 #table1',
    'table_name' : 'Table 1',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

var game_11_table_1 = {
    'table_id' : '#final2 #table1',
    'table_name' : 'Table 1',
    'player' : [],
    'role' : ['', '', '', '', '', '', '', '', '', ''],
    'points' : ['', '', '', '', '', '', '', '', '', ''],
    'extra' : ['', '', '', '', '', '', '', '', '', '']
};

window.onload = function () {

    init_vars();

    generateTimeTable(game_1_table_1);
    generateTimeTable(game_1_table_2);

    generateTimeTable(game_2_table_1);
    generateTimeTable(game_2_table_2);

    generateTimeTable(game_3_table_1);
    generateTimeTable(game_3_table_2);
    
    generateTimeTable(game_4_table_1);
    generateTimeTable(game_4_table_2);

    generateTimeTable(game_5_table_1);
    generateTimeTable(game_5_table_2);

    generateTimeTable(game_6_table_1);
    generateTimeTable(game_6_table_2);

    //generateTimeTable(game_7_table_1);
    //generateTimeTable(game_7_table_2);

    //generateTimeTable(game_8_table_1);
    //generateTimeTable(game_8_table_2);

    //generateTimeTable(game_9_table_1);
    //generateTimeTable(game_9_table_2);

    //generateTimeTable(game_10_table_1);
    //generateTimeTable(game_11_table_1);

    generateMainTable();

    $('#ratingOrdering a').on("click", function () {
        var href = $(this).attr('href');
        if ('#timetable' === href) {
            $('#timetable_id').addClass('active');
            $('#table_id').removeClass();
            $('#table_wrapper').hide();
            $('#timetable_wrapper').show();
        } else {
            $('#table_id').addClass('active');
            $('#timetable_id').removeClass();
            $('#timetable_wrapper').hide();
            $('#table_wrapper').show();
        }
    });
}

function init_vars() {
    var hash = window.location.hash;
    if (hash === '#table') {
        $('#table_id').addClass('active');
        $('#timetable_id').removeClass();
        $('#timetable_wrapper').hide();
        $('#table_wrapper').show();
    } else {
        $('#timetable_id').addClass('active');
        $('#table_id').removeClass();
        $('#table_wrapper').hide();
        $('#timetable_wrapper').show();
    }
}


function generateTimeTable (game) {
    var table =
    "<table>" +
        "<tr><td colspan='6'>" + game.table_name + "</td></tr>" +
        "<tr>" +
            "<td>Place</td>" +
            "<td>Team ID</td>" +
            "<td>Player</td>" +
            "<td>Role</td>" +
            "<td>Points</td>" +
            "<td>Extra</td>" +
        "</tr>";

    for (var i = 0; i < 10; i++) {
        table +=
            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + game.player[i].id + "</td>" +
                "<td>" + game.player[i].name + "</td>" +
                "<td>" + game.role[i]+ "</td>" +
                "<td>" + game.points[i]+ "</td>" +
                "<td>" + game.extra[i]+ "</td>" +
            "</tr>";
        game.player[i].points += game.points[i];
        game.player[i].extra += game.extra[i];
        game.player[i].total += game.points[i] + game.extra[i];
    }

    table += "</table>";
    $(game.table_id).append(table);
}

function generateMainTable() {
    var table_all =
    "<table>" +
        "<tr><td colspan='6'>Total</td></tr>" +
        "<tr>" +
            "<td>Place</td>" +
            "<td>Team ID</td>" +
            "<td>Player</td>" +
            "<td>Points</td>" +
            "<td>Extra</td>" +
            "<td>Total</td>" +
        "</tr>";

    var table_a =
    "<table>" +
        "<tr><td colspan='6'>Group A</td></tr>" +
        "<tr>" +
            "<td>Place</td>" +
            "<td>Team ID</td>" +
            "<td>Player</td>" +
            "<td>Points</td>" +
            "<td>Extra</td>" +
            "<td>Total</td>" +
        "</tr>";

    var table_b =
    "<table>" +
        "<tr><td colspan='6'>Group B</td></tr>" +
        "<tr>" +
            "<td>Place</td>" +
            "<td>Team ID</td>" +
            "<td>Player</td>" +
            "<td>Points</td>" +
            "<td>Extra</td>" +
            "<td>Total</td>" +
        "</tr>";

    players_a.sort(function (a, b) {
        return (b.points + b.extra) - (a.points + a.extra);
    });

    players_b.sort(function (a, b) {
        return (b.points + b.extra) - (a.points + a.extra);
    });

    players_all.sort(function (a, b) {
        return (b.points + b.extra) - (a.points + a.extra);
    });

    for (var i = 0; i < 10; i++) {
        table_a +=
            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + players_a[i].id + "</td>" +
                "<td>" + players_a[i].name + "</td>" +
                "<td>" + players_a[i].points + "</td>" +
                "<td>" + players_a[i].extra + "</td>" +
                "<td>" + players_a[i].total + "</td>" +
            "</tr>";
    }

    for (var i = 0; i < 10; i++) {
        table_b +=
            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + players_b[i].id + "</td>" +
                "<td>" + players_b[i].name + "</td>" +
                "<td>" + players_b[i].points+ "</td>" +
                "<td>" + players_b[i].extra+ "</td>" +
                "<td>" + players_b[i].total+ "</td>" +
            "</tr>";
    }

    for (var i = 0; i < 20; i++) {
        table_all +=
            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + players_all[i].id + "</td>" +
                "<td>" + players_all[i].name + "</td>" +
                "<td>" + players_all[i].points+ "</td>" +
                "<td>" + players_all[i].extra+ "</td>" +
                "<td>" + players_all[i].total + "</td>" +
            "</tr>";
    }

    table_a += "</table>";
    table_b += "</table>";
    table_all += "</table>";

    $('#group_a').append(table_a);
    $('#group_b').append(table_b);
    $('#all_stars').append(table_all);
}
