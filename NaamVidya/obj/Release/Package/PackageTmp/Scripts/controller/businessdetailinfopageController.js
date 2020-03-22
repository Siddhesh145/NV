var businessdetailinfopageController = function ($scope, $location, commonService, globals, ngMeta, $rootScope) {

    console.log('detailinfopage controller reporting for duty.');
    ngMeta.setTitle('Detail Info Page', ' | Naamvidya');
    $("#body").removeClass("home-layout");
   
if (sessionStorage.getItem('ProductId') == undefined || sessionStorage.getItem('ProductId') == null || sessionStorage.getItem('ProductId') == '') {
	//alert("Invalid Url");
	$location.url('/login');
}

$scope.track = "0";
$scope.maintrack = $scope.track;

$scope.productid = sessionStorage.getItem('ProductId'); //Set Product Id global parameter
console.log('$scope.productid : ' + $scope.productid);


$scope.product_price = 3700;
if ($scope.productid == 2)
{
	$scope.ngShowFirstName = true;
	$scope.neworcorrection = "C";
	$scope.telephonicCheck = false;
	$scope.product_price = 3700;
}
else if ($scope.productid == 5)
{
	$scope.ngShowFirstName = true;
	$scope.neworcorrection = "C";
	$scope.telephonicCheck = true;
	$scope.product_price = 7300;
}
$scope.dvbasictl = true;
$scope.dvproductdtl = false;
$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 15 // Creates a dropdown of 15 years to control year
});

$('input:radio[name=nc]').click(function ()
{
	var mf = $('input:radio[name=nc]:checked').val();
	$scope.neworcorrection = mf;
	clear();
	//alert($scope.neworcorrection);
	if ($scope.neworcorrection == "C") {
		$scope.ngShowFirstName = true;
		sessionStorage.setItem('ProductId', 2);
		$scope.product_price = 3700;
	}
	else {
		$scope.ngShowFirstName = false;
		sessionStorage.setItem('ProductId', 4);
		$scope.product_price = 3700;
	}
	$scope.productid = sessionStorage.getItem('ProductId');
	//set_teleCons_productId($scope.productid);
});



$('input:radio[name=mf]').click(function () {
	var mf = $('input:radio[name=mf]:checked').val();
	//$scope.gender = mf;
	$('#txtGender').val(mf);
});
$scope.f_click_gender = function (p_data)
{
	$scope.gender = p_data;
	console.log(p_data);
}

$scope.onCategoryChange = function (val)
{
   
    var element = document.getElementById('track');
    if (val == 'Others') {
        $scope.txttrack = "";
        element.style.display = 'block';
        $scope.trackflag = 'true';
    }
    else
    {
        $scope.txttrack = "";
        $scope.trackflag = 'false';
        element.style.display = 'none';
        $scope.maintrack = $scope.track;
    }
};

function validation()
{
    $scope.errormsg = "";
    $scope.middleName= "";
    $scope.lastName = "";
    $scope.gender = "";

    $scope.maintrack = $scope.track;
	if ($scope.errormsg == "") {
		$scope.errormsg = "Please Enter following : ";
	}
	
    if ($scope.firstName == "" || $scope.firstName == null || $scope.firstName == undefined)
    {
        if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Promoter Name" } else { $scope.errormsg += " ,Promoter Name" };

        //$scope.errormsg += "Promoter Name";
    }
	if ($scope.mobileno == "" || $scope.mobileno == null || $scope.mobileno == undefined) {
	    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Mobile No." } else { $scope.errormsg += " ,Mobile No." };
	}
	if ($scope.entityNameOne == "" || $scope.entityNameOne == null || $scope.entityNameOne == undefined)
	{
	    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Entity Name 1" } else { $scope.errormsg += " ,Entity Name 1" };
	}

	if ($scope.Remarks == "" || $scope.Remarks == null || $scope.Remarks == undefined)
	{
	    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Nature of business" } else { $scope.errormsg += " ,Nature of business" };
	}
	//if ($scope.entityNameThree == "" || $scope.entityNameThree == null || $scope.entityNameThree == undefined)
	//{
	//    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Entity Name 3" } else { $scope.errormsg += " ,Entity Name 3" };
	//}
	//if ($scope.entityNameFour == "" || $scope.entityNameFour == null || $scope.entityNameFour == undefined)
	//{
	//    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Entity Name 4" } else { $scope.errormsg += " ,Entity Name 4" };
	//}
	//if ($scope.entityNameFive == "" || $scope.entityNameFive == null || $scope.entityNameFive == undefined)
	//{
	//    if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "Entity Name 5 " } else { $scope.errormsg += " ,Entity Name 5" };
	//}

	if ($scope.maintrack == "" || $scope.maintrack == null || $scope.maintrack == undefined || $scope.maintrack == "0" || $scope.maintrack == "Others")
	{
	    if ($scope.trackflag == 'true')
	    {
	        if ($scope.txttrack == "" || $scope.txttrack == null || $scope.txttrack == undefined) {
	            if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "How did you hear about us?" } else { $scope.errormsg += " ,How did you hear about us?" };
	        }
	    }
	    else
	    {
	        if ($scope.errormsg == "Please Enter following : ") { $scope.errormsg += "How did you hear about us?" } else { $scope.errormsg += " ,How did you hear about us?" };

	    }
	}
	if ($scope.errormsg == "Please Enter following : ")
	{
		var monthno = globals.f_Month_Val($scope.MonthNames);
		var Date1 = monthno + "/" + $scope.Days + "/" + $scope.Years; // Date to pass in MM/DD/YYYY
		$scope.dob = Date1;
		var newdate = new Date();
		dt1 = new Date(Date1);
		dt2 = new Date(newdate);
		var diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24 * 30));
		if (globals.ValidateForm(Date1))
		{
			
			return true;
		}
		else
		{
			//alert("Invalid");
			$scope.errormsg = "Invalid Date Format";
			return false;
		}
	}
	else
	{
		return false;
	}
}


