$(document).ready(function() {

    const MAX_SUM = 29000;
    let array = {};
    let sum = 0;

    $('.player-wrapper').click(function(event) {
        if (!event.currentTarget.classList.contains("no-select")) {
            const children = event.currentTarget.children;
            const pName = children[1].innerText;
            const pCost = children[2].innerText.replace(" ", "");

            
            event.currentTarget.classList.toggle("selected");
            if (event.currentTarget.classList.contains("selected")) {
                array[pName] = { name: pName, cost: pCost};
                sum += parseInt(pCost);
                $('.user-points').text(sum);
            } else {
                delete array[pName];
                sum -= parseInt(pCost);
                $('.user-points').text(sum);
            }

            const arrLength = Object.keys(array).length;
            $('.player-wrapper').each(function() {
                if (!$(this).hasClass("selected")) {
                    const ost = MAX_SUM - sum;
                    const cost = $(this).children().eq(2).text().replace(" ", "");;
                    if (ost < parseInt(cost) || arrLength === 4) {
                        $(this).addClass("no-select");
                    } else {
                        $(this).removeClass("no-select");
                    }
                }
            });

            if (arrLength === 4) {
                $('.team-button').css("display", "block");
            } else {
                $('.team-button').css("display", "none");
            }
        }
    });

    $('.team-button').click(function(event) {
        $('.team-button').text("Created!");
        $('.team-button').css("color", "green");
        navigator.clipboard.writeText(JSON.stringify(array));
    });
});