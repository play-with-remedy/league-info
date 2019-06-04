const full_table_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/full-table.json";

window.onload = function () {
    
    var request = new XMLHttpRequest();
    request.open('GET', full_table_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        alert(request.response);
    };
}