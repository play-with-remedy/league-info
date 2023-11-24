const dictionary = [
    { russian: "Я", esperanto: "Mi", },
    { russian: "Пить", esperanto: "Trinkas", },
    { russian: "Молоко", esperanto: "Lakto", },
    { russian: "Он", esperanto: "Li", },
    { russian: "Она", esperanto: "Ŝi", },
    { russian: "Иметь", esperanto: "Havas", },
    { russian: "Идти", esperanto: "Iras", },
    { russian: "Девушка", esperanto: "Virino", },
    { russian: "Хорошо", esperanto: "Bona", },
    { russian: "Утро", esperanto: "Mateno", },
    { russian: "Ты/Вы", esperanto: "Vi", },
    { russian: "Понимать", esperanto: "Komprenas", },
    { russian: "Это", esperanto: "Tio", },
    { russian: "И", esperanto: "Kaj", },
    { russian: "Есть/Являться", esperanto: "Estas", },
    { russian: "Один", esperanto: "Unu", },
    { russian: "Не", esperanto: "Ne", },
    { russian: "Три", esperanto: "Tri", },
    { russian: "Два", esperanto: "Du", },
    { russian: "Но", esperanto: "Sed", },
    { russian: "Мужчина", esperanto: "Viro", },
    { russian: "Читать", esperanto: "Legas", },
    { russian: "Длинный", esperanto: "Longa", },
    { russian: "Книга", esperanto: "Libro", },
    { russian: "Сегодня", esperanto: "Hodiaŭ", },
    { russian: "Мы", esperanto: "Ni", },
    { russian: "Четыре", esperanto: "Kvar", },
    { russian: "Выучить", esperanto: "Lernas", },
    { russian: "Слово", esperanto: "Vorto", },
    { russian: "В/На", esperanto: "En", },
    { russian: "Оба/Обе", esperanto: "Ambaŭ", },
    { russian: "Язык", esperanto: "Lingvo", },
    { russian: "Легко", esperanto: "Facila", },
    { russian: "Сложно", esperanto: "Malfacila", },
    { russian: "Разговаривать", esperanto: "Parolas", },
    { russian: "Газета", esperanto: "Ĵurnalo", },
    { russian: "Только", esperanto: "Nur", },
    { russian: "Страница", esperanto: "Paĝo", },
    { russian: "Словарь", esperanto: "Vortaro", },
    { russian: "Кафе", esperanto: "Kafejo", },
    { russian: "Извините", esperanto: "Pardonu", },
    { russian: "Предложение", esperanto: "Frazon", },
    { russian: "Немного", esperanto: "Iomete", },
    { russian: "Что", esperanto: "Ke", },
    { russian: "Петь", esperanto: "Kantas", },
    { russian: "Играть", esperanto: "Ludas", },
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

    $('.russian-item').empty();
    $('.esperanto-item').empty();

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
                $(pair.esperanto).addClass("word--inactive");
                $(target).addClass("word--inactive");
                counter++;
            }
        }

        if (counter === 5) {
            $('.congratulation').show();
        }

        if (!$(target).hasClass("word--selected")) {
            if (pair.russian) {
                $(pair.russian).removeClass("word--selected");
            }
            $(target).addClass("word--selected");
        } else {
            $(target).removeClass("word--selected");
        }

        pair.russian = target;
    });

    $('.esperanto-word').click(function(event) {
        const target = event.target;
        const word = $(target).text();

        if (pair.russian) {
            const item = dictionary.find((item) => item.esperanto === word);
            if (item.russian === $(pair.russian).text()) {
                $(pair.russian).addClass("word--inactive");
                $(target).addClass("word--inactive");
                counter++;
            }
        }

        if (counter === 5) {
            $('.congratulation').show();
        }

        if (!$(target).hasClass("word--selected")) {
            if (pair.esperanto) {
                $(pair.esperanto).removeClass("word--selected");
            }
            $(target).addClass("word--selected");
        } else {
            $(target).removeClass("word--selected");
        }

        pair.esperanto = target;
    });
}
