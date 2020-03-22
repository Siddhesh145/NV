var newRegistrationController = function ($scope, $location, commonService, globals, $timeout, ngMeta) {

    console.log('New Registration controller called');

    ngMeta.setTitle('New Registration', ' | Naamvidya');

    ngMeta.setTag('keywords', 'lucky names for business, baby name calculator, my name meaning , Naamvidya, name astrology ');
    ngMeta.setTag('description', 'Register at Naamvidya to know how your Full Name and Date of Birth have affected your life. How Advanced Numerology depicts your behaviour and destiny.');


    /************Chek Registerd Through Gift Card Start*****************/

    if (sessionStorage.getItem('giftmail'))
    {
        $scope.emailId = sessionStorage.getItem('giftmail')
    }
    else
    {
        $scope.emailId = "";
    }

    /************Chek Registerd Through Gift Card End*****************/
	
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
                FB.login(function (response) {
                    // handle the response
                }, { scope: 'email' });
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

/////

    $("#body").removeClass("home-layout");

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format: 'dd-mmm-yyyy'
    });

    $scope.regis = true;
    $scope.otpshow  = false;    

    startApp();

    $scope.f_SubmitOTP = function () 
	{
        if ($scope.OTP == '' || $scope.OTP == undefined || $scope.OTP == null) {
            $scope.errorMsg = "Enter OTP to proceed further";
            return;
        }
        var v_http_link = "Routes/validateOTP";
        var v_push_template = {
            "ValOtp": $scope.OTP
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                console.log(JSON.stringify(data));                
                if (data[0].flag == true) {
                    $location.url('/registration-confirmation');
                }
                else {
                    $scope.errorMsg1 = data[0].msg;
                }
            }
        }, function (error) {
            $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
        });
    };

    $scope.f_Submit = function () {
        if ($scope.firstName == '' || $scope.firstName == undefined || $scope.firstName == null) {
            $scope.errorMsg = "Enter First Name";
            return;
        }
        else if ($scope.lastName == '' || $scope.lastName == undefined || $scope.lastName == null) {
            $scope.errorMsg = "Enter Last Name";
            return;
        }
        else if ($scope.emailId == '' || $scope.emailId == undefined || $scope.emailId == null) {
            $scope.errorMsg = "Provide Email Id";
            return;
        }
        else if ($scope.emailId != '' && $scope.emailId != undefined && $scope.emailId != null) {
            if (f_check_email($scope.emailId) == false) {
                $scope.errorMsg = "Invalid Email ID";
                return;
            }
        }
        if ($scope.password == '' || $scope.password == undefined || $scope.password == null) {
            $scope.errorMsg = "Enter Password";
            return;
        }
        if ($scope.password.length < 6) {
            $scope.errorMsg = "Password should contain atleast 6 characters";
            return;
        }
        else if ($scope.confirmPassword == '' || $scope.confirmPassword == undefined || $scope.confirmPassword == null) {
            $scope.errorMsg = "Please Enter Confirm Password";
            return;
        }
        else if ($scope.password != $scope.confirmPassword)
        {
            $scope.errorMsg = "Confirm Password Does not Match with given Password";
            return;
        }
         $('#Processfile').show();
        var v_http_link = "Routes/newRegistration";
        var v_push_template = {
            "firstName": $scope.firstName,
            "lastName": $scope.lastName,
            "emailId": $scope.emailId,
            "password": $scope.password,
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "")
            {
                //console.log(JSON.stringify(data));
                $scope.errorMsg = data[0].msg;
                if (data[0].flag == true)
                {
                    $('#Processfile').hide();
                    $scope.regis = false;
                    $scope.otpshow = true;

                    window.scrollTo(0, 0);
                }
                else {
                    $('#Processfile').hide();
                    $scope.regis = true;
                    $scope.otpshow = false;
                }
            }
            else {
                $('#Processfile').hide();
            }
        }, function (error) {
			 $('#Processfile').hide();
            $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
        });
    };

    function f_check_email(val) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(val)) {
            return false;
        } else {
            return true;
        }
    }
}
newRegistrationController.$inject = ['$scope', '$location', 'commonService', 'globals','$timeout','ngMeta'];