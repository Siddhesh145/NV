var moreinfopageController = function ($scope, $location, commonService, globals, ngMeta) {

    console.log('moreinfopage controller reporting for duty.');

    ngMeta.setTitle('More Info', ' | Naamvidya');
    $scope.res = "";

    $('.datepicker').pickadate({
        format: 'dd-mmm-yyyy',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('.tooltipped').tooltip({ delay: 50 });

    $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
    if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
        $location.url('/login');
    }

    $scope.UserFlag = sessionStorage.getItem('UserFlag');
    $scope.OrderStatus = '2';
    function getOrderStatus() {
        if ($scope.UserFlag == 1) {
            $scope.OrderStatus = '5';
        } else {
            $scope.OrderStatus = '2';
        }
    }

    function set_tabs_by_productId(productid) {

        if (productid == 1) {

            $scope.tab_nn = true;
            $scope.tab_nc = false;

        } else if (productid == 2) {

            $scope.tab_nn = false;
            $scope.tab_nc = true;
        }
        else if (productid == 3) {

            $scope.tab_nn = true;
            $scope.tab_nc = false;

        } else if (productid == 4) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        } else if (productid == 5) {
            $scope.tab_nn = false;
            $scope.tab_nc = true;
        }
        else if (productid == 6) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;

        } else if (productid == 7) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        } else if (productid == 8) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        }

        else if (productid == 9) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        }
        else if (productid == 10) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        }
        else if (productid == 11) {
            $scope.tab_nn = false;
            $scope.tab_nc = true;
        }
        else if (productid == 12) {
            $scope.tab_nn = false;
            $scope.tab_nc = true;
        }
        else if (productid == 13) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        }
        else if (productid == "" || productid == null || productid == undefined) {
            $scope.tab_nn = true;
            $scope.tab_nc = false;
        }

    }

    $scope.nnstep1 = true;
    $scope.nnstep2 = false;
    $scope.nnstep3 = false;
    $scope.nnstep4 = false;
    $scope.nnstep5 = false;
    $scope.nnstep6 = false;

    $scope.ncstep1 = true;
    $scope.ncstep2 = false;
    $scope.ncstep3 = false;
    $scope.ncstep4 = false;
    $scope.ncstep5 = false;

    $scope.LengthName = 'np';
    $scope.MaxLengthName = 15;
    $scope.rhymewithparents = false;

    $scope.f_maxlength_click = function () {
        if ($scope.LengthName == 'sn') {
            $scope.MaxLengthName = 5;
        }
        else {
            $scope.MaxLengthName = 15;
        }
    }

    $scope.f_Next_1 = function () {
        if (validation()) {
            $scope.errormsg = "";
            $scope.nnstep1 = false;
            $scope.nnstep2 = true;
            $scope.nnstep3 = false;
            $scope.nnstep4 = false;
            $scope.nnstep5 = false;
            $scope.nnstep6 = false;
        } else {
            console.log("validation error");
        }
    }

    $scope.f_Next_nc_1 = function () {
        if (validation()) {
            $scope.errormsg = "";
            $scope.ncstep1 = false;
            $scope.ncstep2 = true;
            $scope.ncstep3 = false;
            $scope.ncstep4 = false;
            $scope.ncstep5 = false;

        } else {
            console.log("validation error");
        }
    }

    function valid_2() {
        if ($scope.Name1 == "" || $scope.Name1 == null || $scope.Name1 == undefined) {
            $scope.errormsg1 = "Please Enter Atleast 1 Name."
            return false;
        }

        return true;
    }
    $scope.f_Back_2 = function () {
        $scope.nnstep1 = true;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;
    }

    $scope.f_Back_nc_2 = function () {
        $scope.ncstep1 = true;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;
    }

    $scope.f_Next_2 = function () {
        if ($scope.productid == 1) {

            $scope.nnstep1 = false;
            $scope.nnstep2 = false;
            $scope.nnstep3 = false;
            $scope.nnstep4 = false;
            $scope.nnstep5 = false;
            $scope.nnstep6 = true;

        } else {
            $scope.nnstep1 = false;
            $scope.nnstep2 = false;
            $scope.nnstep3 = true;
            $scope.nnstep4 = false;
            $scope.nnstep5 = false;
            $scope.nnstep6 = false;
        }
    }

    $scope.f_Next_nc_2 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = true;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;
    }

    $scope.f_Back_3 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = true;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;
    }

    $scope.f_Back_nc_3 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = true;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

    }

    function valid_3() {
        $scope.criteriaselection = "";
        $scope.criteriaName = "";
        $scope.cr = $scope.criteriadetail.filter(
        function (value) {
            if (value.Checked == true) {
                if ($scope.criteriaselection == "") {
                    $scope.criteriaselection = value.rowno;
                    $scope.criteriaName = value.Criteria_Name;
                }
                else {
                    $scope.criteriaselection = $scope.criteriaselection + "," + value.rowno;
                    $scope.criteriaName = $scope.criteriaName + "," + value.Criteria_Name;
                }
                //return true;
            }
            else {
                return false;
            }
        });

        if ($scope.criteriaselection == "") {
            $scope.errormsg2 = "Select Religion / Cultural Preference."
            return false;
        }
        return true;
    }

    $scope.f_Next_3 = function () {
        if (valid_3()) {
            $scope.nnstep1 = false;
            $scope.nnstep2 = false;
            $scope.nnstep3 = false;
            $scope.nnstep4 = true;
            $scope.nnstep5 = false;
            $scope.nnstep6 = false;
        }
    }

    $scope.f_Next_nc_3 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = true;
        $scope.ncstep5 = false;
    }

    $scope.f_Back_4 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = true;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;
    }

    $scope.f_Back_nc_4 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = true;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;
    }

    $scope.f_Next_4 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = true;
        $scope.nnstep6 = false;
    }

    $scope.f_Back_5 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = true;
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;
    }

    $scope.f_Next_5 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = true;
    }

    $scope.f_Back_6 = function () {
        if ($scope.productid == 1) {

            $scope.nnstep1 = false;
            $scope.nnstep2 = true;
            $scope.nnstep3 = false;
            $scope.nnstep4 = false;
            $scope.nnstep5 = false;
            $scope.nnstep6 = false;

        } else {
            $scope.nnstep1 = false;
            $scope.nnstep2 = false;
            $scope.nnstep3 = false;
            $scope.nnstep4 = false;
            $scope.nnstep5 = true;
            $scope.nnstep6 = false;
        }

    }
    function getOrderIDByReguid(REGN_GUID) {
        var v_http_link = "Routes/getOrderIDByReguid";
        var v_push_template =
            {
                "REGN_GUID": REGN_GUID
            }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);

        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.OrderID = data[0].OrderId;


                GetOrderDetail();
                getcriteria();
                getCountryState();
                $scope.criteriadetail = {};
                $scope.Onsave = false;
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });

    }
    function Page_load() {
        $scope.FromMail=0;
        $scope.dvconfirmdetail = true;
        $scope.dvcontinuedetail = false;
        $scope.dvSummary = false;

        $scope.res = getUrlParameter('id');

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

        //alert($scope.res);

        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
            return false;
        }
        $scope.GetOrderFlag = sessionStorage.getItem('GetOrderFlag');

        if ($scope.GetOrderFlag == "T")
        {
            //getOrderIDByReguid($scope.REGN_GUID);
            var v_http_link = "Routes/getOrderIDByReguid";
            var v_push_template =
                {
                    "REGN_GUID": $scope.REGN_GUID
                }
            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);

            v_post_json_data.then(function (val) {
                var data = val.data;
                if (data != "")
                {
                    if (data[0].ProductId == 13 || data[0].ProductId == 14 || data[0].ProductId == 9 || data[0].ProductId == 10)
                    {
                        $location.url('/my-orders');
                    }
                    else
                    {
                    $scope.OrderID = data[0].OrderId;
                    sessionStorage.setItem('OrderId', $scope.OrderID);

                    GetOrderDetail();
                    getcriteria();
                    getCountryState();
                    $scope.criteriadetail = {};
                    $scope.Onsave = false;
                    }
                }
            }, function (error) {
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });


        }
        else {
            $scope.OrderID = sessionStorage.getItem('OrderId');
            $scope.OrderID = getUrlParameter('id');
            GetOrderDetail();
            getcriteria();
            getCountryState();
            $scope.criteriadetail = {};
            $scope.Onsave = false;
        }

    };
    Page_load();

    function MonthYear() {
        var v_http_link = "Routes/monthYear";
        var v_push_template = {
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                //var data1 = JSON.parse(data);
                $scope.MonthNames = data.month;
                $scope.Years = data.year;

            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    };
    //MonthYear();

    function getCountryState() {

        var v_http_link = "Routes/getCountryState";
        var v_push_template = {
        }

        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            //console.log(JSON.stringify(data));
            if (data.flag == "True") {
                $scope.CountryList = data.CountryList;
                //$scope.StateList = data.StateList;
            }
            else {
                $scope.CountryList = [];
                //$scope.StateList = [];
            }
        }, function (error) {
            $scope.CountryList = [];
            //$scope.StateList = [];
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    function GetOrderDetail() {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }

        if ($scope.res == undefined || $scope.res == null || $scope.res == '')
        { 
            $scope.OrderID = sessionStorage.getItem('OrderId'); 
            $scope.FromMail=0;
        }
        else
        { 
            $scope.OrderID = $scope.res;
             $scope.FromMail=1;
        }

        $scope.emailOrderId = sessionStorage.getItem('emailOrderId'); 
        var v_http_link = "Routes/moreinfopagebind";
        var v_push_template = {
            "OrderId": $scope.OrderID,
            "REGN_GUID": $scope.REGN_GUID,
            "FromMail": $scope.FromMail,
            "EmailOrderId":$scope.emailOrderId

        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "")
            {
                $scope.OrderStatus = data[0].OrderStatus;
                if ($scope.OrderStatus == 0 || $scope.OrderStatus == 2)
                {
                    $scope.firstName = data[0].FirstName;
                    $scope.middleName = data[0].MiddleName;
                    $scope.lastName = data[0].LastName;
                    $scope.mobileno = data[0].MobileNo;
                    //var name = document.getElementById("dob1");
                    //name.value = data[0].Date_Of_Birth;             
                    $scope.dob = data[0].Date_Of_Birth;
                    $scope.Years = data[0].Years,
                    $scope.MonthNames = data[0].MonthNames,
                    $scope.Days = data[0].Days,
                    $scope.gender = data[0].Gender;
                    $scope.productid = data[0].ProductId;
                    $scope.Remarks = data[0].Remarks;

                    $scope.Name1 = data[0].Name1;
                    $scope.Name2 = data[0].Name2;
                    $scope.Name3 = data[0].Name3;
                    $scope.Name4 = data[0].Name4;
                    $scope.Name5 = data[0].Name5;


                    set_tabs_by_productId($scope.productid);

                    $scope.dvconfirmdetail = true;
                    $scope.dvcontinuedetail = false;
                    $scope.dvanynamedetail = false;
                    $scope.dvSummary = false;
                    //$scope.dvConfirmYesdtl = false;
                    $scope.dvConfirmNodtl = false;
                    if (data[0].ProductId == "2") {
                        $scope.firstNM = true;
                    }
                }
                else
                {
                   // $location.url('/my-orders');
                }
            }
            else
            {
                $scope.firstName = "";
                $scope.middleName = "";
                $scope.lastName = "";
                $scope.mobileno = "";
                //var name = document.getElementById("dob1");
                //name.value = data[0].Date_Of_Birth;             
                $scope.dob = "";
                $scope.Years = "",
                $scope.MonthNames = "",
                $scope.Days = "",
                $scope.gender = "";
                $scope.productid = "";
                $scope.Remarks = "";

                $scope.Name1 = "";
                $scope.Name2 = "";
                $scope.Name3 = "";
                $scope.Name4 = "";
                $scope.Name5 = "";


                set_tabs_by_productId($scope.productid);

                $scope.dvconfirmdetail = true;
                $scope.dvcontinuedetail = false;
                $scope.dvanynamedetail = false;
                $scope.dvSummary = false;
                //$scope.dvConfirmYesdtl = false;
                $scope.dvConfirmNodtl = false;
                //if (data[0].ProductId == "2") {
                //    $scope.firstNM = true;
                //}
            }
           
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    function getcriteria() {

        var v_http_link = "Routes/getCriteria";
        var v_push_template =
            {
            }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.criteriadetail = data;
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    function validation() {
        $scope.errormsg = "";
        $scope.errormsg1 = "";
        if ($scope.errormsg == "") {
            $scope.errormsg = "Please Enter following : ";
        }
        if ($scope.productid == "2") {
            if ($scope.firstName == "" || $scope.firstName == null || $scope.firstName == undefined) {
                if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "First Name " } else { $scope.errormsg += " ,First Name " };
            }
        }
        if ($scope.lastName == "" || $scope.lastName == null || $scope.lastName == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Last Name " } else { $scope.errormsg += " ,Last Name " };
        }
        if ($scope.mobileno == "" || $scope.mobileno == null || $scope.mobileno == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "MobileNo " } else { $scope.errormsg += " ,MobileNo" };
        }
        if ($scope.Years == "" || $scope.Years == null || $scope.Years == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Birth Year " } else { $scope.errormsg += " ,Birth Year" };
        }
        if ($scope.MonthNames == "" || $scope.MonthNames == null || $scope.MonthNames == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Birth Month " } else { $scope.errormsg += " ,Birth Month" };
        }
        if ($scope.Days == "" || $scope.Days == null || $scope.Days == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Birth Date " } else { $scope.errormsg += " ,Birth Date" };
        }
        if ($scope.errormsg == "Please Enter following : ") {
            var monthno = globals.f_Month_Val($scope.MonthNames);
            var Date = monthno + "/" + $scope.Days + "/" + $scope.Years;
            if (globals.ValidateForm(Date)) {
                return true;
            }
            else {
                $scope.errormsg = "Invalid Date";
                return false;
            }
        }
        else {
            return false;
        }
    }

    function save() {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        var birthTime = '';
        var dob = '';
        var PreferedAlphabets = '';

        getOrderStatus();
        if ($scope.res == undefined || $scope.res == null || $scope.res == '') {
            $scope.OrderID = sessionStorage.getItem('OrderId');
            
        }
        else {
            $scope.OrderID = $scope.res;
           
        }
        if (($scope.hour == undefined || $scope.min == undefined || $scope.ampm == undefined) || ($scope.hour == null || $scope.min == null || $scope.ampm == null) || ($scope.hour == '' || $scope.min == '' || $scope.ampm == '')) {
            birthTime = '';
        }
        else {
            birthTime = $scope.hour + ":" + $scope.min + " " + $scope.ampm;
        }

        if (($scope.Days == undefined || $scope.MonthNames == undefined || $scope.Years == undefined) || ($scope.Days == null || $scope.MonthNames == null || $scope.Years == null) || ($scope.Days == '' || $scope.MonthNames == '' || $scope.Years == '')) {
            dob = '';
        }
        else {
            dob = $scope.Years + " - " + $scope.MonthNames + " - " + $scope.Days;
        }
        if (($scope.PreferedAlphabets == undefined || $scope.PreferedAlphabets1 == undefined) || ($scope.PreferedAlphabets == null || $scope.PreferedAlphabets1 == null) || ($scope.PreferedAlphabets == '' || $scope.PreferedAlphabets1 == '')) {
            PreferedAlphabets = '';
        }
        else {
            PreferedAlphabets = $scope.PreferedAlphabets + "," + $scope.PreferedAlphabets1;

        }
        var v_http_link = "Routes/saveInfoDetails";
        var v_push_template = {
            "orderID": $scope.OrderID,
            "firstName": $scope.firstName,
            "middleName": $scope.middleName,
            "lastName": $scope.lastName,
            //"dob": $scope.dob,
            "dob": dob,
            "placeOfBirth": $scope.Country, //$scope.placeOfBirth,
            "birthCity": $scope.birthCity,
            "birthTime": birthTime,
            "gender": $scope.gender,
            "mobileno": $scope.mobileno,
            "remarks": $scope.Remarks,
            "Name1": $scope.Name1,
            "Name2": $scope.Name2,
            "Name3": $scope.Name3,
            "Name4": $scope.Name4,
            "Name5": $scope.Name5,
            "AlterNameSpell": $scope.AlterNameSpell,
            "AlterLNameSpell": $scope.AlterLNameSpell,
            "PreferedAlphabets": PreferedAlphabets, //$scope.PreferedAlphabets + "," + $scope.PreferedAlphabets1,
            "Criteria": $scope.criteriaselection,
            "MotherName": $scope.MotherName,
            "FatherName": $scope.FatherName,
            "Sibling1": $scope.Sibling1,
            "Sibling2": $scope.Sibling2,
            "Sibling3": $scope.Sibling3,
            "rhymewithparents": $scope.rhymewithparents,
            "MaxLengthName": $scope.MaxLengthName,
            "OptionalmiddleName": $scope.OptionalmiddleName,
            "OrderStatus": $scope.OrderStatus,
            "REGN_GUID": $scope.REGN_GUID
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.Successflag = data[0].flag;
                if ($scope.Successflag == true) {
                    if ($scope.productid == "2") {
                        $scope.errormsg3 = "Thank You For Providing Details.";
                        $scope.Onsave = true;
                    }
                    else {
                        $scope.errormsg3 = "Thank You For Providing Details.";
                        $scope.Onsave = true;
                    }
                }
                else {
                    $scope.errormsg3 = data[0].msg;
                    $scope.Onsave = false;
                }
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    };

    function f_clear() {
        $scope.errormsg = "";
        $scope.errormsg1 = "";
        $scope.errormsg2 = "";
        $scope.errormsg3 = "";
        $scope.firstName = "",
        $scope.middleName = "",
        $scope.lastName = "",
        $scope.Years = "",
        $scope.MonthNames = "",
        $scope.Days = "",
        $scope.placeOfBirth = "",
		$scope.birthCity = "",
        $scope.hour = "",
        $scope.min = "",
        $scope.ampm = "",
        $scope.gender = "",
        $scope.mobileno = "",
        $scope.Name1 = "",
        $scope.Name2 = "",
        $scope.Name3 = "",
        $scope.Name4 = "",
        $scope.Name5 = "",
        $scope.AlterNameSpell = "",
        $scope.AlterLNameSpell = "",
        $scope.PreferedAlphabets = "",
        $scope.MotherName = "",
        $scope.FatherName = "",
        $scope.Sibling1 = "",
        $scope.Sibling2 = "",
        $scope.Sibling3 = "",
        $scope.MaxLengthName = "",
        getcriteria();
    };

    $('input:radio[name=mf]').click(function () {
        var mf = $('input:radio[name=mf]:checked').val();
        $scope.gender = mf;
        //$('#txtGender').val(mf);
    });

    $scope.f_getday = function () {
        var v_http_link = "Routes/getdays";
        var v_push_template = {
            "Month": $scope.MonthNames,
            "year": $scope.Years
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.Days = data.Days;
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    };

    $scope.fn_Cancel = function () {
        f_clear();
        GetOrderDetail();
    }

    $scope.fn_Submit = function () {
        $scope.errormsg = "";
        $scope.errormsg1 = "";
        $scope.errormsg1 = "";
        save();
    };

    $scope.fn_Confirm = function () {

        if (validation()) {
            $scope.errormsg = "";
            if ($scope.productid == "2") {
                $scope.dvconfirmdetail = false;
                $scope.dvSummary = true;
            }
            else {

                $scope.dvconfirmdetail = false;
                $scope.dvcontinuedetail = false;
                $scope.dvanynamedetail = true;
                $scope.dvSummary = false;
                $scope.dvConfirmNodtl = false;
            }
        } else {
            console.log("validation error");
        }

    };

    $scope.fn_Back1 = function () {
        $scope.dvconfirmdetail = true;
        $scope.dvcontinuedetail = false;
        $scope.dvanynamedetail = false;
        $scope.dvSummary = false;
        //$scope.dvConfirmYesdtl = false;
        $scope.dvConfirmNodtl = false;
    }

    $scope.fn_Next1 = function () {
        $scope.dvconfirmdetail = false;
        $scope.dvcontinuedetail = false;
        $scope.dvanynamedetail = true;
        $scope.dvSummary = false;
        //$scope.dvConfirmYesdtl = false;
        $scope.dvConfirmNodtl = false;
    };

    $scope.fn_Back2 = function () {
        $scope.dvconfirmdetail = true;
        $scope.dvcontinuedetail = false;
        $scope.dvanynamedetail = false;
        $scope.dvSummary = false;
        $scope.dvConfirmNodtl = false;
    }

    $scope.fn_Next2 = function () {
        $scope.errormsg = "";
        $scope.errormsg1 = "";
        if ($scope.Name1 == "" || $scope.Name1 == null || $scope.Name1 == undefined) {
            $scope.errormsg1 = "Please Enter Atleast 1 Name."
            return false;
        }
        $scope.dvConfirmNodtl = true;
        $scope.dvanynamedetail = false;
        $scope.dvcontinuedetail = false;
        $scope.dvSummary = false;
    }

    $scope.fn_Back3 = function () {
        $scope.dvanynamedetail = true;
        $scope.dvConfirmNodtl = false;
        $scope.dvSummary = false;
    }

    $scope.fn_Next3 = function () {
        $scope.criteriaselection = "";
        $scope.criteriaName = "";
        $scope.cr = $scope.criteriadetail.filter(
        function (value) {
            if (value.Checked == true) {
                if ($scope.criteriaselection == "") {
                    $scope.criteriaselection = value.rowno;
                    $scope.criteriaName = value.Criteria_Name;
                }
                else {
                    $scope.criteriaselection = $scope.criteriaselection + "," + value.rowno;
                    $scope.criteriaName = $scope.criteriaName + "," + value.Criteria_Name;
                }
                return true;
            }
            else {
                return false;
            }
        });
        if ($scope.criteriaselection == "") {
            $scope.errormsg2 = "Select Criteria."
            return false;
        }
        $scope.dvConfirmNodtl = false;
        $scope.dvSummary = true;
    }
}

moreinfopageController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];