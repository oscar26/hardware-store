'user strict';

var signupController = angular.module('signupController', []);

signupController.controller('signupCtrl', ['$scope',
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
