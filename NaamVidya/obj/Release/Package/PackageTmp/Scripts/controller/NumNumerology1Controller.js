﻿var NumNumerology1Controller = function ($scope, $location, ngMeta) {
    console.log('NumNumerologyMain Controller called')
    //alert("Blog Controller Called");

    ngMeta.setTitle('NumNumerology', ' | Naamvidya');

    ngMeta.setTag('keywords', '');
    ngMeta.setTag('description', '');


    function f_indexBody() {
        $("#body").removeClass("home-layout");

    }
    f_indexBody();

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

NumNumerology1Controller.$inject = ['$scope', '$location', 'ngMeta'];