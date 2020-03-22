var skuController = function ($scope, $location, commonService, globals, ngMeta) {

    console.log('Sku controller called');

    ngMeta.setTitle('SKU', ' | Naamvidya');

    // if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
        // $location.url('/login');
    // }
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format: 'dd-mmm-yyyy'
    });

    $scope.f_New_Baby_Name = function () {

        sessionStorage.setItem('ProductId', 1);
        $location.url('/baby-name');

    }
    $scope.f_Name_Correction = function () {
        sessionStorage.setItem('ProductId', 2);
        $location.url('/name-correction');
    }
    $scope.f_Spouse_Name = function () {
        sessionStorage.setItem('ProductId', 3);
        $location.url('/spouse');
    }
}
skuController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];