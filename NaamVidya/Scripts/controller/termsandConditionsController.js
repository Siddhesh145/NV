var termsandConditionsController = function ($scope, ngMeta) {
    console.log('terms and Conditions Controller called');

    ngMeta.setTitle('Terms And Conditions', ' | Naamvidya');
    ngMeta.setTag('keywords', '');
    ngMeta.setTag('description', '');

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

}

termsandConditionsController.$inject = ['$scope', 'ngMeta'];