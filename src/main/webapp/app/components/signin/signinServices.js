'use strict';

var signinServices = angular.module('signinServices', ['ngResource']);

signinServices

    .factory('loginRequest', ['$resource',
        function($resource) {
            return $resource('resources/login', {} , {
                login: { method: 'POST' }
            });
        }
    ])
    
    .factory('loginAction', ['$rootScope', '$state', 'loginRequest', 'LxNotificationService',
        function ($rootScope, $state, loginRequest, LxNotificationService) {
            return {
                doLogin: function (scope) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    var info = {username: scope.user.username, password: scope.user.password};
                    loginRequest.login({}, info,
                        function success(response) {
                            console.log("Doing login"); // Delete line
                            if (response.statusCode === 0) {
                                $rootScope.$storage.loggedUser = true;
                                $rootScope.$storage.username = scope.user.username;
                                // Go to product list
                                $state.go("productList");
                            } else {
                                // Show feedback to user
                                LxNotificationService.error("Usuario o contraseña incorrecta.");
                                console.log("Access not granted.");
                            }
                            $rootScope.stateIsLoading = false; // Hides loading splash
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
    ]);