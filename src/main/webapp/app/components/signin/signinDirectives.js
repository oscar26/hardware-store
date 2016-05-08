'use strict';

var signinDirectives = angular.module('signinDirectives', []);

signinDirectives

    .directive('signinButton', ['loginAction',
        function (loginAction) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('click', function (event) {
                        loginAction.doLogin(scope);
                    });
                }
            }
        }
    ])

    .directive('inputLoginInfo', ['loginAction',
        function (loginAction) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    element.bind('keypress', function (event) {
                        if (event.which === 13) {
                            loginAction.doLogin(scope);
                        }
                    });
                }
            }
        }
    ]);