'use strict';

var editProfileServices = angular.module('editProfileServices', ['ngResource']);

editProfileServices

    .factory('getUserRequest', ['$resource',
        function($resource) {
            return $resource('resources/customer/username/:username', { username: '@username' } , {
                getUser: { method: 'GET' }
            });
        }
    ])

    .factory('getUserAction', ['$rootScope', '$state', 'getUserRequest', 'LxNotificationService',
        function ($rootScope, $state, getUserRequest, LxNotificationService) {
            return {
                doGetUser: function (scope) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    getUserRequest.getUser({ username: $rootScope.$storage.username }, {},
                        function success(response) {
                            $rootScope.stateIsLoading = false; // Hides loading splash
                            scope.user = response;
                            return response;
                        },
                        function error(error) {
                            // Show feedback to user
                            LxNotificationService.error("Hubo un problema de comunicación con el servidor. Prueba más tarde.");
                            console.log("There was an error when communicating with the server.");
                            $rootScope.stateIsLoading = false; // Hides loading splash
                            $state.go($rootScope.lastStateName);
                        }
                    );
                }
            }
        }
    ])

    .factory('updateUserRequest', ['$resource',
        function($resource) {
            return $resource('resources/customer', {} , {
                updateUser: { method: 'PUT' }
            });
        }
    ])

    .factory('updateUserAction', ['$rootScope', '$state', 'updateUserRequest', 'LxNotificationService',
        function ($rootScope, $state, updateUserRequest, LxNotificationService) {
            return {
                doUpdateUser: function (user) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    updateUserRequest.updateUser({}, user,
                        function success(response) {
                            $rootScope.stateIsLoading = false; // Hides loading splash
                            if (response.statusCode === 0) {
                                $state.go($rootScope.lastStateName);
                                LxNotificationService.success("¡Cambio exitoso!");
                            }
                            else
                                LxNotificationService.error("¡Ooops! Se presentó un problema desconocido. Estamos trabajando para corregirlo.");
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