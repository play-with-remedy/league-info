const fantasyApp = angular.module("fantasyApp", [])

fantasyApp.controller("mainController", function ($scope, $q) {
  let companyObjectList = [];
  let productObjectMap = {};
  let xslmObjects = [];

  $scope.items = [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
    { id: 3, name: 'blah' }
  ];
  
  $scope.init = function () {
    $scope.activeTab = 'company';
    $scope.activeYear = 1;
    $scope.isDescOrder = true;
    $scope.currentOrderName;
    $scope.currentOrderYear;
    $scope.quantity = 500;

    sendRequestByUrl('2021').then(function success(response) {
      $scope.isLoaded = response;
      $scope.showCompany();
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
    let productObjectList = [];
    let products = xslmObjects[year].find(object => object['дата отгр'] === 'ИТОГО');
    for (const key of Object.keys(products)) {
      if (key !== 'дата отгр') {
        productObjectList.push({name: key, total: 0});
      }
    }

    productObjectMap[year] = productObjectList;
  }

  function buildCompanyObjectList(year) {
    xslmObjects[year].forEach(element => {
      const otg_date = element['дата отгр'];
      const date = otg_date ? otg_date.split(' ')[1] : undefined;

      for (const [key, value] of Object.entries(element)) {
        let product = productObjectMap[year].find(object => object.name === key);
        if (date && product) {
          product[date] = product[date] ? product[date] + parseInt(value) : parseInt(value);
          product.total = product.total + parseInt(value);
        }
      }

      const company = Object.values(element)[1];
      let total = parseInt(element['Итого']);
      let sameElement = companyObjectList.find(object => object.name === company);

      if (sameElement) {
        if (!sameElement.data[year]) {
          sameElement.data[year] = {};
          sameElement.data[year].total = 0;
        }
        sameElement.data[year][date] = sameElement.data[year][date] ? sameElement.data[year][date] + total : total;
        sameElement.data[year].total += total;
        sameElement.total += total;
      }

      if (company && total && date && !sameElement) {
        companyObjectList.push({ name: company, data: { [year]: { [date]: total, total } }, total});
      }
    });
  }

  $scope.setYear = function (year) {
    $scope.activeYear = year;
    
    if(year === 3) {
      if (Object.keys(xslmObjects).length !== 3) {
        $scope.isLoaded = false;
        sendRequestByUrl('2020').then(function success(response) {
          if (response) {
            sendRequestByUrl('2019').then(function success(response) {
              $scope.isLoaded = response;
              $scope.showCompany();
            });
          } 
        });
      }
    }
  }

  $scope.showCompany = function () {
    $scope.currentOrderName = null;
    $scope.activeTab = 'company';
    $scope.quantity = 500;
    $scope.title = "Компания";
    $scope.itemList = companyObjectList;
  };

  $scope.showTopCompany = function () {
    $scope.currentOrderName = null;
    $scope.activeTab = 'topCompany';
    $scope.title = "Компания";
    $scope.quantity = 10;
    $scope.isDescOrder = true;
    $scope.orderByField('total');
    $scope.itemList = companyObjectList;
  }

  $scope.showProduct = function () {
    $scope.currentOrderName = null;
    $scope.activeTab = 'product';
    $scope.title = "Продукт";
    $scope.itemList = productObjectList;
  };

  $scope.orderByField = function (field, year) {
    if ($scope.currentOrderName === field && $scope.currentOrderYear === year) {
      $scope.isDescOrder = !$scope.isDescOrder;
    }
    $scope.currentOrderName = field;
    $scope.currentOrderYear = year;

    if ($scope.activeTab === 'product' || $scope.activeTab === 'topProduct') {
      productObjectMap['2021'].sort(function (a, b) {
        return sort(a, b);
      });
    } else if ($scope.activeTab === 'company' || $scope.activeTab === 'topCompany') {
      companyObjectList.sort(function (a, b) {
          return sort(a, b);
      });
    }

    function sort(a, b) {
      if (a.data[year] === undefined || a.data[year][field] === undefined) {
          return 1;
      }
      else if (b.data[year] === undefined || b.data[year][field] === undefined) {
          return -1;
      }
      else if (a.data[year][field] === b.data[year][field]) {
            return 0;
      }
      else if ($scope.isDescOrder) {
          return a.data[year][field] < b.data[year][field] ? 1 : -1;
      }
      else { 
          return a.data[year][field] < b.data[year][field] ? -1 : 1;
      }
    }
  };

  $scope.showStats = function () {
    $scope.activeTab = 'stats';
    let productObjectList = productObjectMap['2021'];
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Месяц', 'Товар, кг'],
        ['Jan',  $scope.sum(productObjectList, 'Jan')],
        ['Feb',  $scope.sum(productObjectList, 'Feb')],
        ['Mar',  $scope.sum(productObjectList, 'Mar')],
        ['Apr',  $scope.sum(productObjectList, 'Apr')],
        ['May',  $scope.sum(productObjectList, 'May')],
        ['Jun',  $scope.sum(productObjectList, 'Jun')],
        ['Jul',  $scope.sum(productObjectList, 'Jul')],
        ['Aug',  $scope.sum(productObjectList, 'Aug')],
        ['Sep',  $scope.sum(productObjectList, 'Sep')],
        ['Oct',  $scope.sum(productObjectList, 'Oct')],
        ['Now',  $scope.sum(productObjectList, 'Nov')],
        ['Dec',  $scope.sum(productObjectList, 'Dec')],
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'line',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }
  };

  $scope.sum = function(items, prop){
    return items.reduce( function(a, b) {
        const t = b[prop] ? b[prop] : 0;
        return a + t;
    }, 0);
  };
});