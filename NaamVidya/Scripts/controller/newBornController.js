var newBornController = function ($scope, ngMeta) {
    console.log('new Born Controller called');

    ngMeta.setTitle('New Born', ' | Naamvidya');

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

}

newBornController.$inject = ['$scope', 'ngMeta'];