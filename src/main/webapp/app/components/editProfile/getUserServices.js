'use strict';

var getUserServices = angular.module('getUserServices', ['ngResource']);

getUserServices

    .factory('getUserRequest', ['$resource',
        function($resource) {
            return $resource('resources/customer/username', {} , {
                getuser: { method: 'POST' }
            });
        }
    ])
    
    .factory('getUserAction', ['$rootScope', '$state', 'getUserRequest', 'LxNotificationService',
        function ($rootScope, $state, getUserRequest, LxNotificationService) {
            return {
                doGetUser: function (scope) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    getUserRequest.getuser({}, $rootScope.$storage.username,
                        function success(response) {
                            console.log(response); // Delete line
                            $rootScope.stateIsLoading = false; // Hides loading splash
                            scope.user = response;
                            return response;
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