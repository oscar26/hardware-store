'use strict';

var app = angular.module('app',
    [
        'lumx', 'ui.router', 'ngAnimate', 'ngStorage', 'ngResource',
        'signinController', 'signinServices', 'signinDirectives',
        'signupController', 'signupServices', 'signupDirectives',
        //'editProfileController', 'getUserServices',
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
            
            .state('editProfile', {
                url: "/editProfile",
                templateUrl: "app/components/editProfile/editProfileView.html",
                controller: 'editProfileCtrl'
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

app.run(function ($rootScope, $localStorage, $state, LxNotificationService) {

    $rootScope.$storage = $localStorage.$default({
        loggedUser: false,
        username: ''
    });

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = true;
            // Logout functionality
            if (toState.name === "signout") {
                if (fromState.name === "main") $rootScope.stateIsLoading = false;
                $localStorage.$reset();
                event.preventDefault();
                $state.go("main");
            } else if (!$rootScope.$storage.loggedUser && toState.name !== "signin"
                && toState.name !== "signup" && toState.name !== "main") {
                LxNotificationService.error("Debes ingresar a la aplicación primero.");
                event.preventDefault();
                $state.go("signin");
            } else if ($rootScope.$storage.loggedUser && toState.name === "signin"
                && toState.name === "signup") {
                LxNotificationService.warning("Ya estás registrado en la aplicación.");
                event.preventDefault();
                $state.go("productList");
            }
        }
    );

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = false;
        }
    );
    
});