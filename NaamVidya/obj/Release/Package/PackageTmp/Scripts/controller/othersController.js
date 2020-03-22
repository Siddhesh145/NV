var othersController = function ($scope, $location, ngMeta) {


    console.log('others Controller called');

    ngMeta.setTitle('Others', ' | Naamvidya');

    ngMeta.setTag('keywords', 'Power of alphabets, my name meaning, name, name meaning, astrology by name, name astrology  ');
    ngMeta.setTag('description', 'The secret & power of Alphabets, Words, Sound and Numbers have their strong influence not only on a person’s name but also on many other facets in our daily lives.');


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

othersController.$inject = ['$scope', '$location', 'ngMeta'];