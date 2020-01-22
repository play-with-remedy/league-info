window.onload = function () {
    var table = '<table class="rt_temp_table" cellspacing="3" cellpadding="5">' +
                    '<tr class="table_header">' +
                        '<td>#</td>' +
                        '<td>Team</td>' +
                        '<td>Players</td>' +
                        '<td>Round 1</td>' +
                        '<td>Round 2</td>' +
                        '<td>Round 3</td>' +
                        '<td>Round 4</td>' +
                        '<td>Round 5</td>' +
                        '<td>Round 6</td>' +
                        '<td>Round 7</td>' +
                        '<td>Round 8</td>' +
                        '<td>Round 9</td>' +
                        '<td>Round 10</td>' +
                        '<td>Total Player</td>' +
                        '<td>Total Team</td>' +
                    '</tr>';
    
    var teams = results.teams;
    teams.forEach(function (team, index) {
        for (var circle = 0; circle < 3; circle++) {
            if (circle == 0) {
                var row =  '<tr><td rowspan="3">' + (index + 1) + '</td><td rowspan="3" class="team_name">' + team.name + '</td>'
            } else {
                row += '<tr>';
            }

            row += '<td>' + team.players[circle].nickname + '</td>';

            var games = team.games;
            team.total = 0;

            games.forEach(function (game) {
                if (game.player_id == circle) {
                    if (game.score != 0) {
                        row += '<td class="points">' + game.score + '</td>';
                    } else {
                        row += '<td></td>';     
                    }
                    team.players[circle].total += game.score;
                } else {
                    row += '<td></td>';
                }
                team.total += game.score;
            });

            row += '<td class="points">' + team.players[circle].total + '</td>';

            if (circle ==0) {
                row += '<td rowspan="3" class="points">' + team.total + '</td>';
            } else {
                row += '</tr>';
            }
        }
        table += row;
    });

    table += '</table>';

    $('.table').append(table);
}