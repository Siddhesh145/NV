var headerController = function ($scope, $location, commonService, $rootScope, $window) {

    console.log("header  Controller reporting for duty.");

    //ngMeta.setTitle('Home', ' | Naamvidya');

    window.scrollTo(0, 0);

    $scope.pageScroll = function () {

        $('html, body').animate({
            scrollTop: $('.whtsapp').offset().top
        }, 2000);
        return false;
    }
   

    $('.navbar-toggler').click(function () {
        $(this).parent().toggleClass('menuopen');
    })

    $scope.$on('$stateChangeSuccess', function () {

        console.log('Route Changed');
        console.log($location.url());
        // $window.ga('send', {
        // 'hitType': 'pageview',
        // 'appName': 'NaamVidya',
        // 'screenName': $location.url(),
        // 'hitCallback': function () {
        // console.log('GA hitCallback sent!');
        // }
        // });
			$window.ga('create', 'UA-102959870-1');
			$window.ga('send', 'pageview', $location.url());
    });
    $scope.fn_MyCart = function () {
        //alert("Cart is empty");
        if ($scope.CartCount == 0) {

            //alert("Cart is empty");
            //alert("Header Controller on click:" + $scope.CartCount);
        }
        else
        {
            $location.url('/my-cart-detail');
        }
    }
    //$scope.menuopen= false;
    ////$("#sitenav").removeClass("menuopen");
    //var myEl = angular.element( document.querySelector( '#sitenav' ) );
    //myEl.removeClass('menuopen');

    //$scope.f_open_menu = function()
    //{
    //	var myEl = angular.element( document.querySelector( '#sitenav' ) );
    //	myEl.toggleClass('menuopen');


    //	if($scope.menuopen == true)
    //	{
    //		//$("#sitenav").addClass("menuopen");
    //		var myEl = angular.element( document.querySelector( '#sitenav' ) );
    //		myEl.addClass('menuopen');
    //		console.log('menu open 1');
    //		myEl.addClass('menuopen');
    //		console.log('menu open 2');
    //		$scope.menuopen= false;

    //	}
    //	else
    //	{
    //		//$("#sitenav").removeClass("menuopen");
    //		var myEl = angular.element( document.querySelector( '#sitenav' ) );
    //		myEl.removeClass('menuopen');

    //		$scope.menuopen= true;
    //		console.log('menu close');
    //	}
    //}

    //angular.element(document).ready(function () {
    //	$scope.menuopen= false;
    //	$("#sitenav").removeClass("menuopen");
    //});
 if(sessionStorage.getItem('FirstName') == "tempUser")
    {
        $scope.loginlogoutMenu = 'Login';
        $scope.UserName = "My Account";

    }
else if (sessionStorage.getItem('FirstName') != undefined || sessionStorage.getItem('FirstName') != null)
    {
        $scope.loginlogoutMenu = 'Logout';
        $scope.CartCount = 0;
        $scope.CartCount = sessionStorage.getItem('CartCount');
        $scope.UserName = sessionStorage.getItem('FirstName');
        $scope.UserFlag = sessionStorage.getItem('UserFlag');

    }
   
    else{
        $scope.loginlogoutMenu = 'Login';
        $scope.UserName = "My Account";

    }

   
    //var EmailId = sessionStorage.getItem('EmailId');
    //alert(EmailId);
    function CountOfMyCart() {

        if (commonService.get_cookies_data('GUID') == undefined || commonService.get_cookies_data('GUID') == null || commonService.get_cookies_data('GUID') == "") {
            $scope.CartCount = 0;
           // alert("Header Controller from CountOfMyCart:" + $scope.CartCount);
        }
        else {

            var v_http_link = "Routes/CountMyCart";
            var v_push_template = {
                "TEMP_GUID": commonService.get_cookies_data('GUID'),
                "REGN_GUID": sessionStorage.getItem('REGN_GUID')
            }

            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {
                var data = val.data;
                console.log(data);
                if (data != "") {
                    console.log('Before displaying My Cart Count');
                    $scope.CartCount = data[0].CartCount;
                    sessionStorage.setItem('CartCount', $scope.CartCount);
                    //alert("Header Controller CartCount:" + $scope.CartCount);
                }
                else {
                }
            }, function (error) {
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });
        }
    }

    CountOfMyCart();


    $scope.CartCount = sessionStorage.getItem('CartCount');


    $scope.$on('UpdateCartCount1', function (event, args) {
        console.log(JSON.stringify(args));
        
        $scope.CartCount = sessionStorage.getItem('CartCount');
        $scope.CartCount = args.message.Count;
        //alert('alert' + args.message.Count);
        //alert("header  Controller:" + $scope.CartCount);
    });

    


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

    $scope.f_logout = function (p_data) {
        if (p_data == 'Logout') {
            var v_http_link = "Routes/logout";
            var v_push_template = {
                "EmailId": "",
                "Password": "",
                "Captcha": ""
            }
            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {
                sessionStorage.clear();
                commonService.remove_cookies_data('GUID');
                $location.url('/');

            }, function (error) {
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });
        } else {

            sessionStorage.clear();
            $location.url('/login');
        }
    }


    $scope.Status = 'close';
    $scope.classAdded = true;
    $scope.f_call_drpdwn = function (id) {


        if ($scope.classAdded == true) {

            $scope.Status = 'open';
            //  $("#" + id).addClass("dropdown");
            $scope.classAdded = false;
        } else {
            $scope.Status = 'close';
            // $("#" + id).removeClass("dropdown");
            $scope.classAdded = true;

        }
    }

    $scope.f_blur_c = function () {
        if ($scope.classAdded == true) {

            $scope.Status = 'open';
            //  $("#" + id).addClass("dropdown");
            $scope.classAdded = false;
        } else {
            $scope.Status = 'close';
            // $("#" + id).removeClass("dropdown");
            $scope.classAdded = true;

        }
    }

    $scope.$on('closedropdown', function (event, args) {

        $scope.Status = args.message.Status;

        if ($scope.Status = 'close') {

            $scope.Status = 'open';
            //  $("#" + id).addClass("dropdown");
            $scope.classAdded = false;
        } else {
            $scope.Status = 'close';
            // $("#" + id).removeClass("dropdown");
            $scope.classAdded = true;

        }

    });

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

headerController.$inject = ['$scope', '$location', 'commonService', '$rootScope', '$window'];

