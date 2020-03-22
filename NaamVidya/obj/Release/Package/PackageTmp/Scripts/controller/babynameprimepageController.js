var babynameprimepageController = function ($scope, $location, commonService, globals, ngMeta, $rootScope) {
    console.log('babynameprimepageController controller reporting for duty.');
    ngMeta.setTitle('Detail Info Page', ' | Naamvidya');
    $("#body").removeClass("home-layout");
    // Commented Because it will take to our login page.
    //if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
    //    $location.url('/login');
    //}
    if (sessionStorage.getItem('ProductId') == undefined || sessionStorage.getItem('ProductId') == null || sessionStorage.getItem('ProductId') == '') {
        //alert("Invalid Url");
        $location.url('/login');
    }
    $scope.track = "0";
    $scope.maintrack = $scope.track;

    $scope.productid = sessionStorage.getItem('ProductId'); //Set Product Id global parameter
    console.log('$scope.productid : ' + $scope.productid);
    $scope.ngShowButton = true;
    //alert($scope.productid);
    if ($scope.productid == 2)
    {
        $scope.ngShowButton = true;
       
    }
    else
    {
        $scope.ngShowButton = false;
       

    }

    $scope.product_price = 3700;
    if ($scope.productid == 2) {
        $scope.ngShowFirstName = true;
        $scope.neworcorrection = "C";
        $scope.telephonicCheck = false;
        $scope.product_price = 3700;
    }
    else if ($scope.productid == 5) {
        $scope.ngShowFirstName = true;
        $scope.neworcorrection = "C";
        $scope.telephonicCheck = true;
        $scope.product_price = 7300;
    }
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
    $('input:radio[name=nc]').click(function () {
        var mf = $('input:radio[name=nc]:checked').val();
        $scope.neworcorrection = mf;
        clear();
        //alert($scope.neworcorrection);
        if ($scope.neworcorrection == "C") {
            $scope.ngShowFirstName = true;
            sessionStorage.setItem('ProductId', 2);
            $scope.product_price = 3700;
        }
        else {
            $scope.ngShowFirstName = false;
            sessionStorage.setItem('ProductId', 4);
            $scope.product_price = 3700;
        }
        $scope.productid = sessionStorage.getItem('ProductId');
        //set_teleCons_productId($scope.productid);
    });
    $scope.f_click_nameType = function (p_data) {
        $scope.neworcorrection = p_data;
        if ($scope.neworcorrection == "C") {
            $scope.ngShowFirstName = true;
            sessionStorage.setItem('ProductId', 2);
            $scope.product_price = 3700;
        }
        else {
            $scope.ngShowFirstName = false;
            sessionStorage.setItem('ProductId', 4);
            $scope.product_price = 3700;
        }
        $scope.productid = sessionStorage.getItem('ProductId');
        set_teleCons_productId($scope.productid);
    }
    $scope.f_tele_consult_click = function () {
        $scope.productid = sessionStorage.getItem('ProductId');
        set_teleCons_productId($scope.productid);
    }
    function set_teleCons_productId(productid) {
        if ($scope.telephonicCheck == true) {
            if (productid == 2) {
                sessionStorage.setItem('ProductId', 5);
                $scope.productid = 5;
                $scope.product_price = 7300;
            }
            else if (productid == 3) {
                sessionStorage.setItem('ProductId', 6);
                $scope.productid = 6;
                $scope.product_price = 7300;
            } else if (productid == 4) {
                sessionStorage.setItem('ProductId', 7);
                $scope.productid = 7;
                $scope.product_price = 7300;
            }
        }
        else {
            if (productid == 5) {
                sessionStorage.setItem('ProductId', 2);
                $scope.productid = 2;
                $scope.product_price = 3700;
            }
            else if (productid == 6) {
                sessionStorage.setItem('ProductId', 3);
                $scope.productid = 3;
                $scope.product_price = 3700;
            } else if (productid == 7) {
                sessionStorage.setItem('ProductId', 4);
                $scope.productid = 4;
                $scope.product_price = 3700;
            }
        }
    }
    $('input:radio[name=mf]').click(function () {
        var mf = $('input:radio[name=mf]:checked').val();
        //$scope.gender = mf;
        $('#txtGender').val(mf);
    });
    $scope.f_click_gender = function (p_data) {
        $scope.gender = p_data;
        console.log(p_data);
    }

    $scope.onCategoryChange = function (val) {

        var element = document.getElementById('track');
        if (val == 'Others') {
            $scope.txttrack = "";
            element.style.display = 'block';
            $scope.trackflag = 'true';
        }
        else {
            $scope.txttrack = "";
            $scope.trackflag = 'false';
            element.style.display = 'none';
            $scope.maintrack = $scope.track;
        }
    };

    function validation()
    { 
        $scope.errormsg = "";
        $scope.maintrack = $scope.track;
        if ($scope.errormsg == "")
        {
            $scope.errormsg = "Please Enter following : ";

            if ($scope.productid == 2)
            {
       
                if ($scope.firstName == "" || $scope.firstName == null || $scope.firstName == undefined)
                {
                    $scope.errormsg += "First Name";
                }
            }
            if ($scope.lastName == "" || $scope.lastName == null || $scope.lastName == undefined)
            {
                if ($scope.errormsg == "Please Enter following : " && $scope.productid != 2)
                { $scope.errormsg += "Last Name" }
                else
                {
                    $scope.errormsg += " ,Last Name"
                };
            }
            if ($scope.mobileno == "" || $scope.mobileno == null || $scope.mobileno == undefined)
            {
                if ($scope.errormsg == "Please Enter following : ")
                {
                    $scope.errormsg += "MobileNo"
                }
                else
                {
                    $scope.errormsg += " ,MobileNo"
                };
            }
            if ($scope.PYears == "" || $scope.PYears == null || $scope.PYears == undefined)
            {
                if ($scope.errormsg == "Please Enter following : ")
                {
                    $scope.errormsg += "Appointment Year"
                }
                else
                {
                    $scope.errormsg += " ,Appointment Year"
                };
            }
            if ($scope.PMonthNames == "" || $scope.PMonthNames == null || $scope.PMonthNames == undefined)
            {
                if ($scope.errormsg == "Please Enter following : ")
                {
                    $scope.errormsg += "Appointment Month "
                } else
                {
                    $scope.errormsg += " ,Appointment Month"
                };
            }
            if ($scope.PDays == "" || $scope.PDays == null || $scope.PDays == undefined) {
                if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Appointment Date " } else {
                    $scope.errormsg += " ,Appointment Date"
                };
            }
            if ($scope.hour == "" || $scope.hour == null || $scope.hour == undefined) {
                if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Appointment Hour" } else {
                    $scope.errormsg += " ,Appointment Hour"
                };
            }
            if ($scope.min == "" || $scope.min == null || $scope.min == undefined) {
                if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Appointment Minutes " } else {
                    $scope.errormsg += " ,Appointment Minutes"
                };
            }

            if ($scope.ampm == "" || $scope.ampm == null || $scope.ampm == undefined)
            {
                if ($scope.errormsg == "Please Enter following : ")
                {
                    $scope.errormsg += "Appointment AM/PM "
                }
                else
                {
                    $scope.errormsg += " ,Appointment AM/PM"
                };
            }
            if ($scope.gender == "" || $scope.gender == null || $scope.gender == undefined)
            {
                if ($scope.errormsg == "Please Enter following : ")
                {
                    $scope.errormsg += "Gender"
                }
                else
                {
                    $scope.errormsg += " ,Gender"
                };
            }
            if ($scope.maintrack == "" || $scope.maintrack == null || $scope.maintrack == undefined || $scope.maintrack == "0" || $scope.maintrack == "Others")
            {
                if ($scope.trackflag == 'true')
                {
                    if ($scope.txttrack == "" || $scope.txttrack == null || $scope.txttrack == undefined)
                    {
                        if ($scope.errormsg == "Please Enter following : ")
                        {
                            $scope.errormsg += "How did you hear about us?"
                        }
                        else
                        {
                            $scope.errormsg += " ,How did you hear about us?"
                        };
                    }
                }
                else
                {
                    if ($scope.errormsg == "Please Enter following : ")
                    {
                        $scope.errormsg += "How did you hear about us?"
                    }
                    else
                    {
                        $scope.errormsg += " ,How did you hear about us?"
                    };

                }
            }
            if ($scope.PDays != "")
            {
                var monthno = globals.f_Month_Val($scope.PMonthNames);
                var Date1 = monthno + "/" + $scope.PDays + "/" + $scope.PYears; // Date to pass in MM/DD/YYYY
                $scope.dob = Date1;
                var newdate = new Date();
                dt1 = new Date(Date1);
                dt2 = new Date(newdate);
                dt2.setHours(0, 0, 0, 0)

                if (globals.ValidateForm(Date1))
                {
		   
                    if (dt2 > dt1) {
				
                        $scope.errormsg = "Invalid Appointment Date";
                        return false
                    }

                }
                else
                {
                    //alert("Invalid");
                    $scope.errormsg = "Invalid Date Format";
                    return false;
                }
            }
            if ($scope.ampm != "")
            {
	    
                if ($scope.ampm == "AM")
                {
                    if ($scope.hour < "10")
                    {

                        $scope.errormsg = "Appointment time Should be 10 am to 4:30 pm";
                        return false
                    }
                    if ($scope.hour == "12")
                    {
                        $scope.errormsg = "Please Set Time as PM";
                        return false

                    }
	       
                }
                if ($scope.ampm == "PM")
                {
                    if ($scope.hour < "01")
                    {

                        $scope.errormsg = "Appointment time Should be 10 am to 4:30 pm";
                        return false
                    }
                    if ($scope.hour > "04" && $scope.hour !="12") {

                        $scope.errormsg = "Appointment time Should be 10 am to 4:30 pm";
                        return false
                    }
                }

            }
            if ($scope.hour == "04")
            {
	   
                if ($scope.min > "30")
                {

                    $scope.errormsg = "Appointment time shold be 10 am to 4:30 pm";
                    return false
                }
	   
            }
            //else
            //{
            //    return false;
            //}
        }
        //else
        //{
            $scope.errormsg = "";
            return true;
        //}
        
    }
	



