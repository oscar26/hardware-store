'use strict';

var housesController = angular.module('housesController', []);

housesController.controller('housesCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "houses";
        
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
    }
]);