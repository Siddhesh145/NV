var childNameCorrectionController = function ($scope,ngMeta) {
    console.log('child Name Correction Controller called')
    ngMeta.setTitle('Child Name Correction', ' | Naamvidya');
    function f_indexBody() {
        $("#body").removeClass("home-layout");
	}
    f_indexBody();
}
childNameCorrectionController.$inject = ['$scope', 'ngMeta'];