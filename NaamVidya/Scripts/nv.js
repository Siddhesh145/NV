var nvApp = angular.module('nvApp', ['ui.router', 'ngCookies', 'ui','ngMeta','viewhead']);


nvApp.service('commonService', commonService)

nvApp.controller('aboutController', aboutController);
nvApp.controller('balancedNameController', balancedNameController);
nvApp.controller('businessNameController', businessNameController);
nvApp.controller('childNameCorrectionController', childNameCorrectionController);
nvApp.controller('choosingBabyNameController', choosingBabyNameController);
nvApp.controller('detailedreportController', detailedreportController);
nvApp.controller('detailinfopageController', detailinfopageController);
nvApp.controller('babynameprimepageController', babynameprimepageController);
nvApp.controller('businessdetailinfopageController', businessdetailinfopageController);
nvApp.controller('ethicsController', ethicsController);
nvApp.controller('faqController', faqController);
nvApp.controller('headerController', headerController);
nvApp.controller('homeController', homeController);
nvApp.controller('lifePathController', lifePathController);
nvApp.controller('loginController', loginController);//Hasti
nvApp.controller('moreinfopageController', moreinfopageController);
nvApp.controller('nameController', nameController);
nvApp.controller('nameCorrectionController', nameCorrectionController);
nvApp.controller('namesMatterController', namesMatterController);
nvApp.controller('newBornController', newBornController);
nvApp.controller('newRegistrationController', newRegistrationController);//Hasti
nvApp.controller('othersController', othersController);

nvApp.controller('orderProcessController', orderProcessController);//Siddhesh
nvApp.controller('orderDetailsAdminController', orderDetailsAdminController);//Siddhesh

nvApp.controller('orderDetailsController', orderDetailsController);//Hasti
nvApp.controller('orderStatusRptController', orderStatusRptController);//Hasti
nvApp.controller('pendingOrderController', pendingOrderController);//Hasti
nvApp.controller('privacyPolicyController', privacyPolicyController);
nvApp.controller('registrationController', registrationController);
nvApp.controller('termsandConditionsController', termsandConditionsController);
nvApp.controller('whatisBalancedNameController', whatisBalancedNameController);
nvApp.controller('whyNamesMatterController', whyNamesMatterController);
nvApp.controller('whyUseNmerologyController', whyUseNmerologyController);
nvApp.controller('menuController', menuController);
nvApp.controller('howitworkController', howitworkController);
nvApp.controller('MyCartDetailController', MyCartDetailController);
nvApp.controller('changePasswordController', changePasswordController);//Hasti
nvApp.controller('bodyController', bodyController);
nvApp.controller('sidebarController', sidebarController);
nvApp.controller('freeReportsController', freeReportsController);//Hasti
nvApp.controller('orderdetailinfoController', orderdetailinfoController);
nvApp.controller('skuController', skuController);//Hasti
nvApp.controller('footerController', footerController);//Hasti
nvApp.controller('OrderBabyNameController', OrderBabyNameController);
nvApp.controller('OrderBabyNameAltController', OrderBabyNameAltController);
nvApp.controller('OrderBabyNameGiftController', OrderBabyNameGiftController);
nvApp.controller('OrderNameCorrectionController', OrderNameCorrectionController);
nvApp.controller('DashboardController', DashboardController);
nvApp.controller('theImportanceOfNameController', theImportanceOfNameController);//sid
nvApp.controller('DoesNumerologyWorkController', DoesNumerologyWorkController);//sid
nvApp.controller('ChooseRightNameForBabyController', ChooseRightNameForBabyController);//sid
nvApp.controller('blogController', blogController);//sid


nvApp.controller('NumNumerologyMainController', NumNumerologyMainController);//sid
nvApp.controller('NumerologyNumberController', NumerologyNumberController);//sid
nvApp.controller('NumerologyController', NumerologyController);//sid
nvApp.controller('NumerologistController', NumerologistController);//sid
nvApp.controller('NumNumerology1Controller', NumNumerology1Controller);//sid
nvApp.controller('NumNumerology2Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology3Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology4Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology5Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology6Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology7Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology8Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology9Controller', NumNumerology2Controller);//sid
nvApp.controller('NumNumerology11Controller', NumNumerology2Controller);//sid

nvApp.controller('giftController', giftController);//sid
nvApp.controller('GiftLoginController', GiftLoginController);//sid
nvApp.controller('OrderPlatinumComboController', OrderPlatinumComboController);//sid




