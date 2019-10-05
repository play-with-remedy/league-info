const evening_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/evening_5.json';

window.onload = function () {
    var request = new XMLHttpRequest();
    request.open('GET', evening_request_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var table = "<table class='thomas_archive'>"
        var eveningArray = request.response;
        eveningArray.forEach(evenings => {
            var total = evenings.evening.game_total;
            table += build_table_header(total);
            var playersArray = evenings.evening.players;
            playersArray.forEach(player => {
                table += "<tr><td class='right_border'>" + player.nickname + "</td>";
                var total_points = 0;
                var gamesArray = player.games;
                gamesArray.forEach(game => {
                    if (game.points.game > 0){
                        var total_points_per_game = game.points.role + game.points.game + game.points.player;
                        table += "<td class='left_border " + game.role + "'>" + game.points.role + "</td>" +
                                "<td>" + game.points.game + "</td>" +
                                "<td class='right_border'>" + game.points.player + "</td>";

                        total_points += total_points_per_game;
                    } else {
                        table += "<td colspan='3' class='left_border right_border'>-</td>"
                    }
                });

                table += "<td class='left_border'>" + total_points.toFixed(1) + "</td>";
            });
        });

        table += "</table>"

        $('#ev_5').empty().append(table);
    };

    function build_table_header(total) {
        var header = "<tr class='table_header'>" +
            "<td>Player</td>";

            for(var i = 1; i <= total; i++) {
                header += "<td colspan='3'>Game " + i + "</td>";
            }

            header += "<td>Total</td></tr>" +
        "</tr>";

        return header;
    }
}

function toggle_evening(){
    $('#ev_5').toggle('normal');
}