var orderDetailsAdminController = function ($scope, $location, commonService, globals, ngMeta) {

    console.log('order Details Controller called');

    ngMeta.setTitle('Order Details Admin', ' | Naamvidya');
	
    $("#body").removeClass("home-layout");
	 
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format:'dd-mmm-yyyy'
    });

    $scope.S_gender = 'M';
    $scope.f_S_gender_change = function (p_data)
    {
        $scope.S_gender = p_data;
    }

    $scope.nnstep0 = true;
    $scope.nnstep1 = false;
    $scope.nnstep2 = false;
    $scope.nnstep3 = false;
    $scope.nnstep4 = false;
    $scope.nnstep5 = false;

    $scope.f_Back_0 = function () {
        //sessionStorage.setItem("OrderStatus", JSON.stringify(o_data));

        $scope.nnstep0 = false;
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;
        $location.url('/dashboard');
    }


    $scope.f_Next_0 = function ()
    {
        $scope.nnstep0 = false;
        $scope.nnstep1 = true;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;
        getstepdetailsAdmin('NN01', $scope.OrderId);
    }
    $scope.f_Next_1 = function () {
        $scope.nnstep0 = false;
        $scope.nnstep1 = false;
        $scope.nnstep2 = true;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false; 
        $scope.nnstep5 = false;
        $scope.nnstep6 = false;

        getstepdetailsAdmin('NN02', $scope.OrderId);

    }
    $scope.f_Back_1 = function () {
        $scope.nnstep0 = true;
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        
        $scope.nnstep6 = false;
        getstepdetailsAdmin('NN01', $scope.OrderId);
    }
    $scope.f_Back_2 = function () {
        $scope.nnstep1 = true;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep0 = false;
        $scope.nnstep6 = false;
        getstepdetailsAdmin('NN01', $scope.OrderId);
    }
    $scope.f_Next_2 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = true;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep0 = false;
        $scope.nnstep6 = false;
		
        getstepdetailsAdmin('NN03', $scope.OrderId);
		
    }
    $scope.f_Back_3 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = true;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep0 = false;
        $scope.nnstep6 = false;
		
        getstepdetailsAdmin('NN02', $scope.OrderId);
    }
    $scope.f_Next_3 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = true;
        $scope.nnstep5 = false;

        $scope.nnstep0 = false;
        $scope.nnstep6 = false;

        getstepdetailsAdmin('NN04', $scope.OrderId);
    }
    $scope.f_Back_4 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = true;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;

        $scope.nnstep0 = false;
        $scope.nnstep6 = false;
		
        getstepdetailsAdmin('NN03', $scope.OrderId);
		
    }
    $scope.f_Next_4 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = true;

        $scope.nnstep0 = false;
        $scope.nnstep6 = false;
        
    }
    $scope.f_Back_5 = function () {
        
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = true;
        $scope.nnstep5 = false;
        $scope.nnstep0 = false;
        $scope.nnstep6 = false;
    }
    $scope.f_Next_5 = function () {
        $scope.nnstep0 = false;
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $scope.nnstep6 = true;

        validate_selected_name($scope.selectedItem.length);
    }

    $scope.f_Back_6 = function () {

        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = true;
        $scope.nnstep0 = false;
        $scope.nnstep6 = false;

    }
    


    $scope.ncstep0 = true;
    $scope.ncstep1 = false;
    $scope.ncstep2 = false;
    $scope.ncstep3 = false;
    $scope.ncstep4 = false;
    $scope.ncstep5 = false;
    
    $scope.f_Back_nc_0 = function () {
        //sessionStorage.setItem("OrderStatus", JSON.stringify(o_data));

        $scope.nnstep0 = false;
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        $location.url('/dashboard');
    }
    $scope.f_Next_nc_0 = function () {

        $scope.ncstep0 = false;
        $scope.ncstep1 = true;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetailsAdmin('NC01', $scope.OrderId);
    }

    $scope.f_Next_nc_1 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = true;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetailsAdmin('NC02', $scope.OrderId);
    }
    $scope.f_Back_nc_1 = function () {
        $scope.ncstep0 = false;
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        $location.url('/dashboard');

    }
    $scope.f_Back_nc_2 = function () {
        $scope.ncstep1 = true;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetailsAdmin('NC01', $scope.OrderId);

    }            
    $scope.f_Next_nc_2 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = true;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetailsAdmin('NC03', $scope.OrderId);

    }           
    $scope.f_Back_nc_3 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = true;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetailsAdmin('NC02', $scope.OrderId);

    }           
    $scope.f_Next_nc_3 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = true;
        $scope.ncstep5 = false;

       // validate_selected_name($scope.selectedName);
    }          
    $scope.f_Back_nc_4 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = true;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;
    }          
    $scope.f_Next_nc_4 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = true;

        validate_selected_name($scope.selectedItem.length);
    }          
    $scope.f_Back_nc_5 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = true;
        $scope.ncstep5 = false;
    }           
    $scope.f_Next_nc_5 = function () {

    }

    $scope.namelist = [];
    $scope.suggnamelist = [];
 
    $scope.selectedName = '';
    $scope.selectedNameSrno = '';
    $scope.selectedItem =[];
    $scope.f_FN_checked = function (p_data)
    {
        angular.forEach($scope.OrderReco, function (v2, key) {
            if (v2.SrNo == p_data.SrNo) {
                if (v2.Checked == true) {
                    //add
                   // var activedata = $filter('filter')($scope.selectedItem, { SrNo: v2.SrNo }, true)[0];
                  //  $scope.role_list = activedata;
                    $scope.selectedItem.push(v2);
                } else
                {  //remove 
                    var index = $scope.selectedItem.indexOf(v2)
                    $scope.selectedItem.splice(index, 1);
                 
                }
               
            } 
        });
    }


    $scope.f_Check_reco_checked = function (p_data) {
        angular.forEach($scope.S_selectedItem, function (v2, key) {
            if (v2.SrNo == p_data.SrNo) {
                if (v2.Checked == true) {
                    //add
                    // var activedata = $filter('filter')($scope.selectedItem, { SrNo: v2.SrNo }, true)[0];
                    //  $scope.role_list = activedata;
                    $scope.selectedItem.push(v2);
                } else {  //remove 
                    var index = $scope.selectedItem.indexOf(v2)
                    $scope.selectedItem.splice(index, 1);

                }

            }
        });
    }
    $scope.f_Remove_nn = function (p_data) {
         //remove 
        var index = $scope.selectedItem.indexOf(p_data)
        $scope.selectedItem.splice(index, 1);

        validate_selected_name($scope.selectedItem.length);

    }
   

    $scope.f_click_nn_name_reco = function()
    {
        $scope.DOB = '';
        if (($scope.S_Days == undefined || $scope.S_MonthNames == undefined || $scope.S_Years == undefined) || ($scope.S_Days == null || $scope.S_MonthNames == null || $scope.S_Years == null) || ($scope.S_Days == '' || $scope.S_MonthNames == '' || $scope.S_Years == '')) {
            $scope.DOB = '';
        }
        else {
            $scope.DOB = $scope.S_Years + " - " + $scope.S_MonthNames + " - " + $scope.S_Days;
        }

        get_single_name_reco();

    }

    $scope.f_click_nc_name_reco = function () {

    }

    function get_single_name_reco()
    {
        var v_http_link = "Routes/Single_CHECKNAME";
        var v_push_template = {
            "data": JSON.stringify({
                "FName": $scope.S_firstName,
                "MName": $scope.S_middleName,
                "LName": $scope.S_lastName,
                "Gender": $scope.S_gender,
                "DOB": $scope.DOB
            })
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {

                $scope.S_selectedItem = data.data;
               // $scope.StepDetail = data.stepdetail;
            }
        }, function (error) {
            $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
        });
    }

    $scope.f_namelist_select = function (n_data) {
        $scope.nameMeaning = "xyz";//n_data.nameMeaning;
        $scope.Selectedname = n_data.FName + ' ' + n_data.MName + ' ' + n_data.LName;
    };

    $scope.f_No = function () {
        $scope.yesno = false;
    };

    $scope.f_None = function () {
        $scope.noneselected = false;
        $scope.yesno = true;
    };

    $scope.f_Surname_change = function () {
        var v_http_link = "Routes/getListBySurnames";
        var v_push_template = {
            //"OrderId": $scope.OrderId,
            "OrderId": 20,
            "LName": $scope.LName
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.namelist = data;
            }
        }, function (error) {
            $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
        });
    };
    
    $scope.f_nn_Reset = function () {
        CompleteOrderDetails($scope.OrderId, $scope.selectedNameSrno, 'r');
    }
    
    $scope.f_nc_Reset = function () {
        CompleteOrderDetails($scope.OrderId, $scope.selectedNameSrno, 'r');
    }
    $scope.f_nc_Submit = function ()
    {
        //CompleteOrderDetails($scope.OrderId, $scope.selectedNameSrno,'f');
        SaveSelectedNamebyAdmin();
    }

    $scope.f_nn_Submit = function () {
        // CompleteOrderDetails($scope.OrderId, $scope.selectedNameSrno, 'f');
        SaveSelectedNamebyAdmin();
    }

    function validate_selected_name(p_data)
    {
        if (p_data == null || p_data == undefined || p_data == "") {
            $scope.stepmsg = true;
            $scope.submit = false;
            $scope.close = false;
            $scope.reset = false;
        }
        else {
            if (p_data > 0) {
                $scope.stepmsg = false;
                $scope.submit = true;
                $scope.close = false;
                $scope.reset = false;

            } else if (p_data == 0) {
                $scope.stepmsg = true;
                $scope.close = false;
                $scope.submit = false;
                $scope.reset = false;
            }
           
        }

    }
    $scope.OrderReco = [];

    function getstepdetailsAdmin(step, order_id) {
       // alert("Hello");
	    var v_http_link = "Routes/getOrderDetailsforAdmin";
	    var v_push_template = {
	        "data": JSON.stringify({
	            "Order_ID": order_id,
	            "Step": step
	        })
	    }
	    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	    v_post_json_data.then(function (val) {
	        var data = val.data;
	        if (data != "") {

	            $scope.OrderReco = data.data;
	            $scope.StepDetail = data.stepdetail;
	        }
	    }, function (error) {
	        $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
	    });
	};

    function SaveSelectedNamebyAdmin() {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
	    var v_http_link = "Routes/SaveSelectedNamebyAdmin";
	    var v_push_template = {
	        "data": JSON.stringify({
	            "REGN_GUID": $scope.REGN_GUID,
	            "Order_ID": $scope.OrderId,
	            "selectedNameList": $scope.selectedItem
	        })
	    }

	    console.log(v_push_template);
	    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	    v_post_json_data.then(function (val) {
	        var data = val.data;
	        if (data.flag == "True") {
	            
	                $scope.errormsg3 = "Thank You For selecting name.";
	                $scope.Onsave = true;
	            
	        } else {
	            alert('failed');
	        }
	    }, function (error) {
	        $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
	    });
	};

	function getOrdersByOrderId() {
	    $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
	    if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
	        $location.url('/login');
	    }
	    var v_http_link = "Routes/getOrderDetailsbyOrderId";
	    var v_push_template = {
	        "data": JSON.stringify({
	            "Order_ID": $scope.OrderId,
	            "REGN_GUID": $scope.REGN_GUID
	        })
	    }
	    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	    v_post_json_data.then(function (val) {
	        var data = val.data;
	        if (data.data != "") {
	            $scope.Order = {};
	            $scope.Order = data.data;
	            $scope.ProductId = $scope.Order.ProductId;

	           // $scope.dob = data[0].Date_Of_Birth;
	           // $scope.Years = data.data[0].Years;
	          //  $scope.MonthNames = data.data[0].MonthNames;
	           // $scope.Days = data.data[0].Days;
	        }
	    }, function (error) {
	        $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
	    });
	}
    function f_PageLoad()
    {
        $scope.Order = {};
        $scope.Surnames = [];
        $scope.namelist = [];
        $scope.noneselected = true;
        $scope.yesno = true;
        $scope.Order = JSON.parse(sessionStorage.getItem("OrderStatus"));
        $scope.OrderNo = $scope.Order.OrderNo;
        $scope.OrderId = $scope.Order.OrderId;
        $scope.ProductId = $scope.Order.ProductId;
        $scope.CycleNo = $scope.Order.CycleNo;
        $scope.FirstName = $scope.Order.FirstName;

        $scope.OrderDate = $scope.Order.OrderDate;

        //alert($scope.CycleNo);
		if($scope.ProductId != 2 )
		{
		   // getstepdetails('NN01', $scope.OrderId);
		}
		else
		{
		   // getstepdetails('NC01', $scope.OrderId);
		}
        $scope.ProductName = $scope.Order.ProductName;
      
        $scope.orderList = [];
        getOrdersByOrderId();
    }
    f_PageLoad();
}

orderDetailsAdminController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];