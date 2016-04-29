'use strict';

var signupDirectives = angular.module('signupDirectives', []);

signupDirectives

    .directive('signupButton', ['signupAction',
        function (signupAction) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('click', function (event) {
                        console.log(scope.user);
                        signupAction.doSignup(scope.user);
                    });
                }
            }
        }
    ])

    .directive('inputLoginInfo', ['signupAction',
        function (signupAction) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('keypress', function (event) {
                        if (event.which === 13) {
                            signupAction.doSignup(scope.user);
                        }
                    });
                }
            }
        }
    ]);