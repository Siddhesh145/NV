var loginController = function ($scope, $location, commonService, globals, ngMeta, $rootScope) {
    ngMeta.setTitle('Login', ' | Naamvidya');
    ngMeta.setTag('keywords', 'Naam Vidya, Naamvidya, Baby names, Business name');
    ngMeta.setTag('description', 'Login Now at Naamvidya - Take a Free Full Name Analysis to see how your full name has impacted you');
    console.log('Login controller called');
    /************Google Sig In*****************/
    window.onbeforeunload = function (e) {
        gapi.auth2.getAuthInstance().signOut();
	};
    function onSuccess(googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        alert(googleUser.getBasicProfile().getId());
        if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
            $scope.authenticate("G", googleUser.getBasicProfile().getId(), googleUser.getBasicProfile().getName(), googleUser.getBasicProfile().getEmail(), $scope.captchaText);
		}
	}
    function onFailure(error) {
        console.log(error);
	}
    //function renderButton() {
    //    gapi.signin2.render('my-signin2', {
    //        'scope': 'profile email',
    //        'width': 167,
    //        'height': 25,
    //        'longtitle': true,
    //        'theme': 'dark',
    //        'onsuccess': onSuccess,
    //        'onfailure': onFailure
    //    });
//}
//renderButton();
function startApp() {
	gapi.load('auth2', function () {
		gapi.client.load('plus', 'v1').then(function () {
			//gapi.signin2.render('customBtn', {
			//    scope: 'profile email',
			//    fetch_basic_profile: true,
			//    onsuccess: onSuccess,
			//    onfailure: onFailure
		//});
		gapi.auth2.init({
			fetch_basic_profile: true,
			client_id: '740576459620-4ed2me5ahloak1o66tbumefn360o256r.apps.googleusercontent.com',
			scope: 'profile email',
			onsuccess: onSuccess,
			onfailure: onFailure
			}).then(function () {
			console.log('init');
			auth2 = gapi.auth2.getAuthInstance();
			auth2.isSignedIn.listen(function () {
				console.log(auth2.currentUser.get());
			});
			attachSignin(document.getElementById('customBtn'));
			auth2.then(function (resp) {
				console.log(auth2.currentUser.get());
			});
		});
	});
});
}
function attachSignin(element) {
	console.log(element.id);
	auth2.attachClickHandler(element, {},
	function (googleUser) {
		//document.getElementById('name').innerText = "Signed in: " +
		//  googleUser.getBasicProfile().getName();
		if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
			$scope.authenticate("G", googleUser.getBasicProfile().getId(), googleUser.getBasicProfile().getName(), googleUser.getBasicProfile().getEmail(), $scope.captchaText);
		}
		}, function (error) {
		console.log(JSON.stringify(error, undefined, 2));
	});
}
function signOut() {
	auth2.signOut();
}
function disconnect() {
	auth2.disconnect();
}
function authResponse() {
	console.log(auth2.currentUser.get().getAuthResponse());
}
//window.onbeforeunload = function (e) {
//    gapi.auth2.getAuthInstance().signOut();
//};
/*****************************************/
$scope.authenticate = function (provider, id, name, email, captcha) {
	///////////////
	if(email==undefined || email=='undefined'){
		email=id;
	}
	var v_http_link = "Routes/authenticatesso";
	var v_push_template = {
		"Provider": provider,
		"ProfileId": id,
		"Name": name,
		"Email": email,
		"Captcha": captcha
	}
	var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
	v_post_json_data.then(function (val) {
		var data = val.data;
		if (data != "") {
			if (data.flag == true) {
				sessionStorage.setItem('EmailId', data.EmailId);
				sessionStorage.setItem('FirstName', data.FirstName);
				sessionStorage.setItem('REGN_GUID', data.REGN_GUID);
				$('#Processfile').hide();
			}
			else {
				$scope.errorMsg = data.msg;
				$('#Processfile').hide();
			}
			} else {
			$('#Processfile').hide();
		}
		var redirecturl = sessionStorage.getItem('pageToRedirect');
		if (redirecturl == null) {
			$location.url('/home');
			} else {
			$location.url(redirecturl);
		}
		}, function (error) {
		$('#Processfile').hide();
		console.log('Fail : ' + error.status + ' ' + error.statusText);
	});
	///////////////
}
$scope.checkLoginState = function () {
	FB.getLoginStatus(function (response) {
		if (response.status === 'connected') {
			FB.api('/me', { fields: 'id, name, email' }, function (response) {
				$scope.authenticate("FB", response.id, response.name, response.email, $scope.captchaText);
			});
			} else {
			//FB.login();
			FB.login(function (response) {
				// handle the response
			}, { scope: 'email',auth_type: 'rerequest',return_scopes: true });
			$scope.onlogon();
		}
	});
};
$scope.onlogon = function () {
	FB.Event.subscribe('auth.login', function (response) {
		FB.api('/me', { fields: 'id, name, email' }, function (response) {
			//alert(response.name);
			//alert(response.id);
			//alert(response.email);
			///////////////
			$scope.authenticate("FB", response.id, response.name, response.email, $scope.captchaText);
			///////////////
		});
	});
};
$("#body").removeClass("home-layout");
$scope.loginCaptionFlag = sessionStorage.getItem('pageToRedirect');
if ($scope.loginCaptionFlag == '/full-name-analysis') {
	$scope.loginCaption = ' For Free Full Name Report';
	sessionStorage.setItem('pageRedirectFrom', '');
}
else
{
	$scope.loginCaption = '';
}	
// $('.datepicker').pickadate({
// selectMonths: true,
// selectYears: 150,
// format: 'dd-mmm-yyyy'
// });
$scope.f_forgotPassword = function () {
	$scope.successMsg = "";
	$scope.errorMsg = "";
	if ($scope.EmailId == "" || $scope.EmailId == undefined || $scope.EmailId == null) {
		$scope.errorMsg = "Please Enter your Registered Email-Id so that we can help you recover your details.";
		return;
	}
	//else if ($scope.captchaText == "" || $scope.captchaText == undefined || $scope.captchaText == null) {
	//    $scope.errorMsg = "Enter Captcha";
	//    return;
//}
$('#Processfile').show();
//$scope.errorMsg = "We have Forwarded Password on your Registered Email-Id.";
var v_http_link = "Routes/forgotPassword";
var v_push_template = {
	"EmailId": $scope.EmailId,
	"Captcha": $scope.captchaText
}
var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
v_post_json_data.then(function (val) {
	var data = val.data;
	if (data != "") {
		if (data[0].flag == true) {
			$scope.successMsg = data[0].msg;
			$scope.EmailId = "";
			$scope.Password = "";
			$scope.captchaText = "";
			f_loadCaptcha();
			$('#Processfile').hide();
		}
		else {
			$scope.errorMsg = data[0].msg;
			$('#Processfile').hide();
		}
		} else {
		$('#Processfile').hide();
	}
	}, function (error) {
	$('#Processfile').hide();
	console.log('Fail : ' + error.status + ' ' + error.statusText);
});
};
$scope.EmailId = "";
$scope.Password = "";
$scope.captchaText = "";
$scope.f_Login = function () {
	$scope.successMsg = "";
	$scope.errorMsg = "";
	if ($scope.EmailId == "" || $scope.EmailId == undefined || $scope.EmailId == null) {
		$scope.errorMsg = "Enter Email-Id";
		return;
	}
	else if ($scope.Password == "" || $scope.Password == undefined || $scope.Password == null) {
		$scope.errorMsg = "Enter Password";
		return;
	}
	//else if ($scope.captchaText == "" || $scope.captchaText == undefined || $scope.captchaText == null) {
	//    $scope.errorMsg = "Enter Captcha";
	//    return;
//}
$scope.emailOrderId = sessionStorage.getItem('emailOrderId');
var v_http_link = "Routes/login";
var v_push_template = {
	"EmailId": $scope.EmailId,
	"Password": $scope.Password,
	"Captcha": $scope.captchaText,
	"emailOrderId": $scope.emailOrderId
}
var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
v_post_json_data.then(function (val) {
	var data = val.data;
	f_loadCaptcha();
	if (data != "") {
		if (data[0].flag == true) {
			sessionStorage.setItem('EmailId', data[0].EmailId);
			sessionStorage.setItem('FirstName', data[0].FirstName);
			sessionStorage.setItem('REGN_GUID', data[0].REGN_GUID);
			sessionStorage.setItem('UserFlag', data[0].UserFlag);
			//$scope.gift = {};
			//$scope.gift.To_EmailId = "";
			//$scope.gift.To_Name = "";
			//$scope.gift.GMessage = "";
			//sessionStorage.setItem("gift_form_data", angular.toJson($scope.gift));
			$scope.UserFlag = data[0].UserFlag;
			var v_http_link = "Routes/UpdateLoginInMyCart";
			var v_push_template = {
				"TEMP_GUID": commonService.get_cookies_data('GUID'),
				"REGN_GUID": data[0].REGN_GUID
			}
			var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
			v_post_json_data.then(function (val) {
				var data1 = val.data;
				if (data1 != "") {
					//console.log(JSON.stringify(data));
					commonService.put_cookies_data('GUID', data1[0].REGN_GUID);
					CountOfMyCart();
					//alert(commonService.get_cookies_data('GUID'));
					//$scope.errormsg = "Product added to cart successfully.";
				}
				}, function (error) {
				alert('Fail : ' + error.status + ' ' + error.statusText);
			});
			var redirectemailurl = sessionStorage.getItem('emailLink');
			var redirecturl = sessionStorage.getItem('pageToRedirect');
			//if (redirecturl == null)
			//{
			//	$location.url('/home');
			//}
			//else
			//{
			//	$location.url(redirecturl);
			//}
			//if (redirectemailurl == null)
			//{
			//	$location.url('/home');
			//}
			//else
			//{
			//	$location.url(redirectemailurl);
			//}
			sessionStorage.removeItem("giftmail");

			if (redirecturl != null)
			{
			    $location.url(redirecturl);
			}
			else if (redirectemailurl != null)
			{
			    $location.url(redirectemailurl);
			}
			else
			{
			    $location.url('/home');
			}



		}
		else {
			$scope.errorMsg = (data[0].msg);
		}
	}
	}, function (error) {
	f_loadCaptcha();
	alert('Fail : ' + error.status + ' ' + error.statusText);
});
};
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
					"Count": $scope.CartCount
				}
			});
		}
		else {
		}
		}, function (error) {
		alert('Fail : ' + error.status + ' ' + error.statusText);
	});
}
//function CountOfMyCart() {
//    var v_http_link = "Routes/CountMyCart";
//    var v_push_template = {
//        "TEMP_GUID": commonService.get_cookies_data('GUID'),
//        "REGN_GUID": sessionStorage.getItem('REGN_GUID')
//    }
//    var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
//    v_post_json_data.then(function (val) {
//        var data = val.data;
//        //console.log(data);
//        if (data != "") {
//            console.log('Before displaying My Cart Count');
//            $scope.CartCount = data[0].CartCount;
//            sessionStorage.setItem('CartCount', $scope.CartCount);
//            $scope.$emit('UpdateCartCount', {
//                message: {
//                    "Count": data[0].CartCount
//                }
//            });
//        }
//        else {
//        }
//    }, function (error) {
//        alert('Fail : ' + error.status + ' ' + error.statusText);
//    });
//    //var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
//    //v_post_json_data.then(function (val) {
//    //    var data = val.data;
//    //    console.log(data);
//    //    if (data != "") {
//    //        console.log('Before displaying My Cart Count from login');
//    //        $scope.CartCount = data[0].CartCount;
//    //        sessionStorage.setItem('CartCount', $scope.CartCount);
//    //        alert("Login Controller:" + $scope.CartCount);
//    //        $scope.$emit('UpdateCartCount', {
//    //            message: {
//    //                "Count": data[0].CartCount
//    //            }
//    //        });
//    //    }
//    //    else {
//    //    }
//    //}, function (error) {
//    //    alert('Fail : ' + error.status + ' ' + error.statusText);
//    //});
//}
$scope.f_loadCaptcha = function () {
	f_loadCaptcha();
}
function f_loadCaptcha() {
	$.ajax({
		type: 'POST', url: 'Routes/generateCaptcha',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		cache: false,
		success: function (data) { $("#m_imgCaptcha").attr('src', data); },
		error: function (data) { alert("Error while loading captcha image") }
	});
}
function Page_load() {
	f_loadCaptcha();
};
Page_load();
startApp();
}
loginController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$rootScope'];							