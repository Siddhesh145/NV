var footerController = function ($scope, $location, commonService, globals, ngMeta) {
    console.log('footer controller reporting for duty.');
    ngMeta.setTitle('Name Numerology | Meaning of Names', ' | Naamvidya');
    $scope.fn_SendMail = function () {
        if ($scope.Name == "" || $scope.Name == undefined || $scope.Name == null) {
            $scope.errorMsg = "Please enter your name";
            return;
		}
        if ($scope.Email == "" || $scope.Email == undefined || $scope.Email == null) {
            $scope.errorMsg = "Enter your Email-Id";
            return;
		}
        if ($scope.Message == "" || $scope.Message == undefined || $scope.Message == null) {
            $scope.errorMsg = "Please drop your message";
            return;
		}
        var v_http_link = "Routes/footermail";
        var v_push_template = {
            "Name": $scope.Name,
            "EmailId": $scope.Email,
            "Message": $scope.Message
		}
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.errorMsg = data;
				}
			}, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
		});
	}
}
footerController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];