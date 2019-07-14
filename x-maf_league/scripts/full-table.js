const full_table_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/full_table.json";

window.onload = function () {
    
    var request = new XMLHttpRequest();
    request.open('GET', full_table_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var response = request.response;
    };
}

function create_table_header() {
    return "<tr>" +
        "<td>Player</td>" +
        "<td>Games</td>" +
        "<td>Wins</td>" +
        "<td>Additional poiunts</td>" +
        "<td>Penalty points</td>" +
        "<td>Sheriff games</td>" +
        "<td>Sheriff wins</td>" +
        "<td>Don games</td>" +
        "<td>Don wins</td>" +
        "<td>Mafia games</td>" +
        "<td>Mafia wins</td>" +
        "<td>Citizen games</td>" +
        "<td>Citizen wins</td>" +
        "<td>First kill</td>" +
        "<td>Best move</td>" +
        "<td>Scores</td>" +
        "<td id='total_score'>Total</td>" +
        "<td>Percent</td>" +
    "</tr>";
}