function switchTournaments() {
    // TBA swith for tournaments. 
    // implement JQuery
}
window.onload = function () {
    $('#sceduleOrdering a').on("click", function () {
        var href = $(this).attr('href');
        if ('#planned' === href) {
            $('.old_date').hide();
        } else {
            $('.old_date').show();
        }
    });
}