const full_table_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/full_table.json";
const PATH_TO_IMAGES = "../../images/users/";

window.onload = function () {
    
    var request = new XMLHttpRequest();
    request.open('GET', full_table_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var players = request.response.players;
        var table = "<table>";
        $.each(players, function(index, player) {
            table+= "<h2>All Stars</h2><tr>" +
                "<td>" + (index + 1) + "</td>" +
                "<td><img src='" + PATH_TO_IMAGES + player.image + "' /></td>" +
                "<td>" + player.name + "</td>" +
                "<td>" + getPlayerPoints(player) + "</td>" +
            "</tr>"
        });

        table += "</table>"
        $(".rating_content").empty().append(table);
    };
}

function getPlayerPoints(player) {
    var points = 0;
    $.each(player.tournaments, function(index, tournament) {
        points += tournament.points;
    });

    return points;
}