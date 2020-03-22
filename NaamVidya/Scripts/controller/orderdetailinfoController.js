var orderdetailinfoController = function ($scope, $location, $filter, commonService, globals, ngMeta) {

    console.log('order detail info  controller reporting for duty.');

    ngMeta.setTitle('Order Details Info', ' | Naamvidya');


    $('.datepicker').pickadate({
        format: 'dd-mmm-yyyy',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    function Page_load() {
        $scope.dvconfirmdetail = true;
        $scope.dvcontinuedetail = false;
        $scope.OrderID = 2;//sessionStorage.getItem('OrderId');
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        GetOrderDetail();
        GetOrderFMLNameDetail();
        getcriteria();
        $scope.criteriadetail = {};
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

    function GetOrderDetail() {
        var v_http_link = "Routes/orderdetailinfobind";
        var v_push_template = {
            "OrderId": $scope.OrderID
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
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
                $scope.Remarks = data[0].Remarks;

                $scope.Name1 = data[0].Name1;
                $scope.Name2 = data[0].Name2;
                $scope.Name3 = data[0].Name3;
                $scope.Name4 = data[0].Name4;
                $scope.Name5 = data[0].Name5;

                $scope.namespell = data[0].namespell;
                $scope.lastnamespell = data[0].lastnamespell;

                $scope.Alphabets = data[0].Alphabets;
                $scope.MotherName = data[0].MotherName;
                $scope.FatherName = data[0].FatherName;

                $scope.Sibling1 = data[0].Sibling1;
                $scope.Sibling2 = data[0].Sibling2;
                $scope.Sibling3 = data[0].Sibling3;
                $scope.maxlength = data[0].maxlength;

                if ($scope.gender == "M") { $scope.gender = "Male" } else { $scope.gender = "Female" }
                if ($scope.namespell == false) { $scope.namespell = "No" } else { $scope.namespell = "Yes" }
                if ($scope.lastnamespell == false) { $scope.lastnamespell = "No" } else { $scope.lastnamespell = "Yes" }

                $scope.productid = data[0].ProductId;
                if (data[0].ProductId == "2") {
                    $scope.firstNM = true;
                }
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    function GetOrderFMLNameDetail() {
        var v_http_link = "Routes/orderdetaillmfName";
        var v_push_template = {
            "OrderId": $scope.OrderID
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                //$scope.MName = data[0].MName;
                //$scope.LName = data[0].LName;
                //$scope.FName = data[0].FName;
                //$scope.Status = data[0].Status;
                //$scope.LNameDetail = data.data;
                $scope.LNameDetail = angular.copy(data.data);
                $scope.FLNameDetail = angular.copy(data.data1);
                //console.log(JSON.stringify(data));
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    $scope.fn_filter = function () {
        $scope.LNameselection = "";
        $scope.LNameDetail.filter(
        function (value) {
            if (value.Status == true) {
                if ($scope.LNameselection == "") {
                    $scope.LNameselection = value.LName;
                }
                else {
                    $scope.LNameselection = $scope.LNameselection + "," + value.LName;
                }
                return true;
            }
            else {
                return false;
            }
        });
        //console.log("Click on Filter Button : " + JSON.stringify($scope.LNameselection));

        var v_http_link = "Routes/orderdetailFilterFName";
        var v_push_template = {
            "OrderId": $scope.OrderID,
            "LNames": $scope.LNameselection
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.FLNameDetail = angular.copy(data.data);
                //console.log(JSON.stringify(data.data));
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    }

    $scope.fn_Save = function () {
        $scope.LNameselection = "";
        $scope.LNameDetail.filter(
        function (value) {
            if (value.Status == true) {
                if ($scope.LNameselection == "") {
                    $scope.LNameselection = value.LName;
                }
                else {
                    $scope.LNameselection = $scope.LNameselection + "," + value.LName;
                }
                return true;
            }
            else {
                return false;
            }
        });

        $scope.FNameselection = "";
        $scope.FLNameDetail.filter(
        function (value) {
            if (value.Status == true) {
                if ($scope.FNameselection == "") {
                    $scope.FNameselection = value.FName;
                }
                else {
                    $scope.FNameselection = $scope.FNameselection + "," + value.FName;
                }
                return true;
            }
            else {
                return false;
            }
        });
        $scope.msgdone = false;
        $scope.msgerror = true;
        if ($scope.LNameselection == "") {

            $scope.errormsg = "Please select at lease one last name.";

        }
        else if ($scope.FNameselection == "") {
            $scope.errormsg = "Please select at lease one first name.";
        }
        else {
            var v_http_link = "Routes/orderdetailSave";
            var v_push_template = {
                "OrderId": $scope.OrderID,
                "LNames": $scope.LNameselection,
                "FNames": $scope.FNameselection
            }
            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
            v_post_json_data.then(function (val) {
                var data = val.data;
                if (data != "") {
                    $scope.FLNameDetail = angular.copy(data.data);
                    $scope.errormsg = "Data updated successfully.";
                    $scope.msgdone = true;
                    $scope.msgerror = false;
                    //console.log(JSON.stringify(data.data));
                }
            }, function (error) {
                $scope.errormsg = "error while saving data.";
                $scope.msgdone = false;
                $scope.msgerror = true;
                alert('Fail : ' + error.status + ' ' + error.statusText);
            });
        }
    }

    $scope.f_filter = function (value, index) {
        var v_temp = $filter('filter')($scope.LNameDetail, { Status: true });
        var v_flag = false;
        angular.forEach(v_temp, function (val, key) {
            //val.indexOf(value.LName) !== -1;
            if (val.LName == value.LName) {
                v_flag = true;
                var v_temp1 = $filter('filter')($scope.FLNameDetail, { LName: value.LName });
                //console.log(JSON.stringify(v_temp1));
            }
        });
        //v_flag = true;
        return v_flag;
    }

    function getcriteria() {

        var v_http_link = "Routes/getCriteria";
        var v_push_template = {
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
        if ($scope.middleName == "" || $scope.middleName == null || $scope.middleName == undefined) {
            $scope.errormsg += "Middle Name";
        }
        if ($scope.lastName == "" || $scope.lastName == null || $scope.lastName == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Last Name " } else { $scope.errormsg += " ,Last Name " };
        }
        if ($scope.mobileno == "" || $scope.mobileno == null || $scope.mobileno == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "MobileNo " } else { $scope.errormsg += " ,MobileNo" };
        }
        //if ($scope.dob == "" || $scope.dob == null || $scope.dob == undefined) {
        //    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "DOB" } else { $scope.errormsg += " ,DOB" };
        //}
        if ($scope.Years == "" || $scope.Years == null || $scope.Years == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Birth Year " } else { $scope.errormsg += " ,Birth Year" };
        }
        if ($scope.MonthNames == "" || $scope.MonthNames == null || $scope.MonthNames == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Birth Month " } else { $scope.errormsg += " ,Birth Month" };
        }
        if ($scope.Days == "" || $scope.Days == null || $scope.Days == undefined) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Birth Date " } else { $scope.errormsg += " ,Birth Date" };
        }
        if ($scope.confirm != true) {
            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Please confirm " } else { $scope.errormsg += " ,Please confirm" };
        }
        if ($scope.errormsg == "Please Enter following : ") {
            var monthno = globals.f_Month_Val($scope.MonthNames);
            var Date = monthno + "/" + $scope.Days + "/" + $scope.Years; // Date to pass in MM/DD/YYYY
            if (globals.ValidateForm(Date)) {

                //if ($scope.productid == "1" || $scope.productid == "8")
                //{
                //    if (globals.isDateLessThan3Months(Date)) {
                //        return true;
                //    } else {
                //        $scope.errormsg = "Sorry, Children not allow less than 3 months";
                //        return false;
                //    }
                //}
                
                return true;
            }
            else {
                //alert("Invalid");
                $scope.errormsg = "Invalid Date";
                return false;
            }
            //return true;
        }
        else {
            return false;
        }
    }

    function save() {
        // console.log('test save');
        var v_http_link = "Routes/saveInfoDetails";
        var v_push_template = {
            "orderID": $scope.OrderID,
            "firstName": $scope.firstName,
            "middleName": $scope.middleName,
            "lastName": $scope.lastName,
            //"dob": $scope.dob,
            "dob": $scope.Years + " - " + $scope.MonthNames + " - " + $scope.Days,
            "gender": $scope.gender,
            "mobileno": $scope.mobileno,
            "Name1": $scope.Name1,
            "Name2": $scope.Name2,
            "Name3": $scope.Name3,
            "Name4": $scope.Name4,
            "Name5": $scope.Name5,
            "AlterNameSpell": $scope.AlterNameSpell,
            "AlterLNameSpell": $scope.AlterLNameSpell,
            "PreferedAlphabets": $scope.PreferedAlphabets,
            "Criteria": $scope.criteriaselection,
            "MotherName": $scope.MotherName,
            "FatherName": $scope.FatherName,
            "Sibling1": $scope.Sibling1,
            "Sibling2": $scope.Sibling2,
            "Sibling3": $scope.Sibling3,
            "MaxLengthName": $scope.MaxLengthName,
            "OrderStatus": $scope.OrderStatus,
            "REGN_GUID": $scope.REGN_GUID
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.Successflag = data[0].flag;
                if ($scope.Successflag == true && $scope.Clickflag == "1") {
                    $scope.dvconfirmdetail = false;
                    $scope.dvcontinuedetail = true;
                }
                else if ($scope.Successflag == true && $scope.Clickflag == "2") {
                    $scope.errormsg1 = "Thank You For Providing Details.";
                    f_clear();
                }
                else if ($scope.Successflag == true && $scope.Clickflag == "3") {
                    $scope.errormsg2 = "Thank You For Providing Details.";
                    f_clear();
                }
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    };

    function f_clear() {
        $scope.firstName = "",
        $scope.middleName = "",
        $scope.lastName = "",
        $scope.Years = "",
        $scope.MonthNames = "",
        $scope.Days = "",
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
        getcriteria()
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

    $scope.fn_Submit2 = function () {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        $scope.errormsg = "";
        $scope.errormsg2 = "";
        $scope.Clickflag = "2";
        $scope.errormsg2 = "";
        $scope.OrderStatus = "5"
        if ($scope.PreferedAlphabets == "" || $scope.PreferedAlphabets == null || $scope.PreferedAlphabets == undefined) {
            $scope.errormsg2 = "Please Enter Prefered Alphabets To Proceed Further.."
            return false;
        }
        $scope.Clickflag = "3";
        $scope.errormsg2 = "";
        $scope.OrderStatus = "5"
        //var Id = document.getElementById($scope.Criteria_ID);
        //$scope.Criteria = Id;
        $scope.criteriaselection = "";
        $scope.cr = $scope.criteriadetail.filter(
        function (value) {

            if (value.Criteria_ID == true) {
                if ($scope.criteriaselection == "") {
                    $scope.criteriaselection = value.rowno;
                }
                else {
                    $scope.criteriaselection = $scope.criteriaselection + "," + value.rowno;
                }
                return true;
            }
            else {
                return false;
            }
        });
        save();
    }

    $scope.fn_Submit = function () {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        $scope.errormsg = "";
        $scope.errormsg1 = "";
        if ($scope.Name1 == "" || $scope.Name1 == null || $scope.Name1 == undefined) {
            if ($scope.Name2 == "" || $scope.Name2 == null || $scope.Name2 == undefined) {
                if ($scope.Name3 == "" || $scope.Name3 == null || $scope.Name3 == undefined) {
                    if ($scope.Name4 == "" || $scope.Name4 == null || $scope.Name4 == undefined) {
                        if ($scope.Name5 == "" || $scope.Name5 == null || $scope.Name5 == undefined) {
                            $scope.errormsg1 = "Please Enter Atleast 1 Name."
                            return false;
                        }
                    }
                }
            }
        }
        $scope.Clickflag = "2";
        $scope.errormsg1 = "";
        $scope.OrderStatus = "5"
        save();
    };

    $scope.fn_Confirm = function () {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        $scope.Clickflag = "1";
        if (validation()) {
            $scope.errormsg = "";
            $scope.OrderStatus = "0"
            save();
        } else {
            console.log("validation error");
        }

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
}

orderdetailinfoController.$inject = ['$scope', '$location', '$filter', 'commonService', 'globals', 'ngMeta'];