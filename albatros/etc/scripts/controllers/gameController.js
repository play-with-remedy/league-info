var fantasyApp = angular.module("fantasyApp", [])

fantasyApp.controller("gameController", function ($scope) {
  let companyObjectList = [];
  let productObjectList = [];
  let path = "https://play-with-remedy.github.io/league-info/albatros/etc/files/otgruzka_2021.xlsm";
  
  $scope.init = function () {
    $scope.isLoaded = false;
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

      xslmObject.forEach(element => {
        const otg_date = element['дата отгр'];
        const date = otg_date ? otg_date.split(' ')[1] : undefined;
        const company = Object.values(element)[1];
        let total = parseInt(element['Итого']);

        let sameElement = companyObjectList.find( object => object.name === company);
        if (sameElement) {
          total += sameElement.total;
        }

        if (company && total && date && !sameElement) {
          companyObjectList.push({ name: company, total, month: date});
        }

        if (otg_date === 'ИТОГО') {
          for (const [key, value] of Object.entries(element)) {
            if (key !== 'дата отгр') productObjectList.push({name: key, total: parseInt(value.replace(/,/g, ''))});
          }
        }
      });

      $scope.isLoaded = true;
      $scope.$digest();
    }

    req.send();

  };

  $scope.showCompany = function () {
    $scope.itemList = companyObjectList;
  }

  $scope.showProduct = function () {
    $scope.itemList = productObjectList;
  }
});