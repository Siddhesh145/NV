var registrationController = function ($scope, $location, commonService, globals, ngMeta, $timeout) {

    console.log('Registration controller called');

    ngMeta.setTitle('Registration', ' | Naamvidya');

    sessionStorage.setItem('pageToRedirect', '/full-name-analysis');
	$("#body").removeClass("home-layout");


	$scope.ShowEmail = false;
	$scope.firstSubmit = true;

	if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
	    // $location.url('/login');
		sessionStorage.setItem('pageRedirectFrom', '/full-name-analysis');															   
	   // $scope.ShowEmail = true;
	}
	else
	{
	   
	    $scope.EmailId = sessionStorage.getItem('EmailId');
    }
	$('#myModal').hide();
	$scope.closemodal = function () {
	    //alert("Hello");
	    clear();
	    $('#myModal').hide();

	};

	$scope.Add_Fname_Details = function ()
	{
	    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	   
	    if ($scope.firstName == undefined || $scope.firstName == '') {
	        $scope.errMsg = 'Please enter First name';
	        return false;
	    }
	    if ($scope.lastName == undefined || $scope.lastName == '') {
	        $scope.errMsg = 'Please enter Last name';
	        return false;
	    }
	    if ($scope.Years == "" || $scope.Years == null || $scope.Years == undefined) {
	        $scope.errMsg = 'Please select Year in Date of birth';
	        return false;
	    }
	    if ($scope.MonthNames == "" || $scope.MonthNames == null || $scope.MonthNames == undefined) {
	        $scope.errMsg = 'Please select Month in Date of birth';
	        return false;
	    }
	    if ($scope.Days == "" || $scope.Days == null || $scope.Days == undefined) {
	        $scope.errMsg = 'Please select Day in Date of birth';
	        return false;
	    }
	    if ($scope.gender == undefined || $scope.gender == '') {
	        $scope.errMsg = 'Please select Gender';
	        return false;
	    }
	    if ($scope.EmailId == undefined || $scope.EmailId == '') {
	        $scope.errMsg = 'Please enter Email Id';
	        return false;
	    }
	    if (!regex.test($scope.EmailId)) {
	        $scope.errMsg = 'Please enter valid Email Id';
	        return false;
	    }
	    var monthno = globals.f_Month_Val($scope.MonthNames);

	    var Date = monthno + "/" + $scope.Days + "/" + $scope.Years; // Date to pass in MM/DD/YYYY
	    if (globals.ValidateForm(Date))
	    {
	        var v_http_link = "Routes/AddFnameDetails";
	        var v_push_template = {
	            "firstName": $scope.firstName,
	            "middleName": $scope.middleName,
	            "lastName": $scope.lastName,
	            "dob": $scope.Days + " - " + $scope.MonthNames + " - " + $scope.Years,
	            "gender": $scope.gender,
	            "email": $scope.EmailId,
	            "mobile": $scope.Mobile
	           
	        }

	        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);

	        v_post_json_data.then(function (val)
	        {
	            var data = val.data;

	            if (data != "")
	            {
	                console.log(JSON.stringify(data));
	                //alert(JSON.stringify(data));

	              
	                $scope.errMsg = data.msg;
	                $scope.finalemail = data.email;
	                    $('#myModal').hide();
	                    clear();
	                    $scope.errMsg = '';
	                   
	                    $scope.errMsg = 'Thank you, you will receive your name report within 72 hours on ' + $scope.finalemail;
	                //alert($scope.errMsg);

	                    $scope.ShowEmail = false;
	                    $scope.firstSubmit = true;
	                    return false;
	               
	            }
	        }, function (error) {
	            alert('Fail : ' + error.status + ' ' + error.statusText);
	        });
	    }
	    else
	    {
	        $scope.errMsg = 'Please select Valid Date';
	        return false;
	    }

	}

	function clear() {
	    $scope.firstName = "";
	    $scope.lastName = "";
	    $scope.middleName = "";
	    $scope.mobileno = "";
	    $scope.Days = "";
	    $scope.MonthNames = "";
	    $scope.Years = "";
	    $scope.gender = "";
	    $scope.EmailId = "";
	    $scope.Mobile = "";
	    $scope.Message = "";
 
	}
	$scope.errMsg = '';
	$scope.faild_report_flag = false;
    $scope.GenerateFreeReport = function ()
    {

        if ($scope.firstName == undefined || $scope.firstName==''){
            $scope.errMsg = 'Please enter First name';
            return false;
        }
        if ($scope.lastName == undefined || $scope.lastName == '') {
            $scope.errMsg = 'Please enter Last name';
            return false;
        }
        //if ($scope.dob == undefined || $scope.dob == '') {
            // $scope.errMsg = 'Please enter Date of birth';
            // return false;
        //}
		 if ($scope.Years == "" || $scope.Years == null || $scope.Years == undefined) {
                $scope.errMsg = 'Please select Year in Date of birth';
                return false;
        }
        if ($scope.MonthNames == "" || $scope.MonthNames == null || $scope.MonthNames == undefined) {
            $scope.errMsg = 'Please select Month in Date of birth';
            return false;
        }
        if ($scope.Days == "" || $scope.Days == null || $scope.Days == undefined) {
            $scope.errMsg = 'Please select Day in Date of birth';
            return false;
        }
        if ($scope.gender == undefined || $scope.gender == '') {
            $scope.errMsg = 'Please select Gender';
            return false;
        }


        var monthno = globals.f_Month_Val($scope.MonthNames);

        var Date = monthno + "/" + $scope.Days + "/" + $scope.Years; // Date to pass in MM/DD/YYYY

  
            if (globals.ValidateForm(Date))
            {
                var v_http_link = "Routes/invalidReportEntry";
                var v_push_template = {
                    "firstName": $scope.firstName,
                    "middleName": $scope.middleName,
                    "lastName": $scope.lastName,
                    "dob": $scope.Days + " - " + $scope.MonthNames + " - " + $scope.Years,
                    "gender": $scope.gender
                }

                var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);

                v_post_json_data.then(function (val) 
                {
                    var data = val.data;

                    if (data != "") 
                    {
                        console.log(JSON.stringify(data));
                        //alert(JSON.stringify(data));

                        if (data.msg != "") {
                            //$scope.errMsg = data.msg;
                            // $('#myModal').show();

                            $scope.errMsg = '';
                            $scope.ShowEmail = true;
                            $scope.firstSubmit = false;

                            //$scope.firstName1 = $scope.firstName;
                            //$scope.lastName1=$scope.lastName;
                            //$scope.middleName1=$scope.middleName;
                            //$scope.Days1=$scope.Days;
                            //$scope.MonthNames1=$scope.MonthNames;
                            //$scope.Years1=$scope.Years;
                            //$scope.gender1=$scope.gender;
                          
                          
                     


                            return false;
                        }
                        else
                        {
                            var v_http_link = "Routes/registration";
                            var v_push_template = {
                                "firstName": $scope.firstName,
                                "middleName": $scope.middleName,
                                "lastName": $scope.lastName,
                                "dob": $scope.Days + " - " + $scope.MonthNames + " - " + $scope.Years,
                                "gender": $scope.gender
                            }
                            var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
                            v_post_json_data.then(function (val) 
                            {
                                var data = val.data;

                                if (data != "") {
                                    //console.log(JSON.stringify(data));				
                                    if (data.allow == false) {
                                        $scope.errMsg = "You have exceeded the number of allowed Full Name Reports. For generating additional reports, please send your request to reachus@naamvidya.com.";
                                    }
                                    else {
                                        sessionStorage.setItem('firstNameforRpt', data.fName);
                                        sessionStorage.setItem('fullNameforRpt', data.fName + ' ' + data.mName + ' ' + data.lName);
                                        sessionStorage.setItem('balancedFlag', data.flag);
                                        sessionStorage.setItem('dobforRpt', data.dob);
                                        sessionStorage.setItem('dataforRpt', angular.toJson(data.listitems));
                                        $location.url('/full-name-report');
                                    }
                                }
                            }, function (error) 
                            {
                                alert('Fail : ' + error.status + ' ' + error.statusText);
                            });


                        }

                    }
                }, function (error) {
                    alert('Fail : ' + error.status + ' ' + error.statusText);
                });
            }
            else
            {
                $scope.errMsg = 'Please select Valid Date';
                return false;
            }

        }

        function f_check_email(val) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(val))
            {
                return false;
            }
            else
            {
                return true;
            }
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

registrationController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$timeout'];

