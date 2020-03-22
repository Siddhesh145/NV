var lifePathController = function ($scope, ngMeta) {
	ngMeta.setTitle('Science of Numerology | Baby Names', ' | Naamvidya');
    ngMeta.setTag('keywords', 'Science Of Numerology, Baby Names');
    ngMeta.setTag('description', 'Understand thescience of numerologythat has an impact on life path of a person. Visit Naamvidya to find best and most relevantbaby namesfor your baby for his better and brighter tomorrow.');
    console.log('life Path Controller called')
    function f_indexBody() {
        $("#body").removeClass("home-layout");
	}
    f_indexBody();
}
lifePathController.$inject = ['$scope', 'ngMeta'];