'user strict';

var signinController = angular.module('signinController', []);

signinController.controller('signinCtrl', ['$scope',
    function ($scope) {
        $scope.user = {
            username: "",
            password: ""
        };
    }
]);
