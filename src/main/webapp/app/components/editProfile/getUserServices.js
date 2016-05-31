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
                    // Convert customerId to integer
                    //user.customerId = parseInt(user.customerId, 10);
                    //console.log("Attempting to send user: ", user);
                    if($rootScope.$storage.loggedUser == true)
                    scope.user = getUserRequest.getuser({}, $rootScope.$storage.username,
                        function success(response) {
                            console.log(response); // Delete line
                            switch (response.statusCode) {
                                case 0:
                                    console.log("Get user success.");
                                    LxNotificationService.success("¡Get user exitoso!");
                                    //$state.go("signin");
                                    break;
                                case 1:
                                    // username already in use. Show notification
                                    LxNotificationService.error("El nombre de usuario ingresado ya está siendo usado.");
                                    console.log(response.defaultMessage);
                                    break;
                                case 2:
                                    // email already in use. Show notification
                                    LxNotificationService.error("El correo electrónico ingresado ya está siendo usado.");
                                    console.log(response.defaultMessage);
                                    break;
                                case 3:
                                    // customerId already in use. Show notification
                                    LxNotificationService.error("El documento de identificación ingresado ya está siendo usado.");
                                    console.log(response.defaultMessage);
                                    break;
                                default:
                                    LxNotificationService.error("Se presentó un error desconocido.");
                                    console.log("Sign up unsuccessful. Unknown error.");
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