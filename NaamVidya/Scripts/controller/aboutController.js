var aboutController = function ($scope,ngMeta) {
    console.log('About controller called')

	 $("#body").removeClass("home-layout");
	 
	 ngMeta.setTitle('About Us | Meaning of names', ' | Naamvidya');
    
    ngMeta.setTag('keywords', 'Meaning of names');
    ngMeta.setTag('description', 'Our names have lot of power and people can realize their true potential by understanding themeaning  of names.Visit Naamvidya and understand how your name can change your luck and future prospects.');
			
    $scope.chosenTitle = 'About Us | Meaning of names', ' | Naamvidya';
    $scope.metaDescription ='Our names have lot of power and people can realize their true potential by understanding themeaning  of names.Visit Naamvidya and understand how your name can change your luck and future prospects.';

    // function f_indexBody() {
        // $("#body").removeClass("home-layout1");

    // }
    // f_indexBody();
    
}

aboutController.$inject = ['$scope', 'ngMeta'];

