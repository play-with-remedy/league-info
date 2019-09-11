const season_rating_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/season_rating.json';
const all_time_rating_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/all_time_rating.json';

const season_game_counter = 0;
const total_game_counter = 53;
var init_game_counter;
const update = '04.08';

var season_table;
var all_time_table;

var totalRatingArray;
var seasonRatingArray;

var currentPageType;

window.onload = function () {
    
    init_vars();

    $('#ratingOrdering a').on("click", function () {
        var href = $(this).attr('href');
        if ('#third_season' === href) {
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
            $('.season_left').show();
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
            $('.season_left').hide();
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
        $('.season_left').hide();
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
        element.score = (element.game_points + element.role_points + element.players_points + element.best_turn).toFixed(3);
        if (element.game_total > 0) {
            var result = (element.score * element.win_total / element.game_total).toFixed(3);
        } else {
            var result = 0;
        }
        element.result = result;

        if (element.game_total > 9) {
        element.percent = (element.win_total * 100 / element.game_total + element.best_turn).toFixed(2);
        } else {
            element.percent = 0;
        }
    });

    build_ordered_table(ratingArray, ordering);

    return buildHTMLTable(ratingArray);
}

function build_ordered_table(ratingArray, ordering) {
    switch(ordering) {
        case 'games':
            ratingArray.sort(function (a, b) {
                return b.game_total - a.game_total;
            });
            break;
        case 'wins':
            ratingArray.sort(function (a, b) {
                return b.win_total - a.win_total;
            });
            break;
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
        case 'pen_points':
            ratingArray.sort(function (a, b) {
                return b.minus_points - a.minus_points;
            });
            break;
        case 'sher_games':
            ratingArray.sort(function (a, b) {
                return b.sherif_total - a.sherif_total;
            });
            break;
        case 'sher_wins':
            ratingArray.sort(function (a, b) {
                return b.sherif_win - a.sherif_win;
            });
            break;
        case 'don_games':
            ratingArray.sort(function (a, b) {
                return b.don_total - a.don_total;
            });
            break;
        case 'don_wins':
            ratingArray.sort(function (a, b) {
                return b.don_win - a.don_win;
            });
            break;
        case 'maf_games':
            ratingArray.sort(function (a, b) {
                return b.mafia_total - a.mafia_total;
            });
            break;
        case 'maf_wins':
            ratingArray.sort(function (a, b) {
                return b.mafia_win - a.mafia_win;
            });
            break;
        case 'cit_games':
            ratingArray.sort(function (a, b) {
                return b.citizen_total - a.citizen_total;
            });
            break;
        case 'cit_wins':
            ratingArray.sort(function (a, b) {
                return b.citizen_win - a.citizen_win;
            });
            break;
        case 'kils':
            ratingArray.sort(function (a, b) {
                return b.first_kill - a.first_kill;
            });
            break;
        case 'best_moves':
            ratingArray.sort(function (a, b) {
                return b.best_turn - a.best_turn;
            });
            break;
        case 'scores':
            ratingArray.sort(function (a, b) {
                return b.score - a.score;
            });
            break;
    }
}

function buildHTMLTable(ratingArray) {
    var table = "<table class='thomas_rating'>";
    var i = 1;
    table += get_table_header();
    ratingArray.forEach(function (element, index, array) {
        if (!element.hide) {
            table += "<tr>";
            table += "<td>" + (index + i) + "</td>";
            table += "<td>" + element.name + "</td>";
            table += "<td>" + element.game_total + "</td>";
            table += "<td>" + element.win_total + "</td>";
            table += "<td>" + element.role_points + "</td>";
            table += "<td>" + element.game_points + "</td>";
            table += "<td>" + element.player_points + "</td>";
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
        } else {
            i--;
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
        "<td onclick=orderBy('games');>Games</td>" +
        "<td onclick=orderBy('wins');>Wins</td>" +
        "<td onclick=orderBy('role_points');>Role poiunts</td>" +
        "<td onclick=orderBy('game_points');>Game points</td>" +
        "<td onclick=orderBy('player_points');>Player points</td>" +
        "<td onclick=orderBy('sher_games');>Sheriff games</td>" +
        "<td onclick=orderBy('sher_wins');>Sheriff wins</td>" +
        "<td onclick=orderBy('don_games');>Don games</td>" +
        "<td onclick=orderBy('don_wins');>Don wins</td>" +
        "<td onclick=orderBy('maf_games');>Mafia games</td>" +
        "<td onclick=orderBy('maf_wins');>Mafia wins</td>" +
        "<td onclick=orderBy('cit_games');>Citizen games</td>" +
        "<td onclick=orderBy('cit_wins');>Citizen wins</td>" +
        "<td onclick=orderBy('kils');>First kill</td>" +
        "<td onclick=orderBy('best_moves');>Best move</td>" +
        "<td onclick=orderBy('scores');>Scores</td>" +
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
