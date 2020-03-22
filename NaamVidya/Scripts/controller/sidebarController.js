var sidebarController = function ($scope, $location, commonService, globals) {
    console.log('sidebar controller called');



    $scope.currentPage = "home";

    //$scope.gotoMenu = function (name, url) {
    //    $scope.currentPage = name;
    //    $location.url(url);
    //}



    $scope.currentPage = sessionStorage.getItem('currentPage');


    $scope.newfirstName = "";
    $scope.errMsg = "";
    $scope.analyzeFirstName = function () {

        if ($scope.newfirstName == undefined || $scope.newfirstName == '' || $scope.newfirstName.indexOf(' ') >= 0) {
            $scope.errMsg = "Please enter your name only (without spaces).";
            return;
        }
        else {
            sessionStorage.setItem('firstnameforanalysis', $scope.newfirstName);
            $scope.errMsg = '';
        }

        var v_http_link = "Routes/Home";
        var v_push_template = {
            "firstName": $scope.newfirstName

        }
        $scope.firstNameRptName = $scope.newfirstName;
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {

            var data = val.data;

            if (data != "") {
                console.log(JSON.stringify(data));
                //globals.fileName = data;
                //globals.firstName = $scope.newfirstName;
                
                //$location.url('/first-name-analysis');
                //$location.url('/first-name-analysis/' + $scope.firstNameRptName);

                if (data == 'ERROR') {
                    $scope.errMsg = "Please enter your first name only (e.g for 'Raj Nair' enter 'Raj').";
                } else {
                    sessionStorage.setItem('datafornameanalysis', data);


                    $scope.$emit('updateFName', {
                        message: {
                            "firstNameRptName": $scope.firstNameRptName
                        }


                    });

                    $location.url('/first-name-analysis');// + $scope.firstNameRptName);
                    //$location.url('/first-name-analysis/' + $scope.firstNameRptName);
                    window.scrollTo(0, 0);
                }

                //window.scrollTo(0, 0);

            }
        }, function (error) {
            alert('Fail : ' + error.status + ' ' + error.statusText);
        });


        var data = sessionStorage.getItem('pageformenu');
        console.log('data : ' + data);
        $scope.pageformenu = data;
        console.log('$scope.pageformenu : ' + $scope.pageformenu);

        // console.log('sessionStorage.getItem(pageformenu) : '+  sessionStorage.getItem('pageformenu'));

        // console.log('$scope.pageformenu : '+$scope.pageformenu);
        // console.log('data : '+data);

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
}
sidebarController.$inject = ['$scope', '$location', 'commonService', 'globals'];

