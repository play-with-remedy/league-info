const tournaments_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/tournaments.json";

window.onload = function () {
    var request = new XMLHttpRequest();
    request.open('GET', full_table_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var tournaments = request.response.tournaments;
        var tournaments = "";
        $.each(tournaments, function(index, tournament) {
            tournaments += buildTournament(tournament);
        });

        $(".schedule_content").empty().append(tournaments);
    };
};

function buildTournament(t) {
    var html = "<div class='tournament' style='border-color: " + t.color + ";>" +
                "<div class='tournament_image_wrapper' style='background-image: url(" + t.logo + "'>"
            "</div>" + 
            "<div class='tournament_metadata'>" + 
                "<h3><a href='" + t.vkLink + "' target='_blank'>" + t.title+ "</a></h3>" + 
                 + t.description +
                "<p class='tournament_date'>" + t.date + "</p>" +
            "</div>" +
        "</div>";
    return html;
}