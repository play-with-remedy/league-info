const teamList = [
    {
        teamName: "Креветки из Инетки", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "PZ⚡DC", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Банальная сказка", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Светик-Правдоцветик", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Клянусь, мы шериф", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Котики", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Easy Win", totalScore: 0, additionScore: 0, ci: 0.0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Лучшие пупсики на вашу вечеринку", totalScore: 0, additionScore: 0, ci: 0.1,
        games: [
            { game: 1, score: 1, additionScore: 0.5, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.25, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Суринамские мукоеды", totalScore: 0, additionScore: 0, ci: 0.1,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Психические элементали", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "DDniwe", totalScore: 0, additionScore: 0, ci: 0.4,
        games: [
            { game: 1, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.25, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Бандюги", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "KOD", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Top Gun", totalScore: 0, additionScore: 0, ci: 0.0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Мы спалим твою овцу", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "OCISLY", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.25, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Black hole", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Клан Бомбино", totalScore: 0, additionScore: 0, ci: 0.1,
        games: [
            { game: 1, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Пёс да Лис 2.0", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "The Witches", totalScore: 0, additionScore: 0, ci: 0.0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Хочу тебя обнимать", totalScore: 0, additionScore: 0, ci: 0.6,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0.25, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Руками не трогать, замечаний не делать", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Берем всё вино на себя", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Компот из, сука, фруктов", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: -0.5, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Интроверты", totalScore: 0, additionScore: 0, ci: 0.2,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0.25, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Крут и пряник", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Война и мир", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 0, additionScore: 0, totalScore: 0 },
            { game: 2, score: 0, additionScore: 0, totalScore: 0 },
            { game: 3, score: 0, additionScore: 0, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Mafia House", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.1, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0.1, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Брестолочи", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 4, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 5, score: 1, additionScore: 0.4, totalScore: 0 },
            { game: 6, score: 0, additionScore: 0, totalScore: 0 },
            { game: 7, score: 0, additionScore: 0, totalScore: 0 },
            { game: 8, score: 0, additionScore: 0, totalScore: 0 },
        ],
    },
    {
        teamName: "Давай по новой, Миша", totalScore: 0, additionScore: 0, ci: 0,
        games: [
            { game: 1, score: 1, additionScore: 0.2, totalScore: 0 },
            { game: 2, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 3, score: 1, additionScore: 0.3, totalScore: 0 },
            { game: 4, score: 0, additionScore: 0, totalScore: 0 },
            { game: 5, score: 0, additionScore: 0, totalScore: 0 },
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