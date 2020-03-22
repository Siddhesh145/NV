var namesMatterController = function ($scope, ngMeta) {

    console.log('names Matter Controller called');

    ngMeta.setTitle('Names Matter', ' | Naamvidya');

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

}

namesMatterController.$inject = ['$scope', 'ngMeta'];