
var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasySpreadsheetController", function ($scope) {
    const { players } = fantasy;
    const { teams } = json;

    $scope.fantasySpreadsheet = [];

    players.forEach(player => {
        const playerRow = { name: player.name, team: [] };
        teams.forEach(team => {
            team.players.forEach(teamPlayer => {
                if (player.team.includes(teamPlayer.nickname)) {
                    playerRow.team.push(
                        { 
                            imageUrl: teamPlayer.imageUrl,
                            rating: teamPlayer.rating,
                            score: (teamPlayer.game_1 + teamPlayer.game_2 + teamPlayer.game_3),
                        }
                    );
                }
            });
        });
        playerRow.team.sort(function (a, b) {
            return parseInt(b.rating.replace(/ /g,'')) - parseInt(a.rating.replace(/ /g,''));
        });
        $scope.fantasySpreadsheet.push(playerRow);
    });
});