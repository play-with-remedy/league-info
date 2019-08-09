const tournaments_request_URL = "https://x-maf-league.github.io/league-info/x-maf_league/files/tournaments.json";

var pl_tours = [];
var ov_tours = [];

window.onload = function () {
    var request = new XMLHttpRequest();
    request.open('GET', tournaments_request_URL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var tournaments_array = request.response.tournaments;
        var tournaments = "";
        $.each(tournaments_array, function(index, tournament) {
            if (tournament.title) {
                sortTable(tournament);
            }
        });

        orderTours();
        Array.prototype.push.apply(pl_tours, ov_tours);

        $.each(pl_tours, function(index, tournament) {
            tournaments += buildTournament(tournament);
        });

        $("#schedule_content").empty().append(tournaments);
        var hash = window.location.hash;
        initActiveTab(hash);
    };

    $('#sceduleOrdering a').on("click", function () {
        var href = $(this).attr('href');
        initActiveTab(href);
    });
};

function initActiveTab(hash) {
    if (hash === '#planned') {
        $('.old_date').hide();
        $('.future').css('display', 'flex');
        $('#planned_tournaments').addClass('active');
        $('#overpast_tournaments').removeClass();
    } else {
        $('.old_date').css('display', 'flex');
        $('.future').hide();
        $('#overpast_tournaments').addClass('active');
        $('#planned_tournaments').removeClass();
    }
}

function buildTournament(t) {
    var html = "<div class='tournament " + t.dateClass + "' style='border-color: " + t.color + ";'>" +
                "<div class='tournament_image_wrapper' style='background-image: url(" + t.logo + ")'>" +
            "</div>" + 
            "<div class='tournament_metadata'>" + 
                "<h3><a href='" + t.vkLink + "' target='_blank'>" + t.title+ "</a></h3>" + 
                t.description +
                "<p class='tournament_date'>" + t.date + "</p>" +
            "</div>" +
        "</div>";
    return html;
}

function sortTable(tournament) {
    var dsplit = tournament.date.split(".");
    var date = new Date(dsplit[2], dsplit[1]-1, dsplit[0]);
    tournament.p_date = Date.parse(date);

    if (Date.parse(new Date()) >= tournament.p_date){
        tournament.dateClass = 'old_date';
        ov_tours.push(tournament);
    } else {
        tournament.dateClass = 'future';
        pl_tours.push(tournament);
    }
}

function orderTours() {
    pl_tours.sort(function (a, b) {
        return a.p_date - b.p_date;
    });

    ov_tours.sort(function (a, b) {
        return b.p_date - a.p_date;
    });
}