var OrderPlatinumComboController = function ($scope, $location, commonService, globals, ngMeta, $rootScope) {
    console.log('Order Platinum Combo Controller reporting for duty.');

    ngMeta.setTitle('Numerology name correction | Numerology name change', ' | Naamvidya');
    ngMeta.setTag('keywords', 'Numerology name correction, Numerology name change');
    ngMeta.setTag('description', 'If you wish to getnumerology name changeand ensure a better life and future for yourself, visit Naamvidya and getnumerology name correctionby experts in the field.');

    $("#body").removeClass("home-layout");

  

    if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '')
    {
        //alert("Invalid Url");
        sessionStorage.setItem('pageToRedirect', '/OrderPlatinumCombo');
        $location.url('/login');
    }
  

    $scope.productid = sessionStorage.getItem('ProductIdCombo'); //Set Product Id global parameter
    $scope.trimComboName = $scope.productid.trim();
    var a = $scope.trimComboName.split(',');
   
    console.log('$scope.productid : ' + $scope.productid);

    console.log('Product One : ' + a[0]);
    console.log('Product two : ' + a[1]);

    function f_setClientPocData() {
        $scope.f1 = {
            "track": 0, "firstName": "", "lastName": "", "mobileno": "", "Years": "", "MonthNames": "", "Days": "", "gender": "",
            "maintrack": "", "errormsg": ""
        };
        $scope.f2 = {
            "track": 0, "firstName": "", "lastName": "", "mobileno": "", "Years": "", "MonthNames": "", "Days": "", "gender": "",
            "maintrack": "", "errormsg": ""
        };
    };
    f_setClientPocData();
    $scope.f1.next = true;//--To active next give false
    $scope.f1.Cart = false;
    $scope.f2.Cart = false;
    $scope.f2.ViewCart = true;


   //----------------------------------Code for first slider------------------------------------------------
  
    $scope.f1.track = "0";
    $scope.f1.maintrack = $scope.f1.track;

    //$scope.productid = 2;
    $scope.f1.productid = a[0];

    // alert(a[0]);

  
    $scope.f1.AGold = false;     //2
    $scope.f1.APlatinum = false; //7
    $scope.f1.BPlatinum = false; //8

    if ($scope.f1.productid == '2')
    {
        $scope.f1.malefemale = true;
        $scope.f1.boygirl = false;

        $scope.f1.AGold = true;//2
    }
    if ($scope.f1.productid == '8')
    {
        $scope.f1.malefemale = false;
        $scope.f1.boygirl = true;

        $scope.f1.BPlatinum = true; //8
    }
    if ($scope.f1.productid == '7')
    {
        $scope.f1.malefemale = true;
        $scope.f1.boygirl = false;

        $scope.f1.APlatinum = true; //7
    }
    $scope.product_price = 3700;
    if ($scope.f1.productid == 2) {
        $scope.f1.ngShowFirstName = true;
        $scope.f1.neworcorrection = "C";
        $scope.f1.telephonicCheck = false;
        $scope.product_price = 3700;
      
    }
    if ($scope.f2.productid == '8')
    {
        console.log('$scope.f2.productid == 8 $scope.malefemale = false;');
        $scope.f2.malefemale = false;
        $scope.f2.boygirl = true;
    }
    else if ($scope.f1.productid == 7)
    {
        $scope.f1.ngShowFirstName = true;
        $scope.f1.neworcorrection = "C";
        $scope.f1.telephonicCheck = true;
        $scope.product_price = 7300;
      
    }
    $scope.f1.dvbasictl = true;
    $scope.f1.dvproductdtl = false;
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $scope.fn_next = function () {

        $(function () {
            $('html, body').animate({
                scrollTop: $('.myscroll').offset().top
            }, 2000);
            return false;
        });
    }
    $scope.f_click_nameType_first = function (p_data)
    {
        $scope.f1.neworcorrection = p_data;
        if ($scope.f1.neworcorrection == "C")
        {
            $scope.f1.ngShowFirstName = true;
           // sessionStorage.setItem('ProductId', 2);
            //$scope.product_price = 3700;
        }
        else
        {
            $scope.f1.ngShowFirstName = false;
           // sessionStorage.setItem('ProductId', 4);
           // $scope.product_price = 3700;
        }
        $scope.productid = sessionStorage.getItem('ProductId');
        set_teleCons_productId($scope.productid);
    }
    $scope.f_tele_consult_click = function () {
        $scope.productid = sessionStorage.getItem('ProductId');
        set_teleCons_productId($scope.productid);
    }
    function set_teleCons_productId(productid)
    {
        if ($scope.f1.telephonicCheck == true) {
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
    $scope.f_click_gender_first = function (p_data) {
        $scope.f1.gender = p_data;
        console.log(p_data);
    }

    $scope.onCategoryChange_first = function (val)
    {
        var element = document.getElementById('f_track');
        if (val == 'Others') {
            $scope.f1.txttrack = "";
            element.style.display = 'block';
            $scope.f1.trackflag = 'true';
        }
        else {
            $scope.f1.txttrack = "";
            $scope.f1.trackflag = 'false';
            element.style.display = 'none';
            $scope.f1.maintrack = $scope.f1.track;
        }
    };

   
    function validation_first()
    {
        $scope.f1.errormsg = "";
        $scope.f1.maintrack = $scope.f1.track;
        if ($scope.f1.errormsg == "")
        {
            $scope.f1.errormsg = "Please Enter following : ";
        }
        if ($scope.f1.productid == 2)
        {
            if ($scope.f1.firstName == "" || $scope.f1.firstName == null || $scope.f1.firstName == undefined) {
                $scope.f1.errormsg += "First Name";
            }
        }
        if ($scope.f1.lastName == "" || $scope.f1.lastName == null || $scope.f1.lastName == undefined) {
            if ($scope.f1.errormsg == "Please Enter following : " && $scope.f1.productid != 2) { $scope.f1.errormsg += "Last Name" } else { $scope.f1.errormsg += " ,Last Name" };
        }
        if ($scope.f1.mobileno == "" || $scope.f1.mobileno == null || $scope.f1.mobileno == undefined) {
            if ($scope.f1.errormsg == "Please Enter following : ") { $scope.f1.errormsg += "MobileNo" } else { $scope.f1.errormsg += " ,MobileNo" };
        }
        if ($scope.f1.Years == "" || $scope.f1.Years == null || $scope.f1.Years == undefined) {
            if ($scope.f1.errormsg == "Please Enter following : ") { $scope.f1.errormsg += "Birth Year " } else { $scope.f1.errormsg += " ,Birth Year" };
        }
        if ($scope.f1.MonthNames == "" || $scope.f1.MonthNames == null || $scope.f1.MonthNames == undefined) {
            if ($scope.f1.errormsg == "Please Enter following : ") { $scope.f1.errormsg += "Birth Month " } else { $scope.f1.errormsg += " ,Birth Month" };
        }
        if ($scope.f1.Days == "" || $scope.f1.Days == null || $scope.f1.Days == undefined) {
            if ($scope.f1.errormsg == "Please Enter following : ") { $scope.f1.errormsg += "Birth Date " } else { $scope.f1.errormsg += " ,Birth Date" };
        }
        if ($scope.f1.gender == "" || $scope.f1.gender == null || $scope.f1.gender == undefined) {
            if ($scope.f1.errormsg == "Please Enter following : ") { $scope.f1.errormsg += "Gender" } else { $scope.f1.errormsg += " ,Gender" };
        }
        if ($scope.f1.maintrack == "" || $scope.f1.maintrack == null || $scope.f1.maintrack == undefined || $scope.f1.maintrack == "0" || $scope.f1.maintrack == "Others") {
            if ($scope.f1.trackflag == 'true')
            {
                if ($scope.f1.txttrack == "" || $scope.f1.txttrack == null || $scope.f1.txttrack == undefined)
                {
                    if ($scope.f1.errormsg == "Please Enter following : ")
                    {
                        $scope.f1.errormsg += "How did you hear about us?"
                    }
                    else
                    {
                        $scope.f1.errormsg += " ,How did you hear about us?"
                    };
                }
            }
            else
            {
                if ($scope.f1.errormsg == "Please Enter following : ") { $scope.f1.errormsg += "How did you hear about us?" } else { $scope.f1.errormsg += " ,How did you hear about us?" };

            }
        }
        if ($scope.f1.errormsg == "Please Enter following : ")
        {
            var monthno = globals.f_Month_Val($scope.f1.MonthNames);
            var Date1 = monthno + "/" + $scope.f1.Days + "/" + $scope.f1.Years; // Date to pass in MM/DD/YYYY
            $scope.f1.dob = Date1;
            var newdate = new Date();
            dt1 = new Date(Date1);
            dt2 = new Date(newdate);
            var diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24 * 30));
            if (globals.ValidateForm(Date1))
            {
                //alert("Valid");
                if (diff > 216 && $scope.f1.productid == 1) {
                    console.log('invalid');
                    $scope.f1.errormsg = "Sorry, this form is for ordering a new name for a Child less than 18 years old. Please visit the Adult Name section for any other new name or correction request.";
                    return false
                }
                else if (diff > 216 && $scope.f1.productid == 8) {
                    console.log('invalid');
                    $scope.f1.errormsg = "Sorry, this form is for ordering a new name for a Child less than 18 years old. Please visit the Adult Name section for any other new name or correction request.";
                    return false
                }
                else if (diff < 0 && $scope.f1.productid == 8) {
                    console.log('invalid');
                    $scope.f1.errormsg = "Sorry, Date of Birth Entered is future date.Please check Date of Birth again.";
                    return false
                }
                else if (diff < 0 && $scope.f1.productid == 1) {
                    console.log('invalid');
                    $scope.f1.errormsg = "Sorry, Date of Birth Entered is future date.Please check Date of Birth again.";
                    return false
                }
              
                //return true;
            }
            else {
                //alert("Invalid");
                $scope.f1.errormsg = "Invalid Date Format";
                return false;
            }
        }
        else
        {
            return false;
        }
        return true;
    }


    $scope.fn_Add_To_Cart_first = function () {


        if (validation_first())
        {
            //alert("validation done");
            $scope.f1.msgdone = true;
            $scope.f1.msgerror = false;
            $scope.f1.errormsg = "";

            console.log("validation done");
            if (commonService.get_cookies_data('GUID') == "null") {
                commonService.remove_cookies_data("GUID");
            }

            if ($scope.f1.txttrack.length > 0) {
                $scope.f1.maintrack = $scope.f1.txttrack;
            }

            if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '')
            {
                //commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
                //alert("REGN_GUID :" + $scope.REGN_GUID);
                AddToCart_first(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.f1.productid, $scope.f1.firstName, $scope.f1.middleName, $scope.f1.lastName, $scope.f1.dob, $scope.f1.gender, $scope.f1.mobileno, $scope.f1.Remarks, $scope.f1.maintrack);
                //AddToCart("", sessionStorage.getItem('REGN_GUID'), $scope.f1.productid, $scope.f1.firstName, $scope.f1.middleName, $scope.f1.lastName, $scope.f1.dob, $scope.f1.gender, $scope.f1.mobileno)
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
                AddToCart_first(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.f1.productid, $scope.f1.firstName, $scope.f1.middleName, $scope.f1.lastName, $scope.f1.dob, $scope.f1.gender, $scope.f1.mobileno, $scope.f1.Remarks, $scope.f1.maintrack);
            }
        }
        else {
            $scope.f1.msgdone = false;
            $scope.f1.msgerror = true;
        }
    }
    $scope.fn_View_Cart_first = function ()
    {
        //alert("fn_View_Cart");
        $location.url('/my-cart-detail');
    }
    function AddToCart_first(TEMP_GUID, REGN_GUID, PoductId, FirstName, MiddleName, LastName, DOB, Gender, MobileNo, Remarks, track) {
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
            "Date_Of_Birth": $scope.f1.Years + "-" + $scope.f1.MonthNames + "-" + $scope.f1.Days,
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
                $scope.f1.errormsg = "First Service added to cart successfully.Please click next to add another.";
                $scope.f1.next = false;
                $scope.f1.Cart = true;
                CountOfMyCart();
                //$location.url('/my-cart-detail');
                //var redirecturl = sessionStorage.getItem('pageToRedirect');
                //if (redirecturl == null) {
                //    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
                //} else {
                //    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
                //}
                clear();
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
    function clear() {
        $scope.f1.firstName = "";
        $scope.f1.dob = "";
        $scope.f1.lastName = "";
        $scope.f1.middleName = "";
        $scope.f1.mobileno = "";
        $scope.f1.gender = "";
        $scope.f1.Years = "";
        $scope.f1.MonthNames = "";
        $scope.f1.Days = "";
        $scope.f1.Remarks = "";
        $scope.f1.telephonicCheck = false;

        $scope.f1.track = "0";

        $scope.f1.txttrack = "";
        var element = document.getElementById('track');
        element.style.display = 'none';
    }
    if ($scope.productid == 3) {
        $scope.f1.ngshowFName = true;
    }
    else {
        $scope.f1.ngshowFName = false;
    }
    $scope.fn_OrderNow = function () {
        if (validation()) {
            $scope.f1.errormsg = "";
            console.log("validation done");
            $scope.f1.dvbasictl = false;
            $scope.f1.dvproductdtl = true;
            //GetProductDetail();
        }
        else {
            console.log("validation error");
        }
    };
   

    //Code for first slider end

    //CodeFor Slider 2nd i.e form 2
    $scope.f2.track = "0";
    $scope.f2.maintrack = $scope.f1.track;
    $scope.f2.productid = a[1];



    $scope.f2.AGold = false;     //2
    $scope.f2.APlatinum = false; //7
    $scope.f2.BPlatinum = false; //8

    //alert($scope.f2.productid);
    if ($scope.f2.productid == '2')
    {
        $scope.f2.malefemale = true;
        $scope.f2.boygirl = false;
        $scope.f2.AGold = true;     //2
    }
    if ($scope.f2.productid == '8')
    {
       
        $scope.f2.malefemale = false;
        $scope.f2.boygirl = true;

        $scope.f2.BPlatinum = true; //8
    }
    if ($scope.f2.productid == '7') {
        $scope.f2.malefemale = true;
        $scope.f2.boygirl = false;

        $scope.f2.APlatinum = true; //7
    }
    $scope.product_price = 3700;
    if ($scope.f2.productid == 2)
    {
        $scope.f2.ngShowFirstName = true;
        $scope.f2.neworcorrection = "C";
        $scope.f2.telephonicCheck = false;
        $scope.product_price = 3700;
        
    }
    if ($scope.f2.productid == 7) {
        $scope.f2.ngShowFirstName = true;
        $scope.f2.neworcorrection = "C";
        $scope.f2.telephonicCheck = false;
        $scope.product_price = 3700;

    }
    else if ($scope.f2.productid == 5)
    {
        $scope.f2.ngShowFirstName = true;
        $scope.f2.neworcorrection = "C";
        $scope.f2.telephonicCheck = true;
        $scope.product_price = 7300;
       
    }
    $scope.f2.dvbasictl = true;
    $scope.f2.dvproductdtl = false;
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $scope.f_click_nameType_sec = function (p_data) {
        $scope.f2.neworcorrection = p_data;
        if ($scope.f2.neworcorrection == "C")
        {
            $scope.f2.ngShowFirstName = true;
            //sessionStorage.setItem('ProductId', 2);
            //$scope.product_price = 3700;
        }
        else
        {
            $scope.f2.ngShowFirstName = false;
            //sessionStorage.setItem('ProductId', 4);
            //$scope.product_price = 3700;
        }
        $scope.productid = sessionStorage.getItem('ProductId');
        set_teleCons_productId($scope.productid);
    }
    $scope.f_tele_consult_click = function () {
        $scope.productid = sessionStorage.getItem('ProductId');
        set_teleCons_productId($scope.productid);
    }
    function set_teleCons_productId(productid) {
        if ($scope.f2.telephonicCheck == true) {
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
    $scope.f_click_gender_sec = function (p_data) {
        $scope.f2.gender = p_data;
        console.log(p_data);
    }

    //$scope.onCategoryChange_sec = function (val) {
    //    var element = document.getElementById('s_track');
    //    if (val == 'Others') {
    //        $scope.f2.txttrack = "";
    //        element.style.display = 'block';
    //        $scope.f2.trackflag = 'true';
    //    }
    //    else {
    //        $scope.f2.txttrack = "";
    //        $scope.f2.trackflag = 'false';
    //        element.style.display = 'none';
    //        $scope.f2.maintrack = $scope.f2.track;
    //    }
    //};

    function validation_sec()
    {
        $scope.f2.errormsg = "";
       // $scope.f2.maintrack = $scope.f2.track;
        if ($scope.f2.errormsg == "")
        {
            $scope.f2.errormsg = "Please Enter following : ";
        }
        if ($scope.f2.productid == 2)
        {
            if ($scope.f2.firstName == "" || $scope.f2.firstName == null || $scope.f2.firstName == undefined) {
                $scope.f2.errormsg += "First Name";
            }
        }
        if ($scope.f2.lastName == "" || $scope.f2.lastName == null || $scope.f2.lastName == undefined) {
            if ($scope.f2.errormsg == "Please Enter following : " && $scope.f2.productid != 2) { $scope.f2.errormsg += "Last Name" } else { $scope.f2.errormsg += " ,Last Name" };
        }
        if ($scope.f2.mobileno == "" || $scope.f2.mobileno == null || $scope.f2.mobileno == undefined) {
            if ($scope.f2.errormsg == "Please Enter following : ") { $scope.f2.errormsg += "MobileNo" } else { $scope.f2.errormsg += " ,MobileNo" };
        }
        if ($scope.f2.Years == "" || $scope.f2.Years == null || $scope.f2.Years == undefined) {
            if ($scope.f2.errormsg == "Please Enter following : ") { $scope.f2.errormsg += "Birth Year " } else { $scope.f2.errormsg += " ,Birth Year" };
        }
        if ($scope.f2.MonthNames == "" || $scope.f2.MonthNames == null || $scope.f2.MonthNames == undefined) {
            if ($scope.f2.errormsg == "Please Enter following : ") { $scope.f2.errormsg += "Birth Month " } else { $scope.f2.errormsg += " ,Birth Month" };
        }
        if ($scope.f2.Days == "" || $scope.f2.Days == null || $scope.f2.Days == undefined) {
            if ($scope.f2.errormsg == "Please Enter following : ") { $scope.f2.errormsg += "Birth Date " } else { $scope.f2.errormsg += " ,Birth Date" };
        }
        if ($scope.f2.gender == "" || $scope.f2.gender == null || $scope.f2.gender == undefined) {
            if ($scope.f2.errormsg == "Please Enter following : ") { $scope.f2.errormsg += "Gender" } else { $scope.f2.errormsg += " ,Gender" };
        }
      
        if ($scope.f2.errormsg == "Please Enter following : ")
        {
            var monthno = globals.f_Month_Val($scope.f2.MonthNames);
            var Date1 = monthno + "/" + $scope.f2.Days + "/" + $scope.f2.Years; // Date to pass in MM/DD/YYYY
            $scope.f2.dob = Date1;
            var newdate = new Date();
            dt1 = new Date(Date1);
            dt2 = new Date(newdate);
            var diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24 * 30));
            if (globals.ValidateForm(Date1)) {
                //alert("Valid");
                if (diff > 216 && $scope.f2.productid == 1)
                {
                    console.log('invalid');
                    $scope.f2.errormsg = "Sorry, this form is for ordering a new name for a Child less than 18 years old. Please visit the Adult Name section for any other new name or correction request.";
                    return false
                }
                else if (diff > 216 && $scope.f2.productid == 8)
                {
                    console.log('invalid');
                    $scope.f2.errormsg = "Sorry, this form is for ordering a new name for a Child less than 18years old. Please visit the Adult Name section for any other new name or correction request.";
                    return false
                }
                else if (diff < 0 && $scope.f2.productid == 8) {
                    console.log('invalid');
                    $scope.f2.errormsg = "Sorry, Date of Birth Entered is future date.Please check Date of Birth again.";
                    return false
                }
                else if (diff < 0 && $scope.f2.productid == 1) {
                    console.log('invalid');
                    $scope.f2.errormsg = "Sorry, Date of Birth Entered is future date.Please check Date of Birth again.";
                    return false
                }
               
                //return true;
            }
            else
            {
                //alert("Invalid");
                $scope.f2.errormsg = "Invalid Date Format";
                return false;
            }
        }
        else
        {
            return false;
        }
        return true;
    }


    $scope.fn_Add_To_Cart_sec = function () {


        if (validation_sec()) {
            //alert("validation done");
            $scope.f2.msgdone = true;
            $scope.f2.msgerror = false;
            $scope.f2.errormsg = "";

            console.log("validation done");
            if (commonService.get_cookies_data('GUID') == "null") {
                commonService.remove_cookies_data("GUID");
            }

            //if ($scope.f2.txttrack.length > 0) {
            //    $scope.f2.maintrack = $scope.f2.txttrack;
            //}

            $scope.f2.maintrack = "";

            if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
                //commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
                //alert("REGN_GUID :" + $scope.REGN_GUID);
                AddToCart_sec(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.f2.productid, $scope.f2.firstName, $scope.f2.middleName, $scope.f2.lastName, $scope.f2.dob, $scope.f2.gender, $scope.f2.mobileno, $scope.f2.Remarks, $scope.f1.maintrack);
                //AddToCart("", sessionStorage.getItem('REGN_GUID'), $scope.f2.productid, $scope.f2.firstName, $scope.f2.middleName, $scope.f2.lastName, $scope.f2.dob, $scope.f2.gender, $scope.f2.mobileno)
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
                AddToCart_sec(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.f2.productid, $scope.f2.firstName, $scope.f2.middleName, $scope.f2.lastName, $scope.f2.dob, $scope.f2.gender, $scope.f2.mobileno, $scope.f2.Remarks, $scope.f1.maintrack);
            }
        }
        else {
            $scope.f2.msgdone = false;
            $scope.f2.msgerror = true;
        }
    }
    $scope.fn_View_Cart_sec = function () {
        //alert("fn_View_Cart");
        $location.url('/my-cart-detail');
    }
    function AddToCart_sec(TEMP_GUID, REGN_GUID, PoductId, FirstName, MiddleName, LastName, DOB, Gender, MobileNo, Remarks, track) {
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
            "Date_Of_Birth": $scope.f2.Years + "-" + $scope.f2.MonthNames + "-" + $scope.f2.Days,
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
                $scope.f2.errormsg = "Service added to cart successfully";
                CountOfMyCart();
                $location.url('/my-cart-detail');
                $scope.f2.Cart = true;
                $scope.f2.ViewCart = false;
                //var redirecturl = sessionStorage.getItem('pageToRedirect');
                //if (redirecturl == null) {
                //    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
                //} else {
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
    function clear() {
        $scope.f2.firstName = "";
        $scope.f2.dob = "";
        $scope.f2.lastName = "";
        $scope.f2.middleName = "";
        $scope.f2.mobileno = "";
        $scope.f2.gender = "";
        $scope.f2.Years = "";
        $scope.f2.MonthNames = "";
        $scope.f2.Days = "";
        $scope.f2.Remarks = "";
        $scope.f2.telephonicCheck = false;

        $scope.f2.track = "0";

        $scope.f2.txttrack = "";
        var element = document.getElementById('track');
        element.style.display = 'none';
    }
    if ($scope.productid == 3) {
        $scope.f2.ngshowFName = true;
    }
    else {
        $scope.f2.ngshowFName = false;
    }
    $scope.fn_OrderNow = function () {
        if (validation()) {
            $scope.f2.errormsg = "";
            console.log("validation done");
            $scope.f2.dvbasictl = false;
            $scope.f2.dvproductdtl = true;
            //GetProductDetail();
        }
        else {
            console.log("validation error");
        }
    };


    //CodeFor Slider 2nd end i.e form 2


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
OrderPlatinumComboController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$rootScope'];