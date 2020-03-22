var NumerologyNumberController = function ($scope, ngMeta) {
 
    console.log("theImportanceOfNameController Controller reporting for duty.");

	ngMeta.setTitle('Numerology Name Change| Baby Names And Its Meaning', ' | Naamvidya');

    ngMeta.setTag('keywords', 'Numerology Name Change, Baby Names And Its Meaning');
    ngMeta.setTag('description', 'Baby names and its meaning has a lot of relevance. Visit Naamvidya and get numerology name change to ensure they enjoy a brighter and successful future. Visit Naamvidya for more information. ');

	function f_indexBody() {
	    $("#body").removeClass("home-layout");

	}
	f_indexBody();


	$scope.gotoMenu = function (name, url) {

	    if (name == 'BabyName') {
	        $scope.currentPage = name;
	        sessionStorage.setItem('currentPage', name);
	        $scope.f_New_Baby_Name();
	    } else if (name == 'Adult') {
	        $scope.currentPage = name;
	        sessionStorage.setItem('currentPage', name);
	        $scope.f_Name_Correction();

	    } else {
	        $scope.currentPage = name;
	        sessionStorage.setItem('currentPage', name);
	        $location.url(url);

	    }

	}


	$scope.f_New_Baby_Name = function () {

	    sessionStorage.setItem('ProductId', 1); // Use To SetValue
	    //sessionStorage.getItem('ProductId') // Use To GetValue
	    $location.url('/baby-name');

	}

	$scope.f_Name_Correction = function () {
	    sessionStorage.setItem('ProductId', 2); // Use To SetValue
	    $location.url('/name-correction');

	}

	$scope.f_Spouse_Name = function () {
	    sessionStorage.setItem('ProductId', 3); // Use To SetValue
	    $location.url('/spouse');

	}

	$scope.f_Child_Name_Correction = function () {
	    sessionStorage.setItem('ProductId', 4); // Use To SetValue
	    $location.url('/child-name-correction');
	}

}

NumerologyNumberController.$inject = ['$scope', 'ngMeta'];

