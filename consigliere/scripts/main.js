const teamList = [
    {
        teamName: "Лучшие пупсики на вашу вечеринку❤️", totalScore: 0, additionScore: 0, ci: 1.8,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.5, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0.25, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0.4, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Переполненный ЛХ", totalScore: 0, additionScore: 0, ci: 1.2,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.5, totalScore: 0 },
        ],
    },
    {
        teamName: "Брестдари", totalScore: 0, additionScore: 0, ci: 0.1,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.1, totalScore: 0 },
        ],
    },
    {
        teamName: "Лучшая проверка за этим столом", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Крут и Пряник", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Шляпа и звезда", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Гемотагенка с ежиком", totalScore: 0, additionScore: 0, ci: 0.3,
        games: [
            { game: 1, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0.2, totalScore: 0 },
        ],
    },
    {
        teamName: "Давай по новой, Миша", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: -0.5, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Наследие покемонов", totalScore: 0, additionScore: 0, ci: 0.1,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.5, totalScore: 0 },
        ],
    },
    {
        teamName: "Диванные критики", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.4, totalScore: 0 },
        ],
    },
    {
        teamName: "Красивая и скромная команда!", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 6, score: 1, additionScore: -0.5, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Салат с грибочками", totalScore: 0, additionScore: 0, ci: 1.8,
        games: [
            { game: 1, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0.5, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0.4, totalScore: 0 },
        ],
    },
    {
        teamName: "Боги игры", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Бандюги", totalScore: 0, additionScore: 0, ci: 0.1,
        games: [
            { game: 1, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.5, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.5, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Ведьмы", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Только не по лицу", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0.6, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Дети девятки", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Пёс да Лис", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.3, totalScore: 0 },
        ],
    },
    {
        teamName: "Инцест - дело семейное", totalScore: 0, additionScore: 0, ci: 0.6,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0.2, totalScore: 0 },
        ],
    },
    {
        teamName: "ГЛАМУР", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Рыжий неадекват 5.0", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.05, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Black hearts", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.3, totalScore: 0 },
        ],
    },
    {
        teamName: "Вперед, на 3в3!", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.2, totalScore: 0 },
        ],
    },
    {
        teamName: "Молодые ебаки", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.5, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0.3, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Афера Круэллы", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.1, totalScore: 0 },
        ],
    },
    {
        teamName: "Те ещё фрукты", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 1, additionScore: 0.3, totalScore: 0 },
        ],
    },
    {
        teamName: "Mafia House", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Без паники", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 1, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "ПрофиТролли", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 1, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Анапа 2008", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
];

$(document).ready(function() {
    let table = '<table><tr><td colspan="2"></td><td>Всего</td><td>Доп. балы</td><td>Ci</td><td>Игра 1</td><td>Игра 2</td><td>Игра 3</td><td>Игра 4</td><td>Игра 5</td><td>Игра 6</td><td>Игра 7</td><td>Игра 8</td></tr>';

    teamList.forEach((team, index) => {
        team.games.forEach((game) => {
            team.totalScore += game.score + game.additionScore;
            game.totalScore += game.score + game.additionScore;
            team.additionScore += game.additionScore;
        });
        team.totalScore += team.ci;
    });

    teamList.sort((a, b) => b.totalScore - a.totalScore);

    teamList.forEach((team, index) => {
        table += '<tr><td>' + (index + 1) + '</td><td>' + team.teamName + '</td><td>' + team.totalScore.toFixed(2) +
                 '</td><td>' + team.additionScore.toFixed(2) + '</td><td>' + team.ci + '</td>';
        team.games.forEach((game) => {
            table += '<td>' + game.totalScore.toFixed(2) + '</td>';
        });

        table += '</tr>';
    });

    table += "</table>";

    $('.total-mafia-table').append(table);
});