var fantasyApp = angular.module("fantasyApp", []);

fantasyApp.controller("fantasyController", function ($scope) {
    $scope.playerList = [];
    $scope.totalScore = 20000;
    let teamCounter = 0;
    json.teams.forEach(team => {
        team.players.forEach(player => {
            $scope.playerList.push(player);
        });
    });

    var compare = madness();
    $scope.playerList.sort(compare);
    
    $scope.onImageClick = function (player) {
        if (player.isSelected) {
            player.isSelected = false;
            $scope.totalScore += player.rating;
            teamCounter--;
        } else {
            player.isSelected = true;
            $scope.totalScore -= player.rating;
            teamCounter++;
        }

        $scope.playerList.forEach(player => {
            if ((player.rating > $scope.totalScore || teamCounter === 4) && !player.isSelected) {
                player.isUnavailable = true;
            } else {
                player.isUnavailable = false;
            }
        });
    };

    function putToCache(elem, cache){
        if(cache.indexOf(elem) != -1){
            return;
        }
        var i = Math.floor(Math.random()*(cache.length + 1));
        cache.splice(i, 0, elem);
    }
    
    function madness(){
        var cache = [];
        return function(a, b){
            putToCache(a, cache);
            putToCache(b, cache);
            return cache.indexOf(b) - cache.indexOf(a);
        }
    }
});