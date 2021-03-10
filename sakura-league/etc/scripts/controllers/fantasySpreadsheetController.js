
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
                            score: (teamPlayer.game_1 + teamPlayer.game_2 + teamPlayer.game_3),
                        }
                    );
                }
            });
        });
        $scope.fantasySpreadsheet.push(playerRow);
    });
});