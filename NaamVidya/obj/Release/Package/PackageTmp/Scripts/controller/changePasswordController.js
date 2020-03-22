var changePasswordController = function ($scope, $location, commonService, globals,ngMeta) {
    console.log('change Password Controller called');
    ngMeta.setTitle('Change Password', ' | Naamvidya');
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format: 'dd-mmm-yyyy'
	});
    $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
    if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
        $location.url('/login');
	}
    $scope.f_Update = function () {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
		}
        if ($scope.OPassword == "" || $scope.OPassword == undefined || $scope.OPassword == null) {
            $scope.errorMsg = "Enter Existing Password";
            return;
		}
        else if ($scope.Password == "" || $scope.Password == undefined || $scope.Password == null) {
            $scope.errorMsg = "Enter New Password";
            return;
		}
        if ($scope.Password.length < 6) {
            $scope.errorMsg = "Password should contain atleast 6 characters";
            return;
		}
        else if ($scope.ChangePassword == "" || $scope.ChangePassword == undefined || $scope.ChangePassword == null) {
            $scope.errorMsg = "Please Re-Enter And Confirm Your Password";
            return;
		}
        else if ($scope.Password != $scope.ChangePassword) {
            $scope.errorMsg = "New Password and Confirmed Password should match. Please Re-Enter";
            return;
		}        
        var v_http_link = "Routes/changePassword";
        var v_push_template = {
            "OPassword": $scope.OPassword,
            "Password": $scope.Password,
            "REGN_GUID": $scope.REGN_GUID
		}
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
			var data = val.data;
			if (data != "") {
				$scope.errorMsg = data[0].msg;
				$scope.OPassword = "";
				$scope.Password = "";
				$scope.ChangePassword = "";
			}
			}, function (error) {
			alert('Fail : ' + error.status + ' ' + error.statusText);
		});
	};
}
changePasswordController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];				