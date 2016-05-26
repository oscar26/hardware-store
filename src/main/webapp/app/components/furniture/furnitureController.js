'use strict';

var furnitureController = angular.module('furnitureController', []);

furnitureController.controller('furnitureCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "furniture";

        // Fields in spanish for compatibility with the other groups
        $scope.productProperties = [
            {name: "productoEscogido", type: "none", value: 0},
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

        $scope.changeChoice = function (fieldName, newChoice) {
            for (var i = 0; i < $scope.productProperties.length; i++) {
                if ($scope.productProperties[i].name === fieldName) {
                    $scope.productProperties[i].value = newChoice.value;
                    $scope.productProperties[i].img = newChoice.imgUrl;
                    break;
                }
            }
        };
    }
]);