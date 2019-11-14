window.onload = function () {
    const player = sessionStorage.getItem('player');
    if (player) {
        $('#player').text('Привет, ' + player);
        sessionStorage.clear();
    } else {
        $('#player').text('Пшел вон, Пес!');
    }
};