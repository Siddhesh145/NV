var GiftLoginController = function ($scope, $location, commonService, globals, ngMeta) {

    console.log('Gift Login Controller Controller reporting for duty.');

	ngMeta.setTitle('Numerology name correction | Numerology name change', ' | Naamvidya');
    ngMeta.setTag('keywords', 'Numerology name correction, Numerology name change');
    ngMeta.setTag('description', 'If you wish to getnumerology name changeand ensure a better life and future for yourself, visit Naamvidya and getnumerology name correctionby experts in the field.');

    $("#body").removeClass("home-layout");

    $('#myModal').hide();
    $('#myModal2').hide();
    $scope.ProductId = "";
    // Commented Because it will take to our login page.
    //if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
    //    $location.url('/login');
    //}

    if (sessionStorage.getItem('ProductId') == undefined || sessionStorage.getItem('ProductId') == null || sessionStorage.getItem('ProductId') == '') {
       // alert("Invalid Url");
        // $location.url('/login');
        sessionStorage.setItem('ProductId', 2);
    }

    $scope.productid = sessionStorage.getItem('ProductId'); //Set Product Id global parameter

    console.log('$scope.productid : ' + $scope.productid);
    $scope.closemodal = function () {
        //alert("Hello");
        $('#myModal').hide();
    };
    $scope.f_gif_login = function ()
	{
		
        $location.url('/login');
	}
	
    $scope.f_gift_register = function ()
	{
		
        $location.url('/user-registration');
	}
    function Page_load() {
       
        sessionStorage.setItem('emailOrderId', "");

       var res = getUrlParameter('id');
       var giftmail = getGiftmailParameter('EmailId');

        function getUrlParameter(param, dummyPath) {
            var sPageURL = dummyPath || window.location.search.substring(1),
                sURLVariables = sPageURL.split(/[&||?]/),
                res;
            sessionStorage.setItem('emailLink', '/more-order-information?' + sPageURL);
            for (var i = 0; i < sURLVariables.length; i += 1) {
                var paramName = sURLVariables[i],
                    sParameterName = (paramName || '').split('=');

                if (sParameterName[0] === param) {
                    res = sParameterName[1];
                }
            }
            //alert(res);
            //$scope.OrderID = res;
            sessionStorage.setItem('emailOrderId', res);
            return res;
        }


        function getGiftmailParameter(param, dummyPath) {
            var sPageURL = dummyPath || window.location.search.substring(1),
                sURLVariables = sPageURL.split(/[&||?]/),
                res;
            sessionStorage.setItem('emailLink', '/more-order-information?' + sPageURL);
            for (var i = 0; i < sURLVariables.length; i += 1) {
                var paramName = sURLVariables[i],
                    sParameterName = (paramName || '').split('=');

                if (sParameterName[0] === param) {
                    res = sParameterName[1];
                }
            }
            //alert(res);
            //$scope.OrderID = res;
            sessionStorage.setItem('giftmail', res);
            return res;
        }
        //alert($scope.res);

        GetGiftDetail();
        function GetGiftDetail()
        {
            

            $scope.emailOrderId = sessionStorage.getItem('emailOrderId');
            $scope.giftmail = sessionStorage.getItem('giftmail');

            var v_http_link = "Routes/getGiftLoginDetail";
            var v_push_template = {
                "OrderId": $scope.emailOrderId,
                "To_EmailId": $scope.giftmail,
               
            }

            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {

                var data = val.data;
                console.log(data);
                if (data != "") {
                  
                    console.log(JSON.stringify(data));
                   
                    $scope.ProductId = data[0].ProductId;
                    $scope.FirstName = data[0].FirstName;
                    $scope.To_EmailId = data[0].To_EmailId;
                    $scope.To_Name = data[0].To_Name;
                    $scope.Message = data[0].Message;
                    $scope.ProductName = data[0].ProductName;
                    
                    sessionStorage.setItem('giftmail', $scope.To_EmailId);

                    if ($scope.ProductId = "9")
                    {
                        $scope.goldbabygift = false;
                        $scope.platinumbabygift = true;
                    }
                    else
                    {
                        $scope.goldbabygift = true;
                        $scope.platinumbabygift = false;
                    }
                }
                else
                {
                    $scope.MyGiftDetail = data;
                    $scope.NodataFound = true
                }
            }, function (error) {
                $scope.MyCartDetail = [];
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });

        }

    };
    Page_load();

   

}

GiftLoginController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];

