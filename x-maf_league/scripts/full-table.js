const full_table_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/full_table.json";
const PATH_TO_IMAGES = "../../images/users/";

window.onload = function () {
    
    var request = new XMLHttpRequest();
    request.open('GET', full_table_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var players = request.response.players;
        var table = "<h2>All Stars</h2><table>" + buildTableHeader();
        $.each(players, function(index, player) {
            table+= "<tr>" +
                "<td>" + (index + 1) + "</td>" +
                "<td><img src='" + PATH_TO_IMAGES + player.image + "' /></td>" +
                "<td>" + player.name + "</td>" +
                "<td>" + player.tournaments.length + "</td>" +
                "<td>" + getPlayerPoints(player) + getLastPoints(player) + "</td>" +
            "</tr>"
        });

        table += "</table>"
        $(".rating_content").empty().append(table);
    };
}

function buildTableHeader() {
    var h = "<tr class='rating_header'>" +
                "<td></td>" +
                "<td></td>" +
                "<td>Player</td>" +
                "<td>Tournaments</td>" +
                "<td>Score</td>" +
            "</tr>";

    return h;
}

function getPlayerPoints(player) {
    var points = 0;
    $.each(player.tournaments, function(index, tournament) {
        points += tournament.points;
    });

    return points;
}

function getLastPoints(player) {

}