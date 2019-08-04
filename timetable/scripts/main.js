window.onload = function () {
    var json = getTable();
    var teams = json.teams;
    var table = getTableHeader();
    teams.forEach(function (element, index, array) {
        var players = element.players;
        var points = 0;
        var extra = 0;
        var Ci = 0;
        players.forEach(function (player, index2, array2) {
            points+= player.point;
            extra+= player.extra;
            Ci+= player.Ci;
        });

        var total = points + extra + Ci;
        element.points = points;
        element.extra = extra.toFixed(2);
        element.Ci = Ci;
        element.total = total.toFixed(2);
    });

    teams.sort(function (a, b) {
        return b.total - a.total;
    });

    teams.forEach(function (element, index, array) {
        table += "<tr>" +
                "<td>" + (index + 1) + "</td>" +
                "<td>" + element.name + "</td>" +
                "<td>" + element.points + "</td>" +
                "<td>" + element.extra + "</td>" +
                "<td>" + element.Ci + "</td>" +
                "<td>" + element.total + "</td>" +
            "</tr>";
    });

    table += "</table>";
    $("#all_stars").empty().append(table);
};

function getTableHeader() {
    return "<table id='default_table'>" +
    "<tr>" +
        "<td>#</td>" +
        "<td>Команда</td>" +
        "<td>Победы</td>" +
        "<td>Допы</td>" +
        "<td>Ci</td>" +
        "<td>Сумма</td>" +
    "</tr>";
}