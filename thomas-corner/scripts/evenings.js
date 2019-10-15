const evening_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/evenings.json';

window.onload = function () {
    var request = new XMLHttpRequest();
    request.open('GET', evening_request_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var globalArray = request.response;
        globalArray.forEach(gloabal => {
            var eveningsArray = gloabal.evenings;
            eveningsArray.forEach(evening => {
                var table = start_evening_div_section(evening.number) + "<table class='thomas_archive'>";
                var total = evening.game_total;
                table += build_table_header(total);
                var playersArray = evening.players;
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

                table += "</table>" + end_evening_div_section();

                $('.archive_wrapper h2').empty().after(table);
            });
        });
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

    function start_evening_div_section(id) {
        return '<div class="evening_wrapper">' +
               '<span onclick="toggle_evening(' +  id + ')">Evening ' + id + '</span>' +
                '<div id="ev_' + id + '">'
    }

    function end_evening_div_section() {
        return '</div></div>';
    }
}

function toggle_evening(id){
    $('#ev_' + id).toggle('normal');
}