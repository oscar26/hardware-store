'use strict';

var furnitureController = angular.module('furnitureController', []);

furnitureController.controller('furnitureCtrl', ['$scope',
    function ($scope) {
        $scope.tabs = {
            activeTab: 0
        };

        // Fields in spanish for compatibility with the other groups
        $scope.productProperties = ["dato1", "dato2", "dato3", "dato4", "dato5"];
        $scope.products = {
            product1: {},
            product2: {},
            product3: {},
            product4: {}
        };

        for (var product in $scope.products) {
            if ($scope.products.hasOwnProperty(product))
                for (var i = 0; i < $scope.productProperties.length; i++)
                    $scope.products[product][$scope.productProperties[i]] = "";
        }
    }
]);