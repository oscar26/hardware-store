'use strict';

var app = angular.module('app',
    [
        'lumx', 'ui.router', 'ngAnimate', 'ngStorage', 'ngResource',
        'signinController', 'signinServices', 'signinDirectives',
        'signupController', 'signupServices', 'signupDirectives',
        'productListController'
    ]);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/components/main/mainView.html"
            })
            
            .state('signin', {
                url: "/signin",
                templateUrl: "app/components/signin/signinView.html",
                controller: 'signinCtrl'
            })
            
            .state('signup', {
                url: "/signup",
                templateUrl: "app/components/signup/signupView.html",
                controller: 'signupCtrl'
            })

            .state('signout', {
                url: "/signout"
            })

            .state('productList', {
                url: "/productList",
                templateUrl: "app/components/productList/productListView.html",
                controller: 'productListCtrl'
            })

            .state('houses', {
                url: "/houses"
            })

            .state('furniture', {
                url: "/furniture"
            })

            .state('shoes', {
                url: "/shoes"
            });

    }
]);

app.run(function ($rootScope, $localStorage, $state) {

    $rootScope.$storage = $localStorage.$default({
        loggedUser: false,
        username: ''
    });

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = true;
            // Logout functionality
            if (toState.name === "signout") {
                event.preventDefault();
                $localStorage.$reset();
                $state.go("main");
            }
        }
    );

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = false;
        }
    );
    
});