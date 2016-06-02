'use strict';

var updateUserServices = angular.module('updateUserServices', ['ngResource']);

updateUserServices

    .factory('updateUserRequest', ['$resource',
        function($resource) {
            return $resource('resources/customer/actualizar', {} , {
                updateuser: { method: 'POST' }
            });
        }
    ])

    .factory('updateUserAction', ['$rootScope', '$state', 'updateUserRequest', 'LxNotificationService',
        function ($rootScope, $state, updateUserRequest, LxNotificationService) {
            return {
                doUpdateUser: function (user) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    updateUserRequest.updateuser({}, user,
                        function success(response) {
                            //console.log(response); // Delete line
                            $rootScope.stateIsLoading = false; // Hides loading splash
                            $state.go("main");
                        },
                        function error(error) {
                            // Show feedback to user
                            LxNotificationService.error("Hubo un problema de comunicación con el servidor. Prueba más tarde.");
                            console.log("There was an error when communicating with the server.");
                            $rootScope.stateIsLoading = false; // Hides loading splash
                        }
                    );
                }
            }
        }
    ])
;