
var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasySpreadsheetController", function ($scope) {
    const { players } = fantasy;
    const { teams } = json;

    $scope.fantasySpreadsheet = [];

    players.forEach(player => {
        const playerRow = { name: player.name, team: [], evenings: 0, total: 0, average: 0 };
        teams.forEach(team => {
            team.players.forEach(teamPlayer => {
                if (player.team.includes(teamPlayer.nickname)) {
                    const team = {
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
            playerRow.average = playerRow.total / playerRow.evenings;
        }

        playerRow.team.sort(function (a, b) {
            return parseInt(b.rating.replace(/ /g,'')) - parseInt(a.rating.replace(/ /g,''));
        });
        $scope.fantasySpreadsheet.push(playerRow);
    });
});