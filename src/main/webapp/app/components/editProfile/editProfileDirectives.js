'use strict';

var editProfileDirectives = angular.module('editProfileDirectives', []);

editProfileDirectives

    .directive('editProfileSubmitButton', ['updateUserAction',
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

    .directive('inputEditProfileInfo', ['updateUserAction',
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