$scope.fn_Add_To_Cart = function ()
{
    if (validation())
    {
		//alert("validation done");
		$scope.msgdone = true;
		$scope.msgerror = false;
		$scope.errormsg = "";
		
		console.log("validation done");
		if (commonService.get_cookies_data('GUID') == "null") {
			commonService.remove_cookies_data("GUID");
		}

		if ($scope.txttrack.length > 0) {
		    $scope.maintrack = $scope.txttrack;
		}
	
		if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
			
		    AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.productid, $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno, $scope.entityNameOne, $scope.entityNameTwo, $scope.entityNameThree, $scope.entityNameFour, $scope.entityNameFive, $scope.Remarks, $scope.maintrack);
			
			$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
			if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '')
			{
				$location.url('/login');
				
			}
		}
		else
		{
			commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
			
			AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), $scope.productid, $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob,$scope.gender,$scope.mobileno, $scope.entityNameOne, $scope.entityNameTwo, $scope.entityNameThree, $scope.entityNameFour, $scope.entityNameFive, $scope.Remarks, $scope.maintrack);
		}
	}
    else
    {
		$scope.msgdone = false;
		$scope.msgerror = true;
	}
}
$scope.fn_View_Cart = function () {
	//alert("fn_View_Cart");
	$location.url('/my-cart-detail');
}
function AddToCart(TEMP_GUID, REGN_GUID, PoductId, FirstName, MiddleName, LastName, DOB, Gender, MobileNo, EntityNameOne, EntityNameTwo, EntityNameThree, EntityNameFour, EntityNameFive, Remarks, track)
{
	var v_http_link = "Routes/AddToCart";
	var v_push_template = {
		"TEMP_GUID": TEMP_GUID,
		"REGN_GUID": REGN_GUID,
		"ProductId": PoductId,
		"FirstName": FirstName,
		"MiddleName": MiddleName,
		"LastName": LastName,
		"Date_Of_Birth": DOB,
		//"Date_Of_Birth": $scope.Years + "-" + $scope.MonthNames + "-" + $scope.Days,
		"Gender": Gender,
		"MobileNo": MobileNo,
		"Name1": EntityNameOne,
		"Name2": EntityNameTwo,
		"Name3": EntityNameThree,
		"Name4": EntityNameFour,
		"Name5": EntityNameFive,
		"Remarks": Remarks,
		"track": track
	}
	var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	v_post_json_data.then(function (val) {
		var data = val.data;
		if (data != "")
		{
			console.log(JSON.stringify(data));
			commonService.put_cookies_data('GUID', data[0].REGN_GUID);
			//alert(commonService.get_cookies_data('GUID'));
			$scope.errormsg = "Service added to cart successfully.";
			CountOfMyCart();
			//clear();
			$location.url('/my-cart-detail');

		}
		}, function (error) {
		alert('Fail : ' + error.status + ' ' + error.statusText);
	});
}
function CountOfMyCart() {
	$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
	if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
		$location.url('/login');
	}
	var v_http_link = "Routes/CountMyCart";
	var v_push_template = {
		"TEMP_GUID": commonService.get_cookies_data('GUID'),
		"REGN_GUID": sessionStorage.getItem('REGN_GUID')
	}
	//alert("TEMP_GUID :" + commonService.get_cookies_data('GUID') + "REGN_GUID :" + sessionStorage.getItem('REGN_GUID'));
	var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	v_post_json_data.then(function (val) {
		var data = val.data;
		console.log(data);
		if (data != "") {
			console.log('Before displaying My Cart Count');
			$scope.CartCount = data[0].CartCount;
			sessionStorage.setItem('CartCount', $scope.CartCount);
			$scope.$emit('UpdateCartCount', {
				message: {
					"Count": data[0].CartCount
				}
			});
		}
		else {
		}
		}, function (error) {
		alert('Fail : ' + error.status + ' ' + error.statusText);
	});
}
function clear() {

    $scope.entityNameOne = "";
    $scope.entityNameTwo = "";
    $scope.entityNameThree = "";
    $scope.entityNameFour = "";
    $scope.entityNameFive = "";
	$scope.firstName = "";
	$scope.dob = "";
	$scope.lastName = "";
	$scope.middleName = "";
	$scope.mobileno = "";
	$scope.gender = "";
	$scope.Years = "";
	$scope.MonthNames = "";
	$scope.Days = "";
	$scope.Remarks = "";
	$scope.telephonicCheck = false;

	$scope.track ="0";

	$scope.txttrack = "";
	var element = document.getElementById('track');
	element.style.display = 'none';
}
if ($scope.productid == 3) {
	$scope.ngshowFName = true;
}
else {
	$scope.ngshowFName = false;
}
$scope.fn_OrderNow = function () {
	if (validation()) {
		$scope.errormsg = "";
		console.log("validation done");
		$scope.dvbasictl = false;
		$scope.dvproductdtl = true;
		//GetProductDetail();
	}
	else {
		console.log("validation error");
	}
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
businessdetailinfopageController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$rootScope'];