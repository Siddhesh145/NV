var whatisBalancedNameController = function ($scope) {
    console.log('what is Balanced Name Controller called')

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

}

whatisBalancedNameController.$inject = ['$scope'];