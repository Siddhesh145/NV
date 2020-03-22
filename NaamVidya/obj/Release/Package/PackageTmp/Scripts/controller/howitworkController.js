var howitworkController = function ($scope, $location,ngMeta) {
	ngMeta.setTitle('Name Numerology | New Born Baby Name', ' | Naamvidya');
    ngMeta.setTag('keywords', 'Name Numerology, New Born Baby Name');
    ngMeta.setTag('description', 'Name numerologyis a science and there are experts who sharetheir knowledge to bring positive change in the lives of people. It is important to choosenew born baby nameat Naamvidya with great care for his or her brighter future.');
    console.log('how it work controller called');
	$("#body").removeClass("home-layout");
	$scope.currentPage = sessionStorage.getItem('currentPage');
	if ($scope.currentPage == 'howitworks')
	{
		$scope.currentPage = 'BabyName';
	}
	$('.tooltipped').tooltip({delay: 50});
    // function f_indexBody() {
	// $("#body").removeClass("home-layout1");
    // }
    // f_indexBody();
	$scope.f_active = function(p_data)
	{
		$scope.currentPage = p_data;
	}
	//$scope.f_New_Baby_Name = function () {
	//    sessionStorage.setItem('ProductId', 1); // Use To SetValue
	//    //sessionStorage.getItem('ProductId') // Use To GetValue
	//    $location.url('/baby-name');
//}
//$scope.f_Name_Correction = function () {
//    sessionStorage.setItem('ProductId', 2); // Use To SetValue
//    $location.url('/name-correction');
//}
//$scope.f_Spouse_Name = function () {
//    sessionStorage.setItem('ProductId', 3); // Use To SetValue
//    $location.url('/spouse');
//}
//$scope.f_Child_Name_Correction = function () {
//    sessionStorage.setItem('ProductId', 4); // Use To SetValue
//    $location.url('/child-name-correction');
//}
}
howitworkController.$inject = ['$scope', '$location', 'ngMeta'];