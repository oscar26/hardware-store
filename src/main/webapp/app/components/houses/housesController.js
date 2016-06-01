'use strict';

var housesController = angular.module('housesController', []);

housesController.controller('housesCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "houses";
        
        $scope.productTypes = [[1, 2, 3], [4, 5, 6]];
        $scope.currentTypes = $scope.productTypes[0];
        
        $scope.productProperties = [
            { name: "productoEscogido", type: "none", value: 0 },
            { name: "Alto", type: "textfield", value: 0, min: 0, max: 10 },
            { name: "Ancho", type: "textfield", value: 0, min: 0, max: 10 },
            { name: "Tipo", type: "dropdown", value: $scope.currentTypes[0] }
        ];

        $scope.step = 0.5;
        
        $scope.changeValue = function (buttonPosition, isIncreasing) {
            if (typeof $scope.productProperties[buttonPosition].value != "number")
                $scope.productProperties[buttonPosition].value = 0;
            if (isIncreasing) {
                if ($scope.productProperties[buttonPosition].value + $scope.step > $scope.productProperties[buttonPosition].max)
                    $scope.productProperties[buttonPosition].value = $scope.productProperties[buttonPosition].max;
                else
                    $scope.productProperties[buttonPosition].value += $scope.step;
            } else {
                if ($scope.productProperties[buttonPosition].value - $scope.step < $scope.productProperties[buttonPosition].min)
                    $scope.productProperties[buttonPosition].value = $scope.productProperties[buttonPosition].min;
                else
                    $scope.productProperties[buttonPosition].value -= $scope.step;
            }
        };

        var checkAndFixFieldValue = function (newValue, oldValue, fieldPos) {
            if (isNaN($scope.productProperties[fieldPos].value))
                $scope.productProperties[fieldPos].value = oldValue;
            else if (typeof $scope.productProperties[fieldPos].value == "string" && $scope.productProperties[fieldPos].value.contains("."))
                $scope.productProperties[fieldPos].value = newValue;
            else
                $scope.productProperties[fieldPos].value = Number(newValue);
        };

        $scope.$watch(
            function (scope) { return scope.productProperties[1].value; },
            function (newValue, oldValue) {
                checkAndFixFieldValue(newValue, oldValue, 1);
            }
        );

        $scope.$watch(
            function (scope) { return scope.productProperties[2].value; },
            function (newValue, oldValue) {
                checkAndFixFieldValue(newValue, oldValue, 2);
            }
        );

        $scope.$watch(
            function (scope) { return scope.productProperties[0].value; },
            function (newValue, oldValue) {
                $scope.currentTypes = $scope.productTypes[newValue];
                $scope.productProperties[3].value = $scope.currentTypes[0];
            }
        );
    }
]);