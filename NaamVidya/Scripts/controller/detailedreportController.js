var detailedreportController = function ($scope, $location, commonService, globals, $filter, ngMeta) {
    console.log('detailedreport controller called')
    ngMeta.setTitle('Detailed Report', ' | Naamvidya');
    function f_indexBody() {
        $("#body").removeClass("home-layout");
	}
    f_indexBody();
	if (sessionStorage.getItem('REGN_GUID') == 'undefined' || sessionStorage.getItem('REGN_GUID') == '') {
		// $location.url("/login");
	}
    // alert(1);
	//Session["EmailId"] = id;
	//Session["FirstName"] = firstNm;
	//Session["REGN_GUID"] = REGN_GUID;
    //Session["UserFlag"] = UserFlag;
	//var EmailId = sessionStorage.getItem('EmailId');
	//alert(EmailId);
    $scope.firstName = sessionStorage.getItem('firstNameforRpt');
    $scope.fullName = sessionStorage.getItem('fullNameforRpt');
    $scope.dob = sessionStorage.getItem('dobforRpt');
    $scope.flag = sessionStorage.getItem('balancedFlag');
    if (sessionStorage.getItem('dataforRpt') == 'undefined') {
        $location.url("/full-name-analysis");
	}
    var rptData = JSON.parse(sessionStorage.getItem('dataforRpt'));
    $scope.section1 = $filter("filter")(rptData, {
        Section: 1
	}, true);
    $scope.section2 = $filter("filter")(rptData, {
        Section: 2
	}, true);
    $scope.section3 = $filter("filter")(rptData, {
        Section: 3
	}, true);
    $scope.section4 = $filter("filter")(rptData, {
		Section: 4
	}, true);
    $scope.downloadPDF = function () {
		var source = $('#pdfcontent')[0]
		var html = source.innerHTML;
		var v_http_link = "Routes/GeneratePdf";
		var v_push_template = {
			"html": html
		}
		var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
		v_post_json_data.then(function (val) {
			var data = val.data;
			if (data != "") {
				console.log(JSON.stringify(data));
				if (!main_app_function.f_AnchorDownload(data, "rpt.pdf")) {
					main_app_function.f_SaveAsDownload(data, "rpt.pdf");
				}
			}
			}, function (error) {
			alert('Fail : ' + error.status + ' ' + error.statusText);
		});
	};
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
detailedreportController.$inject = ['$scope', '$location', 'commonService', 'globals', '$filter', 'ngMeta'];									