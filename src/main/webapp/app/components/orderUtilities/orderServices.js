'use strict';

var orderServices = angular.module('orderServices', ['ngResource']);

orderServices

    .factory('orderRequest', ['$resource',
        function($resource) {
            return $resource('resources/order/:destination', {destination: '@dest'} , {
                sendOrder: { method: 'POST' }
            });
        }
    ])

    .factory('sendOrderAction', ['$rootScope', 'orderRequest', 'LxNotificationService',
        function ($rootScope, orderRequest, LxNotificationService) {
            return {
                doOrder: function (packet, dest) {
                    $rootScope.stateIsLoading = true; // Shows loading splash
                    orderRequest.sendOrder({destination: dest}, packet,
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
