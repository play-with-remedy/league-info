const fantasyApp = angular.module("fantasyApp", [])

fantasyApp.controller("mainController", function ($scope, $q, $parse) {
    let companyObjectList = [];
    let productObjectList = [];
    let xslmObjects = [];
  
    $scope.init = function () {
        $scope.activeTab = 'company';
        $scope.activeYear = 1;
        $scope.isDescOrder = true;
        $scope.currentOrderName;
        $scope.quantity = 1000;

        sendRequestByUrl('2022').then(function success(response) {
            if (response) {
                sendRequestByUrl('2021').then(function success(response) {
                    if (response) {
                        sendRequestByUrl('2020').then(function success(response) {
                            $scope.isLoaded = response;
                            $scope.showCompany();
                        });
                    }
                });
            }
        });
    };

    function sendRequestByUrl(year) {
        const deferred = $q.defer();
        const path = `https://play-with-remedy.github.io/league-info/lesli/etc/files/otgruzka_${year}.xlsm`;

        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", path, true);
        xmlHttpRequest.responseType = 'arraybuffer';

        xmlHttpRequest.onload = function () {
            buildXslmObject(xmlHttpRequest, year);
            buildProductObject(year);
            buildCompanyObjectList(year);

            deferred.resolve(true);
        }

        xmlHttpRequest.send();
        return deferred.promise;
    }

    function buildXslmObject(xmlHttpRequest, year) {
        const arrayBuffer = xmlHttpRequest.response;
        const data = new Uint8Array(arrayBuffer);
        const dataArray = new Array();

        for(let i = 0; i != data.length; ++i)  {
            dataArray[i] = String.fromCharCode(data[i]);
        }
        const binaryDataString = dataArray.join("");
        const workbook = XLSX.read(binaryDataString, { type:"binary" });
        const sheetName = workbook.SheetNames[0];

        xslmObjects[year] = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    }


    function buildProductObject(year) {
        let products = xslmObjects[year].find(object => object['дата отгр'] === 'ИТОГО');
        for (const key of Object.keys(products)) {
            if (key !== 'дата отгр') {
                let product = productObjectList.find(object => object.name === key);
                if (!product) {
                    productObjectList.push({name: key, data: { [year]: { total: 0}}, total: 0});
                }
            }
        }
    }

    function buildCompanyObjectList(year) {
        xslmObjects[year].forEach(element => {
            const otg_date = element['дата отгр'];
            const date = otg_date ? otg_date.split(' ')[1] : undefined;

            for (const [key, value] of Object.entries(element)) {
                if (element['дата отгр'] !== 'ИТОГО') {
                    const total = parseFloat(value);
                    let product = productObjectList.find(object => object.name === key);
                    if (product) {
                        if (!product.data[year]) {
                          product.data[year] = {};
                          product.data[year].total = 0;
                        }

                        product.data[year][date] = product.data[year][date] ? $scope.round(product.data[year][date], total) : total;
                        product.data[year].total = $scope.round(product.data[year].total, total);
                        product.total = $scope.round(product.total, total);
                    }
                }
            }

            const company = Object.values(element)[1];
            let total = parseFloat(element['Итого']);
            let sameElement = companyObjectList.find(object => object.name === company);

            if (sameElement) {
                if (!sameElement.data[year]) {
                  sameElement.data[year] = {};
                  sameElement.data[year].total = 0;
                }

                sameElement.data[year][date] = sameElement.data[year][date] ? $scope.round(sameElement.data[year][date], total) : total;
                sameElement.data[year].total = $scope.round(sameElement.data[year].total, total);
                sameElement.total = $scope.round(sameElement.total, total);
            }

            if (company && total && date && !sameElement) {
                companyObjectList.push({ name: company, data: { [year]: { [date]: total, total } }, total});
            }
        });
    }

    $scope.setYear = function (year) {
        $scope.isLoaded = false;
        $scope.activeYear = year;
        switch (year) {
            case 1:
                if ($scope.activeTab === 'stats') {
                  $scope.showStats();
                }
                $scope.isLoaded = true;
                break;
            case 3:
                showYearData(true);
                break;
            case 5:
                if (Object.keys(xslmObjects).length < 5) {
                    sendRequestByUrl('2019').then(function success(response) {
                        if (response) {
                            sendRequestByUrl('2018').then(function success(response) {
                                showYearData(response);
                            });
                        }
                    });
                } else {
                    if ($scope.activeTab === 'stats') {
                        $scope.showStats();
                    }
                    $scope.isLoaded = true;
                }
                break;
          default:
        }

        function showYearData(response) {
            if ($scope.activeTab === 'stats') {
                $scope.showStats();
            } else if ($scope.activeTab === 'topCompany') {
                $scope.showTopCompany();
            } else if ($scope.activeTab === 'topProduct') {
                 $scope.showTopProduct();
            } else if ($scope.activeTab === 'analysis') {
                buildAnalysis();
            }
            $scope.isLoaded = response;
        }
    };

    $scope.showCompany = function () {
        clearSearch();
        $scope.currentOrderName = null;
        $scope.activeTab = 'company';
        $scope.quantity = 1000;
        $scope.title = "Компания";
        $scope.itemList = companyObjectList;
        $scope.copyItemList = companyObjectList;
    };

    $scope.showTopCompany = function () {
        clearSearch();
        $scope.currentOrderName = null;
        $scope.activeTab = 'topCompany';
        $scope.title = "Компания";
        $scope.quantity = 10;
        $scope.isDescOrder = true;
        $scope.orderByField('total');
        $scope.itemList = companyObjectList;
    }

    $scope.showProduct = function () {
        clearSearch();
        $scope.currentOrderName = null;
        $scope.activeTab = 'product';
        $scope.quantity = 1000;
        $scope.title = "Продукт";
        $scope.itemList = productObjectList;
        $scope.copyItemList = productObjectList;
    };

    $scope.showTopProduct = function () {
        clearSearch();
        $scope.currentOrderName = null;
        $scope.activeTab = 'topProduct';
        $scope.title = "Продукт";
        $scope.quantity = 10;
        $scope.isDescOrder = true;
        $scope.orderByField('total');
        $scope.itemList = productObjectList;
    }

    $scope.orderByField = function (field) {
        if ($scope.currentOrderName === field) {
            $scope.isDescOrder = !$scope.isDescOrder;
        }

        $scope.currentOrderName = field;
        $scope.itemList.sort(function (a, b) {
          return sort(a, b);
        });

        function sort(a, b) {
            const getter = $parse(field);
            const firstValue = getter(a);
            const secondValue = getter(b);

            if (firstValue === undefined) {
              return 1;
            }
            else if (secondValue === undefined) {
              return -1;
            }
            else if (firstValue === secondValue) {
                return 0;
            }
            else if ($scope.isDescOrder) {
              return firstValue < secondValue ? 1 : -1;
            }
            else {
              return firstValue < secondValue ? -1 : 1;
            }
        }
    };

    $scope.showStats = function () {
        clearSearch();
        $scope.activeTab = 'stats';

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            let chartData = [
                ['Месяц', 'Товар, кг']
            ]

            let chartDataArray2022 = [
                ['Jan',  sum(productObjectList, 'Jan', '2022')],
                ['',  sum(productObjectList, 'Feb', '2022')],
                ['Mar',  sum(productObjectList, 'Mar', '2022')],
                ['',  sum(productObjectList, 'Apr', '2022')],
                ['May',  sum(productObjectList, 'May', '2022')],
                ['2022',  sum(productObjectList, 'Jun', '2022')],
                ['Jul',  sum(productObjectList, 'Jul', '2022')],
                ['',  sum(productObjectList, 'Aug', '2022')],
                ['Sep',  sum(productObjectList, 'Sep', '2022')],
                ['',  sum(productObjectList, 'Oct', '2022')],
                ['Nov',  sum(productObjectList, 'Nov', '2022')],
                ['',  sum(productObjectList, 'Dec', '2022')]
            ];

            let chartDataArray20202021 = [
                ['Jan', sum(productObjectList, 'Jan', '2020')],
                ['', sum(productObjectList, 'Feb', '2020')],
                ['Mar',  sum(productObjectList, 'Mar', '2020')],
                ['',  sum(productObjectList, 'Apr', '2020')],
                ['May',  sum(productObjectList, 'May', '2020')],
                ['2020',  sum(productObjectList, 'Jun', '2020')],
                ['Jul',  sum(productObjectList, 'Jul', '2020')],
                ['',  sum(productObjectList, 'Aug', '2020')],
                ['Sep',  sum(productObjectList, 'Sep', '2020')],
                ['',  sum(productObjectList, 'Oct', '2020')],
                ['Nov',  sum(productObjectList, 'Nov', '2020')],
                ['',  sum(productObjectList, 'Dec', '2020')],
                ['Jan',  sum(productObjectList, 'Jan', '2021')],
                ['',  sum(productObjectList, 'Feb', '2021')],
                ['Mar',  sum(productObjectList, 'Mar', '2021')],
                ['',  sum(productObjectList, 'Apr', '2021')],
                ['May',  sum(productObjectList, 'May', '2021')],
                ['2021',  sum(productObjectList, 'Jun', '2021')],
                ['Jul',  sum(productObjectList, 'Jul', '2021')],
                ['',  sum(productObjectList, 'Aug', '2021')],
                ['Sep',  sum(productObjectList, 'Sep', '2021')],
                ['',  sum(productObjectList, 'Oct', '2021')],
                ['Nov',  sum(productObjectList, 'Nov', '2021')],
                ['',  sum(productObjectList, 'Dec', '2021')]
            ];

            let chartDataArray20182019 = [
                ['Jan', sum(productObjectList, 'Jan', '2018')],
                ['', sum(productObjectList, 'Feb', '2018')],
                ['Mar',  sum(productObjectList, 'Mar', '2018')],
                ['',  sum(productObjectList, 'Apr', '2018')],
                ['May',  sum(productObjectList, 'May', '2018')],
                ['2018',  sum(productObjectList, 'Jun', '2018')],
                ['Jul',  sum(productObjectList, 'Jul', '2018')],
                ['',  sum(productObjectList, 'Aug', '2018')],
                ['Sep',  sum(productObjectList, 'Sep', '2018')],
                ['',  sum(productObjectList, 'Oct', '2018')],
                ['Nov',  sum(productObjectList, 'Nov', '2018')],
                ['',  sum(productObjectList, 'Dec', '2018')],
                ['Jan',  sum(productObjectList, 'Jan', '2019')],
                ['',  sum(productObjectList, 'Feb', '2019')],
                ['Mar',  sum(productObjectList, 'Mar', '2019')],
                ['',  sum(productObjectList, 'Apr', '2019')],
                ['May',  sum(productObjectList, 'May', '2019')],
                ['2019',  sum(productObjectList, 'Jun', '2019')],
                ['Jul',  sum(productObjectList, 'Jul', '2019')],
                ['',  sum(productObjectList, 'Aug', '2019')],
                ['Sep',  sum(productObjectList, 'Sep', '2019')],
                ['',  sum(productObjectList, 'Oct', '2019')],
                ['Nov',  sum(productObjectList, 'Nov', '2019')],
                ['',  sum(productObjectList, 'Dec', '2019')]
            ];

            if ($scope.activeYear === 3) {
                chartDataArray2022 = chartDataArray20202021.concat(chartDataArray2022);
            }

            if ($scope.activeYear === 5) {
                chartDataArray2022 = chartDataArray20202021.concat(chartDataArray2022);
                chartDataArray2022 = chartDataArray20182019.concat(chartDataArray2022);
            }

            chartData = chartData.concat(chartDataArray2022);
            const data = google.visualization.arrayToDataTable(chartData);

            const options = {
                title: 'Статистика продаж',
                curveType: 'line',
                legend: { position: 'bottom' },
            };

            const chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
            chart.draw(data, options);
        }
    };

    $scope.round = function (firstValue, secondValue) {
        if (!secondValue) secondValue = 0;
        return Math.round((firstValue + secondValue) * 10) / 10;
    }

    $scope.showAnalysis = function () {
        clearSearch();
        $scope.activeTab = 'analysis';
        $scope.setYear(3);
    }

    function buildAnalysis () {
        let analysisList = [];
        xslmObjects[2022].forEach(element => {
            const companyName = element['Компания'];
            Object.keys(element).forEach(key => {
                if (key !== 'дата отгр' && key !== 'Компания' && key !== 'Итого' && key !== 'вид товара') {
                    const productName = key;
                    const total = parseFloat(element[productName]);

                    let existedObject = analysisList.find(object => object.companyName === companyName && object.productName === productName);
                    if (existedObject){
                        existedObject['2022'] = $scope.round(existedObject['2022'], total);
                    }

                    if (companyName && key !== 'ИТОГО' && total && !existedObject) {
                        analysisList.push({companyName, productName, '2022': total})
                    }
                }
            });
        });

        xslmObjects[2021].forEach(element => {
          const companyName = Object.values(element)[1];
          Object.keys(element).forEach(key => {
            if (key !== 'дата отгр' && key !== '   ' && key !== 'Итого' && key !== 'вид товара') {
              const productName = key;
              const total = parseFloat(element[productName]);

              let existedObject = analysisList.find(object => object.companyName === companyName && object.productName === productName);
              if (existedObject) {
                existedObject['2021'] = $scope.round(total, existedObject['2021']);
              }

              if (companyName && key !== 'ИТОГО' && total && !existedObject) {
                analysisList.push({companyName, productName, '2021': total})
              }
            }
          });
        });

        let resultList = [];
        analysisList.forEach(element => {
          if (element[2021]) {
            const t22 = element[2022] ? element[2022] : 0;
            const t21 = element[2021];
            element.percent = $scope.round((t22 - t21) * 100 / t21);
            if (element.percent <= -25 ) {
              resultList.push(element);
            }
          }
        });

        $scope.analysisList = resultList;
    }

    $scope.search = function (searchValue) {
        if (searchValue) {
            let filteredItemList = [];

            $scope.copyItemList.forEach(item => {
                if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    filteredItemList.push(item);
                    return;
                }
            });

            $scope.itemList = filteredItemList;
        } else {
            $scope.itemList = $scope.copyItemList;
        }
    };

    $scope.showDetails = function (detailName, month, year) {
        $scope.details = {name: detailName, month, items: []};
        xslmObjects[year].forEach(element => {
            switch($scope.activeTab) {
            case 'product':

                if (element[detailName] && element['дата отгр'].includes(month)) {
                    let item = $scope.details.items.find((item) => item.name === element['Компания']);
                    if (item) {
                        item.value = $scope.round(parseFloat(item.value), parseFloat(element[detailName]))
                    } else {
                        $scope.details.items.push({ name: element['Компания'], value: element[detailName] });
                    }
                }

                break;
            case 'company':

                if (element['Компания'] === detailName && element['дата отгр'].includes(month)) {
                    Object.keys(element).forEach(key => {
                        if (key !== 'дата отгр' && key !== 'Итого' && key !== 'Компания') {
                            let item = $scope.details.items.find((item) => item.name === key);
                            if (item) {
                                item.value = $scope.round(parseFloat(item.value), parseFloat(element[key]))
                            } else {
                                $scope.details.items.push({ name: key, value: element[key] });
                            }
                        }
                    });
                }

                break;
            }
        });

        $('#detailsPopup').show();
    };

    $scope.closeDetailsPopup = function () {
        $('#detailsPopup').hide();
    }

    function clearSearch() {
        $scope.searchValue = '';
        $scope.itemList = $scope.copyItemList;
    }

    function sum(items, prop, year){
        return items.reduce(function(a, b) {
            const t = b.data[year] && b.data[year][prop] ? b.data[year][prop] : 0;
            return $scope.round(a, t);
        }, 0);
    };
});