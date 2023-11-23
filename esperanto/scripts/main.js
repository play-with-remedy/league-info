const dictionary = [
    { russian: "Я", esperanto: "Mi", },
    { russian: "Пить", esperanto: "Trinkas", },
    { russian: "Молоко", esperanto: "Lakto", },
    { russian: "Он", esperanto: "Li", },
    { russian: "Она", esperanto: "Si", },
    { russian: "Иметь", esperanto: "Havas", },
    { russian: "Идти", esperanto: "Iras", },
    { russian: "Девушка", esperanto: "Virino", },
    { russian: "Хорошо", esperanto: "Bona", },
    { russian: "Утро", esperanto: "Mateno", },
];

$(document).ready(function() {
    initStage();

    $('.try-again').click(function(event) {
        initStage();
    });
});

function initStage() {
    let pair = {};
    let counter = 0;
    $('.congratulation').hide();
    $('.russian-item').append();
    $('.esperanto-item').append();

    let russianDisplay = "";
    let esperantoDisplay = "";

    let esperantoArray = [];
    let russianArray = [];

    let displayedArray = _.shuffle(dictionary).slice(0, 5);

    displayedArray.forEach((item) => {
        esperantoArray.push(item.esperanto);
        russianArray.push(item.russian);
    });

    esperantoArray = _.shuffle(esperantoArray);
    russianArray = _.shuffle(russianArray);

    for(let i = 0; i < 5; i++) {
        russianDisplay += "<p class='russian-word'>" + russianArray[i] + "</p>";
        esperantoDisplay += "<p class='esperanto-word'>" + esperantoArray[i] + "</p>";
    }

    $('.russian-item').append(russianDisplay);
    $('.esperanto-item').append(esperantoDisplay);

    $('.russian-word').click(function(event) {
        const target = event.target;
        const word = $(target).text();

        if (pair.esperanto) {
            const item = dictionary.find((item) => item.russian === word);
            if (item.esperanto === $(pair.esperanto).text()) {
                $(pair.esperanto).hide();
                $(target).hide();
                counter++;
            }
        }

        if (counter === 5) {
            $('.congratulation').show();
        }

        const color = target.style.backgroundColor;
        if (!color) {
            if (pair.russian) {
                pair.russian.style.backgroundColor = '';
            }
            target.style.backgroundColor = 'green';
        } else {
            target.style.backgroundColor = '';
        }

        pair.russian = target;
    });

    $('.esperanto-word').click(function(event) {
        const target = event.target;
        const word = $(target).text();

        if (pair.russian) {
            const item = dictionary.find((item) => item.esperanto === word);
            if (item.russian === $(pair.russian).text()) {
                $(pair.russian).hide();
                $(target).hide();
                counter++;
            }
        }

        if (counter === 5) {
            $('.congratulation').show();
        }

        const color = target.style.backgroundColor;
        if (!color) {
            if (pair.esperanto) {
                pair.esperanto.style.backgroundColor = '';
            }
            target.style.backgroundColor = 'red';
        } else {
            target.style.backgroundColor = '';
        }

        pair.esperanto = target;
    });
}
