const dictionary = [
    { russian: "Я", esperanto: "Mi", },
    { russian: "Пить", esperanto: "Trinkas", },
    { russian: "Молоко", esperanto: "Lakto", },
    { russian: "Он", esperanto: "Li", },
    { russian: "Она", esperanto: "Si", },
    { russian: "Иметь", esperanto: "Havas", },
    { russian: "Идти", esperanto: "Iras", },
    { russian: "Пить", esperanto: "Trinkas", },
    { russian: "Хорошо", esperanto: "Bona", },
    { russian: "Утро", esperanto: "Mateno", },
];

$(document).ready(function() {
    let content = "<div>"

    dictionary.forEach((item) => {
        content += "<div class='item-pair'>";
        content += "<p class='russian'>" + item.russian + "</p>" + "<p class='esperanto'>" + item.esperanto + "</p>";
        content += "</div>";
    });
    content += "</div>"

    $('.content').append(content);

    let pair = {};


    $('.russian').click(function(event){
        const target = event.target;
        const word = $(target).text();
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

    $('.esperanto').click(function(event){
        const target = event.target;
        const word = $(target).text();

        if (pair.russian) {
            const item = dictionary.find((item) => item.esperanto === word);
            if (item.russian === $(pair.russian).text()) {
                $(pair.russian).hide();
                $(target).hide();
            }
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
});
