'use strict';

var shoesController = angular.module('shoesController', []);

shoesController.controller('shoesCtrl', ['$scope',
    function ($scope) {
        $scope.destination = "shoes";

        // Fields choices
        var sizes = [{value: "34", imgUrl: ""}, {value: "35", imgUrl: ""}, {value: "36", imgUrl: ""},
            {value: "37", imgUrl: ""}, {value: "38", imgUrl: ""}, {value: "39", imgUrl: ""},
            {value: "40", imgUrl: ""}, {value: "41", imgUrl: ""}, {value: "42", imgUrl: ""}];
        var materials = [{value: "Cuero", imgUrl: ""}, {value: "Gamuza", imgUrl: ""},{value: "Sintético", imgUrl: ""},
            {value: "Charol", imgUrl: ""}, {value: "Malla", imgUrl: ""}];
        var colours = [{value: "Aguamarina", imgUrl: ""}, {value: "Aguamarina claro", imgUrl: ""}, {value: "Aguamarina oscuro", imgUrl: ""},
            {value: "Amarillo", imgUrl: ""}, {value: "Amarillo quemado", imgUrl: ""}, {value: "Azul claro", imgUrl: ""},
            {value: "Azul oscuro", imgUrl: ""}, {value: "Azul rey", imgUrl: ""}, {value: "Blanco", imgUrl: ""},
            {value: "Café claro", imgUrl: ""}, {value: "Café oscuro", imgUrl: ""}, {value: "Crema", imgUrl: ""},
            {value: "Crudo", imgUrl: ""}, {value: "Fucsia", imgUrl: ""}, {value: "Habano", imgUrl: ""}, {value: "Lila", imgUrl: ""},
            {value: "Morado", imgUrl: ""}, {value: "Naranja", imgUrl: ""}, {value: "Negro", imgUrl: ""}, {value: "Rojo", imgUrl: ""},
            {value: "Rojo oscuro", imgUrl: ""}, {value: "Rosado", imgUrl: ""}, {value: "Verde", imgUrl: ""},
            {value: "Verde claro", imgUrl: ""}, {value: "Verde militar", imgUrl: ""}, {value: "Verde oscuro", imgUrl: ""},
            {value: "Verde biche", imgUrl: ""}, {value: "Vino tinto", imgUrl: ""}, {value: "Violeta", imgUrl: ""}];

        // Fields in spanish for compatibility with the other groups
        $scope.productProperties = [
            { name: "Tipo", type: "none", value: 0},
            { name: "Talla", type: "dropdown", value: sizes[0].value, options: { choices: sizes } },
            { name: "Material principal", type: "dropdown", value: materials[0].value, options: { choices: materials } },
            { name: "Material secundario", type: "dropdown", value: materials[0].value, options: { choices: materials } },
            { name: "Color principal", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color secundario", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color parte trasera", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color cordones", type: "dropdown", value: colours[0].value, options: { choices: colours } },
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