$scope.fn_Add_To_Cart = function () {


    if (validation()) {
        //alert("validation done");
        $scope.msgdone = true;
        $scope.msgerror = false;
        $scope.errormsg = "";

        console.log("validation done");
        if (commonService.get_cookies_data('GUID') == "null") {
            commonService.remove_cookies_data("GUID");
        }

        if ($scope.txttrack.length > 0) {
            $scope.maintrack = $scope.txttrack;
        }

        if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
            //commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
            //alert("REGN_GUID :" + $scope.REGN_GUID);
            AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.productid, $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno, $scope.Remarks, $scope.maintrack);
            //AddToCart("", sessionStorage.getItem('REGN_GUID'), $scope.productid, $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno)
            $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
            if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
                $location.url('/login');
                //alert("REGN_GUID :" + $scope.REGN_GUID);
            }
        }
        else {
            commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
            //commonService.put_cookies_data('GUID', data[0].REGN_GUID);
            //alert("REGN_GUID :" + $scope.REGN_GUID);
            AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.productid, $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno, $scope.Remarks, $scope.maintrack);
        }
    }
    else {
        $scope.msgdone = false;
        $scope.msgerror = true;
    }
}
$scope.fn_View_Cart = function () {
    //alert("fn_View_Cart");
    $location.url('/my-cart-detail');
}
function AddToCart(TEMP_GUID, REGN_GUID, PoductId, FirstName, MiddleName, LastName, DOB, Gender, MobileNo, Remarks, track) {
    var v_http_link = "Routes/AddToCart";
    var v_push_template = {
        "TEMP_GUID": TEMP_GUID,
        "REGN_GUID": REGN_GUID,
        "ProductId": PoductId,
        "FirstName": FirstName,
        "MiddleName": MiddleName,
        "LastName": LastName,
        "App_Date": $scope.PDays + "-" + $scope.PMonthNames + "-" + $scope.PYears,
        "App_Time": $scope.hour + "-" + $scope.min + "-" + $scope.ampm,
        "Date_Of_Birth": "",
        "Gender": Gender,
        "MobileNo": MobileNo,
        "Remarks": Remarks,
        "track": track
    }
    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
    v_post_json_data.then(function (val) {
        var data = val.data;
        if (data != "") {
            console.log(JSON.stringify(data));
            commonService.put_cookies_data('GUID', data[0].REGN_GUID);
            //alert(commonService.get_cookies_data('GUID'));
            $scope.errormsg = "Service added to cart successfully.";
            CountOfMyCart();
            var redirecturl = sessionStorage.getItem('pageToRedirect');
            if (redirecturl == null) {
                sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
            } else {
                sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
            }
            clear();
        }
    }, function (error) {
        alert('Fail : ' +error.status + ' ' +error.statusText);
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
        alert('Fail : ' +error.status + ' ' +error.statusText);
    });
}
function clear() {
    $scope.firstName = "";
    $scope.dob = "";
    $scope.lastName = "";
    $scope.middleName = "";
    $scope.mobileno = "";
    $scope.gender = "";
    $scope.Years = "";
    $scope.MonthNames = "";
    $scope.Days = "";
    $scope.PYears = "";
    $scope.PMonthNames = "";
    $scope.PDays = "";
    $scope.hour = "";
    $scope.min = "";
    $scope.ampm = "";
    $scope.Remarks = "";
    $scope.telephonicCheck = false;

    $scope.track ="0";

    $scope.txttrack = "";
    var element = document.getElementById('track');
    element.style.display = 'none';
}
if ($scope.productid == 3) {
    $scope.ngshowFName = true;
}
else {
    $scope.ngshowFName = false;
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
//$scope.Validate_DateFormat = function () {
//    var monthno = globals.f_Month_Val($scope.MonthNames);
//    console.log("monthno : " + monthno);
//    var Date = monthno + "/" + $scope.Days + "/" + $scope.Years; // Date to pass in MM/DD/YYYY
//    if(globals.ValidateForm(Date))
//    {
//        alert("Valid");
//    else
//    {
//        alert("Invalid");
//    }
//};
//// Declaring valid date character, minimum year and maximum year
//var dtCh = "/";
//var minYear = 1900;
//var maxYear = 2100;
//function isInteger(s) {
//    var i;
//    for (i = 0; i < s.length; i++) {
//        // Check that current character is number.
//        var c = s.charAt(i);
//        if (((c < "0") || (c > "9"))) return false;
//    }
//    // All characters are numbers.
//    return true;
//}
//function stripCharsInBag(s, bag) {
//    var i;
//    var returnString = "";
//    // Search through string's characters one by one.
//    // If character is not in bag, append to returnString.
//    for (i = 0; i < s.length; i++) {
//        var c = s.charAt(i);
//        if (bag.indexOf(c) == -1) returnString += c;
//    }
//    return returnString;
//}
//function daysInFebruary(year) {
//    // February has 29 days in any year evenly divisible by four,
//    // EXCEPT for centurial years which are not also divisible by 400.
//    return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
//}
//function DaysArray(n) {
//    for (var i = 1; i <= n; i++) {
//        this[i] = 31
//        if (i == 4 || i == 6 || i == 9 || i == 11) { this[i] = 30 }
//        if (i == 2) { this[i] = 29 }
//    }
//    return this
//}
//function isDate(dtStr) {
//    var daysInMonth = DaysArray(12)
//    var pos1 = dtStr.indexOf(dtCh)
//    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
//    var strMonth = dtStr.substring(0, pos1)
//    var strDay = dtStr.substring(pos1 + 1, pos2)
//    var strYear = dtStr.substring(pos2 + 1)
//    strYr = strYear
//    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
//    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
//    for (var i = 1; i <= 3; i++) {
//        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
//    }
//    month = parseInt(strMonth)
//    day = parseInt(strDay)
//    year = parseInt(strYr)
//    if (pos1 == -1 || pos2 == -1) {
//        //alert("The date format should be : mm/dd/yyyy")
//        return false
//    }
//    if (strMonth.length < 1 || month < 1 || month > 12) {
//        //alert("Please enter a valid month")
//        return false
//    }
//    if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
//        //alert("Please enter a valid day")
//        return false
//    }
//    if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
//        //alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear)
//        return false
//    }
//    if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
//        //alert("Please enter a valid date")
//        return false
//    }
//    return true
//}
//function ValidateForm(DateValue) {
//    var dt = DateValue
//    if (isDate(dt) == false) {
//        //dt.focus()
//        return false
//    }
//    return true
//}
//getProduct();
//getcriteria();
//$scope.fn_Continue = function () {
//    $scope.dvconfirmdetail = false;
//    $scope.dvcontinuedetail = false;
//    $scope.dvanynamedetail = true;
//    $scope.dvConfirmYesdtl = false;
//    $scope.dvConfirmNodtl = false;
//};
//$scope.fn_Confirm_Yes = function () {
//    $scope.dvconfirmdetail = false;
//    $scope.dvcontinuedetail = false;
//    $scope.dvanynamedetail = false;
//    $scope.dvConfirmYesdtl = true;
//    $scope.dvConfirmNodtl = false;
//};
//$scope.fn_Confirm_No = function () {
//    $scope.dvconfirmdetail = false;
//    $scope.dvcontinuedetail = false;
//    $scope.dvanynamedetail = false;
//    $scope.dvConfirmYesdtl = false;
//    $scope.dvConfirmNodtl = true;
//};
//$scope.fn_Submit = function () {
//    var v_http_link = "Routes/SaveOrderDetail"; // MakePayUMoneyPayment
//    var v_push_template = {
//        "User_Id": 0,
//        "ProductId": $scope.product,
//        "MiddleName": $scope.middleName,
//        "LastName": $scope.lastName,
//        "Date_Of_Birth": $scope.dob,
//        "Gender": $scope.gender, //"M"
//        "Price": $scope.price,
//        "Voucher":$scope.voucher,
//        "PayUMoney_Amt": $scope.finalprice,
//        "Name1": $scope.Name1,
//        "Name2": $scope.Name2,
//        "Name3": $scope.Name3,
//        "Name4": $scope.Name4,
//        "Name5": $scope.Name5,
//        "namespell": $scope.namespell,
//        "lastnamespell": $scope.lastnamespell,
//        "Alphabets": $scope.Alphabets,
//        "MotherName": $scope.MotherName,
//        "FatherName": $scope.FatherName,
//        "Sibling1": $scope.Sibling1,
//        "Sibling2": $scope.Sibling2,
//        "Sibling3": $scope.Sibling3,
//        "maxlength": $scope.maxlength
//    }
//    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
//    v_post_json_data.then(function (val) {
//        var data = val.data;
//        if (data != "") {
//            $scope.dvbasictl = false;
//            $scope.dvproductdtl = false;
//            $scope.dvcontinuedetail = true;
//            //console.log(JSON.stringify(data));
//            //$scope.product = data[0].productid;
//            //$scope.price = data[0].price
//            //$scope.finalprice = data[0].finalprice
//            //$scope.dvbasictl = false;
//            //$scope.dvproductdtl = true;
//        }
//    }, function (error) {
//        console.log(JSON.stringify(v_push_template));
//    });
//    };
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
babynameprimepageController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$rootScope'];