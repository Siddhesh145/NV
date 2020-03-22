var privacyPolicyController = function ($scope, ngMeta) {
    console.log('privacy Policy Controller called');

    ngMeta.setTitle('Privacy Policy', ' | Naamvidya');

    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

}

privacyPolicyController.$inject = ['$scope', 'ngMeta'];