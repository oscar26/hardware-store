'user strict';

var editProfileController = angular.module('editProfileController', []);

editProfileController.controller('editProfileCtrl', ['$scope',
    function ($scope) {
        $scope.user = {
            accountId: null,
            firstName: "",
            lastName: "",
            address: "",
            customerId: "",
            customerIdType: "CC",
            phoneNumber: "",
            email: "",
            username: "",
            password: "",
            placedOrders: null

        };
    }
]);