const evening_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/evening_5.json';

window.onload = function () {
    var request = new XMLHttpRequest();
    request.open('GET', evening_request_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var table = "<table class='thomas_rating'>"
        var eveningArray = request.response;
        eveningArray.forEach(evenings => {
            var playersArray = evenings.evening.players;
            playersArray.forEach(player => {
                table += "<tr><td>" + player.nickname + "</td>";
                var gamesArray = player.games;
                gamesArray.forEach(game => {
                    table += "<td>" + game.points.role + "</td>" +
                             "<td>" + game.points.game + "</td>" +
                             "<td>" + game.points.player + "</td>";
                });
            });
        });

        table += "</table>"

        $('#ev_5').empty().append(table);
    };

    function build_table_header() {
        return "<tr class='table_header'>" +
            "<td>Player</td>" +
        "</tr>";
    }
}