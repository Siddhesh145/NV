var nameController = function ($scope, $location, $stateParams,  commonService, globals, ngMeta) {
    ngMeta.setTitle('Name', ' | Naamvidya');
    ngMeta.setTag('keywords', 'names for success, name for good luck, name analysis, full name analysis');
    ngMeta.setTag('description', 'A name can bring hurt or bring success. Take a free first name and full name analysis to see how it has affected you or your baby.');
    console.log("Name Controller reporting for duty.");
    $("#body").removeClass("home-layout");
    $scope.firstNameRptName = "";
    $scope.firstNameRptName = sessionStorage.getItem('firstnameforanalysis');

    //if ($stateParams.name == '' || $stateParams.name == undefined || $stateParams.name == null) {
    //    $scope.firstNameRptName = sessionStorage.getItem('firstnameforanalysis');
    //} else {
    //    $scope.firstNameRptName = $stateParams.name;
    //}

    //$scope.name = sessionStorage.getItem('firstnameforanalysis');

    //var off = $scope.$on('$stateChangeStart', function (e) {
    //    e.preventDefault();
    //});
    //off();
    //$location.path('/first-name-analysis/' + $scope.name).replace();

    //var pathArray = window.location.pathname.split('/');
    //console.log(pathArray);

    $scope.getPartial = function () {
        var filename = "Files/ERROR.HTML";
        if (sessionStorage.getItem('datafornameanalysis') != 'ERROR') {
            filename = "Files/" + sessionStorage.getItem('datafornameanalysis');
        }      
        return filename;
    };

    $scope.$on('updateFNameName', function (event, args) {
        //alert('body alert');
        //$scope.CartCount = args.message.Count;
        $scope.firstNameRptName = sessionStorage.getItem('firstnameforanalysis');
        $scope.newfirstname = { "firstName": $scope.firstNameRptName, "ethnicity": "", "emailid": "", "gender": "" };
    });

    $scope.newfirstname = { "firstName": $scope.firstNameRptName, "ethnicity": "", "emailid": "", "gender": "" };

    $scope.addNametoDB = function () {
        if ($scope.newfirstname.firstName == '' || $scope.newfirstname.firstName == undefined && $scope.newfirstname.firstName == null) {
            $scope.errormsg = "Enter First Name";
            return;
        }
        if ($scope.newfirstname.ethnicity == '' || $scope.newfirstname.ethnicity == undefined && $scope.newfirstname.ethnicity == null) {
            $scope.errormsg = "Select Religion";
            return;
        }
        if ($scope.newfirstname.gender == '' || $scope.newfirstname.gender == undefined && $scope.newfirstname.gender == null) {
            $scope.errormsg = "Select Gender";
            return;
        }
        if ($scope.newfirstname.emailid == '' || $scope.newfirstname.emailid == undefined || $scope.newfirstname.emailid == null) {
            $scope.errormsg = "Enter Email ID";
            return;
        }
        if ($scope.newfirstname.emailid != '' && $scope.newfirstname.emailid != undefined && $scope.newfirstname.emailid != null) {
            if (globals.f_check_email($scope.newfirstname.emailid) == false) {
                $scope.errormsg = "Invalid Email ID";
                return;
            }
        }
        var v_http_link = "Routes/name";
        var v_push_template = {
            "firstName": $scope.newfirstname.firstName,
            "ethnicity": $scope.newfirstname.ethnicity,
            "emailid": $scope.newfirstname.emailid,
            "gender": $scope.newfirstname.gender
        }
        console.log(v_push_template);
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data == "success") {
                console.log(JSON.stringify(data));
                f_clear();
                $scope.errormsg = "Thank you for submitting your request. We will be reviewing your submission soon, and if approved the name will be added to the database in our weekly update.";
                sessionStorage.setItem('datafornameanalysis', "ERROR");
                sessionStorage.setItem('firstnameforanalysis', $scope.newfirstname.firstName);
                $scope.firstName = sessionStorage.getItem('firstnameforanalysis');
            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });
    };
    function f_clear() {
        $scope.errormsg = "";
        $scope.newfirstname = { "firstName": "", "ethnicity": "", "emailid": "", "gender": "" };
    }
}
nameController.$inject = ['$scope', '$location', '$stateParams', 'commonService', 'globals', 'ngMeta'];