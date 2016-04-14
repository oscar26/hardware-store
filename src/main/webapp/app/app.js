'use strict';

var app = angular.module('app', ['lumx', 'ui.router']); // Change app name

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        // States go here

    }
]);