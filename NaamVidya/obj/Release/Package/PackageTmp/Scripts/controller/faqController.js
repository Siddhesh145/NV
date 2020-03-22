var faqController = function ($scope, ngMeta) {
    console.log("faq Controller reporting for duty.");
    ngMeta.setTitle('FAQ', ' | Naamvidya');
	$("#body").removeClass("home-layout");
    $scope.f_show_body = function (p_id) {
        f_hide_all();
        $("#" + p_id).addClass("showbody");
	};
    function f_hide_all() {
        $("#body_1").removeClass("showbody");
        $("#body_2").removeClass("showbody");
        $("#body_3").removeClass("showbody");
        $("#body_4").removeClass("showbody");
        $("#body_5").removeClass("showbody");
        $("#body_6").removeClass("showbody");
        $("#body_7").removeClass("showbody");
        $("#body_8").removeClass("showbody");
        $("#body_9").removeClass("showbody");
        $("#body_10").removeClass("showbody");
        $("#body_11").removeClass("showbody");
        $("#body_12").removeClass("showbody");
		$("#body_13").removeClass("showbody");
		$("#body_14").removeClass("showbody");
		$("#body_15").removeClass("showbody");
        $("#body_16").removeClass("showbody");
        $("#body_17").removeClass("showbody");
		$("#body_18").removeClass("showbody");
		$("#body_19").removeClass("showbody");
	}
}
faqController.$inject = ['$scope', 'ngMeta'];