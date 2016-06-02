'use strict';

var updateUserDirectives = angular.module('updateUserDirectives', []);

updateUserDirectives

    .directive('updateButton', ['updateUserAction',
        function (updateUserAction) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('click', function (event) {
                        updateUserAction.doUpdateUser(scope.user);
                    });
                }
            }
        }
    ])

    .directive('inputSignupInfo', ['updateUserAction',
        function (updateUserAction) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('keypress', function (event) {
                        if (event.which === 13) {
                            updateUserAction.doUpdateUser(scope.user);
                        }
                    });
                }
            }
        }
    ])
;