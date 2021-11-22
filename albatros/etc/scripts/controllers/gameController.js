var fantasyApp = angular.module("fantasyApp", [])

fantasyApp.controller("gameController", function ($scope) {
  let companyList = [];
  let rowObject;
  let path = "https://play-with-remedy.github.io/league-info/albatros/etc/files/otgruzka_2021.xlsm";
  
  $scope.init = function () {
    fetch(path)
      .then((response) => {
        alert('s');
      })
      .then((data) => {
        console.log(data);
      });
  };

  $scope.test = function (input) {
      const file = input.files[0];
      $scope.parseExcel(file);
  };

  $scope.parseExcel = function(file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
          const data = e.target.result;
          const workbook = XLSX.read(data, {
              type: 'binary'
          });
  
          const sheetName = workbook.SheetNames[0];
          const xslmObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName], { header: 1 })[0];

          xslmObject.forEach(element => {
            const c = Object.values(element)[1];
            if (c)
            companyList.push(c);
          });
          companyList.splice(-1);
          companyList = uniq = [...new Set(companyList)];
          
      };
  
      reader.onerror = function(ex) {
        console.log(ex);
      };
  
      reader.readAsBinaryString(file);
    };

    $scope.showCompany = function () {
      $scope.itemList = companyList;
    }

    $scope.showProduct = function () {
      rowObject.splice(0, 2);
      rowObject.splice(-2);
      $scope.itemList = uniq = [...new Set(rowObject)];;
    }
});