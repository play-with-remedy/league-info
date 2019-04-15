function switchTournaments() {
    // TBA swith for tournaments. 
    // implement JQuery
}
window.onload = function () {
    $('#sceduleOrdering a').on("click", function () {
        var href = $(this).attr('href');
        if ('#planned' === href) {
            $('.old_date').hide();
            $('.future').show();
            $('#planned_tournaments').addClass('active');
            $('#overpast_tournaments').removeClass();
        } else {
            $('.old_date').show();
            $('.future').hide();
            $('#overpast_tournaments').addClass('active');
            $('#planned_tournaments').removeClass();
        }
    });
}