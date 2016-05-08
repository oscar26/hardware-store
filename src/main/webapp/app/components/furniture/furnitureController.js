'use strict';

var furnitureController = angular.module('furnitureController', []);

furnitureController.controller('furnitureCtrl', ['$scope',
    function ($scope) {
        $scope.tabs = {
            activeTab: 0
        };

        // Fields in spanish for compatibility with the other groups
        $scope.productProperties = [
            {name: "dato1", type: "textfield", value: ""},
            {name: "dato2", type: "textfield", value: ""},
            {name: "dato3", type: "textfield", value: ""},
            {
                name: "dato4", type: "radioButton", value: "valor1",
                options: {
                    values: ["valor1", "valor2", "valor3"]
                }
            },
            {
                name: "dato5", type: "radioButton", value: "valor1",
                options: {
                    values: ["valor1", "valor2", "valor3", "valor4"]
                }
            },
            {
                name: "dato6", type: "dropdown", value: "valor1",
                options: {
                    values: ["valor1", "valor2", "valor3", "valor4", "valor5"]
                }
            },
            {
                name: "dato7", type: "dropdown", value: "valor1",
                options: {
                    values: ["valor1", "valor2", "valor3"]
                }
            },
            {
                name: "dato8", type: "checkbox", value: false
            },
            {
                name: "dato9", type: "checkbox", value: false
            }
        ];
        
        /* Comment 2
        $scope.product = {};
        for (var i = 0; i < $scope.productProperties.length; i++)
            $scope.product[$scope.productProperties[i].name] = "";*/

        /* Comment 1
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
        }*/
    }
]);