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
        var colourTypes = [{value: "Sólido", imgUrl: ""}, {value: "Cuadros 1", imgUrl: ""}, {value: "Cuadros 2", imgUrl: ""},
            {value: "Cuadros 3", imgUrl: ""}, {value: "Flores 1", imgUrl: ""}, {value: "Flores 2", imgUrl: ""},
            {value: "Flores 3", imgUrl: ""}];
        var colours = [{value: "Aguamarina", imgUrl: ""}, {value: "Aguamarina claro", imgUrl: ""}, {value: "Aguamarina oscuro", imgUrl: ""},
            {value: "Amarillo", imgUrl: ""}, {value: "Amarillo quemado", imgUrl: ""}, {value: "Azul claro", imgUrl: ""},
            {value: "Azul oscuro", imgUrl: ""}, {value: "Azul rey", imgUrl: ""}, {value: "Blanco", imgUrl: ""},
            {value: "Café claro", imgUrl: ""}, {value: "Café oscuro", imgUrl: ""}, {value: "Crema", imgUrl: ""},
            {value: "Crudo", imgUrl: ""}, {value: "Fucsia", imgUrl: ""}, {value: "Habano", imgUrl: ""}, {value: "Lila", imgUrl: ""},
            {value: "Morado", imgUrl: ""}, {value: "Naranja", imgUrl: ""}, {value: "Negro", imgUrl: ""}, {value: "Rojo", imgUrl: ""},
            {value: "Rojo oscuro", imgUrl: ""}, {value: "Rosado", imgUrl: ""}, {value: "Verde", imgUrl: ""},
            {value: "Verde claro", imgUrl: ""}, {value: "Verde militar", imgUrl: ""}, {value: "Verde oscuro", imgUrl: ""},
            {value: "Verde biche", imgUrl: ""}, {value: "Vino tinto", imgUrl: ""}, {value: "Violeta", imgUrl: ""}];
        // var soleColours = [{value: "Blanco", imgUrl: ""}, {value: "Café claro", imgUrl: ""}, {value: "Café oscuro", imgUrl: ""},
        //     {value: "Crudo", imgUrl: ""}, {value: "Habano", imgUrl: ""}, {value: "Naranja", imgUrl: ""}, {value: "Negro", imgUrl: ""},
        //     {value: "Verde militar", imgUrl: ""}, {value: "Vino tinto", imgUrl: ""}];

        var soleColours = [{value: "Blanco", imgUrl: "http://i.istockimg.com/file_thumbview_approve/77218125/6/stock-photo-77218125-colorful-swirling-concrete-wall-2.jpg"},
            {value: "Café claro", imgUrl: "http://i.istockimg.com/file_thumbview_approve/39020568/6/stock-photo-39020568-yellow-wall-texture.jpg"},
            {value: "Café oscuro", imgUrl: "http://i.istockimg.com/file_thumbview_approve/86171297/6/stock-photo-86171297-brick-white-wall-texture-square.jpg"},
            {value: "Crudo", imgUrl: "http://i.istockimg.com/file_thumbview_approve/81906297/6/stock-photo-81906297-stacked-stone-walls.jpg"},
            {value: "Habano", imgUrl: "http://i.istockimg.com/file_thumbview_approve/65309933/6/stock-photo-65309933-orange-wall-texture.jpg"},
            {value: "Naranja", imgUrl: "http://i.istockimg.com/file_thumbview_approve/20807978/6/stock-photo-20807978-green-wall-texture-background.jpg"},
            {value: "Negro", imgUrl: "http://i.istockimg.com/file_thumbview_approve/20124986/6/stock-photo-20124986-blue-wooden-wall-texture.jpg"},
            {value: "Verde militar", imgUrl: "http://i.istockimg.com/file_thumbview_approve/21329449/6/stock-photo-21329449-abstract-green-texture-background.jpg"},
            {value: "Vino tinto", imgUrl: "http://i.istockimg.com/file_thumbview_approve/22124239/6/stock-photo-22124239-simple-square-red-wall-texture-with-highlights-and-lowlights.jpg"}];

        // Fields in spanish for compatibility with the other groups
        $scope.productProperties = [
            { name: "Tipo", type: "none", value: 0},
            { name: "Talla", type: "dropdown", value: sizes[0].value, options: { choices: sizes } },
            { name: "Material principal", type: "dropdown", value: materials[0].value, options: { choices: materials } },
            { name: "Material secundario", type: "dropdown", value: materials[0].value, options: { choices: materials } },
            { name: "Tipo color principal", type: "dropdown", value: colourTypes[0].value, options: { choices: colourTypes } },
            { name: "Tipo color secundario", type: "dropdown", value: colourTypes[0].value, options: { choices: colourTypes } },
            { name: "Color principal", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color secundario", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color borde", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color cordones", type: "dropdown", value: colours[0].value, options: { choices: colours } },
            { name: "Color suela", type: "dropdown", value: soleColours[0].value, img: soleColours[0].imgUrl, options: { choices: soleColours, hasImage: true } }
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
