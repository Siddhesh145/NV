var pendingOrderController = function ($scope, $location, commonService, globals, ngMeta, $stateParams) {

    console.log('Pending Order controller called');

    ngMeta.setTitle('Pending Order', ' | Naamvidya');

  
    if (sessionStorage.getItem('REGN_GUID') == undefined || sessionStorage.getItem('REGN_GUID') == null || sessionStorage.getItem('REGN_GUID') == '') {
        $location.url('/login');
    }
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format: 'dd-mmm-yyyy'
    });

    //$scope.fn_Confirm = function (){
    //    var v_http_link = "Routes/SavePendingOrder";
    //    var v_push_template = {
    //        "REGN_GUID": "",
    //    }
    //};

    //$scope.f_show_body = function (p_id) {
    //    f_hide_all();
    //    $("#" + p_id).addClass("showbody");
    //};

    $scope.f_order_select = function (o_data) {
        sessionStorage.setItem("OrderStatus", JSON.stringify(o_data));
        $location.url('/order-details');
    }

    $scope.fn_gotomoredetail = function (f_data) {
       
        if (f_data.OrderStatus == "0") {

            sessionStorage.setItem("OrderId", JSON.stringify(f_data.OrderId));
            sessionStorage.setItem("GetOrderFlag", "F");

            $location.url('/more-order-information');

        }
        else if (f_data.OrderStatus == "50") {

            sessionStorage.setItem("OrderStatus", JSON.stringify(f_data));
            $location.url('/order-details');

        } else {
            //alert("In Process." + f_data.OrderId);
        }
    }

    function getOrders() {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        var v_http_link = "Routes/getPOrders";
        var v_push_template = {
            "REGN_GUID": $scope.REGN_GUID,
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.orderList = data;
                console.log(JSON.stringify($scope.orderList));
            }
        }, function (error) {
            $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
        });
    }

    function PageLoad() {
        $scope.orderList = [];
        $scope.FreeOrderList = [];
        getOrders();


      
    }
    PageLoad();
}
pendingOrderController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta', '$stateParams'];