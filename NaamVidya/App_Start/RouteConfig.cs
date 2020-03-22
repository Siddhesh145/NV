using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NaamVidya
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                    name: "header",
                    url: "Routes/Header",
                    defaults: new { controller = "Routes", action = "Header" });

            routes.MapRoute(
                    name: "footer",
                    url: "Routes/Footer",
                    defaults: new { controller = "Routes", action = "Footer" });

            routes.MapRoute(
                    name: "home",
                    url: "Routes/Home",
                    defaults: new { controller = "Routes", action = "Home" });            

            routes.MapRoute(
                    name: "name",
                    url: "Routes/name",
                    defaults: new { controller = "Routes", action = "name" });



            routes.MapRoute(
                   name: "myname",
                   url: "Routes/myname",
                   defaults: new { controller = "Routes", action = "myname" });

            routes.MapRoute(
                 name: "getOrderStepDetails",
                 url: "Routes/getOrderStepDetails",
                 defaults: new { controller = "Routes", action = "getOrderStepDetails" });

            routes.MapRoute(
                name: "CompleteOrderDetails",
                url: "Routes/CompleteOrderDetails",
                defaults: new { controller = "Routes", action = "CompleteOrderDetails" });


            routes.MapRoute(
                    name: "registration",
                    url: "Routes/registration",
                    defaults: new { controller = "Routes", action = "registration" });

            routes.MapRoute(
                   name: "newRegistrationConfirmation",
                   url: "Routes/newRegistrationConfirmation",
                   defaults: new { controller = "Routes", action = "newRegistrationConfirmation" });

            routes.MapRoute(
                    name: "about",
                    url: "Routes/about",
                    defaults: new { controller = "Routes", action = "about" });


            routes.MapRoute(
                    name: "balancedname",
                    url: "Routes/balancedname",
                    defaults: new { controller = "Routes", action = "BalancedName" });
            routes.MapRoute(
                    name: "businessname",
                    url: "Routes/businessname",
                    defaults: new { controller = "Routes", action = "BusinessName" });
            routes.MapRoute(
                    name: "lifepath",
                    url: "Routes/lifepath",
                    defaults: new { controller = "Routes", action = "LifePath" });
            routes.MapRoute(
                    name: "ethics",
                    url: "Routes/ethics",
                    defaults: new { controller = "Routes", action = "Ethics" });
            routes.MapRoute(
                    name: "namesmatter",
                    url: "Routes/namesmatter",
                    defaults: new { controller = "Routes", action = "NamesMatter" });


            routes.MapRoute(
                    name: "newborn",
                    url: "Routes/newborn",
                    defaults: new { controller = "Routes", action = "NewBorn" });


            routes.MapRoute(
                    name: "others",
                    url: "Routes/others",
                    defaults: new { controller = "Routes", action = "Others" });

            routes.MapRoute(
                    name: "detailedreport",
                    url: "Routes/detailedreport",
                    defaults: new { controller = "Routes", action = "detailedreport" });

            routes.MapRoute(
                name: "howitwork",
                url: "Routes/howitwork",
                defaults: new { controller = "Routes", action = "howitwork" });


            routes.MapRoute(
                        name: "authenticatesso",
                        url: "Routes/authenticatesso",
                        defaults: new { controller = "Routes", action = "authenticatesso" });

            //Hasti

            routes.MapRoute(
                    name: "monthYear",
                    url: "Routes/monthYear",
                    defaults: new { controller = "Routes", action = "monthYear" });

            routes.MapRoute(
                    name: "getdays",
                    url: "Routes/getdays",
                    defaults: new { controller = "Routes", action = "getdays" });

            routes.MapRoute(
                    name: "generateCaptcha",
                    url: "Routes/generateCaptcha",
                    defaults: new { controller = "Routes", action = "generateCaptcha" });

            routes.MapRoute(
                    name: "newRegistration",
                    url: "Routes/newRegistration",
                    defaults: new { controller = "Routes", action = "newRegistration" });

            routes.MapRoute(
                    name: "login",
                    url: "Routes/login",
                    defaults: new { controller = "Routes", action = "login" });

            routes.MapRoute(
                   name: "logout",
                   url: "Routes/logout",
                   defaults: new { controller = "Routes", action = "logout" });

            routes.MapRoute(
                    name: "forgotPassword",
                    url: "Routes/forgotPassword",
                    defaults: new { controller = "Routes", action = "forgotPassword" });

            routes.MapRoute(
                   name: "orderStatusRpt",
                   url: "Routes/orderStatusRpt",
                   defaults: new { controller = "Routes", action = "orderStatusRpt" });

            routes.MapRoute(
                   name: "getOrders",
                   url: "Routes/getOrders",
                   defaults: new { controller = "Routes", action = "getOrders" });

            routes.MapRoute(
                    name: "orderDetails",
                    url: "Routes/orderDetails",
                    defaults: new { controller = "Routes", action = "orderDetails" });

            routes.MapRoute(
                   name: "getSurnames",
                   url: "Routes/getSurnames",
                   defaults: new { controller = "Routes", action = "getSurnames" });

            routes.MapRoute(
                   name: "getListBySurnames",
                   url: "Routes/getListBySurnames",
                   defaults: new { controller = "Routes", action = "getListBySurnames" });

            routes.MapRoute(
                    name: "getPOrders",
                    url: "Routes/getPOrders",
                    defaults: new { controller = "Routes", action = "getPOrders" });

            routes.MapRoute(
                 name: "pendingOrder",
                 url: "Routes/pendingOrder",
                 defaults: new { controller = "Routes", action = "pendingOrder" });

            routes.MapRoute(
                 name: "dashboard",
                 url: "Routes/dashboard",
                 defaults: new { controller = "Routes", action = "dashboard" });

            routes.MapRoute(
                name: "getNewPendingOrderforAdmin",
                url: "Routes/getNewPendingOrderforAdmin",
                defaults: new { controller = "Routes", action = "getNewPendingOrderforAdmin" });

            routes.MapRoute(
                    name: "validateOTP",
                    url: "Routes/validateOTP",
                    defaults: new { controller = "Routes", action = "validateOTP" });

            routes.MapRoute(
                    name: "moreinfopage",
                    url: "Routes/moreinfopage",
                    defaults: new { controller = "Routes", action = "moreinfopage" });

            routes.MapRoute(
                    name: "saveInfoDetails",
                    url: "Routes/saveInfoDetails",
                    defaults: new { controller = "Routes", action = "saveInfoDetails" });

            routes.MapRoute(
                    name: "changePassword",
                    url: "Routes/changePassword",
                    defaults: new { controller = "Routes", action = "changePassword" });

            routes.MapRoute(
                   name: "sku",
                   url: "Routes/sku",
                   defaults: new { controller = "Routes", action = "sku" });

            routes.MapRoute(
                     name: "footermail",
                     url: "Routes/footermail",
                     defaults: new { controller = "Routes", action = "footermail" });

            routes.MapRoute(
                   name: "orderProcess",
                   url: "Routes/orderProcess",
                   defaults: new { controller = "Routes", action = "orderProcess" });

            routes.MapRoute(
                   name: "getOrderDetailsbyOrderId",
                   url: "Routes/getOrderDetailsbyOrderId",
                   defaults: new { controller = "Routes", action = "getOrderDetailsbyOrderId" });

            routes.MapRoute(
                  name: "getOrderDetailsforAdmin",
                  url: "Routes/getOrderDetailsforAdmin",
                  defaults: new { controller = "Routes", action = "getOrderDetailsforAdmin" });


            routes.MapRoute(
                name: "orderDetailsAdmin",
                url: "Routes/OrderDetailsAdmin",
                defaults: new { controller = "Routes", action = "orderDetailsAdmin" });

            routes.MapRoute(
               name: "Single_CHECKNAME",
               url: "Routes/Single_CHECKNAME",
               defaults: new { controller = "Routes", action = "Single_CHECKNAME" });

            routes.MapRoute(
                   name: "SaveSelectedNamebyAdmin",
                   url: "Routes/SaveSelectedNamebyAdmin",
                   defaults: new { controller = "Routes", action = "SaveSelectedNamebyAdmin" });

            //Hasti End

            ///////////////////// Huzaifa Retiwala /////////////////////////////
            routes.MapRoute(
                    name: "getorderdetail",
                    url: "Routes/getorderdetail",
                    defaults: new { controller = "Routes", action = "getorderdetail" });

            routes.MapRoute(
                    name: "detailinfopage",
                    url: "Routes/detailinfopage",
                    defaults: new { controller = "Routes", action = "detailinfopage" });

            routes.MapRoute(
                   name: "babynameprimepage",
                   url: "Routes/babynameprime",
                   defaults: new { controller = "Routes", action = "babynameprime" });

            routes.MapRoute(
                  name: "businessdetailinfopage",
                  url: "Routes/businessdetailinfopage",
                  defaults: new { controller = "Routes", action = "businessdetailinfopage" });

            routes.MapRoute(
                   name: "ordernamecorrection",
                   url: "Routes/ordernamecorrection",
                   defaults: new { controller = "Routes", action = "ordernamecorrection" });

               routes.MapRoute(
                   name: "giftlogin",
                   url: "Routes/giftlogin",
                   defaults: new { controller = "Routes", action = "giftlogin" });
            
            routes.MapRoute(
                    name: "Failure",
                    url: "Failure",
                    defaults: new { controller = "Routes", action = "Failure" });

            routes.MapRoute(
                    name: "Success",
                    url: "Success",
                    defaults: new { controller = "Routes", action = "Success" });

            routes.MapRoute(
                    name: "MakePayUMoneyPayment",
                    url: "Routes/MakePayUMoneyPayment",
                    defaults: new { controller = "Routes", action = "MakePayUMoneyPayment" });

            routes.MapRoute(
                    name: "getCriteria",
                    url: "Routes/getCriteria",
                    defaults: new { controller = "Routes", action = "getCriteria" });

            routes.MapRoute(
                    name: "SaveOrderDetail",
                    url: "Routes/SaveOrderDetail",
                    defaults: new { controller = "Routes", action = "SaveOrderDetail" });


            routes.MapRoute(
                    name: "moreinfopagebind",
                    url: "Routes/moreinfopagebind",
                    defaults: new { controller = "Routes", action = "moreinfopagebind" });


            routes.MapRoute(
                    name: "getProduct",
                    url: "Routes/getProduct",
                    defaults: new { controller = "Routes", action = "getProduct" });


            routes.MapRoute(
                    name: "AddToCart",
                    url: "Routes/AddToCart",
                    defaults: new { controller = "Routes", action = "AddToCart" });

            routes.MapRoute(name: "getFreeOrders",
                    url: "Routes/getFreeOrders",
                    defaults: new { controller = "Routes", action = "getFreeOrders" });


            routes.MapRoute(
                name: "MyCartDetail",
                url: "Routes/MyCartDetail",
                defaults: new { controller = "Routes", action = "MyCartDetail" });

            routes.MapRoute(
                    name: "getMyCartDetail",
                    url: "Routes/getMyCartDetail",
                    defaults: new { controller = "Routes", action = "getMyCartDetail" });

			 routes.MapRoute(
                    name: "getMyGiftDetail",
                    url: "Routes/getMyGiftDetail",
                    defaults: new { controller = "Routes", action = "getMyGiftDetail" });

             routes.MapRoute(
                    name: "getGiftLoginDetail",
                    url: "Routes/getGiftLoginDetail",
                    defaults: new { controller = "Routes", action = "getGiftLoginDetail" });
            routes.MapRoute(
                    name: "UpdateLoginInMyCart",
                    url: "Routes/UpdateLoginInMyCart",
                    defaults: new { controller = "Routes", action = "UpdateLoginInMyCart" });

            routes.MapRoute(
                name: "CheckoutOrder",
                url: "Routes/CheckoutOrder",
                defaults: new { controller = "Routes", action = "CheckoutOrder" });
            //By smita on 14-feb-2018

            routes.MapRoute(
               name: "CheckoutPaytmOrder",
               url: "Routes/CheckoutPaytmOrder",
               defaults: new { controller = "Routes", action = "CheckoutPaytmOrder" });


            //Ended by smita on 14-feb-2018
            routes.MapRoute(
                name: "DeleteMyCart",
                url: "Routes/DeleteMyCart",
                defaults: new { controller = "Routes", action = "DeleteMyCart" });

            routes.MapRoute(
                name: "CountMyCart",
                url: "Routes/CountMyCart",
                defaults: new { controller = "Routes", action = "CountMyCart" });

            routes.MapRoute(
                    name: "orderdetailinfo",
                    url: "Routes/orderdetailinfo",
                    defaults: new { controller = "Routes", action = "orderdetailinfo" });

            routes.MapRoute(
                    name: "orderdetailinfobind",
                    url: "Routes/orderdetailinfobind",
                    defaults: new { controller = "Routes", action = "orderdetailinfobind" });

            routes.MapRoute(
                    name: "orderdetaillmfName",
                    url: "Routes/orderdetaillmfName",
                    defaults: new { controller = "Routes", action = "orderdetaillmfName" });

            routes.MapRoute(
                    name: "orderdetailFilterFName",
                    url: "Routes/orderdetailFilterFName",
                    defaults: new { controller = "Routes", action = "orderdetailFilterFName" });
             routes.MapRoute(
                    name: "expressDelivery",
                    url: "Routes/expressDelivery",
                    defaults: new { controller = "Routes", action = "expressDelivery" });
              routes.MapRoute(
                    name: "getdateOnLoad",
                    url: "Routes/getdateOnLoad",
                    defaults: new { controller = "Routes", action = "getdateOnLoad" });
            
            routes.MapRoute(
                    name: "orderdetailSave",
                    url: "Routes/orderdetailSave",
                    defaults: new { controller = "Routes", action = "orderdetailSave" });
            routes.MapRoute(
                    name: "getCountryState",
                    url: "Routes/getCountryState",
                    defaults: new { controller = "Routes", action = "getCountryState" });
            ///////////////////// Huzaifa Retiwala /////////////////////////////

            routes.MapRoute(
                   name: "faq",
                   url: "Routes/FAQ",
                   defaults: new { controller = "Routes", action = "faq" });

            routes.MapRoute(
                  name: "childnamecorrection",
                  url: "Routes/ChildNameCorrection",
                  defaults: new { controller = "Routes", action = "childnamecorrection" });

            routes.MapRoute(
                  name: "choosingbabyname",
                  url: "Routes/ChoosingBabyName",
                  defaults: new { controller = "Routes", action = "choosingbabyname" });

            routes.MapRoute(
                  name: "orderbabyname",
                  url: "Routes/OrderBabyName",
                  defaults: new { controller = "Routes", action = "orderbabyname" });

            routes.MapRoute(
                name: "orderbabynamealt",
                url: "Routes/OrderBabyNameAlt",
                defaults: new { controller = "Routes", action = "orderbabynamealt" });

		  routes.MapRoute(
         name: "orderbabynamegift",
         url: "Routes/OrderBabyNameGift",
         defaults: new { controller = "Routes", action = "orderbabynamegift" });


            routes.MapRoute(
                  name: "namecorrection",
                  url: "Routes/NameCorrection",
                  defaults: new { controller = "Routes", action = "namecorrection" });

            routes.MapRoute(
                   name: "privacypolicy",
                   url: "Routes/PrivacyPolicy",
                   defaults: new { controller = "Routes", action = "privacypolicy" });

            routes.MapRoute(
                   name: "spouse",
                   url: "Routes/Spouse",
                   defaults: new { controller = "Routes", action = "spouse" });

            routes.MapRoute(
                   name: "termsandconditions",
                   url: "Routes/TermsandConditions",
                   defaults: new { controller = "Routes", action = "termsandconditions" });

            routes.MapRoute(
                   name: "whatisbalancedname",
                   url: "Routes/WhatisBalancedName",
                   defaults: new { controller = "Routes", action = "whatisbalancedname" });

            routes.MapRoute(
               name: "whynamesmatter",
               url: "Routes/WhyNamesMatter",
               defaults: new { controller = "Routes", action = "whynamesmatter" });

            routes.MapRoute(
             name: "doesNumerologyWork",
             url: "Routes/DoesNumerologyWork",
             defaults: new { controller = "Routes", action = "doesNumerologyWork" });

            
                 routes.MapRoute(
             name: "chooseRightNameForBaby",
             url: "Routes/ChooseRightNameForBaby",
             defaults: new { controller = "Routes", action = "chooseRightNameForBaby" });


            routes.MapRoute(
            name: "whyusenumerology",
            url: "Routes/WhyUseNumerology",
            defaults: new { controller = "Routes", action = "WhyUseNumerology" });

            routes.MapRoute(
                    name: "freeReports",
                    url: "Routes/freeReports",
                    defaults: new { controller = "Routes", action = "freeReports" });


            routes.MapRoute(
                name: "TheImportanceOfName",
                url: "Routes/TheImportanceOfName",
                defaults: new { controller = "Routes", action = "TheImportanceOfName" });

            routes.MapRoute(
                  name: "gift",
                  url: "Routes/Gift",
                  defaults: new { controller = "Routes", action = "Gift" });
            routes.MapRoute(
                  name: "blog",
                  url: "Routes/Blog",
                  defaults: new { controller = "Routes", action = "Blog" });
            routes.MapRoute(
                  name: "OrderPlatinumCombo",
                  url: "Routes/OrderPlatinumCombo",
                  defaults: new { controller = "Routes", action = "OrderPlatinumCombo" });
             routes.MapRoute(
                  name: "NumNumerologyMain",
                  url: "Routes/NumNumerologyMain",
                  defaults: new { controller = "Routes", action = "NumNumerologyMain" });
             routes.MapRoute(
                  name: "NumerologyNumber",
                  url: "Routes/NumerologyNumber",
                  defaults: new { controller = "Routes", action = "NumerologyNumber" });
             routes.MapRoute(
                  name: "Numerology",
                  url: "Routes/Numerology",
                  defaults: new { controller = "Routes", action = "Numerology" });
             routes.MapRoute(
                  name: "Numerologist",
                  url: "Routes/Numerologist",
                  defaults: new { controller = "Routes", action = "Numerologist" });
             routes.MapRoute(
                   name: "NumNumerology1",
                   url: "Routes/NumNumerology1",
                   defaults: new { controller = "Routes", action = "NumNumerology1" });
             routes.MapRoute(
                    name: "NumNumerology2",
                    url: "Routes/NumNumerology2",
                    defaults: new { controller = "Routes", action = "NumNumerology2" });
             routes.MapRoute(
                     name: "NumNumerology3",
                     url: "Routes/NumNumerology3",
                     defaults: new { controller = "Routes", action = "NumNumerology3" });
             routes.MapRoute(
                     name: "NumNumerology4",
                     url: "Routes/NumNumerology4",
                     defaults: new { controller = "Routes", action = "NumNumerology4" });
             routes.MapRoute(
                     name: "NumNumerology5",
                     url: "Routes/NumNumerology5",
                     defaults: new { controller = "Routes", action = "NumNumerology5" });
             routes.MapRoute(
                     name: "NumNumerology6",
                     url: "Routes/NumNumerology6",
                     defaults: new { controller = "Routes", action = "NumNumerology6" });
             routes.MapRoute(
                     name: "NumNumerology7",
                     url: "Routes/NumNumerology7",
                     defaults: new { controller = "Routes", action = "NumNumerology7" });
             routes.MapRoute(
                     name: "NumNumerology8",
                     url: "Routes/NumNumerology8",
                     defaults: new { controller = "Routes", action = "NumNumerology8" });
             routes.MapRoute(
                     name: "NumNumerology9",
                     url: "Routes/NumNumerology9",
                     defaults: new { controller = "Routes", action = "NumNumerology9" });
             routes.MapRoute(
                     name: "NumNumerology11",
                     url: "Routes/NumNumerology11",
                     defaults: new { controller = "Routes", action = "NumNumerology11" });

             routes.MapRoute(
                name: "AddFnameDetails",
                url: "Routes/AddFnameDetails",
                defaults: new { controller = "Routes", action = "AddFnameDetails" });

            routes.MapRoute(
                 name: "invalidReportEntry",
                 url: "Routes/invalidReportEntry",
                 defaults: new { controller = "Routes", action = "invalidReportEntry" });

            routes.MapRoute(
              name: "getOrderIDByReguid",
              url: "Routes/getOrderIDByReguid",
              defaults: new { controller = "Routes", action = "getOrderIDByReguid" });

            routes.MapRoute(
              name: "validateClientId",
              url: "Routes/validateClientId",
              defaults: new { controller = "Routes", action = "validateClientId" });

            routes.MapRoute(
              name: "checkRefId",
              url: "Routes/checkRefId",
              defaults: new { controller = "Routes", action = "checkRefId" });

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
            );

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);

        }
    }
}