/***Global variable and functions****/
nvApp.value('globals', {
    firstName: "",
    firlName: "",

    f_check_email: function (val) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(val)) {
            return false;
        } else {
            return true;
        }
    },
    f_Month_Val: function (val) {
        var rtnvalue = "0";
        if (val == "Jan") { rtnvalue = "01" }
        else if (val == "Feb") { rtnvalue = "02" }
        else if (val == "Mar") { rtnvalue = "03" }
        else if (val == "Apr") { rtnvalue = "04" }
        else if (val == "May") { rtnvalue = "05" }
        else if (val == "Jun") { rtnvalue = "06" }
        else if (val == "Jul") { rtnvalue = "07" }
        else if (val == "Aug") { rtnvalue = "08" }
        else if (val == "Sep") { rtnvalue = "09" }
        else if (val == "Oct") { rtnvalue = "10" }
        else if (val == "Nov") { rtnvalue = "11" }
        else if (val == "Dec") { rtnvalue = "12" }

        return rtnvalue;
    },

    isDate: function (dtStr) {

        var dtCh = "/";
        var minYear = 1900;
        var maxYear = 2100;

        var daysInMonth = this.DaysArray(12)
        var pos1 = dtStr.indexOf(dtCh)
        var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
        var strMonth = dtStr.substring(0, pos1)
        var strDay = dtStr.substring(pos1 + 1, pos2)
        var strYear = dtStr.substring(pos2 + 1)
        strYr = strYear
        if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
        if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
        for (var i = 1; i <= 3; i++) {
            if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
        }
        month = parseInt(strMonth)
        day = parseInt(strDay)
        year = parseInt(strYr)
        if (pos1 == -1 || pos2 == -1) {
            //alert("The date format should be : mm/dd/yyyy")
            return false
        }
        if (strMonth.length < 1 || month < 1 || month > 12) {
            //alert("Please enter a valid month")
            return false
        }
        if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > this.daysInFebruary(year)) || day > daysInMonth[month]) {
            //alert("Please enter a valid day")
            return false
        }
        if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
            //alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear)
            return false
        }
        if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || this.isInteger(this.stripCharsInBag(dtStr, dtCh)) == false) {
            //alert("Please enter a valid date")
            return false
        }
        return true
    },

    isDateLessThan3Months: function (dtStr) {

        var dtCh = "/";
        var minYear = 1900;
        var maxYear = 2100;

        var daysInMonth = this.DaysArray(12)
        var pos1 = dtStr.indexOf(dtCh)
        var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
        var strMonth = dtStr.substring(0, pos1)
        var strDay = dtStr.substring(pos1 + 1, pos2)
        var strYear = dtStr.substring(pos2 + 1)
        strYr = strYear
        if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
        if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
        for (var i = 1; i <= 3; i++) {
            if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
        }
        month = parseInt(strMonth)
        day = parseInt(strDay)
        year = parseInt(strYr)

        var CurrentDate = new Date();
        var dobformat = new Date(year, parseInt(month - 1), day);
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var secondDate = new Date(dobformat);
        var firstDate = new Date(CurrentDate);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));


        if (diffDays <= 60) {
            return false
        }
        else
        {
            return true
        }
        //if (dobformat > CurrentDate) {
        //    return false
        //}

       
    },

    ValidateForm: function (DateValue) {
        var dt = DateValue
        if (this.isDate(dt) == false) {
            //dt.focus()
            return false
        }
        return true
    },

    DaysArray: function (n) {
        for (var i = 1; i <= n; i++) {
            this[i] = 31
            if (i == 4 || i == 6 || i == 9 || i == 11) { this[i] = 30 }
            if (i == 2) { this[i] = 29 }
        }
        return this
    },

    daysInFebruary: function (year) {
        // February has 29 days in any year evenly divisible by four,
        // EXCEPT for centurial years which are not also divisible by 400.
        return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
    },

    stripCharsInBag: function (s, bag) {
        var i;
        var returnString = "";
        // Search through string's characters one by one.
        // If character is not in bag, append to returnString.
        for (i = 0; i < s.length; i++) {
            var c = s.charAt(i);
            if (bag.indexOf(c) == -1) returnString += c;
        }
        return returnString;
    },

    isInteger: function (s) {
        s = f_check_number(s);
        var i;
        for (i = 0; i < s.length; i++) {
            // Check that current character is number.
            var c = s.charAt(i);
            if (((c < "0") || (c > "9"))) return false;
        }
        // All characters are numbers.
        return true;
    }
});


//nvApp.run(['ngMeta', function (ngMeta) {
//    ngMeta.init();
//}]);

nvApp.run(['ngMeta', '$templateCache', function (ngMeta, $templateCache) {
    ngMeta.init();
    $templateCache.removeAll();
}]);


nvApp.filter('titleCase', function () {
    return function (input) {
        input = input || '';
        return input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
});

function f_check_number(value) {
    if (angular.isUndefined(value) || value === '' || value === null || value !== value) {
        return 0;
    } else {
        return Number(value)
    }
};


nvApp.config(StateConfig);


