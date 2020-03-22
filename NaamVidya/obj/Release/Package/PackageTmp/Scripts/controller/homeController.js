var homeController = function ($scope, $location, commonService, globals, $timeout,ngMeta) {
	ngMeta.setTitle('Name Numerology', ' | Naamvidya');
    ngMeta.setTag('keywords', 'NaamVidya, Naam Vidya, Baby Name, Adult Name, Child Name, Spouse Name, Name Change, Numerology, Nominative Determinism, Hindu Baby Name, Muslim Baby Name, Name and destiny, Name Analysis, astrology, Chaldean, name correction, changing names, name meaning, consciousness, Purpose of life, Karma, why names matter, how to choose a name, personality, nature, purpose of life');
    ngMeta.setTag('description', 'A name can bring success or struggle in life. Take a free first name and full name analysis to see how it has affected you or your baby. Understand why a naming ceremony was a ritual and why saints took up a new name on their spiritual journeys');
    console.log("Home Controller reporting for duty.");
    // home layout css class adding
    $("#body").addClass("home-layout");
    // $("#body").removeClass("home-layout");
    //$('.navbar-toggler').click(function () {
    //    $(this).parent().toggleClass('menuopen');
//})
$('.slick-slider').bxSlider({
	pager: true,
	controls: false,
	auto:true,
	pause:6000,
	speed:500
});
$(".sideribbon img").click(function (e) {
	e.stopPropagation();
	$(this).parent().toggleClass('open');
	//$(".ribbonform").toggle();
});
$scope.firstName = "";
$scope.errMsg = "";
$scope.analyzeFirstName = function (fname) {
	if (fname == undefined || fname == '' || fname.indexOf(' ') >= 0) {
		// $scope.errMsg = "Please enter your first name only (without spaces).";
		$scope.errMsg = "Please enter your name only (e.g for 'Raj Nair' enter 'Raj').";
		return;
	}        
	else {
		$scope.errMsg = '';
	}
	$('#Processfile').show();

	var v_http_link = "Routes/Home";
	var v_push_template = {
		"firstName": fname
	}
	var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	v_post_json_data.then(function (val) {
		var data = val.data;
		if (data != "") {
			console.log(JSON.stringify(data));
			if (data == 'ERROR') {
				$('#Processfile').hide();
				$scope.errMsg = "Please enter your name only (e.g for 'Raj Nair' enter 'Raj').";
                } else {
				sessionStorage.setItem('datafornameanalysis', data);
				sessionStorage.setItem('firstnameforanalysis', fname);
				//$location.url('/'+fname);
				$timeout(call_name_page(fname), 1);
			}
			//$timeout(call_name_page, 1);
		}
        }, function (error) {
		$('#Processfile').hide();
		alert('Fail : ' + error.status + ' ' + error.statusText);
	});
};
function call_name_page(name) {
	$('#Processfile').hide();
	$location.url('/first-name-analysis');//' + name);
	//$location.url('/' + name);// + name);
	window.scrollTo(0, 0);
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
homeController.$inject = ['$scope', '$location', 'commonService', 'globals', '$timeout', 'ngMeta'];