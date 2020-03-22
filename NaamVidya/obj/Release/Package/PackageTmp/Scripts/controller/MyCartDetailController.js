var MyCartDetailController = function ($scope, $location, commonService, globals, ngMeta, $rootScope, $filter) {

    console.log('MyCart Detail controller reporting for duty.');

    ngMeta.setTitle('My Cart Details', ' | Naamvidya');

    $scope.TotalDist = 0;

    $scope.dsbtnSubmit = true;

    $scope.Country = "INDIA";
    $scope.Country_flag = "I";

    $scope.IsVisible = true;
    if (sessionStorage.getItem('UserFlag') != 1) {
        $scope.btnadmin = true;
        $scope.dvadmin = false;
    } else {
        $scope.btnadmin = false;
        $scope.dvadmin = true;
    }
    $scope.PStatus = false;

    $scope.fn_validateClientId = function (CEmailid) {
        if (CEmailid == undefined || CEmailid == null || CEmailid == '') {
            $scope.msg1 = 'Please Enter Clients Email Id';
        }
        else {
            var v_http_link = "Routes/validateClientId";
            var v_push_template = {
                "REGN_GUID": $scope.REGN_GUID,
                "ClientsEmailId": CEmailid
            }
            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {
                var data1 = val.data;
                if (data1.flag == "False") {
                    $scope.msg1 = data1.msg;
                } else {
                    $scope.msg1 = data1.msg;
                }
            }, function (error) {
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });
        }
        validation();
    };
    $scope.fn_clientid = function () { validation(); }
    $scope.fn_changeProvisional = function () {
        if ($scope.PStatus == true) {
            $scope.PayumoneyTranId = "";
            $scope.PStatus = true
            $scope.onprovisional = true;
        } else {
            $scope.PStatus = false;
            $scope.onprovisional = false;
        }
        $scope.msg2 = "";
        validation();
    };

    $scope.fn_changeRefId = function () {
        validation();
    };

    $scope.fn_blurRefId = function () {
        if ($scope.PayumoneyTranId.length != 0) {
            $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
            if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
                $location.url('/login');
            }
            var v_http_link = "Routes/checkRefId";
            var v_push_template = {
                "REGN_GUID": $scope.REGN_GUID,
                "PayumoneyTranId": $scope.PayumoneyTranId
            }
            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {
                var data1 = val.data;
                if (data1.flag == "False") {
                    $scope.msg2 = data1.msg;
                    $scope.PayumoneyTranId = "";
                } else {
                    $scope.msg2 = "";
                }
            }, function (error) {
                $scope.MyCartDetail = [];
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });
        }
        //validation();
    }

    $scope.ShowCountry = function (value) {
        //If DIV is visible it will be hidden and vice versa.

        console.log("country flag : " + $scope.Country_flag);

        if (value == 'O') {
            $scope.IsVisible = false;
            $scope.Country = "";
            $scope.Country_flag = "O";
        }
        else {
            $scope.Country = "";
            $scope.IsVisible = true;
            $scope.Country_flag = "I";
        }
        GetMyCartDetail($scope.COUPEN_CODE);

    }

    function Country(value) {

        if (value == 'O') {
            $scope.IsVisible = false;

            $scope.Country_flag = "O";
        }
        else {
            $scope.IsVisible = true;
        }
    }

    $scope.closemodal = function () {
        //alert("Hello");
        $('#myModal').hide();
    };
    $('#myModal').hide();
    $scope.check_blank = function () {
        //if ($scope.COUPEN_CODE == "")
        //{
        GetMyCartDetail("0");
        //}
    }


    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');

    $("#body").removeClass("home-layout");

    // Commented Because it will take to our login page.
    if (sessionStorage.getItem('REGN_GUID') != undefined || sessionStorage.getItem('REGN_GUID') != null || sessionStorage.getItem('REGN_GUID') != '') {

        $scope.BillTo = sessionStorage.getItem('FirstName');
        // $scope.EmailTo = sessionStorage.getItem('EmailId');

        var EmailId = sessionStorage.getItem('EmailId')
        if (globals.f_check_email(EmailId)) {
            $scope.EmailTo = sessionStorage.getItem('EmailId');
        }

    }
    $scope.TotalDist = 0;
    $scope.dvbasictl = true;
    $scope.dvproductdtl = false;
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    //$('.datepicker').pickadate({
    //    selectMonths: true, // Creates a dropdown to control month
    //    selectYears: 150, // Creates a dropdown of 15 years to control year
    //    format:'dd-mmm-yyyy'
    //});

    $('input:radio[name=mf]').click(function () {
        var mf = $('input:radio[name=mf]:checked').val();
        //$scope.gender = mf;
        $('#txtGender').val(mf);
    });

    function validation() {
        var rtnval = false;
        if ($scope.BillTo == undefined || $scope.BillTo == null || $scope.BillTo == "") {
            rtnval = true;
        }
        if ($scope.EmailTo == undefined || $scope.EmailTo == null || $scope.EmailTo == "") {
            rtnval = true;
        }
        if ($scope.EmailTo != "" && globals.f_check_email($scope.EmailTo) == false) {
            rtnval = true;
        }
        if ($scope.BillingAddress1 == undefined || $scope.BillingAddress1 == null || $scope.BillingAddress1 == "") {
            rtnval = true;
        }

        // if ($scope.BillingAddress2 == undefined || $scope.BillingAddress2 == null || $scope.BillingAddress2 == "") {
        // rtnval = true;
        // }

        // if ($scope.BillingAddress3 == undefined || $scope.BillingAddress3 == null || $scope.BillingAddress3 == "") {
        // rtnval = true;
        // }

        if ($scope.Country == undefined || $scope.Country == null || $scope.Country == "") {
            rtnval = true;
        }
        if ($scope.Country == "INDIA") {
            if ($scope.State == undefined || $scope.State == null || $scope.State == "") {
                rtnval = true;
            }
        }
        if (sessionStorage.getItem('UserFlag') == 1) {
            if ($scope.ClientEmailId == undefined || $scope.ClientEmailId == null || $scope.ClientEmailId == "") {
                rtnval = true;
            }
            if ($scope.PStatus == false) {
                if ($scope.PayumoneyTranId == undefined || $scope.PayumoneyTranId == null || $scope.PayumoneyTranId == "") {
                    rtnval = true;
                }
            }
        }

        if (rtnval == false) {
            if ($scope.confirm == true) {
                rtnval = false;
            }
            else {
                rtnval = true;
            }
        }
        else {
            rtnval = true;
        }
        $scope.dsbtnSubmit = rtnval;
    }

    $scope.fn_Accept = function () {
        validation();
    }
    $scope.fn_Change_BillTo = function () {
        validation();
    }

    $scope.fn_Change_BillAddress2 = function (value) {
        //alert("changed");
        if (value == 'India' || value == 'INDIA') {
            $scope.Country = value;
            $scope.IsVisible = true;
            $scope.Country_flag = "I";
        }
        else {
            $scope.IsVisible = false;
            $scope.Country = value;
            $scope.Country_flag = "O";
        }
        GetMyCartDetail($scope.COUPEN_CODE);
    }

    $scope.fn_Change_BillAddress1 = function () {

        validation();
    }

    function GetMyCartDetail(code) {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }

        if (code == undefined || code == null || code == '') {
            $scope.applycode = "0";
        } else {
            $scope.applycode = code;
        }

        var v_http_link = "Routes/getMyCartDetail";
        var v_push_template = {
            "TEMP_GUID": commonService.get_cookies_data('GUID'),
            "REGN_GUID": $scope.REGN_GUID,
            "Voucher": $scope.applycode,
            "Country_flag": $scope.Country_flag
        }

        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {

            var data = val.data;
            console.log(data);
            if (data != "") {
                console.log('Before displaying My Cart Detail');
                console.log(JSON.stringify(data));
                $scope.MyCartDetail = data;
                $scope.NodataFound = false

                $scope.CGST = data[0].CGST;
                $scope.SGST = data[0].SGST;
                $scope.IGST = data[0].IGST;
                $scope.SubTotal = data[0].SubTotal;
                $scope.TotalAmt = data[0].TotalAmt;
                $scope.FinalAmt = data[0].FinalAmt;
                $scope.TotalDist = data[0].Discount;
                $scope.msg = data[0].msg;

                $scope.DTotalAmt = data[0].DTotalAmt;
                $scope.DFinalAmt = data[0].DFinalAmt;
                $scope.ProductType = data[0].ProductType;
                $scope.ExpressDelivery = data[0].ExpressDelivery;
                //$scope.ExpressDeliveryDate = data[0].ExpressDeliveryDate;
                console.log('After displaying My Cart Detail');
                fn_getdateOnLoad();
                fn_filter();
                Country($scope.Country_flag);
            }
            else {
                $scope.MyCartDetail = data;
                $scope.NodataFound = true
            }
        }, function (error) {
            $scope.MyCartDetail = [];
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });

    }


    function getCountryState() {

        var v_http_link = "Routes/getCountryState";
        var v_push_template = {
        }

        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;

            console.log(JSON.stringify(data));
            if (data.flag == "True") {
                $scope.CountryList = data.CountryList;
                $scope.StateList = data.StateList;
            }
            else {
                $scope.CountryList = [];
                $scope.StateList = [];
            }
        }, function (error) {
            $scope.CountryList = [];
            $scope.StateList = [];
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    GetMyCartDetail($scope.COUPEN_CODE);
    getCountryState();
    function clear() {
        $scope.firstName = "";
        $scope.dob = "";
        $scope.lastName = "";
        $scope.middleName = "";
        $scope.mobileno = "";
        $scope.gender = "";
    }

    if ($scope.productid == 3) {
        $scope.ngshowFName = true;
    }
    else {
        $scope.ngshowFName = false;
    }

    $scope.fn_remove_cart = function (p_data) {

        //alert(p_data.CartId);

        var v_http_link = "Routes/DeleteMyCart";
        var v_push_template = {
            "CartId": p_data.CartId
        }

        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {

            var data1 = val.data;
            console.log(data1);
            GetMyCartDetail($scope.COUPEN_CODE);
            CountOfMyCart();
            //if (data1 != "") {
            //    //console.log(JSON.stringify(data));
            //    commonService.put_cookies_data('GUID', data1[0].REGN_GUID);
            //    //alert(commonService.get_cookies_data('GUID'));
            //    //$scope.errormsg = "Product added to cart successfully.";
            //}
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    $scope.fn_Apply_Code = function (Code) {
        console.log(Code);

        if (Code == undefined || Code == null || Code == '') {
            $scope.msg = 'Please Enter Coupen Code';
        }
        else {
            GetMyCartDetail(Code);
        }
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

                //$scope.$emit('DocListVeiw', {
                //    message: {
                //        "Group_Code": globals.user_detail.Group_Code,
                //        "Employee_Code": p_data.EmployeeCode,
                //        "CompanyCode": globals.user_detail.Company_Code,
                //        "Tran_Type": p_data.Tran_Type,
                //        "Tran_ID": p_data.Sett_Tran_ID,
                //        "Request_No": p_data.SettProc_No,
                //        "LoanType_Code": "",
                //    }
                //});
            }
            else {
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    $scope.fn_ContinueShopping = function () {

        $location.url('/home');
    }
    $scope.fn_OrderNow = function () {

        if (validation()) {
            $scope.errormsg = "";

            console.log("validation done");

            $scope.dvbasictl = false;
            $scope.dvproductdtl = true;
            //GetProductDetail();
        }
        else {
            console.log("validation error");
        }
    };

    $scope.fn_MoreInfo = function () {

        $scope.dvbasictl = false;
        $scope.dvproductdtl = false;
        $scope.dvcontinuedetail = true;

    };

    $scope.fn_Continue = function () {

        $scope.dvconfirmdetail = false;
        $scope.dvcontinuedetail = false;
        $scope.dvanynamedetail = true;
        $scope.dvConfirmYesdtl = false;
        $scope.dvConfirmNodtl = false;
    };

    $scope.fn_Confirm_Yes = function () {

        $scope.dvconfirmdetail = false;
        $scope.dvcontinuedetail = false;
        $scope.dvanynamedetail = false;
        $scope.dvConfirmYesdtl = true;
        $scope.dvConfirmNodtl = false;
    };
    $scope.fn_Confirm_No = function () {

        $scope.dvconfirmdetail = false;
        $scope.dvcontinuedetail = false;
        $scope.dvanynamedetail = false;
        $scope.dvConfirmYesdtl = false;
        $scope.dvConfirmNodtl = true;
    };

    $scope.fn_CheckOut = function () {
        //alert("please click on confirm");
        $scope.action = "Routes/CheckoutOrder";
        return false;
        e.preventDefault();
        return false;
    }
    $scope.fn_CheckOut_O = function () {
        //alert("please click on confirm");
        $scope.action = "Routes/CheckoutPaytmOrder";
        return false;
        e.preventDefault();
        return false;
    }
    $scope.fn_Submit = function () {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        var v_http_link = "Routes/SaveOrderDetail"; // MakePayUMoneyPayment
        var v_push_template = {
            "User_Id": 0,
            "ProductId": $scope.product,
            "MiddleName": $scope.middleName,
            "LastName": $scope.lastName,
            "Date_Of_Birth": $scope.dob,
            "Gender": $scope.gender, //"M"
            "Price": $scope.price,
            "Voucher": $scope.voucher,
            "PayUMoney_Amt": $scope.finalprice,
            "Name1": $scope.Name1,
            "Name2": $scope.Name2,
            "Name3": $scope.Name3,
            "Name4": $scope.Name4,
            "Name5": $scope.Name5,
            "namespell": $scope.namespell,
            "lastnamespell": $scope.lastnamespell,
            "Alphabets": $scope.Alphabets,
            "MotherName": $scope.MotherName,
            "FatherName": $scope.FatherName,
            "Sibling1": $scope.Sibling1,
            "Sibling2": $scope.Sibling2,
            "Sibling3": $scope.Sibling3,
            "maxlength": $scope.maxlength
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.dvbasictl = false;
                $scope.dvproductdtl = false;
                $scope.dvcontinuedetail = true;
                //console.log(JSON.stringify(data));
                //$scope.product = data[0].productid;
                //$scope.price = data[0].price
                //$scope.finalprice = data[0].finalprice
                //$scope.dvbasictl = false;
                //$scope.dvproductdtl = true;
            }
        }, function (error) {
            console.log(JSON.stringify(v_push_template));
        });
    };

    $scope.IsVisible = false;
    $scope.showhide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }


    //$scope.fn_Express = function () {
    //    if ($scope.Express == true) {
    //        rtnval = false;
    //    }
    //    else {
    //        rtnval = true;
    //    }
    //}
    function fn_getdateOnLoad() {


        var v_http_link = "Routes/getdateOnLoad";
        var v_push_template = {

        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.ExpressDeliveryDate = data[0].ExpressDeliveryDate;

            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });


    }

    function fn_filter() {

        $scope.MyCartDetail.filter(
        function (x) {
            var v_http_link = "Routes/expressDelivery";
            var v_push_template = {
                "REGN_GUID": x.REGN_GUID,
                "TEMP_GUID": x.TEMP_GUID,
                "ProductId": x.ProductId,
                "CartId": x.CartId,
                "ExpressDelivery": x.ExpressDelivery
            }
            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {
                var data = val.data;
                if (data != "") {
                    $scope.ExpressDeliveryDate = data[0].ExpressDeliveryDate;

                }
            }, function (error) {
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });

        });
    }
    function fn_Express(x) {
        var v_http_link = "Routes/expressDelivery";
        var v_push_template = {
            "REGN_GUID": x.REGN_GUID,
            "TEMP_GUID": x.TEMP_GUID,
            "ProductId": x.ProductId,
            "CartId": x.CartId,
            "ExpressDelivery": x.ExpressDelivery
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.ExpressDeliveryDate = data[0].ExpressDeliveryDate;
                GetMyCartDetail();
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }


    $scope.fn_Express = function (x) {

        fn_Express(x);
        // alert(JSON.stringify(x));

        //if (x.ExpressDelivery = true) {

        //}


    }

}

MyCartDetailController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$rootScope', '$filter'];

