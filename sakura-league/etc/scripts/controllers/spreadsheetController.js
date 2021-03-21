var spreadsheetApp = angular.module("spreadsheetApp", []);

spreadsheetApp.controller("spreadsheetController", function ($scope) {
    $scope.teamList = json.teams;
    $scope.teamList.forEach(element => {
        let evenings = 0;
        element.players.forEach(player => {
            player.total = player.game_1 + player.game_2 + player.game_3;
            element.total =  element.total ? element.total + player.total : player.total;
            
            if (player.game_1 !== 0) evenings++;
            if (player.game_2 !== 0) evenings++;
            if (player.game_3 !== 0) evenings++;
        });

        element.average = evenings !== 0 ? element.total / evenings : 0;
    });

    $scope.teamList.sort(function (a, b) {
        return b.average - a.average;
    });

    $scope.applySorting = function(param) {
        $scope.teamList.sort(function (a, b) {
            return b[param] - a[param];
        });
    };
});