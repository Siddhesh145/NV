var balancedNameController = function ($scope, $location, commonService, globals, ngMeta, $rootScope)
{
    console.log('balanced Name Controller called')


  

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

   
    $scope.fn_Add_To_Cart = function () {
        sessionStorage.setItem('ProductId', 13); // Use To SetValue
        $location.url('/business-order-form');
    }
 
}

balancedNameController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$rootScope'];