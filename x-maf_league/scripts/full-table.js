const full_table_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/full_table.json";

window.onload = function () {
    
    var request = new XMLHttpRequest();
    request.open('GET', full_table_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var response = request.response;
        var table = "<table>";
        $.each(response, function(index, player) {
            table+= "<tr>" +
                "<td>" + player.name + "</td>" +
            "</tr>"
        });

        table += "</table>"
        $(".full_rating_content").empty().append(table);
    };
}

function create_table_header() {
    
}