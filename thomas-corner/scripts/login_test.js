$( document ).ready(function() {
    

    
    $('button').on("click", function () {
        if ($('#password').val() === 'redtable') {
            sessionStorage.setItem('player', $('#login').val());
            window.location = 'login_test_2.html'
        }
    });
});