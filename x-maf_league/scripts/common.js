function switchTournaments() {
    // TBA swith for tournaments. 
    // implement JQuery
}
window.onload = function () {
    var tournaments = $('.tournament');
    $.each(tournaments, function(index, tournament) {
        var dateString = $(tournament).find('.tournament_date').text();
        var dsplit = dateString.split(".");
        var date = new Date(dsplit[2], dsplit[1]-1, dsplit[0]);
        var curDate = new Date();

        if (Date.parse(curDate) >= Date.parse(date)){
            $(tournament).addClass('old_date');
        } else {
            $(tournament).addClass('future');
        }
    });

    $('#sceduleOrdering a').on("click", function () {
        var href = $(this).attr('href');
        if ('#planned' === href) {
            $('.old_date').hide();
            $('.future').css('display', 'flex');
            $('#planned_tournaments').addClass('active');
            $('#overpast_tournaments').removeClass();
        } else {
            $('.old_date').css('display', 'flex');
            $('.future').hide();
            $('#overpast_tournaments').addClass('active');
            $('#planned_tournaments').removeClass();
        }
    });
}