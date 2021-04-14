var spreadsheetApp = angular.module("spreadsheetApp", []);

spreadsheetApp.controller("spreadsheetController", function ($scope) {
    $scope.teamList = json.teams;
    buildTeamTable();
    buildPlayerTable();
    $scope.isTeamList = window.location.hash === '#teams';

    $scope.applySorting = function(param) {
        if ($scope.isTeamList) {
            $scope.teamList.sort(function (a, b) {
                return b[param] - a[param];
            });
        } else {
            $scope.playerList.sort(function (a, b) {
                return b[param] - a[param];
            });
        }
    };

    function buildTeamTable() {
        $scope.teamList.forEach(element => {
            let evenings = 0;
            element.players.forEach(player => {
                player.total = player.game_1 + player.game_2 + player.game_3;
                element.total =  element.total ? element.total + player.total : player.total;

                if (player.game_1 !== 0) evenings++;
                if (player.game_2 !== 0) evenings++;
                if (player.game_3 !== 0) evenings++;
            });

            element.average = evenings !== 0 ? (element.total / evenings).toFixed(3) : 0;
        });

        $scope.teamList.sort(function (a, b) {
            return b.average - a.average;
        });
    }

    function buildPlayerTable() {
        $scope.playerList = [];
        $scope.teamList.forEach(team => {
            team.players.forEach(player => {
                player.total = player.game_1 + player.game_2 + player.game_3;
                player.evenings = 0;
                if (player.game_1 !== 0) player.evenings++;
                if (player.game_2 !== 0) player.evenings++;
                if (player.game_3 !== 0) player.evenings++;
                player.average = player.evenings !== 0 ? (player.total / player.evenings).toFixed(2) : 0;
                $scope.playerList.push(player);
            });
        });

        $scope.playerList.sort(function (a, b) {
            return b.average - a.average;
        });
    }

    $scope.switchTab = function(type) {
        $scope.isTeamList = type === 'teams';
    }
});