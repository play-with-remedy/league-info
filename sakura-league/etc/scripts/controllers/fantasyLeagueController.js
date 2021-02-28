var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasyController", function ($scope) {
    $scope.playerList = [];
    $scope.totalScore = 8000;
    json.teams.forEach(team => {
        team.players.forEach(player => {
            $scope.playerList.push(player);
        });
    });
    
    $scope.onImageClick = function (player) {
        if (player.isSelected) {
            player.isSelected = false;
            $scope.totalScore += player.rating;
        } else {
            player.isSelected = true;
            $scope.totalScore -= player.rating;
        }

        $scope.playerList.forEach(player => {
            if (player.rating > $scope.totalScore && !player.isSelected) {
                player.isUnavailable = true;
            } else {
                player.isUnavailable = false;
            }
        });
    }
});