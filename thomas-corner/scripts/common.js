const season_rating_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/season_rating.json';
const all_time_rating_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/all_time_rating.json';

const season_game_counter = 19;
const total_game_counter = 40;
var init_game_counter;
const update = '06.07';

var season_table;
var all_time_table;

var totalRatingArray;
var seasonRatingArray;

var currentPageType;

window.onload = function () {
    
    init_vars();

    $('#ratingOrdering a').on("click", function () {
        var href = $(this).attr('href');
        if ('#second_season' === href) {
            if (jQuery.type(season_table) === "undefined") {
                init_game_counter = season_game_counter;
                build_season_rating();
            }
            $('#season').addClass('active');
            $('#alltime').removeClass();
            $("#rating_content").empty();
            $("#rating_content").append(season_table);
            $("#game_count").html(season_game_counter);
            currentPageType = 'season';
        } else {
            if (jQuery.type(all_time_table) === "undefined") {
                init_game_counter = total_game_counter;
                build_total_rating();
            }
            $('#alltime').addClass('active');
            $('#season').removeClass();
            $("#rating_content").empty();
            $("#rating_content").append(all_time_table);
            $("#game_count").html(total_game_counter);
            currentPageType = 'total';
        }
    });
}

function init_vars() {
    var hash = window.location.hash;
    if (hash === '#all_time') {
        build_total_rating();
        $('#alltime').addClass('active');
        init_game_counter = total_game_counter;
        currentPageType = 'total';
    } else {
        build_season_rating();
        $('#season').addClass('active');
        init_game_counter = season_game_counter;
        currentPageType = 'season';
    }
}

function build_season_rating() {
    var request = new XMLHttpRequest();
    request.open('GET', season_rating_request_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ratingArray = request.response;
        saveRatingArray(ratingArray, 'season');
        season_table = build_table(ratingArray, 'result');
        $("#rating_content").append(season_table);
    };
}

function build_total_rating() {
    var request = new XMLHttpRequest();
    request.open('GET', all_time_rating_request_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var ratingArray = request.response;
        saveRatingArray(ratingArray, 'total');
        all_time_table = build_table(ratingArray, 'percents');
        $("#rating_content").append(all_time_table);
    };
}

function build_table(ratingArray, ordering) {
    ratingArray.forEach(element => {
        element.win_total = element.sherif_win + element.don_win + element.mafia_win + element.citizen_win;
        element.game_total = element.sherif_total + element.don_total + element.mafia_total + element.citizen_total;
        element.score = (element.win_total + element.plus_points - element.minus_points+ element.best_turn).toFixed(3);
        if (element.game_total > 0) {
            var result = (element.score * element.win_total / element.game_total).toFixed(3);
        } else {
            var result = 0;
        }
        element.result = result;

        if (element.game_total > 9) {
        element.percent = (element.win_total * 100 / element.game_total 
                            + element.plus_points - element.minus_points + element.best_turn).toFixed(2);
        } else {
            element.percent = 0;
        }
    });

    build_ordered_table(ratingArray, ordering);

    return buildHTMLTable(ratingArray);
}

function build_ordered_table(ratingArray, ordering) {
    switch(ordering) {
        case 'result':
            ratingArray.sort(function (a, b) {
                return b.result - a.result;
            });
            break;
        case 'percents':
            ratingArray.sort(function (a, b) {
                return b.percent - a.percent;
            });
            break;
        case 'add_points':
        ratingArray.sort(function (a, b) {
            return b.plus_points - a.plus_points;
        });
        break;
    }
}

function buildHTMLTable(ratingArray) {
    var table = "<table class='thomas_rating'>";
    table += get_table_header();
    ratingArray.forEach(function (element, index, array) {
        if (!element.hide) {
            table += "<tr>";
            table += "<td>" + (index + 1) + "</td>";
            table += "<td>" + element.name + "</td>";
            table += "<td>" + element.game_total + "</td>";
            table += "<td>" + element.win_total + "</td>";
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
            table += "<td>" + element.score + "</td>";
            table += "<td>" + element.result + "</td>";
            if (element.percent == 0) {
                table += "<td>-</td>";
            } else {
                table += "<td>" + element.percent + "</td>";
            }
            table += "</tr>";
        }
    });
    table += "<tr>" +
        "<td colspan='10'>Дата обновления - " + update + "</td>" +
        "<td colspan='9'>Количество игр - <span id='game_count'>" + init_game_counter + "</span</td>" +
    "</tr></table>";

    return table;
}

function get_table_header() {
    return "<tr class='table_header'>" +
        "<td>Place</td>" +
        "<td>Player</td>" +
        "<td>Games</td>" +
        "<td>Wins</td>" +
        "<td onclick=orderBy('add_points');>Additional poiunts</td>" +
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
        "<td onclick=orderBy('result');>Total</td>" +
        "<td onclick=orderBy('percents');>Percent</td>" +
    "</tr>";
}

function saveRatingArray(array, type) {
    switch(type) {
        case 'total':
            totalRatingArray = array;
            break;
        case 'season':
            seasonRatingArray = array;
            break;
    }
}

function orderBy(param) {
    var array = currentPageType === 'season' ? seasonRatingArray : totalRatingArray;
    $("#rating_content").empty();
    $("#rating_content").append(build_table(array, param));
}
