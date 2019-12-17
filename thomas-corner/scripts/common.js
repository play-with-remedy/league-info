const season_rating_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/season_rating.json';
const all_time_rating_request_URL = 'https://x-maf-league.github.io/league-info/thomas-corner/files/all_time_rating.json';

const season_game_counter = 42;
const total_game_counter = 53;
var init_game_counter;
var limit;
const update = '17.12';

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
        init_game_counter = total_game_counter;
        currentPageType = 'total';
        $('.season_left').hide();
    } else {
        build_season_rating();
        init_game_counter = season_game_counter;
        currentPageType = 'season';
    }
    limit = (init_game_counter * 0.4).toFixed(0);
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
    var game_limit = (init_game_counter * 0.4).toFixed(0);
    var valid_players = [];
    var invalid_players = [];
    ratingArray.forEach(element => {
        element.win_total = element.sherif_win + element.don_win + element.mafia_win + element.citizen_win;
        element.game_total = element.sherif_total + element.don_total + element.mafia_total + element.citizen_total;
        element.score = (element.game_points + element.role_points + element.players_points + element.best_turn).toFixed(3);
        if (element.game_total > 0) {
            var result = (element.score / element.game_total).toFixed(3);
        } else {
            var result = 0;
        }

        if (element.sherif_total > 0 && element.sherif_win > 0) {
            element.sherif_percent = (element.sherif_win * 100 / element.sherif_total).toFixed(1);
        } else {
            element.sherif_percent = 0;
        }

        if (element.don_total > 0 && element.don_win > 0) {
            element.don_percent = (element.don_win * 100 / element.don_total).toFixed(1);
        } else {
            element.don_percent = 0;
        }

        if (element.mafia_total > 0 && element.mafia_win > 0) {
            element.mafia_percent = (element.mafia_win * 100 / element.mafia_total).toFixed(1);
        } else {
            element.mafia_percent = 0;
        }

        if (element.citizen_total > 0 && element.citizen_win > 0) {
            element.citizen_percent = (element.citizen_win * 100 / element.citizen_total).toFixed(1);
        } else {
            element.citizen_percent = 0;
        }

        element.result = result;

        if (element.game_total < game_limit) {
            invalid_players.push(element);
        } else {
            element.style = 'valid_player';
            valid_players.push(element);
        }
    });

    build_ordered_table(valid_players, ordering);
    build_ordered_table(invalid_players, ordering);

    ratingArray = valid_players.concat(invalid_players);

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
                return b.sherif_percent - a.sherif_percent;
            });
            break;
        case 'don_games':
            ratingArray.sort(function (a, b) {
                return b.don_total - a.don_total;
            });
            break;
        case 'don_wins':
            ratingArray.sort(function (a, b) {
                return b.don_percent - a.don_percent;
            });
            break;
        case 'maf_games':
            ratingArray.sort(function (a, b) {
                return b.mafia_total - a.mafia_total;
            });
            break;
        case 'maf_wins':
            ratingArray.sort(function (a, b) {
                return b.mafia_percent - a.mafia_percent;
            });
            break;
        case 'cit_games':
            ratingArray.sort(function (a, b) {
                return b.citizen_total - a.citizen_total;
            });
            break;
        case 'cit_wins':
            ratingArray.sort(function (a, b) {
                return b.citizen_percent - a.citizen_percent;
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
        case 'role_points':
            ratingArray.sort(function (a, b) {
                return b.role_points - a.role_points;
            });
            break;
        case 'game_points':
            ratingArray.sort(function (a, b) {
                return b.game_points - a.game_points;
            });
        break;
        case 'players_points':
            ratingArray.sort(function (a, b) {
                return b.players_points - a.players_points;
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
            if (element.style) {
                table += "<tr class='" + element.style + "'>";
            } else {
                table += "<tr>";
            }
            table += "<td>" + (index + i) + "</td>";
            table += "<td>" + element.name + "</td>";
            table += "<td>" + element.game_total + "</td>";
            table += "<td>" + element.win_total + "</td>";
            table += "<td>" + element.role_points + "</td>";
            table += "<td>" + element.game_points + "</td>";
            table += "<td>" + element.players_points + "</td>";
            table += "<td>" + element.sherif_total + "</td>";
            table += "<td>" + element.sherif_percent + "</td>";
            table += "<td>" + element.don_total + "</td>";
            table += "<td>" + element.don_percent + "</td>";
            table += "<td>" + element.mafia_total + "</td>";
            table += "<td>" + element.mafia_percent + "</td>";
            table += "<td>" + element.citizen_total + "</td>";
            table += "<td>" + element.citizen_percent + "</td>";
            table += "<td>" + element.first_kill + "</td>";
            table += "<td>" + element.best_turn + "</td>";
            table += "<td>" + element.score + "</td>";
            table += "<td>" + element.result + "</td>";
            table += "</tr>";
        } else {
            i--;
        }
    });
    table += "<tr>" +
        "<td colspan='6'>Дата обновления - " + update + "</td>" +
        "<td colspan='7'>Количество игр - <span id='game_count'>" + init_game_counter + "</span</td>" +
        "<td colspan='6'>Количество игр для учета в рейтинге - <span id='game_count'>" + (init_game_counter * 0.4).toFixed(0) + "</span</td>" +
    "</tr></table>";

    return table;
}

function get_table_header() {
    return "<tr class='table_header'>" +
        "<td>Place</td>" +
        "<td>Player</td>" +
        "<td onclick=orderBy('games');>Games</td>" +
        "<td onclick=orderBy('wins');>Wins</td>" +
        "<td onclick=orderBy('role_points');>Role points</td>" +
        "<td onclick=orderBy('game_points');>Game points</td>" +
        "<td onclick=orderBy('players_points');>Player points</td>" +
        "<td onclick=orderBy('sher_games');>Sheriff games</td>" +
        "<td onclick=orderBy('sher_wins');>Sheriff wins, %</td>" +
        "<td onclick=orderBy('don_games');>Don games</td>" +
        "<td onclick=orderBy('don_wins');>Don wins, %</td>" +
        "<td onclick=orderBy('maf_games');>Mafia games</td>" +
        "<td onclick=orderBy('maf_wins');>Mafia wins, %</td>" +
        "<td onclick=orderBy('cit_games');>Citizen games</td>" +
        "<td onclick=orderBy('cit_wins');>Citizen wins, %</td>" +
        "<td onclick=orderBy('kils');>First kill</td>" +
        "<td onclick=orderBy('best_moves');>Best move</td>" +
        "<td onclick=orderBy('scores');>Scores</td>" +
        "<td onclick=orderBy('result');>Total</td>" +
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
