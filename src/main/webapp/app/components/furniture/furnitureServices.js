'use strict';

var furnitureServices = angular.module('furnitureServices', ['ngResource']);

furnitureServices

    .factory('orderRequest', ['$resource',
        function($resource) {
            return $resource('resources/furniture', {} , {
                sendOrder: { method: 'POST' }
            });
        }
    ])

    .factory('sendOrderAction', ['$rootScope', '$state', 'loginRequest', 'LxNotificationService',
        function ($rootScope, $state, loginRequest, LxNotificationService) {
            return {
                doOrder: function (scope) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    var info = {username: scope.user.username, password: scope.user.password};
                    orderRequest.sendOrder({}, info,
                        function success(response) {
                            console.log("Sending order"); // Delete line
                            console.log(response); // Delete line
                            if (response.statusCode === 0) {
                                LxNotificationService.success("Orden efectuada exitosamente.");
                            } else {
                                // Show feedback to user
                                LxNotificationService.error("Hubo un problema mientras efectuábamos la orden.");
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
