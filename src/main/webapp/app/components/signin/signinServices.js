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
    
    .factory('loginAction', ['$rootScope', '$state', 'loginRequest',
        function ($rootScope, $state, loginRequest) {
            return {
                doLogin: function (usr, pwd) {
                    var info = {username: usr, password: pwd};
                    loginRequest.login({}, info,
                        function success(response) {
                            console.log("Doing login"); // Delete line
                            console.log(response); // Delete line
                            if (response.statusCode === 0) {
                                $rootScope.$storage.loggedUser = true;
                                $rootScope.$storage.username = usr;
                                // Go to product list
                                $state.go("productList");
                            } else {
                                // Show feedback to user
                                console.log("Access not granted.");
                            }
                        },
                        function error(error) {
                            // Show feedback to user
                            console.log("There was an error when communicating with the server.")
                        }
                    );
                }
            }
        }
    ]);