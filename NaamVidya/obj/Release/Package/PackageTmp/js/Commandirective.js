nvApp.directive('onlyDigits', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                var regex = /\s/g;

                transformedInput = transformedInput.replace(regex, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});

nvApp.directive('onlyDigitsdot', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^0-9.]/g, '');
                var regex = /\s/g;

                transformedInput = transformedInput.replace(regex, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});

nvApp.directive('onlyDecimal', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/^[0-9]([.,][0-9]{1,3})?$/g, ''); //
              //  var transformedInput = inputValue.replace(/[0-9]+(\.[0-9][0-9]?)?/g, ''); //^[0-9]([.,][0-9]{1,3})?$
                var regex = /\s/g;

                transformedInput = transformedInput.replace(regex, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});

nvApp.directive('onlyAlphabet', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^A-Za-z ]/g, '');
                // var regex = /\s/g;

                //transformedInput = transformedInput.replace(regex, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});
nvApp.directive('onlyLettersInput', function () {

    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z]/g, '');
                //console.log(transformedInput);
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
        
    };
});
nvApp.directive('onlyStartingAlphabet', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^A-Za-z]/g, '');
                // var regex = /\s/g;

                //transformedInput = transformedInput.replace(regex, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});

nvApp.directive('onlyAlphabetNumeric', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^A-Za-z0-9 ]/g, '');
                 var regex = /\s/g;

                transformedInput = transformedInput.replace(regex, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});

nvApp.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

nvApp.directive('autogrow', function () {

    return {

        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            // hidding the scroll of textarea
            element.css('overflow', 'hidden');

            var update = function () {

                element.css("height", "auto");

                var height = element[0].scrollHeight;

                if (height > 0) {

                    element.css("height", height + "px");
                }

            };

            scope.$watch(attrs.ngModel, function () {

                update();
            });

            attrs.$set("ngTrim", "false");
        }
    };
});