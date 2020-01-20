window.onload = function () {
    var table = '<table class="rt_temp_table">' +
                    '<tr>' +
                        '<td>#</td>' +
                        '<td>Team</td>' +
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
                        '<td>Total</td>' +
                    '</tr>';
    
    var teams = results.teams;
    teams.forEach(function (team, index) {
        var row =  '<tr><td>' + (index + 1) + '</td><td>' + team.name + '</td>';
        var games = team.games;

        team.total = 0;
        games.forEach(function (game) {
            team.total += game.score;
            row += '<td>' + game.score + '</td>';
        });

        row += '<td>' + team.total + '</td></tr>';
        table += row;
    });

    table += '</table>';

    $('.table').append(table);
}