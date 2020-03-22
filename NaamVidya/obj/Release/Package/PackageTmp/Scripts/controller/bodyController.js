var bodyController = function ($scope, $location, ngMeta) {

    console.log("bodyController  Controller reporting for duty.");

    // $('.navbar-toggler').click(function () {
    //    $(this).parent().toggleClass('menuopen');
    //})
     ngMeta.setTitle('Name Numerology', ' | Naamvidya');
    $scope.$on('updateFName', function (event, args) {
        //alert('body alert');
        //$scope.CartCount = args.message.Count;

        $scope.firstNameRptName = sessionStorage.getItem('firstnameforanalysis');

        $scope.$broadcast('updateFNameName', {
            message: {
                "firstNameRptName": $scope.firstNameRptName
            }


        });
    });

    $('#Processfile').hide();

    $scope.$on('UpdateCartCount', function (event, args) {
        //alert('body alert');
        $scope.CartCount = args.message.Count;

        $scope.CartCount = sessionStorage.getItem('CartCount');
        //alert("Body Controller:" + $scope.CartCount);
        $scope.$broadcast('UpdateCartCount1', {
            message: {
                "Count": $scope.CartCount
            }
        });
       
    });

    $('#myModal').hide();
    $('#myModal2').hide();

    // document.addEventListener('touchmove', function(event) {
    // event = event.originalEvent || event;
    // if(event.scale > 1) {
    // event.preventDefault();
    // }
    // }, false);

    // document.documentElement.addEventListener('touchstart', function (event) {
    // if (event.touches.length > 1) {
    // event.preventDefault();
    // }
    // }, false);

}

bodyController.$inject = ['$scope', '$location', 'ngMeta'];

