'user strict';

var editProfileController = angular.module('editProfileController', []);

editProfileController.controller('editProfileCtrl', ['$scope',
    function ($scope) {
        
        $scope.user;
        getUserAction.doGetUser(scope);
    }
]);