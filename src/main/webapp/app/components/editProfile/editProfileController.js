'user strict';

var editProfileController = angular.module('editProfileController', []);

editProfileController.controller('editProfileCtrl', ['$scope', 'getUserAction',
    function ($scope) {
        
        $scope.user;
        getUserAction.doGetUser(scope);
    }
]);