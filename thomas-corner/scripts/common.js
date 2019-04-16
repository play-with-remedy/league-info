window.onload = function () {
    var requestURL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/rating.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ratingArray = request.response;
        var table = "<table class='thomas_rating'>";
        table += get_table_header();
        ratingArray.forEach(element => {
            table += "<tr>";

            table += "<td>" + element.name + "</td>";

            var game_total = element.sherif_total + element.don_total + element.mafia_total + element.citizen_total;
            table += "<td>" + game_total + "</td>";

            var win_total = element.sherif_win + element.don_win + element.mafia_win + element.citizen_win;
            table += "<td>" + win_total + "</td>";
            
            table += "<td>" + element.plus_points + "</td>";
            table += "<td>" + element.minus_points + "</td>";
            table += "<td>" + element.sherif_total + "</td>";
            table += "<td>" + element.sherif_win + "</td>";
            table += "<td>" + element.don_total + "</td>";
            table += "<td>" + element.don_win + "</td>";
            table += "<td>" + element.mafia_total + "</td>";
            table += "<td>" + element.mafia_win + "</td>";
            table += "<td>" + element.citizen_total + "</td>";
            table += "<td>" + element.citizen_win + "</td>";
            table += "<td>" + element.first_kill + "</td>";
            table += "<td>" + element.best_turn + "</td>";

            var score = (win_total + element.plus_points + element.best_turn).toFixed(2);
            table += "<td>" + score + "</td>";

            if (game_total > 0) {
                var result = (score * win_total / game_total).toFixed(2);
            } else {
                var result = 0;
            }
            table += "<td>" + result + "</td>";
            
            table += "</tr>";
        });
        table += "</table>"; 

        $("#rating_content").append(table);
    }
}

function get_table_header() {
    return "<tr>" +
        "<td>Player</td>" +
        "<td>Games</td>" +
        "<td>Wins</td>" +
        "<td>Additional poiunts</td>" +
        "<td>Penalty points</td>" +
        "<td>Don games</td>" +
        "<td>Don wins</td>" +
        "<td>Sheriff games</td>" +
        "<td>Sherif wins</td>" +
        "<td>Mafia games</td>" +
        "<td>Mafia wins</td>" +
        "<td>Citizen games</td>" +
        "<td>Citizen wins</td>" +
        "<td>First kill</td>" +
        "<td>Best move</td>" +
        "<td>Scores</td>" +
        "<td>Total</td>" +
    "</tr>";
}