var choosingBabyNameController = function ($scope, $location, ngMeta) {
    console.log('choosing Baby Name Controller called')
    ngMeta.setTitle('Choosing Baby Name', ' | Naamvidya');
    function f_indexBody() {
        $("#body").removeClass("home-layout");
	}
    f_indexBody();
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
choosingBabyNameController.$inject = ['$scope', '$location', 'ngMeta'];