var fantasyApp = angular.module("fantasyApp", [])

fantasyApp.controller("mainController", function ($scope) {
  let companyObjectList = [];
  let productObjectList = [];
  let path = "https://play-with-remedy.github.io/league-info/lesli/etc/files/otgruzka_2021.xlsm";
  
  $scope.init = function () {
    $scope.isLoaded = false;
    $scope.activeTab = 'company';
    let req = new XMLHttpRequest();
    req.open("GET", path, true);
    req.responseType = 'arraybuffer';

    req.onload = function (e) {
      const arraybuffer = req.response;
      const data = new Uint8Array(arraybuffer);
      const arr = new Array();

      for(var i = 0; i != data.length; ++i)  {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join("");

      /* Call XLSX */
      var workbook = XLSX.read(bstr, {type:"binary"});
      const sheetName = workbook.SheetNames[0];
      const xslmObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

      let products = xslmObject.find(object => object['дата отгр'] === 'ИТОГО');
      for (const [key, value] of Object.entries(products)) {
        if (key !== 'дата отгр') productObjectList.push({name: key, total: 0});
      }

      xslmObject.forEach(element => {
        const otg_date = element['дата отгр'];
        const date = otg_date ? otg_date.split(' ')[1] : undefined;

        for (const [key, value] of Object.entries(element)) {
          let product = productObjectList.find(object => object.name === key);
          if (date && product) {
            product[date] = product[date] ? product[date] + parseInt(value) : parseInt(value);
            product.total = product.total + parseInt(value);
          }
        }

        const company = Object.values(element)[1];
        let total = parseInt(element['Итого']);

        let sameElement = companyObjectList.find(object => object.name === company);
        if (sameElement) {
          sameElement[date] = sameElement[date] ? sameElement[date] + total : total;
          sameElement.total += total;
        }

        if (company && total && date && !sameElement) {
          companyObjectList.push({ name: company, [date]: total, total});
        }
      });

      $scope.showCompany();
      $scope.isLoaded = true;
      $scope.$digest();
    }

    req.send();

  };

  $scope.showCompany = function () {
    $scope.activeTab = 'company';
    $scope.title = "Компания";
    $scope.itemList = companyObjectList;
  };

  $scope.showProduct = function () {
    $scope.activeTab = 'product';
    $scope.title = "Продукт";
    $scope.itemList = productObjectList;
  };

  $scope.showStats = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      width: 900,
      heught: 450,
      title:{
        text: "Статистика"
      },
      axisX:{  
//Try Changing to MMMM
        valueFormatString: "MMM"
      },

      axisY: {
              valueFormatString: "0.0#"
      },
      
      data: [
        {        
          type: "line",
          lineThickness: 1,
          dataPoints: [
            { x: new Date(2021,0), y: $scope.sum(productObjectList, 'Jan') },
            { x: new Date(2021,1), y: $scope.sum(productObjectList, 'Feb') },
            { x: new Date(2021,2), y: $scope.sum(productObjectList, 'Mar') },
            { x: new Date(2021,3), y: $scope.sum(productObjectList, 'Apr') },
            { x: new Date(2021,4), y: $scope.sum(productObjectList, 'May') },
            { x: new Date(2021,5), y: $scope.sum(productObjectList, 'Jun') },
            { x: new Date(2021,6), y: $scope.sum(productObjectList, 'Jul') },
            { x: new Date(2021,7), y: $scope.sum(productObjectList, 'Aug') },
            { x: new Date(2021,8), y: $scope.sum(productObjectList, 'Sep') },
            { x: new Date(2021,9), y: $scope.sum(productObjectList, 'Oct') },
            { x: new Date(2021,10), y: $scope.sum(productObjectList, 'Nov') },
            { x: new Date(2021,11), y: $scope.sum(productObjectList, 'Dec') }
          ]
        }    
      ]
    });

    chart.render();
    $scope.activeTab = 'stats';

  };

  $scope.sum = function(items, prop){
    return items.reduce( function(a, b) {
        const t = b[prop] ? b[prop] : 0;
        return a + t;
    }, 0);
  };
});