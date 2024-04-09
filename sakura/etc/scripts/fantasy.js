$(document).ready(function() {

    const MAX_SUM = 29000;
    let array = {};
    let sum = 0;

    $('.player-wrapper').click(function(event) {
        if (!event.currentTarget.classList.contains("no-select")) {
            const children = event.currentTarget.children;
            const pImg = children[0];
            const pName = children[1].innerText;
            const pCost = children[2].innerText.replace(" ", "");
            
            const arrLength = Object.keys(array).length;

            
            event.currentTarget.classList.toggle("selected");
            if (event.currentTarget.classList.contains("selected")) {
                array[pName] = { name: pName, const: pCost };
                sum += parseInt(pCost);
            } else {
                delete array[pName];
                sum -= parseInt(pCost);
            }

            
            $('.player-wrapper').each(function() {
                if(!$(this).hasClass("selected")) {
                    const ost = MAX_SUM - sum;
                    const cost = $(this).children().eq(2).text().replace(" ", "");;
                    if (ost < parseInt(cost)) {
                        $(this).addClass("no-select");
                    } else {
                        $(this).removeClass("no-select");
                    }
                }
            });
        }
    });
});