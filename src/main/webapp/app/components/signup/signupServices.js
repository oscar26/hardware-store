'use strict';

var signupServices = angular.module('signupServices', ['ngResource']);

signupServices

    .factory('signupRequest', ['$resource',
        function($resource) {
            return $resource('resources/customer', {} , {
                signup: { method: 'POST' }
            });
        }
    ])
    
    .factory('signupAction', ['$rootScope', '$state', 'signupRequest',
        function ($rootScope, $state, signupRequest) {
            return {
                doSignup: function (user) {
                    var info = user;
                    signupRequest.signup({}, info,
                        function success(response) {
                            console.log("Doing signup"); // Delete line
                            console.log(response); // Delete line
                            if (response.statusCode === 0) {
                                console.log("success");
                                $state.go("signin");
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