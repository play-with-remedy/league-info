var a1 = {'id':'A-1', 'name': ''};
var a2 = {'id':'A-2', 'name': ''};
var a3 = {'id':'A-3', 'name': ''};
var a4 = {'id':'A-4', 'name': ''};
var a5 = {'id':'A-5', 'name': ''};

var b1 = {'id':'B-1', 'name': ''};
var b2 = {'id':'B-2', 'name': ''};
var b3 = {'id':'B-3', 'name': ''};
var b4 = {'id':'B-4', 'name': ''};
var b5 = {'id':'B-5', 'name': ''};

var c1 = {'id':'C-1', 'name': ''};
var c2 = {'id':'C-2', 'name': ''};
var c3 = {'id':'C-3', 'name': ''};
var c4 = {'id':'C-4', 'name': ''};
var c5 = {'id':'C-5', 'name': ''};

var d1 = {'id':'D-1', 'name': ''};
var d2 = {'id':'D-2', 'name': ''};
var d3 = {'id':'D-3', 'name': ''};
var d4 = {'id':'D-4', 'name': ''};
var d5 = {'id':'D-5', 'name': ''};

var array_1_1 = [b4, a2, d4, c5, c3, d3, c4, b5, a1, b3];
var array_1_2 = [d5, a3, d1, b1, c1, c2, a4, a5, d2, b2];

var array_2_1 = [a5, d3 ,a1, a4, c2, a2, d1, d4, b4, c3];
var array_2_2 = [b1, c4, b2, b5, c1, d5, b3, d2, a3, c5];

var array_3_1 = [c1, c5, d5, c3, b1, b5, a3, d1, d3, d2];
var array_3_2 = [a2, c4, c2, b2, a1, a5, b4, a4, d4, b3];

var array_4_1 = [c2, c1, b5, c4, d3, d4, d2, a3, b1, b2];
var array_4_2 = [b3, a4, d1, b4, d5, c3, a2, c5, a1, a5];

var array_5_1 = [a3, a4, b1, b3, a1, c5, c2, c4, a2, b4];
var array_5_2 = [b2, d5, d1, a5, b5, d4, c3, d3, c1, d2];

var array_6_1 = [b2, d3, a2, d2, a4, d5, c5, d1, a5, b5];
var array_6_2 = [c3, b1, d4, c4, b4, a1, c1, c2, b3, a3];

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