var freeReportsController = function ($scope, $location, commonService, globals, ngMeta) {
    console.log('Free Reports controller called');
    ngMeta.setTitle('Free Report', ' | Naamvidya');
    $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
    if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
        $location.url('/login');
	}
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format: 'dd-mmm-yyyy'
	});
    $scope.GenerateFreeReport = function (f_data) {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
		}
        var v_http_link = "Routes/registration";
        var v_push_template = {
            "firstName": f_data.FirstName,
            "middleName": f_data.MiddleName,
            "lastName": f_data.LastName,
            "dob": f_data.DOB,//$scope.Days + " - " + $scope.MonthNames + " - " + $scope.Years,
            "gender": f_data.Gender
		}
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                console.log(JSON.stringify(data));
                sessionStorage.setItem('firstNameforRpt', data.fName);
                sessionStorage.setItem('fullNameforRpt', data.fName + ' ' + data.mName + ' ' + data.lName);
                sessionStorage.setItem('dobforRpt', data.dob);
                sessionStorage.setItem('balancedFlag', data.flag);
                sessionStorage.setItem('dataforRpt', angular.toJson(data.listitems));
                $location.url('/full-name-report');
			}
			}, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
		});
	};
	function getFreeOrders() {
		$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
		if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
			$location.url('/login');
		}
		var v_http_link = "Routes/getFreeOrders";
		var v_push_template = {
			"REGN_GUID": $scope.REGN_GUID,
		}
		var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
		v_post_json_data.then(function (val) {
			var data = val.data;
			if (data != "") {
				$scope.freeList = data;
			}
			}, function (error) {
			$scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
		});
	}
	function PageLoad() {
		$scope.orderList = [];
		$scope.FreeOrderList = [];
		getFreeOrders();
	}
	PageLoad();
}
freeReportsController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];								