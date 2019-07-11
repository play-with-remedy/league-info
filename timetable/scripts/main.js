var a1 = {'id':'A-1', 'name': ''};
var a2 = {'id':'A-2', 'name': ''};
var a3 = {'id':'A-3', 'name': ''};
var a4 = {'id':'A-4', 'name': ''};
var a5 = {'id':'A-5', 'name': ''};
var a6 = {'id':'A-6', 'name': ''};
var a7 = {'id':'A-7', 'name': ''};
var a8 = {'id':'A-8', 'name': ''};
var a9 = {'id':'A-9', 'name': ''};
var a10 = {'id':'A-10', 'name': ''};

var b1 = {'id':'B-1', 'name': ''};
var b2 = {'id':'B-2', 'name': ''};
var b3 = {'id':'B-3', 'name': ''};
var b4 = {'id':'B-4', 'name': ''};
var b5 = {'id':'B-5', 'name': ''};
var b6 = {'id':'B-6', 'name': ''};
var b7 = {'id':'B-7', 'name': ''};
var b8 = {'id':'B-8', 'name': ''};
var b9 = {'id':'B-9', 'name': ''};
var b10 = {'id':'B-10', 'name': ''};

var array_1_1 = [a9, a2, b9, b5, b3, b8, b4, a10, a1, a8];
var array_1_2 = [b10, a3, b6, a6, b1, b2, a4, a5, b7, a7];

var array_2_1 = [a5, b8 ,a1, a4, b2, a2, b6, b9, a9, b3];
var array_2_2 = [a6, b4, a7, a10, b1, b10, a8, b7, a3, b5];

var array_3_1 = [b1, b5, b10, b3, a6, a10, a3, b6, b8, b7];
var array_3_2 = [a2, b4, b2, a7, a1, a5, a9, a4, b9, a8];

var array_4_1 = [b2, b1, a10, b4, b8, b9, b7, a3, a6, a7];
var array_4_2 = [a8, a4, b6, a9, b10, b3, a2, b5, a1, a5];

var array_5_1 = [a3, a4, a6, a8, a1, b5, b2, b4, a2, a9];
var array_5_2 = [a7, b10, b6, a5, a10, b9, b3, b8, b1, b7];

var array_6_1 = [a7, b8, a2, b7, a4, b10, b5, b6, a5, a10];
var array_6_2 = [b3, a6, b9, b4, a9, a1, b1, b2, a8, a3];

var array_s1_1 = [];
var array_s1_2 = [];

var array_s2_1 = [];
var array_s2_2 = [];

var array_s3_1 = [];
var array_s3_2 = [];

var array_f_1 = [];
var array_f_2 = [];


window.onload = function () {
    generateTimeTable(array_1_1, "#round1 #table1", "Table 1");
    generateTimeTable(array_1_2, "#round1 #table2", "Table 2");

    generateTimeTable(array_2_1, "#round2 #table1", "Table 1");
    generateTimeTable(array_2_2, "#round2 #table2", "Table 2");

    generateTimeTable(array_3_1, "#round3 #table1", "Table 1");
    generateTimeTable(array_3_2, "#round3 #table2", "Table 2");

    generateTimeTable(array_4_1, "#round4 #table1", "Table 1");
    generateTimeTable(array_4_2, "#round4 #table2", "Table 2");

    generateTimeTable(array_5_1, "#round5 #table1", "Table 1");
    generateTimeTable(array_5_2, "#round5 #table2", "Table 2");

    generateTimeTable(array_6_1, "#round6 #table1", "Table 1");
    generateTimeTable(array_6_2, "#round6 #table2", "Table 2");

    //generateTimeTable(array_s1_1, "#semi1 #table1", "Table 1");
    //generateTimeTable(array_s1_2, "#semi1 #table2", "Table 2");

    //generateTimeTable(array_s2_1, "#semi2 #table1", "Table 1");
    //generateTimeTable(array_s2_2, "#semi2 #table2", "Table 2");

    //generateTimeTable(array_s3_1, "#semi3 #table1", "Table 1");
    //generateTimeTable(array_s3_2, "#semi3 #table2", "Table 2");

    //generateTimeTable(array_f_1, "#final1 #table1", "Table 1);
    //generateTimeTable(array_f_2, "#final2 #table1", "Table 1");
}

function generateTimeTable (array, roundID, tableName) {
    var table =
    "<table>" +
        "<tr><td colspan='3'>" + tableName + "</td></tr>" +
        "<tr>" +
            "<td>Place</td>" +
            "<td>Team ID</td>" +
            "<td>Player</td>" +
        "</tr>";
    array.forEach(function (element, index) {
        table +=
            "<tr>" +
                "<td>" + (index + 1) + "</td>" +
                "<td>" + element.id + "</td>" +
                "<td>" + element.name + "</td>" +
            "</tr>";
    });

    table += "</table>";
    $(roundID).append(table);
}