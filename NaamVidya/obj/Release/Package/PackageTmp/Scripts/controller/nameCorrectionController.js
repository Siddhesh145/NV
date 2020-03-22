var nameCorrectionController = function ($scope, ngMeta) {

    ngMeta.setTitle('Name Correction', ' | Naamvidya');

    console.log('name Correction Controller called');

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

}

nameCorrectionController.$inject = ['$scope', 'ngMeta'];