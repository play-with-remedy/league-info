var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasyController", function ($scope) {
    $scope.totalScore = 8000;
    $scope.playerList = json.players;
    
    $scope.onImageClick = function (player) {
        if (player.isSelected) {
            player.isSelected = false;
            $scope.totalScore += player.rating;
        } else {
            player.isSelected = true;
            $scope.totalScore -= player.rating;
        }

        $scope.playerList.forEach(element => {
            if (element.rating > $scope.totalScore && !element.isSelected) {
                element.isUnavailable = true;
            } else {
                element.isUnavailable = false;
            }
        });
    }
});