var orderStatusRptController = function ($scope, $location, commonService, globals, ngMeta) {

    console.log('Order Status Rpt controller called');

    ngMeta.setTitle('Order Status Report', ' | Naamvidya');
	
	 $("#body").removeClass("home-layout");
	 
	 
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 150,
        format: 'dd-mmm-yyyy'
    });

    $scope.f_order_select = function (o_data)
    {
        sessionStorage.setItem("OrderStatus", JSON.stringify(o_data));
        $location.url('/order-details');
    }

    function getOrders()
    {
        $scope.REGN_GUID = sessionStorage.getItem('REGN_GUID');
        if ($scope.REGN_GUID == undefined || $scope.REGN_GUID == null || $scope.REGN_GUID == '') {
            $location.url('/login');
        }
        var v_http_link = "Routes/getOrders";
        var v_push_template = {
            "REGN_GUID": $scope.REGN_GUID,
        }
        var v_post_json_data = commonService.post_json_data(v_http_link, v_push_template);
        v_post_json_data.then(function (val) {
            var data = val.data;
            if (data != "") {
                $scope.orderList = data;
            }
        }, function (error) {
            $scope.errorMsg = "'Fail : '" + error.status + ' " " ' + error.statusText;
        });
    }

    function PageLoad() {
        $scope.orderList = [];
        getOrders();
    }
    PageLoad();
}
orderStatusRptController.$inject = ['$scope', '$location', 'commonService', 'globals', 'ngMeta'];