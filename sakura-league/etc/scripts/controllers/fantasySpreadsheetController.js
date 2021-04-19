
var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasySpreadsheetController", function ($scope) {
    const { players } = fantasy;
    const { teams } = json;

    let fantasySpreadsheet = [];
    $scope.filteredFantasySpreadsheet = [];

    players.forEach(player => {
        const playerRow = { name: player.name, team: [], evenings: 0, total: 0, average: 0 };
        teams.forEach(team => {
            team.players.forEach(teamPlayer => {
                if (player.team.includes(teamPlayer.nickname)) {
                    const team = {
                        name: teamPlayer.nickname,
                        imageUrl: teamPlayer.imageUrl,
                        rating: teamPlayer.rating,
                        score: (teamPlayer.game_1 + teamPlayer.game_2 + teamPlayer.game_3),
                    };

                    let evenings = 0;
                    if (teamPlayer.game_1 !== 0)  evenings++;
                    if (teamPlayer.game_2 !== 0)  evenings++;
                    if (teamPlayer.game_3 !== 0)  evenings++;

                    team.evenings = evenings;

                    playerRow.team.push(team);
                }
            });
        });

        for (let i = 0; i < 4; i++) {
            playerRow.total += playerRow.team[i].score;
            playerRow.evenings += playerRow.team[i].evenings;
        }

        if (playerRow.evenings !== 0) {
            playerRow.average = (playerRow.total / playerRow.evenings).toFixed(3);
        }

        playerRow.team.sort(function (a, b) {
            return parseInt(b.rating.replace(/ /g,'')) - parseInt(a.rating.replace(/ /g,''));
        });
        fantasySpreadsheet.push(playerRow);
        $scope.filteredFantasySpreadsheet = fantasySpreadsheet;
    });

    calculateBestTeam();

    $scope.filteredFantasySpreadsheet.sort(function (a, b) {
        return b.average - a.average;
    });

    $scope.applyFilter = function(name) {
        $scope.filteredFantasySpreadsheet = [];
        $scope.filteredBy = name;
        fantasySpreadsheet.forEach(player => {
            player.team.forEach(team => {
                if (team.name === name) {
                    $scope.filteredFantasySpreadsheet.push(player);
                    return;
                }
            });
        });

        $scope.filteredFantasySpreadsheet.length;
    };

    $scope.clearFilter = function() {
        $scope.filteredFantasySpreadsheet = fantasySpreadsheet;
        $scope.filteredBy = '';
    };

    $scope.applySorting = function(param) {
        $scope.filteredFantasySpreadsheet.sort(function (a, b) {
            return b[param] - a[param];
        });
    };

    function calculateBestTeam() {
        let playerFantasyList = [];
        let sum = 28000;
        teams.forEach(team => {
            team.players.forEach(player => {
                player.total = player.game_1 + player.game_2 + player.game_3;
                player.evenings = 0;
                if (player.game_1 !== 0) player.evenings++;
                if (player.game_2 !== 0) player.evenings++;
                if (player.game_3 !== 0) player.evenings++;
                player.average = player.evenings !== 0 ? (player.total / player.evenings).toFixed(2) : 0;
                playerFantasyList.push(player);
            });
        });
        playerFantasyList.sort(function (a, b) {
            return b.average - a.average;
        });

        $scope.mvpList = [];
        $scope.mvpListTotal = 0;
        let mvpListevenings = 0;
        playerFantasyList.forEach(player => {
            const rating = parseInt(player.rating.replace(/ /g,''));
            if ((sum - rating) >= 0) {
                sum -= rating;
                $scope.mvpList.push(player);
                $scope.mvpListTotal += player.total;
                mvpListevenings += player.evenings;
            }
        });

        $scope.mvpListAverage = $scope.mvpListTotal / mvpListevenings;
    }
});