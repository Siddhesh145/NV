var OrderBabyNameAltController = function ($scope, $location, commonService, globals, ngMeta) {

    ngMeta.setTitle('Baby Name', ' | Naamvidya');   
    ngMeta.setTag('keywords', 'names for success, name for good luck, name analysis, full name analysis');
    ngMeta.setTag('description', 'A name can bring hurt or bring success to your child. Use the science of Advanced Numerology to choose a name for your baby. Take free name analysis to see how your name has impacted you.');
    $('#myModal').hide();
    $('#myModal2').hide();
    console.log('Order Baby Name reporting for duty.');
    $scope.closemodal = function () {
        //alert("Hello");
        $('#myModal').hide();

    };
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


    $scope.f_platinum_baby_order = function ()
    {
        sessionStorage.setItem('ProductId', 8); // Use To SetValue
        $location.url('/order-form');
    }

    $scope.f_gold_baby_order = function () {
        sessionStorage.setItem('ProductId', 1); // Use To SetValue
        $location.url('/order-form');
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

    $scope.f_combo_baby_order = function () {

        $scope.errormsg = "";
        if ($scope.ComboName == "" || $scope.ComboName == null || $scope.ComboName == undefined) {
            //alert($scope.ComboName);
            $scope.errormsg += "Please Select Any One Combination";
            return false;
        }
        else
        {
            $scope.errormsg = "";
            $scope.successmsg = "";
            //alert($scope.ComboName);

            $scope.trimComboName = $scope.ComboName.trim();
            sessionStorage.setItem('ProductIdCombo', $scope.trimComboName);
            var a = $scope.trimComboName.split(',');

            $location.url('/OrderPlatinumCombo');



            //sessionStorage.setItem('ProductId',$scope.ComboName); // Use To SetValue
            //console.log("validation done");

            //if (commonService.get_cookies_data('GUID') == "null") {
            //    commonService.remove_cookies_data("GUID");
            //}
            //if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
            //    //commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
            //    //alert("REGN_GUID :" + $scope.REGN_GUID);


            //    for (var i = 0; i < a.length; i++) {
            //        console.log(a[i]);

            //        $scope.firstName = "";
            //        $scope.middleName = "";
            //        $scope.lastName = "";
            //        $scope.dob = "";
            //        $scope.gender = "";
            //        $scope.mobileno = "";
            //        $scope.Remarks = "";
            //        $scope.Years = "";
            //        $scope.MonthNames = "";
            //        $scope.Days = "";
            //        AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), a[i], $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno, $scope.Remarks);

            //    }

            //    $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');

            //    if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            //        $location.url('/login');

            //    }
            //}
            //else
            //{
            //    commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
            //    //commonService.put_cookies_data('GUID', data[0].REGN_GUID);
            //    //alert("REGN_GUID :" + $scope.REGN_GUID);

            //    for (var i = 0; i < a.length; i++) {
            //        console.log(a[i]);

            //        $scope.firstName = "";
            //        $scope.middleName = "";
            //        $scope.lastName = "";
            //        $scope.dob = "";
            //        $scope.gender = "";
            //        $scope.mobileno = "";
            //        $scope.Remarks = "";
            //        $scope.Years = "";
            //        $scope.MonthNames = "";
            //        $scope.Days = "";

            //        AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), a[i], $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno, $scope.Remarks);

            //    }

            //}
        }
    }

    function AddToCart(TEMP_GUID, REGN_GUID, PoductId, FirstName, MiddleName, LastName, DOB, Gender, MobileNo, Remarks) {
        var v_http_link = "Routes/AddToCart";
        var v_push_template = {
            "TEMP_GUID": TEMP_GUID,
            "REGN_GUID": REGN_GUID,
            "ProductId": PoductId,
            "FirstName": FirstName,
            "MiddleName": MiddleName,
            "LastName": LastName,
            //"Date_Of_Birth": DOB,
            //"dob": $scope.dob,
            "Date_Of_Birth": "",
            "Gender": Gender,
            "MobileNo": MobileNo,
            "Remarks": Remarks,
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                console.log(JSON.stringify(data));
                commonService.put_cookies_data('GUID', data[0].REGN_GUID);
                //alert(commonService.get_cookies_data('GUID'));
                $scope.successmsg = "Service added to cart successfully.";
                $location.url('/my-cart-detail');
                CountOfMyCart();
                //var redirecturl = sessionStorage.getItem('pageToRedirect');
                //if (redirecturl == null)
                //{
                //    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');

                //}
                //else
                //{
                //    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
                //}

                //clear();
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }
    function CountOfMyCart() {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        var v_http_link = "Routes/CountMyCart";
        var v_push_template = {
            "TEMP_GUID": commonService.get_cookies_data('GUID'),
            "REGN_GUID": sessionStorage.getItem('REGN_GUID')
        }
        //alert("TEMP_GUID :" + commonService.get_cookies_data('GUID') + "REGN_GUID :" + sessionStorage.getItem('REGN_GUID'));
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            console.log(data);
            if (data != "") {
                console.log('Before displaying My Cart Count');
                $scope.CartCount = data[0].CartCount;
                sessionStorage.setItem('CartCount', $scope.CartCount);
                $scope.$emit('UpdateCartCount', {
                    message: {
                        "Count": data[0].CartCount
                    }
                });
            }
            else {
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

}

OrderBabyNameAltController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];

