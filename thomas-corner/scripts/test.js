
function calculate() {
    var array = $('textarea').val().split('"');
    var result = [{}];
    for(var i = 1; i < array.length; i = i + 2) {
        if (array[i]) {
            var list = array[i].split(' ').map(function(item) {
                return item;
            });
            $.each(list, function(index, item) {
                $.each(list, function(index, item2) {
                    if (item !== item2) {
                        if (!result[item]) {
                            result[item] = {};
                        }

                        if (!result[item][item2]) {
                            result[item][item2] = 1;
                        } else {
                            result[item][item2]++;
                        }
                    }
                });
            });
        }
    }

    var table = "<table class='thomas_archive'><tr class='table_header'><td>#</td>";
    for (var i=1; result[i]; i++) {
        table += "<td>" + Object.keys(result)[i] + "</td>"
    }
    table += "<td>Games</td></tr><tr>";

    for (var i=1; result[i]; i++) {
        table += "<td>" + Object.keys(result)[i] + "</td>";
        var count = 0;
        for (var j=1; result[j]; j++) {
            if(i===j) {
                table += "<td style='color:red'>#</td>";
            } else {
                var add_class = result[i][j] > (5) ? 'color:red' : result[i][j] <= (1) ? 'color:white' : '';
                table += "<td style='" + add_class + "'>" + result[i][j] + "</td>";
                count += result[i][j];
            }
        }
        table += "<td>" + count/9 + "</td></tr>";

    }

    table += "</table>"

    $('#result').empty().append(table);
}