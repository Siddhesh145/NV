var orderDetailsController = function ($scope, $location, commonService, globals, ngMeta) {

    console.log('order Details Controller called');

    ngMeta.setTitle('Order Details', ' | Naamvidya');

    ngMeta.setTag('keywords', 'name astrology, lucky name, baby name numerology, my name meaning, baby names, hindu baby name, baby boy name');
    ngMeta.setTag('description', 'ORDER NOW - A balanced name has powers to bring a good fortune, get your name corrected as per NaamVidya Advanced Numerology.');

	
    $("#body").removeClass("home-layout");
	 
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format:'dd-mmm-yyyy'
    });

    $scope.nnstep0 = true;
    $scope.nnstep1 = false;
    $scope.nnstep2 = false;
    $scope.nnstep3 = false;
    $scope.nnstep4 = false;
    $scope.nnstep5 = false;

    $scope.f_Next_0 = function ()
    {
        $scope.nnstep0 = false;
        $scope.nnstep1 = true;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        getstepdetails('NN01', $scope.OrderId);
    }
    $scope.f_Next_1 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = true;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;

        getstepdetails('NN02', $scope.OrderId);

    }
    $scope.f_Back_2 = function () {
        $scope.nnstep1 = true;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
        getstepdetails('NN01', $scope.OrderId);
    }
    $scope.f_Next_2 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = true;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
		
		getstepdetails('NN03', $scope.OrderId);
		
    }
    $scope.f_Back_3 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = true;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
		
		getstepdetails('NN02', $scope.OrderId);
    }
    $scope.f_Next_3 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = true;
        $scope.nnstep5 = false;
		getstepdetails('NN04', $scope.OrderId);
    }
    $scope.f_Back_4 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = true;
        $scope.nnstep4 = false;
        $scope.nnstep5 = false;
		
		getstepdetails('NN03', $scope.OrderId);
		
    }
    $scope.f_Next_4 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = false;
        $scope.nnstep5 = true;

        validate_selected_name($scope.selectedName);
    }
    $scope.f_Back_5 = function () {
        $scope.nnstep1 = false;
        $scope.nnstep2 = false;
        $scope.nnstep3 = false;
        $scope.nnstep4 = true;
        $scope.nnstep5 = false;
    }
    $scope.f_Next_5 = function () {
    }

    $scope.ncstep0 = true;
    $scope.ncstep1 = false;
    $scope.ncstep2 = false;
    $scope.ncstep3 = false;
    $scope.ncstep4 = false;
    $scope.ncstep5 = false;

    $scope.f_Next_nc_0 = function () {

        $scope.ncstep0 = false;
        $scope.ncstep1 = true;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetails('NC01', $scope.OrderId);
    }

    $scope.f_Next_nc_1 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = true;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetails('NC02', $scope.OrderId);
    }           
    $scope.f_Back_nc_2 = function () {
        $scope.ncstep1 = true;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetails('NC01', $scope.OrderId);

    }            
    $scope.f_Next_nc_2 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = true;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetails('NC03', $scope.OrderId);

    }           
    $scope.f_Back_nc_3 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = true;
        $scope.ncstep3 = false;
        $scope.ncstep4 = false;
        $scope.ncstep5 = false;

        getstepdetails('NC02', $scope.OrderId);

    }           
    $scope.f_Next_nc_3 = function () {
        $scope.ncstep1 = false;
        $scope.ncstep2 = false;
        $scope.ncstep3 = false;
        $scope.ncstep4 = true;
        $scope.ncstep5 = false;

        validate_selected_name($scope.selectedName);
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
    $scope.f_FN_checked = function (p_data)
    {
        angular.forEach($scope.namesuggestionlist, function (v2, key) {
            if (v2.SrNo == p_data) {
                if (v2.Checked == true) {
                    $scope.selectedName = v2.FName + ' ' + v2.MName + ' ' + v2.LName;
                    $scope.selectedNameSrno = v2.SrNo;
                } else {
                    $scope.selectedName = '';
                    $scope.selectedNameSrno = '';
                }
               
            } else {
                v2.Checked = false;
            }
        });
    }

    function selectedValusBySrNo(selectedNameSrno)
    {
        if (selectedNameSrno != null || selectedNameSrno != undefined || selectedNameSrno != '') {
            angular.forEach($scope.namesuggestionlist, function (v2, key) {
                if (v2.SrNo == selectedNameSrno) {
                    v2.Checked = true;
                } else {
                    v2.Checked = false;
                }
            });
        }
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
        CompleteOrderDetails($scope.OrderId, $scope.selectedNameSrno,'f');
    }

    $scope.f_nn_Submit = function () {
        CompleteOrderDetails($scope.OrderId, $scope.selectedNameSrno, 'f');
    }

    function validate_selected_name(p_data)
    {
        if (p_data == null || p_data == undefined || p_data == "") {
            if ($scope.CycleNo == '0') {
                $scope.stepmsg = true;
                $scope.reset = true;
                $scope.close = false;
                $scope.submit = false;

            } else if ($scope.CycleNo == '1') {
                $scope.stepmsg = true;
                $scope.close = true;
                $scope.submit = false;
                $scope.reset = false;
            }
        } else {

            $scope.stepmsg = false;
            $scope.submit = true;
            $scope.close = false;
            $scope.reset = false;
        }

    }
	function getstepdetails(step,order_id) {
	    var v_http_link = "Routes/getOrderStepDetails";
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

	            $scope.namesuggestionlist = data.data;
	            $scope.StepDetail = data.stepdetail;

	            selectedValusBySrNo($scope.selectedNameSrno);
	        }
	    }, function (error) {
	        $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
	    });
	};

	

	function CompleteOrderDetails(order_id, SrNo, flag) {
	    var v_http_link = "Routes/CompleteOrderDetails";
	    var v_push_template = {
	        "data": JSON.stringify({
	            "Order_ID": order_id,
	            "flag": flag,
	            "SrNo": SrNo
	        })
	    }
	    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	    v_post_json_data.then(function (val) {
	        var data = val.data;
	        if (data.flag == "True") {
	            //alert('saved');
	            if ($scope.productid == "2") {
	                $scope.errormsg3 = "Thank You For selecting name.";
	                $scope.Onsave = true;
	            }
	            else {
	                $scope.errormsg3 = "Thank You For selecting name.";
	                $scope.Onsave = true;
	            }
	        } else {
	            alert('failed');
	        }


	       






	    }, function (error) {
	        $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
	    });
	};

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
        // getSurnames();
    }
    f_PageLoad();
}

orderDetailsController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];