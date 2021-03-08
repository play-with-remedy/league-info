var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasyController", function ($scope) {
    $scope.playerList = [];
    $scope.totalScore = 28000;
    let teamCounter = 0;
    let localStoragePlayers = JSON.parse(localStorage.getItem("players"));
    if (localStoragePlayers) {
        $scope.playerList = localStoragePlayers;
        $scope.playerList.forEach(player => {
            if (player.isSelected) {
                $scope.totalScore -= parseInt(player.rating.replace(/ /g,''));
                teamCounter++;
            }
        });
    } else {
        json.teams.forEach(team => {
            team.players.forEach(player => {
                $scope.playerList.push(player);
            });
        });
    }

    $scope.playerList.sort(function (a, b) {
        return parseInt(b.rating.replace(/ /g,'')) - parseInt(a.rating.replace(/ /g,''));
    });
    
    $scope.onImageClick = function (player) {
        if (!player.isUnavailable) {
            if (player.isSelected) {
                player.isSelected = false;
                $scope.totalScore += parseInt(player.rating.replace(/ /g,''));
                teamCounter--;
            } else {
                player.isSelected = true;
                $scope.totalScore -= parseInt(player.rating.replace(/ /g,''));
                teamCounter++;
            }

            resetLocalStorage();
        }
    };

    $scope.removePlayerFromTeam = function (player) {
        player.isSelected = false;
        $scope.totalScore += parseInt(player.rating.replace(/ /g,''));
        teamCounter--;
        resetLocalStorage();
    }

    function resetLocalStorage () {
        $scope.playerList.forEach(player => {
            if ((parseInt(player.rating.replace(/ /g,'')) > $scope.totalScore || teamCounter === 4) && !player.isSelected) {
                player.isUnavailable = true;
            } else {
                player.isUnavailable = false;
            }
        });

        localStorage.setItem('players', JSON.stringify($scope.playerList));
    }
});