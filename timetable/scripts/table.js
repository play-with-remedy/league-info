var table_json = {
    "teams" : [
        {
            name : "83",
            players : [
                {
                    name : "Remedy",
                    point : 5,
                    extra : 0.2, 
                    Ci : 0.05,
                    win : 0
                },
                {
                    name : "Yesterday",
                    point : 5,
                    extra : 0.6, 
                    Ci : 0
                }
            ]
        },
        {
            name : "Рик и Морти",
            players : [
                {
                    name : "Ко-ко-ко",
                    point : 4,
                    extra : 0.5, 
                    Ci : 0
                },
                {
                    name : "Шпагат",
                    point : 7,
                    extra : 1, 
                    Ci : 0.1,
                    win : 1/2
                }
            ]
        },
        {
            name : "Молния Гендальфа",
            players : [
                {
                    name : "Флэш",
                    point : 3,
                    extra : 0.05, 
                    Ci : 1,
                    win : 0/2
                },
                {
                    name : "Маг",
                    point : 3,
                    extra : 0.05, 
                    Ci : 0,
                    win : 1/3
                }
            ]
        },
        {
            name : "Малышка и Карлсон",
            players : [
                {
                    name : "Артик",
                    point : 6,
                    extra : 1.25, 
                    Ci : 0.5,
                    win : 1/2
                },
                {
                    name : "Крис",
                    point : 5,
                    extra : 0.75, 
                    Ci : 0,
                    win : 2/3
                }
            ]
        },
        {
            name : "Чур мы сверху",
            players : [
                {
                    name : "Мортал",
                    point : 2,
                    extra : 0.3, 
                    Ci : 0
                },
                {
                    name : "Молчун",
                    point : 6,
                    extra : 0.7, 
                    Ci : 0.3, 
                    win : 1/3
                }
            ]
        },
        {
            name : "Орел и решка",
            players : [
                {
                    name : "Андерсен",
                    point : 5,
                    extra : 0.2, 
                    Ci : 0.2,
                    win : 0
                },
                {
                    name : "Юстас",
                    point : 5,
                    extra : 0.3, 
                    Ci : 0,
                    win : 0
                }
            ]
        },
        {
            name : "Double Trouble",
            players : [
                {
                    name : "Зодиак",
                    point : 3,
                    extra : 0.5, 
                    Ci : 0
                },
                {
                    name : "Дутче",
                    point : 6,
                    extra : 0.5, 
                    Ci : 0
                }
            ]
        },
        {
            name : "Привет Беларусь",
            players : [
                {
                    name : "Альфа",
                    point : 4,
                    extra : 0.8, 
                    Ci : 0
                },
                {
                    name : "КО",
                    point : 8,
                    extra : 0.4, 
                    Ci : 0.05,
                    win : 0
                }
            ]
        },
        {
            name : "Играем в удовольствие",
            players : [
                {
                    name : "Sha",
                    point : 4,
                    extra : 0.2, 
                    Ci : 0
                },
                {
                    name : "John Galt",
                    point : 8,
                    extra : 0.4, 
                    Ci : 0,
                    win : 1
                }
            ]
        },
        {
            name : "Мяу",
            players : [
                {
                    name : "Алиот",
                    point : 3,
                    extra : 0.4, 
                    Ci : 0.1,
                    win : 0
                },
                {
                    name : "Печаль",
                    point : 0,
                    extra : 0, 
                    Ci : 0
                },
                {
                    name : "Бон",
                    point : 7,
                    extra : 1.35,
                    Ci : 0,
                    win : 1
                }
            ]
        }
    ]
}

function getTable() {
    return table_json;
}