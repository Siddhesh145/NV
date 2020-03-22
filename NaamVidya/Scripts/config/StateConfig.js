var StateConfig = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider

    .state('home', {
        url: '/home',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'homeController',
                templateUrl: '/Routes/Home'
            },
            "Footer": {
                controller: 'footerController',
                templateUrl: '/Routes/Footer'
            }
        }
    })



    .state('name', {
        url: '/first-name-analysis',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'nameController',
                templateUrl: '/Routes/name'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    //.state('name', {
    //    url: '/first-name-analysis/:name',

    //    views: {
    //        "Header": {
    //            controller: 'headerController',
    //            templateUrl: '/Routes/Header'
    //        },
    //        "Main": {
    //            controller: 'nameController',
    //            templateUrl: '/Routes/name'
    //        },
    //        "Footer": {
    //            templateUrl: '/Routes/Footer'
    //        }
    //    }
    //})
    //NV_SP_SaveOrderDetail

    .state('registration', {
        url: '/full-name-analysis',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'registrationController',
                templateUrl: '/Routes/registration'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('about', {
        url: '/about-us',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'aboutController',
                templateUrl: '/Routes/about'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('balancedname', {
        url: '/balanced-name',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                //controller: 'aboutController',
                templateUrl: '/Routes/BalancedName'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })


    .state('faq', {
        url: '/faq',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'faqController',
                templateUrl: '/Routes/FAQ'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })


    .state('businessname', {
        url: '/business-name',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'balancedNameController',
                templateUrl: '/Routes/BusinessName'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('ethics', {
        url: '/ethics-beliefs',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'ethicsController',
                templateUrl: '/Routes/Ethics'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('lifepath', {
        url: '/life-path',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'lifePathController',
                templateUrl: '/Routes/LifePath'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    .state('namesmatter', {
        url: '/names-matter',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'namesMatterController',
                templateUrl: '/Routes/NamesMatter'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('newborn', {
        url: '/new-born-baby',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'nameController',
                templateUrl: '/Routes/NewBorn'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('others', {
        url: '/others',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'othersController',
                templateUrl: '/Routes/Others'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('detailinfopage', {
        url: '/order-form',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'detailinfopageController',
                templateUrl: '/Routes/detailinfopage'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
         .state('babynameprimepage', {
             url: '/order-form-prime',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'babynameprimepageController',
                     templateUrl: '/Routes/babynameprime'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

     .state('businessdetailinfopage', {
         url: '/business-order-form',

         views: {
             "Header": {
                 controller: 'headerController',
                 templateUrl: '/Routes/Header'
             },
             "Main": {
                 controller: 'businessdetailinfopageController',
                 templateUrl: '/Routes/businessdetailinfopage'
             },
             "Footer": {
                 templateUrl: '/Routes/Footer'
             }
         }
     })

    

    .state('ordernamecorrection', {
        url: '/order-form-name-correction',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'detailinfopageController',
                templateUrl: '/Routes/OrderNameCorrection'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
         .state('moreinfopage', {
             url: '/more-order-information',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'moreinfopageController',
                     templateUrl: '/Routes/moreinfopage'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

    .state('MyCartDetail', {
        url: '/my-cart-detail',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'MyCartDetailController',
                templateUrl: '/Routes/MyCartDetail'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('detailedreport', {
        url: '/full-name-report',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'detailedreportController',
                templateUrl: '/Routes/detailedreport'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('sku', {
        url: '/sku',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'skuController',
                templateUrl: '/Routes/sku'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    //Hasti
    .state('newRegistration', {
        url: '/user-registration',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'newRegistrationController',
                templateUrl: '/Routes/newRegistration'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    .state('login', {
        url: '/login',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'loginController',
                templateUrl: '/Routes/login'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    .state('orderStatusRpt', {
        url: '/order-status-report',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'orderStatusRptController',
                templateUrl: '/Routes/orderStatusRpt'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    .state('orderProcess', {
        url: '/order-process',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'orderProcessController',
                templateUrl: '/Routes/OrderProcess'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('orderDetailsAdmin', {
        url: '/order-details-admin',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'orderDetailsAdminController',
                templateUrl: '/Routes/OrderDetailsAdmin'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    .state('orderDetails', {
        url: '/order-details',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'orderDetailsController',
                templateUrl: '/Routes/orderDetails'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    //Oder Detail Admin Panel Page
    .state('orderdetailinfo', {
        url: '/orderdetailinfo',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'orderdetailinfoController',
                templateUrl: '/Routes/orderdetailinfo'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    .state('changePassword', {
        url: '/change-password',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'changePasswordController',
                templateUrl: '/Routes/changePassword'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
    //Hasti End

    // ChildNameCorrection
    .state('childnamecorrection', {
        url: '/child-name-correction',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'detailinfopageController',
                templateUrl: '/Routes/ChildNameCorrection'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    //ChoosingBabyName
    .state('choosingbabyname', {
        url: '/choosing-baby-name',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'choosingBabyNameController',
                templateUrl: '/Routes/ChoosingBabyName'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })
         .state('OrderPlatinumCombo', {
             url: '/OrderPlatinumCombo',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'OrderPlatinumComboController',
                     templateUrl: '/Routes/OrderPlatinumCombo'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

    //Order Baby Name
    .state('orderbabyname', {
        url: '/baby-name',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'OrderBabyNameController',
                templateUrl: '/Routes/OrderBabyName'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

     //Order Baby Name Alt
    .state('orderbabynamealt', {
        url: '/baby-name-alt',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'OrderBabyNameAltController',
                templateUrl: '/Routes/OrderBabyNameAlt'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

	     //Order Baby Name Gift
    .state('orderbabynamegift', {
        url: '/baby-name-gift',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'OrderBabyNameGiftController',
                templateUrl: '/Routes/OrderBabyNameGift'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })						   
	
    //NameCorrection
    .state('namecorrection', {
        url: '/name-correction',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'OrderNameCorrectionController',
                templateUrl: '/Routes/NameCorrection'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })


    //PrivacyPolicy
    .state('privacypolicy', {
        url: '/privacy-policy',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'privacyPolicyController',
                templateUrl: '/Routes/PrivacyPolicy'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    //Spouse

    .state('spouse', {
        url: '/spouse',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'detailinfopageController',
                templateUrl: '/Routes/Spouse'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    //  TermsandConditions

    .state('termsandconditions', {
        url: '/terms-and-conditions',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'termsandConditionsController',
                templateUrl: '/Routes/TermsandConditions'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    // WhatisBalancedName

    .state('whatisbalancedname', {
        url: '/what-is-balanced-name',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'whatisBalancedNameController',
                templateUrl: '/Routes/WhatisBalancedName'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })


    // WhyNamesMatter

    .state('whyusenumerology', {
        url: '/why-use-numerology',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'whyUseNmerologyController',
                templateUrl: '/Routes/WhyUseNumerology'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

     .state('whynamesmatter', {
         url: '/why-names-matter',

         views: {
             "Header": {
                 controller: 'headerController',
                 templateUrl: '/Routes/Header'
             },
             "Main": {
                 controller: 'whyNamesMatterController',
                 templateUrl: '/Routes/WhyNamesMatter'
             },
             "Footer": {
                 templateUrl: '/Routes/Footer'
             }
         }
     })

    // howitwork 
    .state('howitwork', {
        url: '/how-it-works',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'howitworkController',
                templateUrl: '/Routes/howitwork'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('pendingOrder', {
        url: '/my-orders',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'pendingOrderController',
                templateUrl: '/Routes/pendingOrder'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('dashboard', {
        url: '/dashboard',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'DashboardController',
                templateUrl: '/Routes/Dashboard'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('newRegistrationConfirmation', {
        url: '/registration-confirmation',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                //controller: 'pendingOrderController',
                templateUrl: '/Routes/newRegistrationConfirmation'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

    .state('freeReports', {
        url: '/my-reports',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'freeReportsController',
                templateUrl: '/Routes/freeReports'
            },
            "Footer": {
                templateUrl: '/Routes/Footer'
            }
        }
    })

           .state('doesNumerologyWork', {
               url: '/does-numerology-work',

               views: {
                   "Header": {
                       controller: 'headerController',
                       templateUrl: '/Routes/Header'
                   },
                   "Main": {
                       controller: 'DoesNumerologyWorkController',
                       templateUrl: '/Routes/DoesNumerologyWork'
                   },
                   "Footer": {
                       templateUrl: '/Routes/Footer'
                   }
               }
           })

         .state('chooseRightNameForBaby', {
             url: '/choose-right-name-for-baby',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'ChooseRightNameForBabyController',
                     templateUrl: '/Routes/ChooseRightNameForBaby'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

        //TheImportanceOfName
         .state('theImportanceOfName', {
             url: '/the-importance-of-name',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'theImportanceOfNameController',
                     templateUrl: '/Routes/TheImportanceOfName'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })
         //TheImportanceOfName

         .state('NumNumerologyMain', {
             url: '/numerology-number',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'NumNumerologyMainController',
                     templateUrl: '/Routes/NumNumerologyMain'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

   
         .state('NumerologyNumber', {
             url: '/Numerology-number',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'NumerologyNumberController',
                     templateUrl: '/Routes/NumerologyNumber'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

         .state('Numerology', {
             url: '/numerology',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'NumerologyController',
                     templateUrl: '/Routes/Numerology'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })

          .state('Numerologist', {
              url: '/numerologist',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumerologistController',
                      templateUrl: '/Routes/Numerologist'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })

        
     .state('NumNumerology1', {
         url: '/numerology-number-1',

         views: {
             "Header": {
                 controller: 'headerController',
                 templateUrl: '/Routes/Header'
             },
             "Main": {
                 controller: 'NumNumerology1Controller',
                 templateUrl: '/Routes/NumNumerology1'
             },
             "Footer": {
                 templateUrl: '/Routes/Footer'
             }
         }
     })
    
         .state('NumNumerology2', {
             url: '/numerology-number-2',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'NumNumerology2Controller',
                     templateUrl: '/Routes/NumNumerology2'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })
          .state('NumNumerology3', {
              url: '/numerology-number-3',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology3Controller',
                      templateUrl: '/Routes/NumNumerology3'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology4', {
              url: '/numerology-number-4',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology4Controller',
                      templateUrl: '/Routes/NumNumerology4'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology5', {
              url: '/numerology-number-5',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology2Controller',
                      templateUrl: '/Routes/NumNumerology5'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology6', {
              url: '/numerology-number-6',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology6Controller',
                      templateUrl: '/Routes/NumNumerology6'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology7', {
              url: '/numerology-number-7',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology7Controller',
                      templateUrl: '/Routes/NumNumerology7'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology8', {
              url: '/numerology-number-8',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology8Controller',
                      templateUrl: '/Routes/NumNumerology8'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology9', {
              url: '/numerology-number-9',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology9Controller',
                      templateUrl: '/Routes/NumNumerology9'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
          .state('NumNumerology11', {
              url: '/numerology-number-11',

              views: {
                  "Header": {
                      controller: 'headerController',
                      templateUrl: '/Routes/Header'
                  },
                  "Main": {
                      controller: 'NumNumerology11Controller',
                      templateUrl: '/Routes/NumNumerology11'
                  },
                  "Footer": {
                      templateUrl: '/Routes/Footer'
                  }
              }
          })
         .state('blog', {
             url: '/blog',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'blogController',
                     templateUrl: '/Routes/Blog'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })
        .state('giftlogin', {
            url: '/gift-login',

            views: {
                "Header": {
                    controller: 'headerController',
                    templateUrl: '/Routes/Header'
                },
                "Main": {
                    controller: 'GiftLoginController',
                    templateUrl: '/Routes/GiftLogin'
                },
                "Footer": {
                    templateUrl: '/Routes/Footer'
                }
            }
        })

         .state('gift', {
             url: '/gift',

             views: {
                 "Header": {
                     controller: 'headerController',
                     templateUrl: '/Routes/Header'
                 },
                 "Main": {
                     controller: 'giftController',
                     templateUrl: '/Routes/Gift'
                 },
                 "Footer": {
                     templateUrl: '/Routes/Footer'
                 }
             }
         })
           
    .state('default', {
        url: '/',

        views: {
            "Header": {
                controller: 'headerController',
                templateUrl: '/Routes/Header'
            },
            "Main": {
                controller: 'homeController',
                templateUrl: '/Routes/Home'
            },
            "Footer": {
                controller: 'footerController',
                templateUrl: '/Routes/Footer'
            }
        }

    });



}
StateConfig.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

