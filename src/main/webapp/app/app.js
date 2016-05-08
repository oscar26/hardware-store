'use strict';

var app = angular.module('app',
    [
        'lumx', 'ui.router', 'ngAnimate', 'ngStorage', 'ngResource',
        'signinController', 'signinServices', 'signinDirectives',
        'signupController', 'signupServices', 'signupDirectives',
        'orderServices', 'orderDirectives',
        'housesController', 'furnitureController', 'shoesController'
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
                templateUrl: "app/components/productList/productListView.html"
            })

            .state('houses', {
                url: "/houses",
                templateUrl: "app/components/houses/housesView.html",
                controller: 'housesCtrl'
            })

            .state('furniture', {
                url: "/furniture",
                templateUrl: "app/components/furniture/furnitureView.html",
                controller: 'furnitureCtrl'
            })

            .state('shoes', {
                url: "/shoes",
                templateUrl: "app/components/shoes/shoesView.html",
                controller: 'shoesCtrl'
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