'use strict';

var app = angular.module('app',
    [
        'lumx', 'ui.router', 'ngAnimate', 'ngStorage', 'ngResource',
        'signinController', 'signinServices', 'signinDirectives'
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
                templateUrl: "app/components/signup/signupView.html"
            })

            .state('productList', {
                url: "/productList",
                templateUrl: "app/components/productList/productListView.html"
            });

    }
]);

app.run(function ($rootScope, $localStorage) {

    $rootScope.$storage = $localStorage.$default({
        loggedUser: false,
        username: '',
        shoppingCart: null
    });

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = true;
        }
    );

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams, options) {
            $rootScope.stateIsLoading = false;
        }
    );
    
});