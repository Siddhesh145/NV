var businessNameController = function ($scope, ngMeta) {
    console.log('business Name Controller called')
	ngMeta.setTitle('Business Name', ' | Naamvidya');
    ngMeta.setTag('keywords', 'Business Name Numerology, Numerology For Business Name Online');
    ngMeta.setTag('description', 'If you are worried about future prospects of your business, visit Naamvidya and getbusiness name numerologyhelp from the experts and get the bestnumerology for business name onlinefor the best results.');
    function f_indexBody() {
        $("#body").removeClass("home-layout");
	}
    f_indexBody();
}
businessNameController.$inject = ['$scope','ngMeta'];