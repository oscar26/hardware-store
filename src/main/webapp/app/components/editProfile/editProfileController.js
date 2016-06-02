'user strict';

var editProfileController = angular.module('editProfileController', []);

editProfileController.controller('editProfileCtrl', ['$scope', 'getUserAction',
    function ($scope, getUserAction) {
        $scope.user;
        getUserAction.doGetUser($scope);
    }
]);