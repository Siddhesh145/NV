var giftController = function ($scope, ngMeta, commonService, globals, $location, $rootScope,$timeout) {
    console.log('Gift Controller called')
    //alert("Blog Controller Called");
    ngMeta.setTitle('Gift', ' | Naamvidya');
    ngMeta.setTag('keywords', '');
    ngMeta.setTag('description', '');
    $scope.chosenTitle = 'Gift | Naamvidya';
    $scope.metaDescription = 'A name can bring success or struggle in life. Take a free first name and full name analysis to see how it has affected you or your baby. Understand why a naming ceremony was a ritual and why saints took up a new name on their spiritual journeys.';
    $scope.gift = {};
    var gift_data = JSON.parse(sessionStorage.getItem("gift_form_data"));
    if (gift_data == "" || gift_data == null || gift_data == undefined) {
        $scope.Message = "";
        $scope.To_Name = "";
        $scope.To_EmailId = "";
	}
    else
    {
        $scope.Message = gift_data.GMessage;
        $scope.To_Name = gift_data.To_Name;
        $scope.To_EmailId = gift_data.To_EmailId;
	}
    var From_EmailId = sessionStorage.getItem('EmailId');
    $scope.From_name = sessionStorage.getItem('FirstName');
    if (globals.f_check_email(From_EmailId)) {
        $scope.From_EmailId = sessionStorage.getItem('EmailId');
	}
    function Getdetails() {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            //$location.url('/login');
		}
        var v_http_link = "Routes/getMyGiftDetail";
        var v_push_template = {
            //"TEMP_GUID": commonService.get_cookies_data('GUID'),
			// "REGN_GUID": $scope.REGN_GUID,
            //"Voucher": $scope.applycode
		}
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
			var data = val.data;
			console.log(data);
			if (data != "") {
				console.log('Before displaying My Cart Detail');
				console.log(JSON.stringify(data));
				$scope.MyCartDetail = data;
				$scope.MyCartDetail = JSON.parse(data);
				console.log('After displaying My Cart Detail');
				//style();
				$timeout(settime,1);
			}
			else {
				//$scope.MyGiftDetail = data;
				//$scope.NodataFound = true
			}
			}, function (error) {
			$scope.MyGiftDetail = [];
			alert('Fail : ' + error.status + ' ' + error.statusText);
		});
	}
	Getdetails();
	function settime() {
        $scope.ProductId = sessionStorage.getItem('GProductId');
        //alert($scope.ProductId);
        if ($scope.ProductId == 9) {
			setproduct(9);
		}
        else {
			setproduct(10);
		}
	}
	$scope.gname = "Gift Card Name";
	$scope.gprice = "0.0";
	$scope.OpenCourse = function (p_data) { setproduct(p_data); }
	function setproduct(p_data)
	{
        if (p_data == 9) 
		{
			//alert("Called " + p_data);
			document.getElementById("Gold Baby Name Gift").style.backgroundColor = "#d60a61";
			document.getElementById("Platinum Baby Name Gift").style.backgroundColor = "#aaafb5";
			//document.getElementById("Gold New Name").style.backgroundColor = "#DAA520";
			//document.getElementById("Platinum New Name").style.backgroundColor = "#aaafb5";
			$scope.giftcard_id = parseInt(p_data);
			$scope.gprice = "1690.00";
			$scope.gname = "Gold Baby Name Gift";
			sessionStorage.setItem('ProductId', p_data);
		}
		if (p_data == 10) 
		{
			//alert("Called " + p_data);
			document.getElementById("Gold Baby Name Gift").style.backgroundColor = "#DAA520";
			document.getElementById("Platinum Baby Name Gift").style.backgroundColor = "#d60a61";
			//document.getElementById("Gold New Name").style.backgroundColor = "#DAA520";
			//document.getElementById("Platinum New Name").style.backgroundColor = "#aaafb5";
			$scope.giftcard_id = parseInt(p_data);
			$scope.gprice = "2100.00";
			$scope.gname = "Platinum Baby Name Gift";
			sessionStorage.setItem('ProductId', p_data);
		}
		if (p_data == 11) 
		{
			document.getElementById("Gold Baby Name Gift").style.backgroundColor = "#DAA520";
			document.getElementById("Gold Baby Name Gift").style.backgroundColor = "#aaafb5";
			//document.getElementById("Gold New Name").style.backgroundColor = "#d60a61";
			//document.getElementById("Platinum New Name").style.backgroundColor = "#aaafb5";
			$scope.giftcard_id = parseInt(p_data);
			$scope.gprice = "2100.00";
			$scope.gname = "Gold New Name";
			sessionStorage.setItem('ProductId', p_data);
		}
		if (p_data == 12)
		{
			//alert("Called " + p_data);
			document.getElementById("Gold Baby Name Gift").style.backgroundColor = "#DAA520";
			document.getElementById("Platinum Baby Name").style.backgroundColor = "#aaafb5";
			//document.getElementById("Gold New Name").style.backgroundColor = "#DAA520";
			//document.getElementById("Platinum New Name").style.backgroundColor = "#d60a61";
			$scope.giftcard_id = parseInt(p_data);
			$scope.gprice = "4380.00";
			$scope.gname = "Platinum New Name";
			sessionStorage.setItem('ProductId', p_data);
		}
	}
	function validation() {
		if ($scope.giftcard_id == "" || $scope.giftcard_id == null || $scope.giftcard_id == undefined) {
			$scope.errormsg = "Select Gift Card";
			return false;
		}
		else if ($scope.To_Name == "" || $scope.To_Name == null || $scope.To_Name == undefined) {
			$scope.errormsg = "Enter To Name";
			return false;
		}
		else if ($scope.To_EmailId == null || $scope.To_EmailId == undefined) {
			$scope.errormsg = "Enter To Email ID";
			return false;
		}
		else if (globals.f_check_email($scope.To_EmailId) == false) {
			$scope.errormsg = "Enter Valid To Email ID";
			return false;
		}
		else if ($scope.From_name == "" || $scope.From_name == null || $scope.From_name == undefined) {
			$scope.errormsg = "Enter From Name";
			return false;
		}
		//else if ($scope.From_EmailId == "" || $scope.From_EmailId == null || $scope.From_EmailId == undefined) {
		//	$scope.errormsg = "Enter From Email ID";
		//	return false;
		//}
		//else if (globals.f_check_email($scope.From_EmailId) == false) {
		//	$scope.errormsg = "Enter Valid From Email ID";
		//	return false;
		//}
		else if ($scope.Message == "" || $scope.Message == null || $scope.Message == undefined) {
			$scope.Message = "";
			return true;
		}
		else {
			$scope.errormsg = "";
			return true;
		}
	}
	$scope.fn_Add_To_Cart = function ()
	{
		$scope.gift.To_EmailId = $scope.To_EmailId;
		$scope.gift.To_Name = $scope.To_Name;
		$scope.gift.GMessage = $scope.Message;
		sessionStorage.setItem("gift_form_data", angular.toJson($scope.gift));
		$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');

	
			if (validation())
			{
				//alert("validation done");
				$scope.msgdone = true;
				$scope.msgerror = false;
				$scope.errormsg = "";
				console.log("validation done");
				console.log("validation done");
				if (commonService.get_cookies_data('GUID') == "null")
				{
					commonService.remove_cookies_data("GUID");
				}
				if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '')
				{
					//commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
					//alert("REGN_GUID :" + $scope.REGN_GUID);
				    AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), sessionStorage.getItem('EmailId'), $scope.From_name, $scope.To_Name, $scope.To_EmailId, $scope.giftcard_id, $scope.Message);
					//AddToCart("", sessionStorage.getItem('REGN_GUID'), $scope.productid, $scope.firstName, $scope.middleName, $scope.lastName, $scope.dob, $scope.gender, $scope.mobileno)
					$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');

					if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
					    $location.url('/login');
					    //alert("REGN_GUID :" + $scope.REGN_GUID);
					}

				}
				else
				{
					commonService.put_cookies_data('GUID', sessionStorage.getItem('REGN_GUID'));
					//commonService.put_cookies_data('GUID', data[0].REGN_GUID);
					//alert("REGN_GUID :" + $scope.REGN_GUID);
					AddToCart(commonService.get_cookies_data('GUID'), sessionStorage.getItem('REGN_GUID'), sessionStorage.getItem('EmailId'), $scope.From_name, $scope.To_Name, $scope.To_EmailId, $scope.giftcard_id, $scope.Message);
				}
			}
			else
			{
				$scope.msgdone = false;
				$scope.msgerror = true;
			}
		
	}
	$scope.fn_View_Cart = function () {
		$location.url('/my-cart-detail');
	}
	function AddToCart(TEMP_GUID, REGN_GUID, From_EmailId, FirstName,To_Name,To_EmailId, PoductId, Message) {
		var v_http_link = "Routes/AddToCart";
		var v_push_template = {
			"TEMP_GUID": TEMP_GUID,
			"REGN_GUID": REGN_GUID,
			"ProductId": PoductId,
			"FirstName": FirstName,
			"Email_Id": From_EmailId,
			"Message": Message,
			"To_EmailId": To_EmailId,
			"To_Name": To_Name,
		}
		var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
		v_post_json_data.then(function (val) {
			var data = val.data;
			if (data != "") {
				console.log(JSON.stringify(data));
				commonService.put_cookies_data('GUID', data[0].REGN_GUID);
				//alert(commonService.get_cookies_data('GUID'));
				if (data[0].flag==true)
				{
					$scope.errormsg = "Enter Valid To Email ID";
					return false;
				}
				else
				{
					$scope.errormsg = "Service added to cart successfully.";
				}
				$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
				if ($scope.REGN_GUID != null) {
					//alert($scope.REGN_GUID);
					sessionStorage.removeItem("gift_form_data");
				}
				$location.url('/my-cart-detail');
				$scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
				
				var v_http_link = "Routes/CountMyCart";
				var v_push_template = {
					"TEMP_GUID": commonService.get_cookies_data('GUID'),
					"REGN_GUID": sessionStorage.getItem('REGN_GUID')
				}
				//alert("TEMP_GUID :" + commonService.get_cookies_data('GUID') + "REGN_GUID :" + sessionStorage.getItem('REGN_GUID'));
				var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
				v_post_json_data.then(function (val) {
					var data = val.data;
					//console.log(data);
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
			    //CountOfMyCart();
				var redirecturl = sessionStorage.getItem('pageToRedirect');
				if (redirecturl == null) {
				    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
				}
				else {
				    sessionStorage.setItem('pageToRedirect', '/my-cart-detail');
				}
				clear();
			    //f_set_gift();
				
			}
			}, function (error) {
			alert('Fail : ' + error.status + ' ' + error.statusText);
		});
	}
	function clear() {
		$scope.To_Name = "";
		$scope.From_name = "";
		$scope.To_EmailId = "";
		$scope.From_EmailId = "";
		$scope.Message = "";
		$scope.gprice = "0.0";
		$scope.gname = "Gift Card Name";
		document.getElementById("Gold Baby Name Gift").style.backgroundColor = "#DAA520";
		document.getElementById("Platinum Baby Name Gift").style.backgroundColor = "#aaafb5";
	
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
	function f_indexBody() {
		$("#body").removeClass("home-layout");
	}
	f_indexBody();
}
giftController.$inject = ['$scope', 'ngMeta', 'commonService', 'globals', '$location', '$rootScope', '$timeout'];																																																																																		