var OrderBabyNameGiftController = function ($scope, $location, commonService, globals, ngMeta) {

    ngMeta.setTitle('Baby Name', ' | Naamvidya');   
    ngMeta.setTag('keywords', 'names for success, name for good luck, name analysis, full name analysis');
    ngMeta.setTag('description', 'A name can bring hurt or bring success to your child. Use the science of Advanced Numerology to choose a name for your baby. Take free name analysis to see how your name has impacted you.');


    console.log('Order Baby Name reporting for duty.');

    $(function () {
        $('html, body').animate({
            scrollTop: $('.myscroll').offset().top
        }, 2000);
        return false;
    });

    // Commented Because it will take to our login page.
    //if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
    //    $location.url('/login');
    //}

    if (sessionStorage.getItem('ProductId') == undefined || sessionStorage.getItem('ProductId') == null || sessionStorage.getItem('ProductId') == '') {
        //alert("Invalid Url");
        //$location.url('/login');
		sessionStorage.setItem('ProductId',1);
    }

    $scope.productid = sessionStorage.getItem('ProductId'); //Set Product Id global parameter

    console.log('$scope.productid : ' + $scope.productid);


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


    $scope.f_platinum_baby_gift = function ()
    {
        sessionStorage.setItem('GProductId', 10); // Use To SetValue
        $location.url('/gift');
    }

    $scope.f_gold_baby_gift = function () {
        
        sessionStorage.setItem('GProductId', 9); // Use To SetValue
        $location.url('/gift');
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

OrderBabyNameGiftController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];

