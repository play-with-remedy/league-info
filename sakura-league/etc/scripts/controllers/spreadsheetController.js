var spreadsheetApp = angular.module("spreadsheetApp", []);

spreadsheetApp.controller("spreadsheetController", function ($scope) {
    $scope.teamList = json.teams;
    $scope.teamList.forEach(element => {
        element.players.forEach(player => {
            player.total = player.game_1 + player.game_2 + player.game_3;
            element.total =  element.total ? element.total + player.total : player.total;
        });
    });
});